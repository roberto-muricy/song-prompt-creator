import Anthropic from "@anthropic-ai/sdk";
import {
  AIRefusalError,
  AIUnavailableError,
  UnknownArtistError,
  generateFromArtist,
  generateFromForm,
  PLATFORM_LIMITS,
  type PlatformId,
} from "@/lib/ai";
import type { PromptFormData } from "@/lib/promptGenerator";

export const maxDuration = 30;

// Basic per-IP rate limit. In-memory, so it is best-effort on serverless
// (each instance keeps its own counter) but stops casual abuse.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_REQUESTS;
}

const MAX_FIELD = 300;
const MAX_NOTES = 500;

function cleanForm(raw: unknown): Partial<PromptFormData> | null {
  if (!raw || typeof raw !== "object") return null;
  const out: Partial<PromptFormData> = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (typeof value !== "string" || !value.trim()) continue;
    const limit = key === "customNotes" ? MAX_NOTES : MAX_FIELD;
    out[key as keyof PromptFormData] = value.slice(0, limit);
  }
  return out;
}

function error(status: number, code: string, message: string) {
  return Response.json({ error: code, message }, { status });
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (rateLimited(ip)) {
    return error(429, "rate_limited", "Too many requests. Wait a minute and try again.");
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return error(400, "bad_request", "Invalid JSON body.");
  }

  const platform = body.platform as PlatformId;
  if (!(platform in PLATFORM_LIMITS)) {
    return error(400, "bad_request", "Unknown platform.");
  }

  try {
    let prompt: string;
    if (body.mode === "form") {
      const form = cleanForm(body.form);
      if (!form || Object.keys(form).length === 0) {
        return error(400, "bad_request", "Select at least one option.");
      }
      prompt = await generateFromForm(platform, form);
    } else if (body.mode === "artist") {
      const artist = typeof body.artist === "string" ? body.artist.trim().slice(0, 100) : "";
      if (!artist) return error(400, "bad_request", "Enter an artist name.");
      const hint = typeof body.hint === "string" ? body.hint.slice(0, MAX_NOTES) : undefined;
      prompt = await generateFromArtist(platform, artist, hint);
    } else {
      return error(400, "bad_request", "Unknown mode.");
    }
    return Response.json({ prompt });
  } catch (err) {
    if (err instanceof AIUnavailableError) {
      return error(503, "ai_unavailable", "AI generation is not configured.");
    }
    if (err instanceof UnknownArtistError) {
      return error(404, "unknown_artist", "Artist not recognized. Try another spelling or a better-known artist.");
    }
    if (err instanceof AIRefusalError) {
      return error(422, "refused", "The AI declined this request. Try different inputs.");
    }
    if (err instanceof Anthropic.RateLimitError) {
      return error(429, "rate_limited", "AI is busy right now. Try again shortly.");
    }
    if (err instanceof Anthropic.APIError) {
      console.error("Anthropic API error", err.status, err.message);
      return error(502, "upstream_error", "AI service error. Using local generator instead.");
    }
    console.error("Generate error", err);
    return error(500, "server_error", "Unexpected error.");
  }
}

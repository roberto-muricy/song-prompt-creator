export type AIRequest =
  | { mode: "form"; platform: string; form: Record<string, string> }
  | { mode: "artist"; platform: string; artist: string; hint?: string };

export type AIResult =
  | { ok: true; prompt: string }
  | { ok: false; code: string; message: string };

export async function requestAIPrompt(body: AIRequest): Promise<AIResult> {
  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && typeof data.prompt === "string") return { ok: true, prompt: data.prompt };
    return {
      ok: false,
      code: data.error ?? "network_error",
      message: data.message ?? "Could not reach the AI service.",
    };
  } catch {
    return { ok: false, code: "network_error", message: "Could not reach the AI service." };
  }
}

"use client";

import { useState, useMemo } from "react";
import { User, X, Loader2 } from "lucide-react";
import { searchArtists, getArtistByName, type ArtistProfile } from "@/data/artists";
import { aiPlatforms } from "@/data/options";
import { optimizePrompt } from "@/lib/promptGenerator";
import { requestAIPrompt } from "@/lib/aiClient";
import PromptOutput from "./PromptOutput";
import AIToggle, { StatusNote } from "./AIToggle";

export default function ArtistReference() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ArtistProfile | null>(null);
  const [platform, setPlatform] = useState("suno");
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [useAI, setUseAI] = useState(true);
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  const platformData = aiPlatforms.find((p) => p.id === platform) || aiPlatforms[0];
  const results = useMemo(() => searchArtists(query), [query]);
  const showDropdown = showResults && query.length > 0 && results.length > 0 && !selected;

  // With AI on, any typed name works; without it, only artists from the local database.
  const artistName = selected?.name ?? query.trim();
  const localMatch = selected ?? getArtistByName(query.trim()) ?? null;
  const canGenerate = useAI ? artistName.length > 0 : localMatch !== null;

  const handleSelect = (artist: ArtistProfile) => {
    setSelected(artist);
    setQuery(artist.name);
    setShowResults(false);
  };

  const handleGenerate = async () => {
    if (!canGenerate) return;
    setNote(null);
    let result: string | null = localMatch?.prompt ?? null;

    if (useAI) {
      setLoading(true);
      const ai = await requestAIPrompt({
        mode: "artist",
        platform,
        artist: artistName,
        hint: localMatch?.prompt,
      });
      setLoading(false);
      if (ai.ok) {
        result = ai.prompt;
      } else if (result) {
        setNote(`${ai.message} Showing the saved profile instead.`);
      } else {
        setNote(ai.message);
        return;
      }
    }

    if (!result) return;
    if (prompt) setHistory((prev) => [...prev, prompt]);
    setPrompt(result);
  };

  const handleOptimize = () => {
    setHistory((prev) => [...prev, prompt]);
    setPrompt(optimizePrompt(prompt, platformData.maxChars));
  };

  const handleUndo = () => {
    const prev = history[history.length - 1];
    if (prev !== undefined) {
      setPrompt(prev);
      setHistory((h) => h.slice(0, -1));
    }
  };

  const handleClear = () => {
    if (prompt) setHistory((prev) => [...prev, prompt]);
    setQuery("");
    setSelected(null);
    setPrompt("");
    setNote(null);
  };

  return (
    <div className="space-y-4">
      <div className="mb-6 flex items-center justify-center gap-2">
        {aiPlatforms.map((p) => (
          <button
            key={p.id}
            onClick={() => setPlatform(p.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              platform === p.id
                ? "bg-purple-600 text-white"
                : "bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="border border-zinc-800 rounded-xl bg-zinc-900/50 p-5">
        <h2 className="text-base font-semibold text-zinc-100 flex items-center gap-3 mb-4">
          <User size={20} className="text-zinc-400" />
          Artist Reference
        </h2>
        <p className="text-sm text-zinc-400 mb-4">
          {useAI
            ? "Type any artist name. The AI describes their sound without mentioning the artist."
            : "Pick an artist from the list to use their saved style profile."}
        </p>

        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
              if (selected) setSelected(null);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleGenerate();
            }}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            maxLength={100}
            placeholder="Search artist... (e.g. Daft Punk, Billie Eilish, Tom Jobim)"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors hover:border-zinc-600"
          />

          {showDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-lg shadow-xl max-h-64 overflow-y-auto">
              {results.map((artist) => (
                <button
                  key={artist.name}
                  onMouseDown={() => handleSelect(artist)}
                  className="w-full text-left px-4 py-3 hover:bg-zinc-700 transition-colors border-b border-zinc-700/50 last:border-0"
                >
                  <div className="text-sm font-medium text-zinc-100">{artist.name}</div>
                  <div className="text-xs text-zinc-400 mt-0.5">{artist.genres.join(" · ")}</div>
                </button>
              ))}
            </div>
          )}
        </div>

        {selected && (
          <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-purple-400">{selected.name}</span>
                <span className="text-xs text-zinc-500 ml-2">{selected.genres.join(" · ")}</span>
              </div>
              <button
                onClick={() => { setSelected(null); setQuery(""); }}
                className="text-zinc-500 hover:text-zinc-300 text-sm"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center pt-2">
        <AIToggle enabled={useAI} onChange={setUseAI} />
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={handleGenerate}
          disabled={!canGenerate || loading}
          className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-zinc-700 disabled:to-zinc-700 disabled:text-zinc-500 font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-purple-900/30 disabled:shadow-none disabled:hover:scale-100"
        >
          {loading && <Loader2 size={16} className="animate-spin" />}
          {loading ? "Generating..." : "Generate Prompt"}
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 font-medium text-sm text-zinc-300 transition-colors"
        >
          Clear
        </button>
      </div>

      <StatusNote note={note} />

      <PromptOutput
        prompt={prompt}
        maxChars={platformData.maxChars}
        onOptimize={handleOptimize}
        onUndo={handleUndo}
        canUndo={history.length > 0}
      />
    </div>
  );
}

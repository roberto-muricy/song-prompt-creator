"use client";

import { useState, useMemo } from "react";
import { User, X } from "lucide-react";
import { searchArtists, type ArtistProfile } from "@/data/artists";
import { aiPlatforms } from "@/data/options";
import { optimizePrompt } from "@/lib/promptGenerator";
import PromptOutput from "./PromptOutput";

export default function ArtistReference() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<ArtistProfile | null>(null);
  const [platform, setPlatform] = useState("suno");
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const platformData = aiPlatforms.find((p) => p.id === platform) || aiPlatforms[0];
  const results = useMemo(() => searchArtists(query), [query]);
  const showDropdown = showResults && query.length > 0 && results.length > 0 && !selected;

  const handleSelect = (artist: ArtistProfile) => {
    setSelected(artist);
    setQuery(artist.name);
    setShowResults(false);
  };

  const handleGenerate = () => {
    if (!selected) return;
    const result = selected.prompt;
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
          Type an artist name to generate a prompt that captures their style — without mentioning the artist directly.
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
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
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

      <div className="flex gap-3 justify-center pt-2">
        <button
          onClick={handleGenerate}
          disabled={!selected}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-zinc-700 disabled:to-zinc-700 disabled:text-zinc-500 font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-purple-900/30 disabled:shadow-none disabled:hover:scale-100"
        >
          Generate Prompt
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 font-medium text-sm text-zinc-300 transition-colors"
        >
          Clear
        </button>
      </div>

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

"use client";

import { useState, useCallback } from "react";
import Select from "@/components/Select";
import Section from "@/components/Section";
import PromptOutput from "@/components/PromptOutput";
import ArtistReference from "@/components/ArtistReference";
import {
  genres, subGenres, moods, tempos, vocalsOptions, instruments,
  harmonyTypes, structures, mixingStyles, aiPlatforms, eras, energyLevels,
} from "@/data/options";
import { generatePrompt, optimizePrompt, type PromptFormData } from "@/lib/promptGenerator";
import { Music2, Piano, Mic, SlidersHorizontal } from "lucide-react";

type Mode = "form" | "artist";

const initialForm: PromptFormData = {
  platform: "suno",
  genre: "",
  subGenre: "",
  mood: "",
  tempo: "",
  era: "",
  energy: "",
  vocalType: "",
  vocalStyle: "",
  vocalTimbre: "",
  vocalEffects: "",
  percussion: "",
  bass: "",
  leadInstrument: "",
  accompanyingInstrument: "",
  harmony: "",
  structure: "",
  mixingStyle: "",
  customNotes: "",
};

export default function Home() {
  const [mode, setMode] = useState<Mode>("form");
  const [form, setForm] = useState<PromptFormData>(initialForm);
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const platform = aiPlatforms.find((p) => p.id === form.platform) || aiPlatforms[0];
  const availableSubGenres = form.genre && subGenres[form.genre] ? subGenres[form.genre] : [];

  const update = useCallback((field: keyof PromptFormData, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "genre") next.subGenre = "";
      return next;
    });
  }, []);

  const handleGenerate = () => {
    const result = generatePrompt(form);
    if (prompt) setHistory((prev) => [...prev, prompt]);
    setPrompt(result);
  };

  const handleOptimize = () => {
    setHistory((prev) => [...prev, prompt]);
    setPrompt(optimizePrompt(prompt, platform.maxChars));
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
    setForm(initialForm);
    setPrompt("");
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            Song Prompt Creator
          </h1>
          <p className="text-zinc-400 mt-2 text-sm sm:text-base">
            Generate optimized prompts for Suno, Udio &amp; other AI music platforms
          </p>
        </header>

        <div className="flex items-center justify-center gap-1 mb-8 bg-zinc-900 p-1 rounded-xl w-fit mx-auto">
          <button
            onClick={() => setMode("form")}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              mode === "form"
                ? "bg-purple-600 text-white shadow-lg"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Form Builder
          </button>
          <button
            onClick={() => setMode("artist")}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              mode === "artist"
                ? "bg-purple-600 text-white shadow-lg"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Artist Reference
          </button>
        </div>

        {mode === "artist" ? (
          <ArtistReference />
        ) : (
          <>
            <div className="mb-6 flex items-center justify-center gap-2">
              {aiPlatforms.map((p) => (
                <button
                  key={p.id}
                  onClick={() => update("platform", p.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    form.platform === p.id
                      ? "bg-purple-600 text-white"
                      : "bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <Section title="Genre & Style" icon={<Music2 size={20} />}>
                <Select label="Genre" value={form.genre} onChange={(v) => update("genre", v)} options={[...genres]} />
                <Select
                  label="Sub-genre"
                  value={form.subGenre}
                  onChange={(v) => update("subGenre", v)}
                  options={availableSubGenres}
                  placeholder={form.genre ? "Select sub-genre..." : "Select a genre first"}
                />
                <Select label="Era / Decade" value={form.era} onChange={(v) => update("era", v)} options={[...eras]} />
                <Select label="Mood" value={form.mood} onChange={(v) => update("mood", v)} options={[...moods]} />
                <Select label="Energy Level" value={form.energy} onChange={(v) => update("energy", v)} options={[...energyLevels]} />
                <Select label="Tempo" value={form.tempo} onChange={(v) => update("tempo", v)} options={[...tempos]} />
              </Section>

              <Section title="Instruments & Production" icon={<Piano size={20} />}>
                <Select label="Percussion" value={form.percussion} onChange={(v) => update("percussion", v)} options={[...instruments.percussion]} />
                <Select label="Bass" value={form.bass} onChange={(v) => update("bass", v)} options={[...instruments.bass]} />
                <Select label="Lead Instrument" value={form.leadInstrument} onChange={(v) => update("leadInstrument", v)} options={[...instruments.lead]} />
                <Select label="Accompanying Instrument" value={form.accompanyingInstrument} onChange={(v) => update("accompanyingInstrument", v)} options={[...instruments.accompanying]} />
                <Select label="Harmony / Scale" value={form.harmony} onChange={(v) => update("harmony", v)} options={[...harmonyTypes]} />
                <Select label="Structure" value={form.structure} onChange={(v) => update("structure", v)} options={[...structures]} />
              </Section>

              <Section title="Vocals" icon={<Mic size={20} />}>
                <Select label="Vocal Type" value={form.vocalType} onChange={(v) => update("vocalType", v)} options={[...vocalsOptions.type]} />
                <Select label="Vocal Style" value={form.vocalStyle} onChange={(v) => update("vocalStyle", v)} options={[...vocalsOptions.style]} />
                <Select label="Vocal Timbre" value={form.vocalTimbre} onChange={(v) => update("vocalTimbre", v)} options={[...vocalsOptions.timbre]} />
                <Select label="Vocal Effects" value={form.vocalEffects} onChange={(v) => update("vocalEffects", v)} options={[...vocalsOptions.effects]} />
              </Section>

              <Section title="Mixing & Production" icon={<SlidersHorizontal size={20} />}>
                <Select label="Mixing Style" value={form.mixingStyle} onChange={(v) => update("mixingStyle", v)} options={[...mixingStyles]} />
                <div className="sm:col-span-2 lg:col-span-3">
                  <label className="text-sm font-medium text-zinc-300 block mb-1.5">Custom Notes</label>
                  <textarea
                    value={form.customNotes}
                    onChange={(e) => update("customNotes", e.target.value)}
                    placeholder="Add any custom instructions, references, or specific details..."
                    rows={3}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-colors hover:border-zinc-600"
                  />
                </div>
              </Section>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={handleGenerate}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-purple-900/30"
                >
                  Generate Prompt
                </button>
                <button
                  onClick={handleClear}
                  className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 font-medium text-sm text-zinc-300 transition-colors"
                >
                  Clear Form
                </button>
              </div>

              <PromptOutput
                prompt={prompt}
                maxChars={platform.maxChars}
                onOptimize={handleOptimize}
                onUndo={handleUndo}
                canUndo={history.length > 0}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}

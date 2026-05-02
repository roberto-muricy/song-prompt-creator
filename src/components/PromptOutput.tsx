"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface PromptOutputProps {
  prompt: string;
  maxChars: number;
  onOptimize: () => void;
  onUndo: () => void;
  canUndo: boolean;
}

export default function PromptOutput({ prompt, maxChars, onOptimize, onUndo, canUndo }: PromptOutputProps) {
  const [copied, setCopied] = useState(false);
  const charCount = prompt.length;
  const percentage = (charCount / maxChars) * 100;

  const colorClass =
    percentage <= 70 ? "text-emerald-400" :
    percentage <= 90 ? "text-amber-400" :
    "text-red-400";

  const barColor =
    percentage <= 70 ? "bg-emerald-500" :
    percentage <= 90 ? "bg-amber-500" :
    "bg-red-500";

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
  };

  return (
    <div className="border border-zinc-800 rounded-xl bg-zinc-900/50 overflow-hidden">
      <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
        <h2 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
          <Sparkles size={18} className="text-purple-400" />
          Generated Prompt
        </h2>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-mono ${colorClass}`}>
            {charCount}/{maxChars}
          </span>
        </div>
      </div>

      <div className="h-1 bg-zinc-800">
        <div
          className={`h-full transition-all duration-300 ${barColor}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>

      <div className="p-5">
        {prompt ? (
          <p className="text-zinc-200 text-sm leading-relaxed font-mono bg-zinc-800/50 rounded-lg p-4 min-h-[100px] whitespace-pre-wrap break-words">
            {prompt}
          </p>
        ) : (
          <p className="text-zinc-500 text-sm italic text-center py-8">
            Select options above and click &quot;Generate Prompt&quot; to create your music prompt.
          </p>
        )}
      </div>

      <div className="px-5 pb-5 flex flex-wrap gap-2">
        <button
          onClick={handleCopy}
          disabled={!prompt}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-sm font-medium transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>

        {charCount > maxChars && (
          <button
            onClick={onOptimize}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-sm font-medium transition-colors animate-pulse"
          >
            ⚡ Optimize
          </button>
        )}

        {canUndo && (
          <button
            onClick={onUndo}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-sm font-medium transition-colors"
          >
            ↩ Undo
          </button>
        )}
      </div>
    </div>
  );
}

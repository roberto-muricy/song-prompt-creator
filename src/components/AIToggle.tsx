"use client";

import { Sparkles } from "lucide-react";

interface AIToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export default function AIToggle({ enabled, onChange }: AIToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
    >
      <span
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
          enabled ? "bg-purple-600" : "bg-zinc-700"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
            enabled ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </span>
      <Sparkles size={14} className={enabled ? "text-purple-400" : ""} />
      AI-enhanced
    </button>
  );
}

export function StatusNote({ note }: { note: string | null }) {
  if (!note) return null;
  return <p className="text-center text-xs text-amber-400/90">{note}</p>;
}

export interface PromptFormData {
  platform: string;
  genre: string;
  subGenre: string;
  mood: string;
  tempo: string;
  era: string;
  energy: string;
  vocalType: string;
  vocalStyle: string;
  vocalTimbre: string;
  vocalEffects: string;
  percussion: string;
  bass: string;
  leadInstrument: string;
  accompanyingInstrument: string;
  harmony: string;
  structure: string;
  mixingStyle: string;
  customNotes: string;
}

export function generatePrompt(data: PromptFormData): string {
  const parts: string[] = [];

  if (data.genre) {
    let genrePart = data.genre;
    if (data.subGenre) genrePart = `${data.subGenre} ${data.genre}`;
    parts.push(genrePart);
  }

  if (data.era) parts.push(`${data.era} era`);
  if (data.mood) parts.push(`${data.mood} mood`);
  if (data.energy) parts.push(data.energy);
  if (data.tempo) parts.push(data.tempo);
  if (data.harmony) parts.push(`${data.harmony} harmony`);
  if (data.structure) parts.push(data.structure);

  const instrumentParts: string[] = [];
  if (data.percussion) instrumentParts.push(data.percussion);
  if (data.bass) instrumentParts.push(data.bass);
  if (data.leadInstrument) instrumentParts.push(`${data.leadInstrument} lead`);
  if (data.accompanyingInstrument) instrumentParts.push(`${data.accompanyingInstrument} accompaniment`);

  if (instrumentParts.length > 0) {
    parts.push(instrumentParts.join(", "));
  }

  if (data.vocalType) {
    if (data.vocalType === "Instrumental (No Vocals)") {
      parts.push("instrumental, no vocals");
    } else {
      const vocalParts = [data.vocalType];
      if (data.vocalStyle) vocalParts.push(data.vocalStyle.toLowerCase());
      if (data.vocalTimbre) vocalParts.push(`${data.vocalTimbre.toLowerCase()} voice`);
      if (data.vocalEffects) vocalParts.push(`with ${data.vocalEffects.toLowerCase()}`);
      parts.push(vocalParts.join(", "));
    }
  }

  if (data.mixingStyle) parts.push(`${data.mixingStyle} mix`);
  if (data.customNotes) parts.push(data.customNotes.trim());

  return parts.join(", ");
}

export function optimizePrompt(prompt: string, maxChars: number): string {
  if (prompt.length <= maxChars) return prompt;

  let optimized = prompt;

  const replacements: [RegExp, string][] = [
    [/\bwith a\b/gi, "with"],
    [/\band a\b/gi, "&"],
    [/\band\b/gi, "&"],
    [/\bvery\b/gi, ""],
    [/\btempo,?\s*/gi, ""],
    [/\b(\d+)-(\d+) BPM/gi, "$1-$2bpm"],
    [/\s{2,}/g, " "],
    [/, ,/g, ","],
    [/,\s*,/g, ","],
  ];

  for (const [pattern, replacement] of replacements) {
    if (optimized.length <= maxChars) break;
    optimized = optimized.replace(pattern, replacement);
  }

  optimized = optimized.trim().replace(/^,\s*|,\s*$/g, "");

  if (optimized.length > maxChars) {
    optimized = optimized.substring(0, maxChars - 3) + "...";
  }

  return optimized;
}

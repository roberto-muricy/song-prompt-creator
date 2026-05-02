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
  switch (data.platform) {
    case "suno":
      return generateSunoPrompt(data);
    case "udio":
      return generateUdioPrompt(data);
    default:
      return generateGenericPrompt(data);
  }
}

function generateSunoPrompt(data: PromptFormData): string {
  const tags: string[] = [];

  if (data.genre) {
    tags.push(data.subGenre ? `${data.subGenre}` : data.genre);
  }
  if (data.era) tags.push(data.era);
  if (data.mood) tags.push(data.mood);
  if (data.tempo) {
    const bpmMatch = data.tempo.match(/(\d+-\d+)\s*BPM/i);
    tags.push(bpmMatch ? `${bpmMatch[1]} BPM` : data.tempo);
  }

  if (data.leadInstrument) tags.push(data.leadInstrument);
  if (data.percussion && data.percussion !== "No Percussion") tags.push(data.percussion);
  if (data.bass && data.bass !== "No Bass") tags.push(data.bass);
  if (data.accompanyingInstrument) tags.push(data.accompanyingInstrument);

  if (data.vocalType) {
    if (data.vocalType === "Instrumental (No Vocals)") {
      tags.push("Instrumental");
    } else {
      tags.push(data.vocalType);
      if (data.vocalTimbre) tags.push(`${data.vocalTimbre} voice`);
    }
  }

  if (data.harmony) tags.push(data.harmony);
  if (data.mixingStyle) tags.push(`${data.mixingStyle} mix`);
  if (data.energy) {
    const energyLabel = data.energy.split(",")[0].trim();
    tags.push(energyLabel);
  }

  if (data.customNotes) tags.push(data.customNotes.trim());

  return tags.join(", ");
}

function generateUdioPrompt(data: PromptFormData): string {
  const sections: string[] = [];

  // Genre & style sentence
  if (data.genre) {
    let style = data.subGenre ? `${data.subGenre} ${data.genre.toLowerCase()}` : data.genre.toLowerCase();
    if (data.era) style = `${data.era}-era ${style}`;
    const article = /^[aeiou]/i.test(style) ? "An" : "A";
    let sentence = `${article} ${style} track`;
    if (data.mood) {
      const moodArticle = /^[aeiou]/i.test(data.mood) ? "an" : "a";
      sentence += ` with ${moodArticle} ${data.mood.toLowerCase()} mood`;
    }
    if (data.energy) {
      const energyDesc = data.energy.split(",").slice(1).join(",").trim();
      if (energyDesc) sentence += `, ${energyDesc}`;
    }
    sections.push(sentence + ".");
  }

  // Tempo
  if (data.tempo) {
    sections.push(`Tempo: ${data.tempo}.`);
  }

  // Instruments
  const instParts: string[] = [];
  if (data.leadInstrument) instParts.push(`${data.leadInstrument} as the lead instrument`);
  if (data.accompanyingInstrument) instParts.push(`${data.accompanyingInstrument} providing accompaniment`);
  if (data.bass && data.bass !== "No Bass") instParts.push(`${data.bass.toLowerCase()} bass`);
  if (data.percussion && data.percussion !== "No Percussion") instParts.push(`${data.percussion.toLowerCase()} on drums`);
  if (instParts.length > 0) {
    sections.push(`Instrumentation features ${instParts.join(", ")}.`);
  }

  // Harmony & structure
  if (data.harmony || data.structure) {
    const hsParts: string[] = [];
    if (data.harmony) hsParts.push(`${data.harmony} harmony`);
    if (data.structure) hsParts.push(`following a ${data.structure}`);
    sections.push(`Built on ${hsParts.join(", ")}.`);
  }

  // Vocals
  if (data.vocalType) {
    if (data.vocalType === "Instrumental (No Vocals)") {
      sections.push("Purely instrumental, no vocals.");
    } else {
      const vocalDesc: string[] = [data.vocalType.toLowerCase()];
      if (data.vocalStyle) vocalDesc.push(`with a ${data.vocalStyle.toLowerCase()} delivery`);
      if (data.vocalTimbre) vocalDesc.push(`${data.vocalTimbre.toLowerCase()} timbre`);
      if (data.vocalEffects) vocalDesc.push(`processed with ${data.vocalEffects.toLowerCase()}`);
      sections.push(`Vocals: ${vocalDesc.join(", ")}.`);
    }
  }

  // Mix
  if (data.mixingStyle) {
    sections.push(`Production style: ${data.mixingStyle.toLowerCase()} mix.`);
  }

  if (data.customNotes) sections.push(data.customNotes.trim());

  return sections.join(" ");
}

function generateGenericPrompt(data: PromptFormData): string {
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
    [/\bInstrumentation features\b/gi, ""],
    [/\bProduction style:\b/gi, ""],
    [/\bproviding accompaniment\b/gi, ""],
    [/\bas the lead instrument\b/gi, "lead"],
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

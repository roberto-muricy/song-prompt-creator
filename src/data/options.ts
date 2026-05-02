export const genres = [
  "Pop", "Rock", "Hip Hop", "R&B", "Electronic", "Jazz", "Blues", "Classical",
  "Metal", "Punk", "Country", "Folk", "Reggae", "Latin", "Funk", "Soul",
  "Ambient", "Lo-fi", "Cinematic", "Afrobeats", "K-Pop", "Indie",
  "Alternative", "Trap", "Drill", "House", "Techno", "Drum and Bass",
  "Dubstep", "Trance", "Disco", "Gospel", "Bossa Nova", "Samba", "MPB",
  "Sertanejo", "Forró", "Pagode", "Axé", "Ska", "Indie Rock",
  "Trip Hop", "Brit Pop", "Dream Pop"
] as const;

export const subGenres: Record<string, string[]> = {
  "Pop": ["Synth Pop", "Electropop", "Dream Pop", "Indie Pop", "Art Pop", "Dance Pop", "Bedroom Pop"],
  "Rock": ["Classic Rock", "Prog Rock", "Psychedelic Rock", "Garage Rock", "Post-Rock", "Shoegaze", "Grunge", "Soft Rock"],
  "Hip Hop": ["Boom Bap", "Trap", "Lo-fi Hip Hop", "Old School", "Conscious", "Cloud Rap", "Phonk"],
  "R&B": ["Contemporary R&B", "Neo-Soul", "Alternative R&B", "Quiet Storm"],
  "Electronic": ["EDM", "Synthwave", "Chillwave", "IDM", "Electronica", "Future Bass", "Glitch"],
  "Jazz": ["Smooth Jazz", "Bebop", "Fusion", "Cool Jazz", "Free Jazz", "Acid Jazz", "Nu Jazz"],
  "Blues": ["Delta Blues", "Chicago Blues", "Electric Blues", "Blues Rock"],
  "Classical": ["Baroque", "Romantic", "Contemporary Classical", "Minimalist", "Orchestral", "Chamber Music"],
  "Metal": ["Heavy Metal", "Thrash Metal", "Death Metal", "Black Metal", "Doom Metal", "Power Metal", "Progressive Metal", "Nu Metal"],
  "Punk": ["Pop Punk", "Post-Punk", "Hardcore", "Skate Punk"],
  "Country": ["Modern Country", "Outlaw Country", "Bluegrass", "Country Pop", "Americana"],
  "Folk": ["Indie Folk", "Folk Rock", "Traditional Folk", "Celtic Folk", "Acoustic Folk"],
  "Reggae": ["Roots Reggae", "Dancehall", "Dub", "Ska", "Reggaeton"],
  "Latin": ["Salsa", "Cumbia", "Bachata", "Merengue", "Latin Pop", "Reggaeton", "Dembow"],
  "Funk": ["P-Funk", "Electro-Funk", "Funk Rock", "Disco Funk"],
  "Soul": ["Classic Soul", "Northern Soul", "Psychedelic Soul", "Blue-Eyed Soul"],
  "Ambient": ["Dark Ambient", "Space Ambient", "Drone", "New Age", "Nature Sounds"],
  "Lo-fi": ["Lo-fi Hip Hop", "Lo-fi Indie", "Lo-fi Beats", "Chillhop"],
  "Cinematic": ["Epic Orchestral", "Film Score", "Trailer Music", "Dark Cinematic", "Fantasy"],
  "Afrobeats": ["Afropop", "Afro-Fusion", "Amapiano", "Highlife"],
  "House": ["Deep House", "Tech House", "Progressive House", "Tropical House", "Acid House"],
  "Techno": ["Minimal Techno", "Detroit Techno", "Industrial Techno", "Melodic Techno"],
  "Bossa Nova": ["Traditional Bossa", "Jazz Bossa", "Modern Bossa"],
  "MPB": ["Tropicália", "MPB Moderno", "MPB Clássico"],
  "Sertanejo": ["Sertanejo Universitário", "Sertanejo Raiz", "Sertanejo Romântico"],
  "Ska": ["Traditional Ska", "2 Tone Ska", "Ska Punk", "Ska Jazz", "Rocksteady"],
  "Indie Rock": ["Garage Rock Revival", "Math Rock", "Noise Rock", "Lo-fi Indie Rock", "Post-Punk Revival", "Emo"],
  "Trip Hop": ["Downtempo", "Abstract Hip Hop", "Dark Trip Hop", "Cinematic Trip Hop"],
  "Brit Pop": ["Classic Brit Pop", "Madchester", "Shoegazing Brit Pop", "New Wave of Brit Pop"],
  "Dream Pop": ["Shoegaze", "Ethereal Wave", "Ambient Pop", "Chillwave", "Slowcore"],
};

export const moods = [
  "Chill", "Happy", "Energetic", "Melancholic", "Dark", "Epic",
  "Romantic", "Uplifting", "Mysterious", "Aggressive", "Dreamy",
  "Nostalgic", "Peaceful", "Triumphant", "Haunting", "Playful",
  "Intense", "Ethereal", "Groovy", "Bittersweet"
] as const;

export const tempos = [
  { label: "Very Slow (40-60 BPM)", value: "very slow tempo, 40-60 BPM" },
  { label: "Slow (60-80 BPM)", value: "slow tempo, 60-80 BPM" },
  { label: "Moderate (80-110 BPM)", value: "moderate tempo, 80-110 BPM" },
  { label: "Fast (110-140 BPM)", value: "fast tempo, 110-140 BPM" },
  { label: "Very Fast (140-170 BPM)", value: "very fast tempo, 140-170 BPM" },
  { label: "Extreme (170+ BPM)", value: "extreme tempo, 170+ BPM" },
  { label: "Free-flowing / Rubato", value: "free-flowing rubato tempo" },
] as const;

export const vocalsOptions = {
  type: ["Female Vocal", "Male Vocal", "Child Vocal", "Choir", "Duet (Male & Female)", "Instrumental (No Vocals)"],
  style: [
    "Energetic & Joyful", "Calm & Melancholic", "Rhythmic & Hypnotic",
    "Fast-paced & Rap-like", "Call-and-Response", "Whispered & Intimate",
    "Powerful & Belting", "Falsetto", "Spoken Word", "Storytelling"
  ],
  timbre: ["Clear & Bright", "Warm & Resonant", "Airy & Light", "Husky & Smoky", "Breathy & Soft", "Gravelly & Raw", "Deep & Rich"],
  effects: [
    "Hall Reverb", "Room Reverb", "Church Reverb", "Plate Reverb",
    "Short Delay", "Long Echo", "Slapback Delay", "Lo-fi / Telephone Effect",
    "Autotune", "Vocoder", "Chorus Effect", "Dry (No Effects)"
  ],
} as const;

export const instruments = {
  percussion: [
    "Subtle Percussion", "Acoustic Drums (Tight)", "Acoustic Drums (Boomy)",
    "Acoustic Drums (Brush)", "808 Drums", "TR-909 Drum Machine",
    "Lo-fi Drums", "Ethnic Percussion", "Congas & Bongos",
    "Tabla", "Cajón", "Pandeiro", "Surdo & Tamborim",
    "Electronic Beats", "Breakbeat", "No Percussion"
  ],
  bass: [
    "Deep Sub-bass", "Electric Bass (Fingerstyle)", "Electric Bass (Slap)",
    "Synth Bass", "Acoustic Upright Bass", "Fretless Bass",
    "808 Bass", "Melodic Bassline", "Rubber Bass", "No Bass"
  ],
  lead: [
    "Electric Guitar (Clean)", "Electric Guitar (Distorted)", "Electric Guitar (Mellow)",
    "Acoustic Guitar (Steel String)", "Acoustic Guitar (Nylon)",
    "Piano", "Rhodes / Electric Piano", "Organ (Hammond)",
    "Synth Lead", "Synth Pad", "Strings (Violin/Viola)",
    "Cello", "Full String Section", "Flute", "Saxophone",
    "Trumpet", "Clarinet", "Harmonica", "Accordion",
    "Sitar", "Oud", "Erhu", "Kalimba", "Marimba", "Harp",
    "Steel Drums", "Banjo", "Mandolin", "Ukulele"
  ],
  accompanying: [
    "Rhythm Guitar (Electric)", "Rhythm Guitar (Acoustic)", "Piano Chords",
    "Synth Pads", "String Ensemble", "Brass Section",
    "Ambient Textures", "Arpeggiator", "Choir Pads",
    "Horns Section", "Woodwind Ensemble"
  ],
} as const;

export const harmonyTypes = [
  "Major (Bright & Happy)", "Minor (Dark & Emotional)", "Modal (Exotic & Unique)",
  "Pentatonic (Simple & Universal)", "Blues Scale", "Chromatic",
  "Harmonic Minor (Middle Eastern feel)", "Whole Tone (Dreamy & Floating)",
  "Dorian (Jazzy & Smooth)", "Mixolydian (Bluesy & Soulful)"
] as const;

export const structures = [
  { label: "Classic Pop/Rock (Verse-Chorus-Verse-Chorus-Bridge-Chorus)", value: "classic pop/rock structure with verse-chorus-bridge" },
  { label: "Hip Hop (Intro-Verse-Hook-Verse-Hook-Outro)", value: "hip hop structure with verses and hooks" },
  { label: "EDM (Build-Drop-Build-Drop)", value: "EDM structure with builds and drops" },
  { label: "Progressive (Gradual Build, No Repeats)", value: "progressive structure with gradual evolution" },
  { label: "Minimalist (Repetitive, Slowly Evolving)", value: "minimalist structure with subtle variations" },
  { label: "Cinematic (Intro-Rise-Climax-Resolution)", value: "cinematic arc structure with dramatic climax" },
  { label: "Jazz / Jam (Head-Solos-Head)", value: "jazz structure with improvisation sections" },
  { label: "Ballad (Slow Build to Emotional Peak)", value: "ballad structure with emotional arc" },
  { label: "Free Form / Experimental", value: "free-form experimental structure" },
  { label: "Loop-based (Layered Elements)", value: "loop-based structure with layered elements" },
] as const;

export const mixingStyles = [
  "Warm & Analog", "Bright & Modern", "Dark & Heavy",
  "Balanced & Clean", "Lo-fi & Vintage", "Minimal & Spacious",
  "Layered & Dense", "Raw & Live", "Atmospheric & Reverb-heavy",
  "Punchy & Compressed", "Wide Stereo", "Mono / Retro"
] as const;

export const aiPlatforms = [
  { id: "suno", label: "Suno", maxChars: 200, description: "Concise tags, comma-separated" },
  { id: "udio", label: "Udio", maxChars: 1000, description: "Detailed descriptive sentences" },
  { id: "generic", label: "Generic (Other AIs)", maxChars: 2000, description: "Flexible format" },
] as const;

export const eras = [
  "1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s",
  "2020s", "Futuristic", "Timeless"
] as const;

export const energyLevels = [
  { label: "Very Low (Ambient, Meditative)", value: "very low energy, ambient and meditative" },
  { label: "Low (Calm, Relaxed)", value: "low energy, calm and relaxed" },
  { label: "Medium (Balanced, Steady)", value: "medium energy, balanced and steady" },
  { label: "High (Driving, Powerful)", value: "high energy, driving and powerful" },
  { label: "Very High (Explosive, Intense)", value: "very high energy, explosive and intense" },
] as const;

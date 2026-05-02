export interface ArtistProfile {
  name: string;
  genres: string[];
  prompt: string;
}

export const artists: ArtistProfile[] = [
  // Pop
  { name: "Taylor Swift", genres: ["Pop", "Country Pop", "Indie Folk"], prompt: "catchy synth pop, polished production, bright female vocals, confessional storytelling lyrics, layered harmonies, anthemic choruses, warm acoustic guitar undertones, modern pop structure with bridge, 120-130 BPM" },
  { name: "Billie Eilish", genres: ["Pop", "Electropop", "Dark Pop"], prompt: "dark minimalist pop, whispery intimate female vocals, deep bass, sparse electronic beats, ASMR-like vocal delivery, atmospheric production, moody and introspective, lo-fi textures with polished mix, soft yet haunting, 70-90 BPM" },
  { name: "The Weeknd", genres: ["R&B", "Synth Pop", "Dark R&B"], prompt: "dark synth-driven R&B, 80s synthwave influences, falsetto male vocals, atmospheric reverb-heavy production, pulsing bass, retro drum machines, melancholic yet danceable, cinematic feel, 100-120 BPM" },
  { name: "Dua Lipa", genres: ["Pop", "Disco", "Dance Pop"], prompt: "retro disco pop, funky bass grooves, four-on-the-floor beat, bright female vocals, shimmering synths, 70s and 80s dance influences, feel-good energy, polished modern production, catchy hooks, 110-125 BPM" },
  { name: "Bruno Mars", genres: ["Pop", "Funk", "R&B"], prompt: "retro funk pop, groovy bass, crisp drums, smooth male vocals, brass section, vintage soul influences, upbeat and danceable, polished production, catchy melodic hooks, 110-130 BPM" },
  { name: "Adele", genres: ["Pop", "Soul", "Ballad"], prompt: "powerful vocal-driven pop ballad, emotional piano, orchestral strings, soulful powerful female voice, deep reverb, dramatic build to climax, heartfelt and raw, warm analog production, 60-75 BPM" },
  { name: "Ed Sheeran", genres: ["Pop", "Folk Pop", "Acoustic"], prompt: "acoustic pop, fingerpicked guitar, warm intimate male vocals, loop pedal layering, folk-pop melody, heartfelt lyrics, minimal production building to full arrangement, bright and uplifting, 95-110 BPM" },
  { name: "Lady Gaga", genres: ["Pop", "Dance Pop", "Art Pop"], prompt: "theatrical dance pop, powerful belting female vocals, heavy synth production, dramatic arrangement, bold and eccentric, driving four-on-the-floor beat, anthemic chorus, electronic textures, 120-130 BPM" },
  { name: "Harry Styles", genres: ["Pop", "Rock", "Soft Rock"], prompt: "70s-inspired soft rock pop, jangly guitars, warm male vocals, retro production, acoustic and electric guitar layers, breezy and nostalgic, classic rock influences, melodic bass, 100-115 BPM" },
  { name: "Lana Del Rey", genres: ["Art Pop", "Dream Pop", "Baroque Pop"], prompt: "dreamy cinematic pop, lush orchestral arrangements, breathy melancholic female vocals, vintage reverb, nostalgic Americana, slow and hypnotic, film noir atmosphere, strings and piano, 70-90 BPM" },
  { name: "Ariana Grande", genres: ["Pop", "R&B", "Dance Pop"], prompt: "sleek R&B-influenced pop, airy high-register female vocals, trap-influenced beats, lush harmonies, whistle tones, polished modern production, catchy melodic runs, synth pads, 100-120 BPM" },
  { name: "Post Malone", genres: ["Pop", "Hip Hop", "Rock"], prompt: "genre-blending melodic pop with hip hop and rock elements, autotuned male vocals, acoustic guitar mixed with trap beats, melancholic yet catchy, reverb-heavy vocals, emotional hooks, 80-100 BPM" },
  { name: "SZA", genres: ["R&B", "Neo-Soul", "Alternative R&B"], prompt: "alternative R&B, dreamy layered production, vulnerable breathy female vocals, jazz-influenced chords, lo-fi textures, atmospheric pads, introspective and emotional, neo-soul harmonies, 75-95 BPM" },
  { name: "Michael Jackson", genres: ["Pop", "Funk", "Disco"], prompt: "iconic pop funk, tight rhythmic grooves, dynamic male vocals with hiccups and ad-libs, punchy bass, crisp snare, brass stabs, disco-funk energy, call-and-response vocal layers, 110-125 BPM" },
  { name: "Madonna", genres: ["Pop", "Dance Pop", "Electropop"], prompt: "dance pop with electronic textures, confident female vocals, pulsing synth bass, drum machine beats, provocative energy, catchy hooks, disco and house influences, polished 80s-inspired production, 115-130 BPM" },

  // Rock
  { name: "Queen", genres: ["Rock", "Progressive Rock", "Glam Rock"], prompt: "epic theatrical rock, operatic multi-layered vocal harmonies, powerful male vocals, heavy electric guitar, dramatic piano, orchestral grandeur, dynamic shifts from soft to bombastic, anthemic chorus, 110-130 BPM" },
  { name: "Nirvana", genres: ["Grunge", "Alternative Rock"], prompt: "raw grunge rock, heavy distorted guitars, aggressive dynamic shifts from quiet to loud, raspy male vocals, punchy drums, gritty bass, angsty and rebellious energy, lo-fi garage feel, 120-160 BPM" },
  { name: "Radiohead", genres: ["Alternative Rock", "Art Rock", "Electronic"], prompt: "experimental art rock, atmospheric electronic textures, haunting falsetto male vocals, unconventional song structures, ambient guitar soundscapes, complex rhythms, melancholic and cerebral, layered production, 80-120 BPM" },
  { name: "Arctic Monkeys", genres: ["Indie Rock", "Garage Rock"], prompt: "indie rock with swagger, sharp witty vocal delivery, jangly guitars, driving drums, British rock attitude, punchy bass, garage rock energy mixed with lounge sophistication, 120-140 BPM" },
  { name: "Led Zeppelin", genres: ["Hard Rock", "Blues Rock"], prompt: "heavy blues rock, powerful wailing male vocals, iconic electric guitar riffs, thunderous drums, dynamic range from acoustic folk to heavy distortion, epic extended arrangements, raw analog production, 80-140 BPM" },
  { name: "Pink Floyd", genres: ["Progressive Rock", "Psychedelic Rock"], prompt: "atmospheric progressive rock, spacious ambient soundscapes, smooth contemplative male vocals, long instrumental passages, ethereal guitar with delay and reverb, philosophical mood, slow build, 70-100 BPM" },
  { name: "Foo Fighters", genres: ["Alternative Rock", "Post-Grunge"], prompt: "high-energy alternative rock, powerful driving guitars, anthemic male vocals, loud dynamic drums, melodic hooks with heavy distortion, stadium-rock energy, raw and passionate, 130-160 BPM" },
  { name: "Tame Impala", genres: ["Psychedelic Rock", "Synth Pop"], prompt: "psychedelic synth rock, swirling phaser and reverb effects, dreamy male vocals, analog synth textures, groovy bass, hypnotic repetitive patterns, lo-fi warmth with modern production, 90-110 BPM" },
  { name: "Red Hot Chili Peppers", genres: ["Funk Rock", "Alternative Rock"], prompt: "funk rock fusion, slap bass grooves, funky rhythmic guitar, energetic male vocals with rap-like delivery, dynamic drums, California vibe, melodic chorus with funky verses, 100-120 BPM" },
  { name: "Metallica", genres: ["Heavy Metal", "Thrash Metal"], prompt: "aggressive thrash metal, fast palm-muted guitar riffs, double bass drum, powerful gravelly male vocals, heavy distortion, complex song structures, epic guitar solos, intense and relentless energy, 140-200 BPM" },
  { name: "AC/DC", genres: ["Hard Rock"], prompt: "straight-ahead hard rock, chunky power chord riffs, driving rhythm guitar, raspy high-pitched male vocals, punchy drums, boogie rock groove, raw and energetic, no-frills production, 120-140 BPM" },

  // Hip Hop / Rap
  { name: "Kendrick Lamar", genres: ["Hip Hop", "Conscious Rap"], prompt: "complex lyrical hip hop, jazzy samples, dynamic flow changes, intense male vocal delivery, live instrumentation mixed with beats, funk and soul influences, conceptual and layered, 80-95 BPM" },
  { name: "Drake", genres: ["Hip Hop", "R&B", "Pop Rap"], prompt: "melodic hip hop R&B, atmospheric OVO-style production, smooth singing and rapping male vocals, 808 bass, ambient pads, emotional introspective mood, catchy hooks, spacious mix, 75-95 BPM" },
  { name: "Kanye West", genres: ["Hip Hop", "Experimental Hip Hop"], prompt: "experimental hip hop, soul samples chopped and pitched, maximalist production, bold male vocal delivery, orchestral elements, genre-bending from gospel to industrial, innovative arrangements, 85-100 BPM" },
  { name: "Travis Scott", genres: ["Hip Hop", "Trap", "Psychedelic Rap"], prompt: "dark psychedelic trap, heavy autotuned male vocals, booming 808 bass, ambient reverb-drenched production, ad-lib layers, spacey synths, distorted textures, moody atmospheric, 75-85 BPM" },
  { name: "J. Cole", genres: ["Hip Hop", "Conscious Rap"], prompt: "soulful boom-bap influenced hip hop, smooth male vocals, jazz piano samples, mellow drums, introspective storytelling, warm analog production, melodic hooks, conscious and reflective, 85-95 BPM" },
  { name: "Tyler, The Creator", genres: ["Hip Hop", "Neo-Soul", "Jazz Rap"], prompt: "eclectic jazz-infused hip hop, lush synth chords, playful bass grooves, unique male vocal delivery from deep to high pitch, retro soul influences, colorful and experimental production, 90-110 BPM" },
  { name: "Eminem", genres: ["Hip Hop", "Rap"], prompt: "intense lyrical rap, rapid-fire vocal delivery, aggressive male vocals, heavy bass, dramatic orchestral samples, dark and raw energy, complex rhyme schemes, punchy drums, 100-140 BPM" },
  { name: "Nicki Minaj", genres: ["Hip Hop", "Pop Rap"], prompt: "bold energetic rap pop, dynamic female vocal delivery with multiple personas, heavy bass, colorful synth production, danceable beats, playful and fierce, catchy hooks, 100-130 BPM" },
  { name: "Jay-Z", genres: ["Hip Hop", "East Coast Rap"], prompt: "sophisticated East Coast hip hop, soul and jazz samples, smooth confident male flow, boom-bap drums, orchestral flourishes, polished production, commanding vocal presence, 90-100 BPM" },

  // R&B / Soul
  { name: "Frank Ocean", genres: ["R&B", "Alternative R&B", "Art Pop"], prompt: "avant-garde R&B, minimalist production, vulnerable intimate male vocals, ambient textures, unconventional song structures, dreamy synth pads, introspective and emotional, lo-fi elements, 70-90 BPM" },
  { name: "Beyoncé", genres: ["R&B", "Pop", "Dance"], prompt: "powerful R&B pop, commanding dynamic female vocals, polished production, layered harmonies, driving rhythms, mix of electronic and live instruments, empowering energy, genre-blending, 95-120 BPM" },
  { name: "Daniel Caesar", genres: ["R&B", "Neo-Soul", "Gospel"], prompt: "warm neo-soul R&B, gentle male vocals, lush chord progressions, gospel-influenced harmonies, intimate acoustic guitar, soft Rhodes piano, romantic and tender, smooth production, 70-85 BPM" },
  { name: "H.E.R.", genres: ["R&B", "Neo-Soul"], prompt: "smooth contemporary R&B, soulful female vocals, jazzy guitar chords, warm bass, lo-fi drum patterns, intimate and romantic, vintage warmth with modern edge, layered vocal harmonies, 75-90 BPM" },
  { name: "Stevie Wonder", genres: ["Soul", "Funk", "R&B"], prompt: "classic soul funk, virtuoso harmonica, joyful male vocals, clavinet and Rhodes piano, groovy bass, rich horn arrangements, uplifting and warm, analog vintage production, 100-120 BPM" },
  { name: "Amy Winehouse", genres: ["Soul", "Jazz", "R&B"], prompt: "retro soul jazz, raw powerful female vocals with British accent, upright bass, classic jazz drums, vintage horn section, 60s girl-group influences, emotional and gritty, analog warmth, 90-110 BPM" },

  // Electronic / Dance
  { name: "Daft Punk", genres: ["Electronic", "House", "Disco"], prompt: "French house electronic, vocoder and talk box vocals, funky filtered disco samples, four-on-the-floor beat, groovy bass, analog synths, robotic yet soulful, retro-futuristic, 115-125 BPM" },
  { name: "Skrillex", genres: ["Dubstep", "Electronic", "EDM"], prompt: "aggressive dubstep EDM, massive bass drops, glitchy synths, wobble bass, intense build-ups, distorted electronic textures, chaotic energy, hard-hitting drums, 140-150 BPM" },
  { name: "Calvin Harris", genres: ["EDM", "House", "Dance Pop"], prompt: "uplifting dance pop, catchy synth hooks, four-on-the-floor kick, euphoric build and drop, bright male/female vocal chops, tropical and house influences, festival energy, 125-130 BPM" },
  { name: "Deadmau5", genres: ["Progressive House", "Electro House"], prompt: "progressive electro house, evolving synth arpeggios, deep bass, long atmospheric builds, minimal vocals, hypnotic repetitive patterns, dark and mechanical, precise electronic production, 125-130 BPM" },
  { name: "Flume", genres: ["Electronic", "Future Bass"], prompt: "experimental future bass, glitchy textured production, pitched vocal samples, unconventional sound design, organic meets electronic, heavy sub-bass, colorful and unpredictable, 75-90 BPM half-time feel" },
  { name: "Aphex Twin", genres: ["IDM", "Ambient", "Electronic"], prompt: "experimental IDM, complex glitchy drum patterns, ethereal ambient pads, detuned synths, unpredictable arrangements, eerie and beautiful, acid bass, intricate sound design, 80-140 BPM" },
  { name: "Disclosure", genres: ["UK Garage", "House", "Deep House"], prompt: "UK garage-influenced deep house, choppy vocal samples, two-step rhythms, warm sub-bass, bright synth stabs, soulful R&B vocal features, groovy and polished, 120-130 BPM" },

  // Jazz
  { name: "Miles Davis", genres: ["Jazz", "Fusion", "Cool Jazz"], prompt: "cool modal jazz, muted trumpet with reverb, spacious arrangements, walking bass, brushed drums, minimalist and contemplative, blue notes, atmospheric and smoky, free-flowing tempo" },
  { name: "John Coltrane", genres: ["Jazz", "Free Jazz", "Hard Bop"], prompt: "intense spiritual jazz, soaring saxophone improvisations, modal explorations, driving upright bass, dynamic drums, complex chord changes, transcendent energy, 140-200 BPM" },
  { name: "Norah Jones", genres: ["Jazz", "Vocal Jazz", "Pop"], prompt: "intimate vocal jazz pop, warm breathy female vocals, mellow piano, soft brushed drums, gentle bass, cozy late-night atmosphere, bluesy undertones, relaxed and soothing, 75-90 BPM" },
  { name: "Kamasi Washington", genres: ["Jazz", "Spiritual Jazz"], prompt: "epic spiritual jazz, lush orchestral strings, powerful saxophone, choir vocals, cosmic and cinematic, African rhythms, dense layered arrangements, transcendent and uplifting, 90-120 BPM" },

  // Latin
  { name: "Bad Bunny", genres: ["Reggaeton", "Latin Trap", "Latin Pop"], prompt: "modern reggaeton Latin trap, dembow rhythm, deep 808 bass, autotuned male vocals, Caribbean percussion, danceable and hypnotic, urban Latin energy, minimal melodic hooks, 85-95 BPM" },
  { name: "Rosalía", genres: ["Flamenco Pop", "Latin", "Experimental"], prompt: "experimental flamenco-infused pop, handclaps and flamenco palmas, powerful female vocals with melisma, electronic production, 808 bass meets Spanish guitar, avant-garde Latin, 80-100 BPM" },
  { name: "J Balvin", genres: ["Reggaeton", "Latin Pop"], prompt: "colorful reggaeton pop, catchy dembow beat, bright synths, smooth male vocal flow, danceable Latin rhythm, urban Caribbean vibe, minimalist production with punchy bass, 95-100 BPM" },
  { name: "Shakira", genres: ["Latin Pop", "Pop", "Dance"], prompt: "energetic Latin pop, Middle Eastern-influenced melodies, dynamic female vocals, mix of electronic and acoustic production, belly-dance rhythms, global pop fusion, 100-115 BPM" },

  // Brazilian
  { name: "Tom Jobim", genres: ["Bossa Nova", "MPB"], prompt: "classic bossa nova, gentle nylon guitar, soft jazzy piano, warm male vocal, subtle brushed percussion, sophisticated jazz harmonies, Rio de Janeiro atmosphere, relaxed and elegant, 110-130 BPM bossa rhythm" },
  { name: "Caetano Veloso", genres: ["MPB", "Tropicália"], prompt: "tropicália MPB, eclectic mix of Brazilian folk and psychedelic rock, gentle poetic male vocals, acoustic guitar, orchestral arrangements, avant-garde yet melodic, warm and intellectual, 90-110 BPM" },
  { name: "Gilberto Gil", genres: ["MPB", "Tropicália", "Reggae"], prompt: "afro-Brazilian MPB fusion, rhythmic acoustic guitar, warm male vocals, percussion-heavy, African-influenced grooves, reggae and funk elements, joyful and earthy, organic production, 95-115 BPM" },
  { name: "Elis Regina", genres: ["MPB", "Bossa Nova", "Jazz"], prompt: "powerful Brazilian MPB, emotionally intense female vocals, dynamic range from whisper to belting, jazzy orchestral arrangements, bossa nova undertones, dramatic and passionate, 100-120 BPM" },
  { name: "Jorge Ben Jor", genres: ["Samba Rock", "MPB", "Funk"], prompt: "samba rock funk fusion, rhythmic strumming guitar, groovy bass, joyful male vocals, samba percussion, funky Brazilian groove, infectious party energy, organic analog sound, 110-125 BPM" },
  { name: "Marisa Monte", genres: ["MPB", "Pop"], prompt: "elegant Brazilian pop MPB, crystalline female vocals, acoustic guitar, subtle orchestral textures, sophisticated harmonies, intimate yet lush production, romantic and refined, 85-105 BPM" },
  { name: "Tim Maia", genres: ["Soul", "Funk", "MPB"], prompt: "Brazilian soul funk, powerful raspy male vocals, groovy bass, funky rhythm guitar, brass section, disco and soul influences, warm analog production, party energy, 100-120 BPM" },
  { name: "Anitta", genres: ["Pop", "Reggaeton", "Funk Carioca"], prompt: "Brazilian pop funk, baile funk beat, heavy bass, confident female vocals, danceable Latin rhythm, tropical production, reggaeton and pop fusion, urban party energy, 95-130 BPM" },
  { name: "Seu Jorge", genres: ["MPB", "Pop", "Samba"], prompt: "laid-back Brazilian pop, warm intimate male vocals, acoustic guitar, gentle samba groove, bossa nova influences, relaxed and romantic, organic minimal production, 90-110 BPM" },
  { name: "Djavan", genres: ["MPB", "Jazz", "Pop"], prompt: "sophisticated MPB jazz fusion, silky smooth male vocals, complex jazz harmonies, nylon guitar, gentle grooves, Brazilian rhythms with jazz sophistication, warm and sensual, 90-110 BPM" },

  // Country / Folk
  { name: "Johnny Cash", genres: ["Country", "Folk"], prompt: "classic country, deep resonant male vocals, acoustic guitar boom-chicka-boom rhythm, minimal arrangement, storytelling delivery, raw and honest, vintage analog warmth, train-beat rhythm, 100-120 BPM" },
  { name: "Dolly Parton", genres: ["Country", "Bluegrass"], prompt: "classic country, bright twangy female vocals, acoustic guitar, banjo, fiddle, steel guitar, Appalachian influences, heartfelt storytelling, warm and cheerful, traditional country production, 100-120 BPM" },
  { name: "Bon Iver", genres: ["Indie Folk", "Experimental"], prompt: "ethereal indie folk, layered falsetto male vocals, ambient textures, acoustic guitar, subtle electronic processing, autotune as artistic effect, atmospheric and intimate, winter mood, 80-100 BPM" },
  { name: "Fleet Foxes", genres: ["Indie Folk", "Baroque Pop"], prompt: "lush baroque folk, rich multi-part vocal harmonies, acoustic guitar fingerpicking, pastoral and expansive, reverb-heavy, chamber folk instrumentation, warm and majestic, 90-110 BPM" },

  // Afrobeats / African
  { name: "Burna Boy", genres: ["Afrobeats", "Afro-Fusion"], prompt: "afrobeats fusion, danceable African percussion, melodic male vocals, reggae and dancehall influences, groovy bass, log drum patterns, Afro-Caribbean groove, warm and energetic, 100-115 BPM" },
  { name: "Wizkid", genres: ["Afrobeats", "Afropop"], prompt: "smooth Afropop, gentle male vocals, shaku shaku beat, minimal production, tropical synths, danceable African rhythm, laid-back and infectious, Caribbean-influenced, 100-110 BPM" },
  { name: "Fela Kuti", genres: ["Afrobeat", "Funk", "Jazz"], prompt: "classic Afrobeat, polyrhythmic percussion, call-and-response vocals, horn section, funky guitar, extended groove, hypnotic repetitive patterns, political energy, jazz influences, 110-130 BPM" },

  // K-Pop / Asian
  { name: "BTS", genres: ["K-Pop", "Pop", "Hip Hop"], prompt: "polished K-pop, dynamic arrangement mixing rap and singing, powerful choreography-driven beat, synth-heavy production, male vocal group harmonies, EDM drops, emotional bridges, 100-130 BPM" },
  { name: "BLACKPINK", genres: ["K-Pop", "EDM", "Pop"], prompt: "fierce K-pop, heavy trap-influenced beats, powerful female vocal group, EDM drops, sleek modern production, alternating rap and vocal sections, high-energy and bold, 100-130 BPM" },

  // Reggae
  { name: "Bob Marley", genres: ["Reggae", "Roots Reggae"], prompt: "roots reggae, offbeat skank guitar, deep warm bass, one-drop drum rhythm, organ bubbling, soulful male vocals, peaceful and spiritual, sun-drenched island feel, 70-80 BPM" },

  // Classical / Soundtrack
  { name: "Hans Zimmer", genres: ["Cinematic", "Film Score"], prompt: "epic cinematic orchestral, massive brass and strings, pulsing rhythmic ostinato, electronic hybrid elements, dramatic tension builds, BRAAAM bass hits, heroic and emotional, wide dynamic range" },
  { name: "Ludovico Einaudi", genres: ["Classical", "Minimalist"], prompt: "minimalist neoclassical piano, gentle repeating arpeggios, emotional sparse melody, subtle string accompaniment, meditative and contemplative, gradually building layers, intimate and beautiful, 60-80 BPM" },
  { name: "Ennio Morricone", genres: ["Film Score", "Cinematic"], prompt: "cinematic western film score, haunting whistling melody, twangy electric guitar, orchestral swells, dramatic choir, tension and beauty, iconic trumpet, atmospheric and epic" },
];

export function searchArtists(query: string): ArtistProfile[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return artists.filter(
    (a) =>
      a.name.toLowerCase().includes(q) ||
      a.genres.some((g) => g.toLowerCase().includes(q))
  );
}

export function getArtistByName(name: string): ArtistProfile | undefined {
  return artists.find((a) => a.name.toLowerCase() === name.toLowerCase());
}

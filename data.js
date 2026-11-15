// ===== EDIT THIS FILE to change text, links, cards and drop rates =====

const CARDS_PER_PACK = 1;  // cards in each pack
const PACK_MINUTES = 0.05;   // minutes between free packs
const MAX_PACKS = 3;      // most packs a player can store while away
const START_PACKS = 2;     // packs new players start with

const SITE = {
  title: "Goldenfyre GDPS Gacha",
  version: "v1.5",
  tagline: "Goldenfyre101 GDPS Card Gacha.",
  intro: `Open a free pack of ${CARDS_PER_PACK} cards every ${PACK_MINUTES} minutes and collect the whole list.`,
  discord: "https://discord.gg/hrqhEVANkA",
  submit: "https://forms.gle/gpsMMFevEw5PEoaE9",
  demonlist: "https://goldenfyre-gdps-demonlist.quacc.workers.dev/#/",
  cardsPerPack: CARDS_PER_PACK,
  packMinutes: PACK_MINUTES,
  maxPacks: MAX_PACKS,
  startPacks: START_PACKS,
  disclaimer: "Unofficial fan-made project, not affiliated with RobTop Games or Geometry Dash. Level ranks follow the Goldenfyre GDPS Demonlist.",
  rules: [
    `You get a free pack of ${CARDS_PER_PACK} cards every ${PACK_MINUTES} minutes.`,
    `Packs stack up while you are away, up to ${MAX_PACKS}. New players start with ${START_PACKS}.`,
    "Rarity depends on a level's rank on the list. Exotic cards are special extras that are not on the list. See the drop rates below.",
    "Duplicates stack and show a count on the card.",
    "Your packs and cards are saved in this browser only. Clearing site data resets them.",
    "Cards have no real-world value and nothing here costs real money."
  ],
  privacy: "This site stores your packs and collection in your browser's local storage. Nothing is sent to a server. Edit this text in data.js.",
  terms: "This is a fan-made game for fun. It comes as is, with no guarantees. Edit this text in data.js."
};

// Rarity is decided by list rank. A card's rank = its position in CARDS below.
// maxRank = the lowest-ranked card that still counts as this rarity (keep them in increasing order).
// weight is written as 1 / N, meaning "1 in N" pulls give this rarity (any card of it).
// Change the N to change the odds. Common is the leftover, so it fills in by itself below.
// Exotic is special: maxRank 0 means no ranked card gets it. Only cards with rarity: "Exotic" do.
const RARITIES = [
  { name: "Exotic",       maxRank: 0,        weight: 1 / 1000000, color: "#ff3344" },
  { name: "Transcendent", maxRank: 1,        weight: 1 / 100000,  color: "#ffe14d" },
  { name: "MYTHICAL",     maxRank: 5,        weight: 1 / 25500,   color: "#ff5fa8" },
  { name: "Legendary",    maxRank: 10,       weight: 1 / 3750,    color: "#ff9a1f" },
  { name: "Epic",         maxRank: 20,       weight: 1 / 33,      color: "#9b5de5" },
  { name: "Rare",         maxRank: 30,       weight: 1 / 8,       color: "#3a8dde" },
  { name: "Uncommon",     maxRank: 55,       weight: 1 / 4,       color: "#4cc36b" },
  { name: "Common",       maxRank: Infinity, weight: 0,           color: "#a8998a" }
];
// Common gets whatever chance is left over (about 1 in 1.7).
RARITIES[RARITIES.length - 1].weight = Math.max(0.01, 1 - RARITIES.slice(0, -1).reduce((sum, r) => sum + r.weight, 0));

// Cards in list order (first = rank 1). Rarity is set automatically from the rank.
// Fill in publisher, verifier, description, image and video whenever you like. Leave "" to keep the blank or placeholder.
// image: a file name like "abyss.png" | video: a YouTube embed link like "https://www.youtube.com/embed/VIDEO_ID"
// Exotic cards go at the very END and have rarity: "Exotic". They are not ranked.
const CARDS = [
  // Transcendent (rank 1)
  { name: "The Abyss", publisher: "Gamer862", verifier: "Gamer862", description: "The Abyss holds the spot as the hardest level in the Goldenfyre GDPS, pushing players to their absolute limits with some of the most brutal gameplay on the server. Built and verified by Gamer862, the level skips heavy decoration in favor of being mostly a raw layout with just a few subtle effects in the background to set the mood. What really makes it notorious is the very first click, which is a strict 240fps frame-perfect that ends most attempts before they even really begin. Because there is no flashy deco to distract you, all the focus is on pure skill and precision, making it a huge achievement for anyone who actually manages to beat it.", image: "", video: "" },
  // MYTHICAL (ranks 2-5)
  { name: "Planum Astrale", publisher: "Ke2", verifier: "Gamer862", description: "", image: "", video: "" },
  { name: "HAIL TO THE THIEF", publisher: "beeguy", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "Sakupenhouse", publisher: "Syne", verifier: "Emmber", description: "", image: "", video: "" },
  { name: "Sixx Sevvend", publisher: "Syne", verifier: "Emmber", description: "", image: "", video: "" },
  // Legendary (ranks 6-10)
  { name: "Heatwave", publisher: "Quacc", verifier: "miokii", description: "", image: "", video: "" },
  { name: "No Cure", publisher: "Nange", verifier: "Nange", description: "", image: "", video: "" },
  { name: "rare animal", publisher: "beeguy", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "Goldenfyre Challenge", publisher: "Nange", verifier: "Nange", description: "", image: "", video: "" },
  { name: "Going Home", publisher: "Firelia", verifier: "Firelia", description: "", image: "", video: "" },
  // Epic (ranks 11-20)
  { name: "Gilt Chin", publisher: "Firelia", verifier: "Firelia", description: "", image: "", video: "" },
  { name: "GLEAMING", publisher: "EpikGuy", verifier: "EpikGuy", description: "", image: "", video: "" },
  { name: "Octane", publisher: "Emmber", verifier: "Emmber", description: "", image: "", video: "" },
  { name: "Gate", publisher: "Firelia", verifier: "Firelia", description: "", image: "", video: "" },
  { name: "The Super Catguy", publisher: "beeguy", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "EGG NEVER CLEAR RE", publisher: "EpikGuy", verifier: "Gamer862", description: "", image: "", video: "" },
  { name: "Pyrarrmaniac", publisher: "Nange", verifier: "Nange", description: "", image: "", video: "" },
  { name: "BRIGHTNESS", publisher: "EpikGuy", verifier: "Gamer862", description: "", image: "", video: "" },
  { name: "MIOKII ALWAYS CLEAR", publisher: "3Doffisa", verifier: "3Doffisa", description: "", image: "", video: "" },
  { name: "The City Of Battle", publisher: "Xc4pk", verifier: "Xc4pk", description: "", image: "", video: "" },
  // Rare (ranks 21-30)
  { name: "Petal", publisher: "beeguy", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "Plasma Pulse X", publisher: "Firelia", verifier: "Firelia", description: "", image: "", video: "" },
  { name: "Say So", publisher: "pure", verifier: "GDNOBRAIN", description: "", image: "", video: "" },
  { name: "PolarBear", publisher: "Firelia", verifier: "Firelia", description: "", image: "", video: "" },
  { name: "Doodle Rush", publisher: "beeguy", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "Limbotism", publisher: "Unnatural", verifier: "Natural", description: "", image: "", video: "" },
  { name: "Cloth Of Roses", publisher: "Electrow", verifier: "Electrow", description: "", image: "", video: "" },
  { name: "colon three circles", publisher: "Cheese", verifier: "Cheese", description: "", image: "", video: "" },
  { name: "Blossom Sea", publisher: "Firelia", verifier: "Firelia", description: "", image: "", video: "" },
  { name: "Jump For Me", publisher: "Xc4pk", verifier: "Xc4pk", description: "", image: "", video: "" },
  // Uncommon (ranks 31-55)
  { name: "Octagon Force", publisher: "JPCPro", verifier: "JPCPro", description: "", image: "", video: "" },
  { name: "Interstellrarr", publisher: "Syne", verifier: "geo", description: "", image: "", video: "" },
  { name: "Caesium Factorial 3", publisher: "JPCPro", verifier: "JPCPro", description: "", image: "", video: "" },
  { name: "Synetosign Leashed", publisher: "Alya", verifier: "Alya", description: "", image: "", video: "" },
  { name: "Caesium Factorial 1", publisher: "JPCPro", verifier: "JPCPro", description: "", image: "", video: "" },
  { name: "In Its Right Place", publisher: "beeguy", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "CUBED", publisher: "JPCPro", verifier: "JPCPro", description: "", image: "", video: "" },
  { name: "XENOSCAPE", publisher: "hortus", verifier: "Moss", description: "XENOSCAPE has earned its legendary status in the GDPS as a massive, one-of-a-kind demon that completely stands out from the rest of the server's roster. Hosted by the Hortus Discord server, this huge megacollab brought together 11 different creators to build an effect layout that feels way more alive and creative than your average raw layout. Instead of just relying on generic block designs or standard demon tropes, the creators packed it with unique visual tricks and clever gameplay transitions that make every part feel fresh. Between its distinct atmosphere and the sheer amount of teamwork that went into it, XENOSCAPE is easily one of the most memorable and creative levels the community has put together.", image: "", video: "" },
  { name: "planetrarrium", publisher: "Luna", verifier: "Nange", description: "", image: "", video: "" },
  { name: "Tormented Sentience", publisher: "Goldenfyre101", verifier: "Goldenfyre101", description: "", image: "", video: "" },
  { name: "Stroll", publisher: "Nange", verifier: "Nange", description: "", image: "", video: "" },
  { name: "Every End Leashed", publisher: "Syne", verifier: "Emmber", description: "", image: "", video: "" },
  { name: "Save Me", publisher: "Electrow", verifier: "Electrow", description: "", image: "", video: "" },
  { name: "GLORINESS", publisher: "EpikGuy", verifier: "EpikGuy", description: "", image: "", video: "" },
  { name: "lancer deltarune", publisher: "beeguy", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "Deadmans Handle", publisher: "Luna", verifier: "Goldenfyre101", description: "", image: "", video: "" },
  { name: "Aurora", publisher: "Emmber", verifier: "Emmber", description: "", image: "", video: "" },
  { name: "My Meat", publisher: "Gamer862", verifier: "Gamer862", description: "", image: "", video: "" },
  { name: "Firewall", publisher: "Syne", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "Sonicbreaker", publisher: "Hyperfixation66", verifier: "AltifyNeverDies", description: "", image: "", video: "" },
  { name: "Deep End", publisher: "Electrow", verifier: "Electrow", description: "", image: "", video: "" },
  { name: "Dancing Until I Fall", publisher: "beeguy", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "Alti Adventures", publisher: "AltifyNeverDies", verifier: "AltifyNeverDies", description: "", image: "", video: "" },
  { name: "Blank Planet", publisher: "RecorderChannel2", verifier: "Nange", description: "", image: "", video: "" },
  { name: "limbo but rarr ig", publisher: "Luna", verifier: "Luna", description: "", image: "", video: "" },
  // Common (ranks 56-90)
  { name: "Processed Machine", publisher: "spec", verifier: "spec", description: "", image: "", video: "" },
  { name: "Stalemate", publisher: "GooeyG", verifier: "Emmber", description: "", image: "", video: "" },
  { name: "Budgetscapes", publisher: "beeguy", verifier: "Nange", description: "", image: "", video: "" },
  { name: "No Surprises", publisher: "EpikGuy", verifier: "Gamer862", description: "", image: "", video: "" },
  { name: "Stratus", publisher: "AltifyNeverDies", verifier: "AltifyNeverDies", description: "", image: "", video: "" },
  { name: "growing on me", publisher: "qwerty2048", verifier: "qwerty2048", description: "", image: "", video: "" },
  { name: "Genesis", publisher: "AltifyNeverDies", verifier: "Xc4pk", description: "", image: "", video: "" },
  { name: "Only You", publisher: "Electrow", verifier: "Electrow", description: "", image: "", video: "" },
  { name: "SHINING", publisher: "EpikGuy", verifier: "EpikGuy", description: "", image: "", video: "" },
  { name: "Caesium Factorial 2", publisher: "JPCPro", verifier: "JPCPro", description: "", image: "", video: "" },
  { name: "ViPriN Spider", publisher: "AltifyNeverDies", verifier: "Nange", description: "", image: "", video: "" },
  { name: "Cries For The Lonely", publisher: "Alya", verifier: "Alya", description: "", image: "", video: "" },
  { name: "Duality", publisher: "Unnatural", verifier: "Unnatural", description: "", image: "", video: "" },
  { name: "Bananas", publisher: "Nange", verifier: "Nange", description: "", image: "", video: "" },
  { name: "Paparazzi", publisher: "Electrow", verifier: "Electrow", description: "", image: "", video: "" },
  { name: "Fast Travel", publisher: "Kimichii", verifier: "Kimichii", description: "", image: "", video: "" },
  { name: "the killer", publisher: "beeguy", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "Tung Wave Trials", publisher: "Syne", verifier: "miokii", description: "", image: "", video: "" },
  { name: "Return End", publisher: "Absoluteinf1", verifier: "Absoluteinf1", description: "", image: "", video: "" },
  { name: "Happy Birthday Goldie", publisher: "Quacc", verifier: "Quacc", description: "", image: "", video: "" },
  { name: "1 Up", publisher: "Absoluteinf1", verifier: "Absoluteinf1", description: "", image: "", video: "" },
  { name: "Disco Dance", publisher: "Xc4pk", verifier: "Xc4pk", description: "", image: "", video: "" },
  { name: "Chess", publisher: "3Doffisa", verifier: "3Doffisa", description: "", image: "", video: "" },
  { name: "Kinetic Disorption", publisher: "Goldenfyre101", verifier: "Kimichii", description: "", image: "", video: "" },
  { name: "TO be complete", publisher: "beeguy", verifier: "beeguy", description: "", image: "", video: "" },
  { name: "The Golden", publisher: "Alya", verifier: "Alya", description: "", image: "", video: "" },
  { name: "Chaos Construct", publisher: "xxLettucex", verifier: "xxLettucex", description: "", image: "", video: "" },
  { name: "Future Circles", publisher: "Hyperfixation66", verifier: "Hyperfixation66", description: "", image: "", video: "" },
  { name: "Cut You Off", publisher: "Quacc", verifier: "Quacc", description: "", image: "", video: "" },
  { name: "Moonship Welters", publisher: "Goldenfyre101", verifier: "Goldenfyre101", description: "", image: "", video: "" },
  { name: "LARP", publisher: "spec", verifier: "spec", description: "", image: "", video: "" },
  { name: "Thumper", publisher: "Syne", verifier: "Syne", description: "", image: "", video: "" },
  { name: "Darkness", publisher: "Electrow", verifier: "Nange", description: "", image: "", video: "" },
  { name: "Radiation Wave", publisher: "WIZARD", verifier: "WIZARD", description: "", image: "", video: "" },
  { name: "Runaway", publisher: "Electrow", verifier: "Nange", description: "", image: "", video: "https://youtu.be/N-tuyZM9TXA?si=j6hOKdekZAjwEwQL" },
  // Exotic (not ranked)
  { name: "Penguin", publisher: "Firelia", verifier: "???", description: "", image: "", video: "", rarity: "Exotic" },
  { name: "Polterghast", publisher: "iciicle202", verifier: "???", description: "", image: "", video: "", rarity: "Exotic" }
];

// ===== EDIT THIS FILE to change text, links, cards and drop rates =====

const CARDS_PER_PACK = 1;  // cards in each pack
const PACK_MINUTES = 10;   // minutes between free packs
const MAX_PACKS = 3;      // most packs a player can store while away
const START_PACKS = 2;     // packs new players start with

const SITE = {
  title: "Goldenfyre GDPS Gacha",
  version: "v1.5",
  tagline: "Pull the demons of Goldenfyre.",
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
// weight = how likely a pull is this rarity (weights are relative; these add up to 1,000,000).
// Exotic is special: maxRank 0 means no ranked card gets it. Only cards with rarity: "Exotic" do.
const RARITIES = [
  { name: "Exotic",       maxRank: 0,        weight: 1,      color: "#ff3344" },
  { name: "Transcendent", maxRank: 1,        weight: 2,      color: "#ffe14d" },
  { name: "MYTHICAL",     maxRank: 5,        weight: 20,     color: "#ff5fa8" },
  { name: "Legendary",    maxRank: 10,       weight: 5000,   color: "#ff9a1f" },
  { name: "Epic",         maxRank: 20,       weight: 30000,  color: "#9b5de5" },
  { name: "Rare",         maxRank: 30,       weight: 120000, color: "#3a8dde" },
  { name: "Uncommon",     maxRank: 55,       weight: 250000, color: "#4cc36b" },
  { name: "Common",       maxRank: Infinity, weight: 594977, color: "#a8998a" }
];

// Cards in list order (first = rank 1). Rarity is set automatically from the rank.
// Fill in publisher, verifier, description, image and video whenever you like. Leave "" to keep the blank or placeholder.
// image: a file name like "abyss.png" | video: a YouTube embed link like "https://www.youtube.com/embed/VIDEO_ID"
// Exotic cards go at the very END and have rarity: "Exotic". They are not ranked.
const CARDS = [
  // Transcendent (rank 1)
  { name: "The Abyss", publisher: "", verifier: "", description: "", image: "", video: "" },
  // MYTHICAL (ranks 2-5)
  { name: "Planum Astrale", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "HAIL TO THE THIEF", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Sakupenhouse", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Sixx Sevvend", publisher: "", verifier: "", description: "", image: "", video: "" },
  // Legendary (ranks 6-10)
  { name: "Heatwave", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "No Cure", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "rare animal", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Goldenfyre Challenge", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Going Home", publisher: "", verifier: "", description: "", image: "", video: "" },
  // Epic (ranks 11-20)
  { name: "Gilt Chin", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "GLEAMING", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Octane", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Gate", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "The Super Catguy", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "EGG NEVER CLEAR RE", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Pyrarrmaniac", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "BRIGHTNESS", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "MIOKII ALWAYS CLEAR", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "The City Of Battle", publisher: "", verifier: "", description: "", image: "", video: "" },
  // Rare (ranks 21-30)
  { name: "Petal", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Plasma Pulse X", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Say So", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "PolarBear", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Doodle Rush", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Limbotism", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Cloth Of Roses", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "colon three circles", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Blossom Sea", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Jump For Me", publisher: "", verifier: "", description: "", image: "", video: "" },
  // Uncommon (ranks 31-55)
  { name: "Octagon Force", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Interstellrarr", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Caesium Factorial 3", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Synetosign Leashed", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Caesium Factorial 1", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "In Its Right Place", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "CUBED", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "XENOSCAPE", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "planetrarrium", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Tormented Sentience", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Stroll", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Every End Leashed", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Save Me", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "GLORINESS", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "lancer deltarune", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Deadmans Handle", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Aurora", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "My Meat", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Firewall", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Sonicbreaker", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Deep End", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Dancing Until I Fall", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Alti Adventures", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Blank Planet", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "limbo but rarr ig", publisher: "", verifier: "", description: "", image: "", video: "" },
  // Common (ranks 56-90)
  { name: "Processed Machine", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Stalemate", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Budgetscapes", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "No Surprises", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Stratus", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "growing on me", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Genesis", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Only You", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "SHINING", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Caesium Factorial 2", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "ViPriN Spider", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Cries For The Lonely", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Duality", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Bananas", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Paparazzi", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Fast Travel", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "the killer", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Tung Wave Trials", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Return End", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Happy Birthday Goldie", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "1 Up", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Disco Dance", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Chess", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Kinetic Disorption", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "TO be complete", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "The Golden", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Chaos Construct", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Future Circles", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Cut You Off", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Moonship Welters", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "LARP", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Thumper", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Darkness", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Radiation Wave", publisher: "", verifier: "", description: "", image: "", video: "" },
  { name: "Runaway", publisher: "", verifier: "", description: "", image: "", video: "" },
  // Exotic (not ranked)
  { name: "Penguin", publisher: "", verifier: "", description: "", image: "", video: "", rarity: "Exotic" },
  { name: "Polterghast", publisher: "", verifier: "", description: "", image: "", video: "", rarity: "Exotic" }
];

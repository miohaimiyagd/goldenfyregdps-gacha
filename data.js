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
  { name: "The Abyss", publisher: "Gamer862", verifier: "", description: "", image: "", video: "" },
  // MYTHICAL (ranks 2-5)
  { name: "Planum Astrale", publisher: "Ke2", verifier: "", description: "", image: "", video: "" },
  { name: "HAIL TO THE THIEF", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "Sakupenhouse", publisher: "Syne", verifier: "", description: "", image: "", video: "" },
  { name: "Sixx Sevvend", publisher: "Syne", verifier: "", description: "", image: "", video: "" },
  // Legendary (ranks 6-10)
  { name: "Heatwave", publisher: "Quacc", verifier: "", description: "", image: "", video: "" },
  { name: "No Cure", publisher: "Nange", verifier: "", description: "", image: "", video: "" },
  { name: "rare animal", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "Goldenfyre Challenge", publisher: "Nange", verifier: "", description: "", image: "", video: "" },
  { name: "Going Home", publisher: "Firelia", verifier: "", description: "", image: "", video: "" },
  // Epic (ranks 11-20)
  { name: "Gilt Chin", publisher: "Firelia", verifier: "", description: "", image: "", video: "" },
  { name: "GLEAMING", publisher: "EpikGuy", verifier: "", description: "", image: "", video: "" },
  { name: "Octane", publisher: "Emmber", verifier: "", description: "", image: "", video: "" },
  { name: "Gate", publisher: "Firelia", verifier: "", description: "", image: "", video: "" },
  { name: "The Super Catguy", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "EGG NEVER CLEAR RE", publisher: "EpikGuy", verifier: "", description: "", image: "", video: "" },
  { name: "Pyrarrmaniac", publisher: "Nange", verifier: "", description: "", image: "", video: "" },
  { name: "BRIGHTNESS", publisher: "EpikGuy", verifier: "", description: "", image: "", video: "" },
  { name: "MIOKII ALWAYS CLEAR", publisher: "3Doffisa", verifier: "", description: "", image: "", video: "" },
  { name: "The City Of Battle", publisher: "Xc4pk", verifier: "", description: "", image: "", video: "" },
  // Rare (ranks 21-30)
  { name: "Petal", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "Plasma Pulse X", publisher: "Firelia", verifier: "", description: "", image: "", video: "" },
  { name: "Say So", publisher: "pure", verifier: "", description: "", image: "", video: "" },
  { name: "PolarBear", publisher: "Firelia", verifier: "", description: "", image: "", video: "" },
  { name: "Doodle Rush", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "Limbotism", publisher: "Unnatural", verifier: "", description: "", image: "", video: "" },
  { name: "Cloth Of Roses", publisher: "Electrow", verifier: "", description: "", image: "", video: "" },
  { name: "colon three circles", publisher: "Cheese", verifier: "", description: "", image: "", video: "" },
  { name: "Blossom Sea", publisher: "Firelia", verifier: "", description: "", image: "", video: "" },
  { name: "Jump For Me", publisher: "Xc4pk", verifier: "", description: "", image: "", video: "" },
  // Uncommon (ranks 31-55)
  { name: "Octagon Force", publisher: "JPCPro", verifier: "", description: "", image: "", video: "" },
  { name: "Interstellrarr", publisher: "Syne", verifier: "", description: "", image: "", video: "" },
  { name: "Caesium Factorial 3", publisher: "JPCPro", verifier: "", description: "", image: "", video: "" },
  { name: "Synetosign Leashed", publisher: "Alya", verifier: "", description: "", image: "", video: "" },
  { name: "Caesium Factorial 1", publisher: "JPCPro", verifier: "", description: "", image: "", video: "" },
  { name: "In Its Right Place", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "CUBED", publisher: "JPCPro", verifier: "", description: "", image: "", video: "" },
  { name: "XENOSCAPE", publisher: "hortus", verifier: "", description: "", image: "", video: "" },
  { name: "planetrarrium", publisher: "Luna", verifier: "", description: "", image: "", video: "" },
  { name: "Tormented Sentience", publisher: "Goldenfyre101", verifier: "", description: "", image: "", video: "" },
  { name: "Stroll", publisher: "Nange", verifier: "", description: "", image: "", video: "" },
  { name: "Every End Leashed", publisher: "Syne", verifier: "", description: "", image: "", video: "" },
  { name: "Save Me", publisher: "Electrow", verifier: "", description: "", image: "", video: "" },
  { name: "GLORINESS", publisher: "EpikGuy", verifier: "", description: "", image: "", video: "" },
  { name: "lancer deltarune", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "Deadmans Handle", publisher: "Luna", verifier: "", description: "", image: "", video: "" },
  { name: "Aurora", publisher: "Emmber", verifier: "", description: "", image: "", video: "" },
  { name: "My Meat", publisher: "Gamer862", verifier: "", description: "", image: "", video: "" },
  { name: "Firewall", publisher: "Syne", verifier: "", description: "", image: "", video: "" },
  { name: "Sonicbreaker", publisher: "Hyperfixation66", verifier: "", description: "", image: "", video: "" },
  { name: "Deep End", publisher: "Electrow", verifier: "", description: "", image: "", video: "" },
  { name: "Dancing Until I Fall", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "Alti Adventures", publisher: "AltifyNeverDies", verifier: "", description: "", image: "", video: "" },
  { name: "Blank Planet", publisher: "RecorderChannel2", verifier: "", description: "", image: "", video: "" },
  { name: "limbo but rarr ig", publisher: "Luna", verifier: "", description: "", image: "", video: "" },
  // Common (ranks 56-90)
  { name: "Processed Machine", publisher: "spec", verifier: "", description: "", image: "", video: "" },
  { name: "Stalemate", publisher: "GooeyG", verifier: "", description: "", image: "", video: "" },
  { name: "Budgetscapes", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "No Surprises", publisher: "EpikGuy", verifier: "", description: "", image: "", video: "" },
  { name: "Stratus", publisher: "AltifyNeverDies", verifier: "", description: "", image: "", video: "" },
  { name: "growing on me", publisher: "qwerty2048", verifier: "", description: "", image: "", video: "" },
  { name: "Genesis", publisher: "AltifyNeverDies", verifier: "", description: "", image: "", video: "" },
  { name: "Only You", publisher: "Electrow", verifier: "", description: "", image: "", video: "" },
  { name: "SHINING", publisher: "EpikGuy", verifier: "", description: "", image: "", video: "" },
  { name: "Caesium Factorial 2", publisher: "JPCPro", verifier: "", description: "", image: "", video: "" },
  { name: "ViPriN Spider", publisher: "AltifyNeverDies", verifier: "", description: "", image: "", video: "" },
  { name: "Cries For The Lonely", publisher: "Alya", verifier: "", description: "", image: "", video: "" },
  { name: "Duality", publisher: "Unnatural", verifier: "", description: "", image: "", video: "" },
  { name: "Bananas", publisher: "Nange", verifier: "", description: "", image: "", video: "" },
  { name: "Paparazzi", publisher: "Electrow", verifier: "", description: "", image: "", video: "" },
  { name: "Fast Travel", publisher: "Kimichii", verifier: "", description: "", image: "", video: "" },
  { name: "the killer", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "Tung Wave Trials", publisher: "Syne", verifier: "", description: "", image: "", video: "" },
  { name: "Return End", publisher: "Absoluteinf1", verifier: "", description: "", image: "", video: "" },
  { name: "Happy Birthday Goldie", publisher: "Quacc", verifier: "", description: "", image: "", video: "" },
  { name: "1 Up", publisher: "Absoluteinf1", verifier: "", description: "", image: "", video: "" },
  { name: "Disco Dance", publisher: "Xc4pk", verifier: "", description: "", image: "", video: "" },
  { name: "Chess", publisher: "3Doffisa", verifier: "", description: "", image: "", video: "" },
  { name: "Kinetic Disorption", publisher: "Goldenfyre101", verifier: "", description: "", image: "", video: "" },
  { name: "TO be complete", publisher: "beeguy", verifier: "", description: "", image: "", video: "" },
  { name: "The Golden", publisher: "Alya", verifier: "", description: "", image: "", video: "" },
  { name: "Chaos Construct", publisher: "xxLettucex", verifier: "", description: "", image: "", video: "" },
  { name: "Future Circles", publisher: "Hyperfixation66", verifier: "", description: "", image: "", video: "" },
  { name: "Cut You Off", publisher: "Quacc", verifier: "", description: "", image: "", video: "" },
  { name: "Moonship Welters", publisher: "Goldenfyre101", verifier: "", description: "", image: "", video: "" },
  { name: "LARP", publisher: "spec", verifier: "", description: "", image: "", video: "" },
  { name: "Thumper", publisher: "Syne", verifier: "", description: "", image: "", video: "" },
  { name: "Darkness", publisher: "Electrow", verifier: "", description: "", image: "", video: "" },
  { name: "Radiation Wave", publisher: "WIZARD", verifier: "", description: "", image: "", video: "" },
  { name: "Runaway", publisher: "Electrow", verifier: "", description: "", image: "", video: "" },
  // Exotic (not ranked)
  { name: "Penguin", publisher: "Firelia", verifier: "", description: "", image: "", video: "", rarity: "Exotic" },
  { name: "Polterghast", publisher: "iciicle202", verifier: "", description: "", image: "", video: "", rarity: "Exotic" }
];

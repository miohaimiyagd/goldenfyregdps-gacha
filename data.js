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
    "Rarity depends on a level's rank on the list. See the drop rates below.",
    "Duplicates stack and show a count on the card.",
    "Your packs and cards are saved in this browser only. Clearing site data resets them.",
    "Cards have no real-world value and nothing here costs real money."
  ],
  privacy: "This site stores your packs and collection in your browser's local storage. Nothing is sent to a server. Edit this text in data.js.",
  terms: "This is a fan-made game for fun. It comes as is, with no guarantees. Edit this text in data.js."
};

// Rarity is decided by list rank. A card's rank = its position in CARDS below.
// maxRank = the lowest-ranked card that still counts as this rarity (keep them in increasing order).
// weight = how likely a pull is this rarity (weights are relative; these add up to 100,000).
const RARITIES = [
  { name: "MYTHICAL",  maxRank: 1,        weight: 1,     color: "#ff5fa8" },
  { name: "Legendary", maxRank: 10,       weight: 500,   color: "#ff9a1f" },
  { name: "Epic",      maxRank: 20,       weight: 3000,  color: "#9b5de5" },
  { name: "Rare",      maxRank: 30,       weight: 12000, color: "#3a8dde" },
  { name: "Uncommon",  maxRank: 55,       weight: 25000, color: "#4cc36b" },
  { name: "Common",    maxRank: Infinity, weight: 59499, color: "#a8998a" }
];

// Cards in list order (first = rank 1). Rarity is set automatically from the rank.
// Fill in creator, description, image and video whenever you like. Leave "" to keep the blank or placeholder.
// image: a file name like "abyss.png" | video: a YouTube embed link like "https://www.youtube.com/embed/VIDEO_ID"
const CARDS = [
  // MYTHICAL (rank 1)
  { name: "The Abyss", creator: "", description: "", image: "", video: "" },
  // Legendary (ranks 2-10)
  { name: "Planum Astrale", creator: "", description: "", image: "", video: "" },
  { name: "HAIL TO THE THIEF", creator: "", description: "", image: "", video: "" },
  { name: "Sakupenhouse", creator: "", description: "", image: "", video: "" },
  { name: "Sixx Sevvend", creator: "", description: "", image: "", video: "" },
  { name: "Heatwave", creator: "", description: "", image: "", video: "" },
  { name: "No Cure", creator: "", description: "", image: "", video: "" },
  { name: "rare animal", creator: "", description: "", image: "", video: "" },
  { name: "Goldenfyre Challenge", creator: "", description: "", image: "", video: "" },
  { name: "Going Home", creator: "", description: "", image: "", video: "" },
  // Epic (ranks 11-20)
  { name: "Gilt Chin", creator: "", description: "", image: "", video: "" },
  { name: "GLEAMING", creator: "", description: "", image: "", video: "" },
  { name: "Octane", creator: "", description: "", image: "", video: "" },
  { name: "Gate", creator: "", description: "", image: "", video: "" },
  { name: "The Super Catguy", creator: "", description: "", image: "", video: "" },
  { name: "EGG NEVER CLEAR RE", creator: "", description: "", image: "", video: "" },
  { name: "Pyrarrmaniac", creator: "", description: "", image: "", video: "" },
  { name: "BRIGHTNESS", creator: "", description: "", image: "", video: "" },
  { name: "MIOKII ALWAYS CLEAR", creator: "", description: "", image: "", video: "" },
  { name: "The City Of Battle", creator: "", description: "", image: "", video: "" },
  // Rare (ranks 21-30)
  { name: "Petal", creator: "", description: "", image: "", video: "" },
  { name: "Plasma Pulse X", creator: "", description: "", image: "", video: "" },
  { name: "Say So", creator: "", description: "", image: "", video: "" },
  { name: "PolarBear", creator: "", description: "", image: "", video: "" },
  { name: "Doodle Rush", creator: "", description: "", image: "", video: "" },
  { name: "Limbotism", creator: "", description: "", image: "", video: "" },
  { name: "Cloth Of Roses", creator: "", description: "", image: "", video: "" },
  { name: "colon three circles", creator: "", description: "", image: "", video: "" },
  { name: "Blossom Sea", creator: "", description: "", image: "", video: "" },
  { name: "Jump For Me", creator: "", description: "", image: "", video: "" },
  // Uncommon (ranks 31-55)
  { name: "Octagon Force", creator: "", description: "", image: "", video: "" },
  { name: "Interstellrarr", creator: "", description: "", image: "", video: "" },
  { name: "Caesium Factorial 3", creator: "", description: "", image: "", video: "" },
  { name: "Synetosign Leashed", creator: "", description: "", image: "", video: "" },
  { name: "Caesium Factorial 1", creator: "", description: "", image: "", video: "" },
  { name: "In Its Right Place", creator: "", description: "", image: "", video: "" },
  { name: "CUBED", creator: "", description: "", image: "", video: "" },
  { name: "XENOSCAPE", creator: "", description: "", image: "", video: "" },
  { name: "planetrarrium", creator: "", description: "", image: "", video: "" },
  { name: "Tormented Sentience", creator: "", description: "", image: "", video: "" },
  { name: "Stroll", creator: "", description: "", image: "", video: "" },
  { name: "Every End Leashed", creator: "", description: "", image: "", video: "" },
  { name: "Save Me", creator: "", description: "", image: "", video: "" },
  { name: "GLORINESS", creator: "", description: "", image: "", video: "" },
  { name: "lancer deltarune", creator: "", description: "", image: "", video: "" },
  { name: "Deadmans Handle", creator: "", description: "", image: "", video: "" },
  { name: "Aurora", creator: "", description: "", image: "", video: "" },
  { name: "My Meat", creator: "", description: "", image: "", video: "" },
  { name: "Firewall", creator: "", description: "", image: "", video: "" },
  { name: "Sonicbreaker", creator: "", description: "", image: "", video: "" },
  { name: "Deep End", creator: "", description: "", image: "", video: "" },
  { name: "Dancing Until I Fall", creator: "", description: "", image: "", video: "" },
  { name: "Alti Adventures", creator: "", description: "", image: "", video: "" },
  { name: "Blank Planet", creator: "", description: "", image: "", video: "" },
  { name: "limbo but rarr ig", creator: "", description: "", image: "", video: "" },
  // Common (ranks 56-90)
  { name: "Processed Machine", creator: "", description: "", image: "", video: "" },
  { name: "Stalemate", creator: "", description: "", image: "", video: "" },
  { name: "Budgetscapes", creator: "", description: "", image: "", video: "" },
  { name: "No Surprises", creator: "", description: "", image: "", video: "" },
  { name: "Stratus", creator: "", description: "", image: "", video: "" },
  { name: "growing on me", creator: "", description: "", image: "", video: "" },
  { name: "Genesis", creator: "", description: "", image: "", video: "" },
  { name: "Only You", creator: "", description: "", image: "", video: "" },
  { name: "SHINING", creator: "", description: "", image: "", video: "" },
  { name: "Caesium Factorial 2", creator: "", description: "", image: "", video: "" },
  { name: "ViPriN Spider", creator: "", description: "", image: "", video: "" },
  { name: "Cries For The Lonely", creator: "", description: "", image: "", video: "" },
  { name: "Duality", creator: "", description: "", image: "", video: "" },
  { name: "Bananas", creator: "", description: "", image: "", video: "" },
  { name: "Paparazzi", creator: "", description: "", image: "", video: "" },
  { name: "Fast Travel", creator: "", description: "", image: "", video: "" },
  { name: "the killer", creator: "", description: "", image: "", video: "" },
  { name: "Tung Wave Trials", creator: "", description: "", image: "", video: "" },
  { name: "Return End", creator: "", description: "", image: "", video: "" },
  { name: "Happy Birthday Goldie", creator: "", description: "", image: "", video: "" },
  { name: "1 Up", creator: "", description: "", image: "", video: "" },
  { name: "Disco Dance", creator: "", description: "", image: "", video: "" },
  { name: "Chess", creator: "", description: "", image: "", video: "" },
  { name: "Kinetic Disorption", creator: "", description: "", image: "", video: "" },
  { name: "TO be complete", creator: "", description: "", image: "", video: "" },
  { name: "The Golden", creator: "", description: "", image: "", video: "" },
  { name: "Chaos Construct", creator: "", description: "", image: "", video: "" },
  { name: "Future Circles", creator: "", description: "", image: "", video: "" },
  { name: "Cut You Off", creator: "", description: "", image: "", video: "" },
  { name: "Moonship Welters", creator: "", description: "", image: "", video: "" },
  { name: "LARP", creator: "", description: "", image: "", video: "" },
  { name: "Thumper", creator: "", description: "", image: "", video: "" },
  { name: "Darkness", creator: "", description: "", image: "", video: "" },
  { name: "Radiation Wave", creator: "", description: "", image: "", video: "" },
  { name: "Runaway", creator: "", description: "", image: "", video: "" }
];

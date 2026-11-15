// ===== EDIT THIS FILE to change text, links, cards and drop rates =====

const SITE = {
  title: "Goldenfyre GDPS Gacha",
  version: "v1.5",
  tagline: "Pull the demons of Goldenfyre.",
  intro: "Spend Embers on pulls, collect level cards and complete the whole list.",
  discord: "https://discord.gg/hrqhEVANkA",
  submit: "https://forms.gle/gpsMMFevEw5PEoaE9",
  demonlist: "https://goldenfyre-gdps-demonlist.quacc.workers.dev/#/",
  startEmbers: 1000,   // Embers new players start with
  pullCost: 100,       // cost of 1 pull
  tenPullCost: 900,    // cost of 10 pulls
  dailyEmbers: 500,    // free Embers every 24 hours
  disclaimer: "Unofficial fan-made project, not affiliated with RobTop Games or Geometry Dash. Level ranks follow the Goldenfyre GDPS Demonlist.",
  rules: [
    "Each pull gives you one random level card. Higher rarity cards are harder to get.",
    "Rarity depends on a level's rank on the list. See the drop rates below.",
    "Duplicates stack and show a count on the card.",
    "Your Embers and cards are saved in this browser only. Clearing site data resets them.",
    "Cards have no real-world value and nothing here costs real money."
  ],
  privacy: "This site stores your Embers and collection in your browser's local storage. Nothing is sent to a server. Edit this text in data.js.",
  terms: "This is a fan-made game for fun. It comes as is, with no guarantees. Edit this text in data.js."
};

// Rarity is decided by list rank. A card's rank = its position in CARDS below.
// weight = how likely a pull is this rarity (weights are relative).
const RARITIES = [
  { name: "Legendary", maxRank: 2,        weight: 2,  color: "#f2b33d" },
  { name: "Epic",      maxRank: 5,        weight: 8,  color: "#e8561c" },
  { name: "Rare",      maxRank: 9,        weight: 25, color: "#6fb7d6" },
  { name: "Common",    maxRank: Infinity, weight: 65, color: "#a8998a" }
];

// Cards in list order (first = rank 1).
// image: path like "images/level1.png" (empty = placeholder)
// video: YouTube embed link like "https://www.youtube.com/embed/VIDEO_ID" (empty = placeholder)
const CARDS = [
  {
    name: "Example Level",
    creator: "Creator Name",
    description: "Short description shown when you open the card. Edit me!",
    image: "",
    video: ""
  }
];
// Placeholder cards 2 to 15. Delete this loop once you add your real levels above.
for (let i = 2; i <= 15; i++) {
  CARDS.push({ name: "Placeholder Level " + i, creator: "Creator Name", description: "Edit this description in data.js.", image: "", video: "" });
}

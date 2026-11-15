(() => {
const KEY = "goldenfyreGacha";
const C = Object.assign({ cardsPerPack: 1, packMinutes: 10, maxPacks: 3, startPacks: 2 }, SITE);
const MS = C.packMinutes * 60000;
let S; try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
S = S || {};
S.owned = S.owned || {};
if (typeof S.packs !== "number") { S.packs = C.startPacks; S.last = Date.now(); }
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const $ = s => document.querySelector(s);

CARDS.forEach((c, i) => { c.rank = i + 1; c.special = !!c.rarity; c.rar = RARITIES.find(r => r.name === c.rarity) || RARITIES.find(r => c.rank <= r.maxRank) || RARITIES[RARITIES.length - 1]; });
const lab = c => (c.special ? "" : "#" + c.rank + " ") + c.rar.name;

const art = c => c.image ? `<img src="${c.image}" alt="">` : `<div class="ph">Image<br>placeholder</div>`;
const tile = (c, n) => `<button class="card" data-r="${c.rank}" style="--rc:${c.rar.color}">${art(c)}<span class="rk">${lab(c)}</span><b>${c.name}</b><small>${c.creator}</small>${n > 1 ? `<i>x${n}</i>` : ""}</button>`;
const total = RARITIES.reduce((a, r) => a + r.weight, 0);
const odds = w => { const p = w / total * 100; return p >= 1 ? p.toFixed(0) + "%" : p >= 0.01 ? p.toFixed(2).replace(/0+$/, "").replace(/\.$/, "") + "%" : "1 in " + Math.round(total / w).toLocaleString(); };
const rates = `<table><tr><th>Rarity</th><th>Drop rate</th></tr>${RARITIES.map(r => `<tr><td style="color:${r.color}">${r.name}</td><td>${odds(r.weight)}</td></tr>`).join("")}</table>`;

const pages = {
  pull: () => `<h1>${SITE.tagline}</h1><p class="mute">${SITE.intro}</p><div class="row"><button class="btn big" id="open"></button></div><div id="res" class="grid"></div>`,
  collection: () => {
    const own = CARDS.filter(c => S.owned[c.rank]).length;
    return `<h1>Collection</h1><p class="mute">${own} of ${CARDS.length} cards collected. Select a card to see details and its verification video.</p><div class="grid">${CARDS.map(c => S.owned[c.rank] ? tile(c, S.owned[c.rank]) : `<div class="card lock"><div class="ph">?</div><span class="rk">${lab(c)}</span></div>`).join("")}</div>`;
  },
  rules: () => `<h1>Rules</h1><ul>${SITE.rules.map(r => `<li>${r}</li>`).join("")}</ul>${rates}`,
  privacy: () => `<h1>Privacy policy</h1><p>${SITE.privacy}</p>`,
  terms: () => `<h1>Terms of use</h1><p>${SITE.terms}</p>`
};

document.title = SITE.title;
$("#top").innerHTML = `<a class="brand" href="#/">${SITE.title}<small>${SITE.version}</small></a><nav>${[["pull", "Pull"], ["collection", "Collection"], ["rules", "Rules"]].map(([k, t]) => `<a data-k="${k}" href="#/${k}">${t}</a>`).join("")}<a href="${SITE.discord}" target="_blank" rel="noopener">Discord</a><a href="${SITE.submit}" target="_blank" rel="noopener">Submit level</a><a href="${SITE.demonlist}" target="_blank" rel="noopener">Demonlist</a></nav><span class="embers" id="emb"></span>`;
$("#foot").innerHTML = `${SITE.disclaimer} <a href="#/privacy">Privacy policy</a> | <a href="#/terms">Terms of use</a> | <a href="#/rules">Rules</a>`;

// Packs build up one per interval, up to the max. The timer pauses while the stock is full.
function accrue() {
  const now = Date.now();
  if (S.last > now || S.packs >= C.maxPacks) S.last = now;
  const n = Math.floor((now - S.last) / MS);
  if (n > 0) { S.packs = Math.min(C.maxPacks, S.packs + n); S.last = S.packs >= C.maxPacks ? now : S.last + n * MS; save(); }
}
const fmt = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
function upd() {
  accrue();
  const full = S.packs >= C.maxPacks, wait = fmt(S.last + MS - Date.now());
  $("#emb").textContent = `${S.packs} ${S.packs === 1 ? "pack" : "packs"}${full ? " (full)" : ", next in " + wait}`;
  const b = $("#open");
  if (b) { b.disabled = S.packs < 1; b.textContent = S.packs < 1 ? `Next pack in ${wait}` : `Open pack (${C.cardsPerPack} cards)`; }
}

function pick() {
  let x = Math.random() * total, r = RARITIES[RARITIES.length - 1];
  for (const q of RARITIES) { if ((x -= q.weight) < 0) { r = q; break; } }
  let pool = CARDS.filter(c => c.rar === r); if (!pool.length) pool = CARDS;
  return pool[Math.floor(Math.random() * pool.length)];
}
function openPack() {
  accrue(); if (S.packs < 1) return;
  S.packs--;
  const got = Array.from({ length: C.cardsPerPack }, pick);
  got.forEach(c => S.owned[c.rank] = (S.owned[c.rank] || 0) + 1);
  save(); upd();
  $("#res").innerHTML = got.map(c => `<div class="flip"><div class="in"><div class="face back"></div><div class="face fr">${tile(c, 0)}</div></div></div>`).join("");
  document.querySelectorAll(".flip").forEach((f, i) => setTimeout(() => f.classList.add("up"), 300 + i * 250));
}
function openCard(c) {
  $("#m").innerHTML = `<div class="mi" style="--rc:${c.rar.color}"><button class="x" data-x aria-label="Close">&times;</button><div class="mart">${art(c)}</div><div><h2>${c.name}</h2><p class="mute">${c.special ? "" : "Rank " + c.rank + ", "}${c.rar.name}${c.creator ? ", by " + c.creator : ""}</p><p>${c.description}</p></div><div class="vid">${c.video ? `<iframe src="${c.video}" title="Verification video" allowfullscreen loading="lazy"></iframe>` : `<div class="ph">Verification video placeholder</div>`}</div></div>`;
  $("#m").showModal();
}
function route() {
  const p = location.hash.replace(/^#\/?/, "") || "pull", k = pages[p] ? p : "pull";
  $("#app").innerHTML = pages[k]();
  document.querySelectorAll("nav a[data-k]").forEach(a => a.classList.toggle("on", a.dataset.k === k));
  upd();
  window.scrollTo(0, 0);
}

document.addEventListener("click", e => {
  if (e.target.closest("#open")) return openPack();
  const c = e.target.closest(".card[data-r]"); if (c) return openCard(CARDS[c.dataset.r - 1]);
  if (e.target.closest("[data-x]") || e.target.id === "m") $("#m").close();
});
$("#m").addEventListener("close", () => { $("#m").innerHTML = ""; });
window.addEventListener("hashchange", route);
route();
setInterval(upd, 1000);
})();

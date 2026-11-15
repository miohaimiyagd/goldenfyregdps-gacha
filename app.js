(() => {
const KEY = "goldenfyreGacha";
let S; try { S = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
S = S || { embers: SITE.startEmbers, owned: {}, daily: 0 };
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const $ = s => document.querySelector(s);
const DAY = 864e5;

CARDS.forEach((c, i) => { c.rank = i + 1; c.rar = RARITIES.find(r => c.rank <= r.maxRank) || RARITIES[RARITIES.length - 1]; });

const art = c => c.image ? `<img src="${c.image}" alt="">` : `<div class="ph">Image<br>placeholder</div>`;
const tile = (c, n) => `<button class="card" data-r="${c.rank}" style="--rc:${c.rar.color}">${art(c)}<span class="rk">#${c.rank} ${c.rar.name}</span><b>${c.name}</b><small>${c.creator}</small>${n > 1 ? `<i>x${n}</i>` : ""}</button>`;
const total = RARITIES.reduce((a, r) => a + r.weight, 0);
const rates = `<table><tr><th>Rarity</th><th>Drop rate</th></tr>${RARITIES.map(r => `<tr><td style="color:${r.color}">${r.name}</td><td>${(r.weight / total * 100).toFixed(0)}%</td></tr>`).join("")}</table>`;

const pages = {
  pull: () => `<h1>${SITE.tagline}</h1><p class="mute">${SITE.intro}</p>
    <div class="row"><button class="btn" data-p="1">Pull x1 (${SITE.pullCost} Embers)</button><button class="btn big" data-p="10">Pull x10 (${SITE.tenPullCost} Embers)</button><button class="btn" id="daily"></button></div>
    <p id="msg" class="mute" role="status"></p><div id="res" class="grid"></div>`,
  collection: () => {
    const own = CARDS.filter(c => S.owned[c.rank]).length;
    return `<h1>Collection</h1><p class="mute">${own} of ${CARDS.length} cards collected. Select a card to see details and its verification video.</p><div class="grid">${CARDS.map(c => S.owned[c.rank] ? tile(c, S.owned[c.rank]) : `<div class="card lock"><div class="ph">?</div><span class="rk">#${c.rank} ${c.rar.name}</span></div>`).join("")}</div>`;
  },
  rules: () => `<h1>Rules</h1><ul>${SITE.rules.map(r => `<li>${r}</li>`).join("")}</ul>${rates}`,
  privacy: () => `<h1>Privacy policy</h1><p>${SITE.privacy}</p>`,
  terms: () => `<h1>Terms of use</h1><p>${SITE.terms}</p>`
};

document.title = SITE.title;
$("#top").innerHTML = `<a class="brand" href="#/">${SITE.title}<small>${SITE.version}</small></a><nav>${[["pull", "Pull"], ["collection", "Collection"], ["rules", "Rules"]].map(([k, t]) => `<a data-k="${k}" href="#/${k}">${t}</a>`).join("")}<a href="${SITE.discord}" target="_blank" rel="noopener">Discord</a><a href="${SITE.submit}" target="_blank" rel="noopener">Submit level</a><a href="${SITE.demonlist}" target="_blank" rel="noopener">Demonlist</a></nav><span class="embers" id="emb"></span>`;
$("#foot").innerHTML = `${SITE.disclaimer} <a href="#/privacy">Privacy policy</a> | <a href="#/terms">Terms of use</a> | <a href="#/rules">Rules</a>`;

const upd = () => { $("#emb").textContent = S.embers + " Embers"; };
const msg = t => { const m = $("#msg"); if (m) m.textContent = t; };
const ready = () => Date.now() - S.daily > DAY;
function dailyBtn() { const b = $("#daily"); b.disabled = !ready(); b.textContent = ready() ? `Claim ${SITE.dailyEmbers} daily Embers` : "Daily Embers claimed"; }

function pick() {
  let x = Math.random() * total, r = RARITIES[RARITIES.length - 1];
  for (const q of RARITIES) { if ((x -= q.weight) < 0) { r = q; break; } }
  let pool = CARDS.filter(c => c.rar === r); if (!pool.length) pool = CARDS;
  return pool[Math.floor(Math.random() * pool.length)];
}
function pull(n) {
  const cost = n === 10 ? SITE.tenPullCost : SITE.pullCost;
  if (S.embers < cost) return msg(`Not enough Embers. This pull costs ${cost}. Claim your daily Embers or come back later.`);
  S.embers -= cost;
  const got = Array.from({ length: n }, pick);
  got.forEach(c => S.owned[c.rank] = (S.owned[c.rank] || 0) + 1);
  save(); upd(); msg("");
  $("#res").innerHTML = got.map(c => `<div class="flip"><div class="in"><div class="face back"></div><div class="face fr">${tile(c, 0)}</div></div></div>`).join("");
  document.querySelectorAll(".flip").forEach((f, i) => setTimeout(() => f.classList.add("up"), 300 + i * 250));
}
function openCard(c) {
  $("#m").innerHTML = `<div class="mi" style="--rc:${c.rar.color}"><button class="x" data-x aria-label="Close">&times;</button><div class="mart">${art(c)}</div><div><h2>${c.name}</h2><p class="mute">Rank ${c.rank}, ${c.rar.name}, by ${c.creator}</p><p>${c.description}</p></div><div class="vid">${c.video ? `<iframe src="${c.video}" title="Verification video" allowfullscreen loading="lazy"></iframe>` : `<div class="ph">Verification video placeholder</div>`}</div></div>`;
  $("#m").showModal();
}
function route() {
  const p = location.hash.replace(/^#\/?/, "") || "pull", k = pages[p] ? p : "pull";
  $("#app").innerHTML = pages[k]();
  document.querySelectorAll("nav a[data-k]").forEach(a => a.classList.toggle("on", a.dataset.k === k));
  if (k === "pull") dailyBtn();
  window.scrollTo(0, 0);
}

document.addEventListener("click", e => {
  const p = e.target.closest("[data-p]"); if (p) return pull(+p.dataset.p);
  if (e.target.closest("#daily")) { if (!ready()) return; S.embers += SITE.dailyEmbers; S.daily = Date.now(); save(); upd(); dailyBtn(); return msg(`Claimed ${SITE.dailyEmbers} Embers.`); }
  const c = e.target.closest(".card[data-r]"); if (c) return openCard(CARDS[c.dataset.r - 1]);
  if (e.target.closest("[data-x]") || e.target.id === "m") $("#m").close();
});
$("#m").addEventListener("close", () => { $("#m").innerHTML = ""; });
window.addEventListener("hashchange", route);
upd(); route();
})();

const PARTS = [
  {
    id: "p1", name: "Empty Wooden Arcade Cabinet 32\"", category: "cabinet",
    price: 4500, qty: 1, essential: true,
    desc: "Full black cabinet with screen frame/bezel, pre-drilled control panel, steel brackets, top marquee.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/empty-wooden-arcade-cabinet-32",
    vendor: "Home of Arcadia"
  },
  {
    id: "p2", name: "Cash Box System (Optional Add-on)", category: "coin",
    price: 850, qty: 1, essential: false,
    desc: "Upgrade for the cabinet — adds coin-op cash box. Credit button only is free.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/empty-wooden-arcade-cabinet-32",
    vendor: "Home of Arcadia"
  },
  {
    id: "p3", name: "2x Arcade DIY Kit — Buttons, Joysticks, USB Encoders", category: "controls",
    price: 1899, qty: 1, essential: true,
    desc: "Complete 2-player kit: joysticks, push buttons, USB encoders, cables. Red & blue.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/2x-arcade-diy-kit-set-parts-push-buttons-joysticks-usb-encoders-red-blue",
    vendor: "Home of Arcadia"
  },
  {
    id: "p4", name: "DIY LED Arcade Kit — Zero Delay USB Controller", category: "controls",
    price: 1899, qty: 0, essential: false,
    desc: "Alternative LED kit with zero-delay USB encoder, joysticks & buttons.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/diy-led-arcade-kit-with-zero-delay-usb-controller-joysticks-buttons",
    vendor: "Home of Arcadia"
  },
  {
    id: "p5", name: "Arcade DIY Kit — 2 Joystick + 12 Buttons + 2 Start + 20 Microswitches", category: "controls",
    price: 1350, qty: 0, essential: false,
    desc: "Budget alternative kit with full microswitch set.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/arcade-hine-diy-kit-2-joystick-12-push-buttons-2-start-button-20-microswitches-game-accessories",
    vendor: "Home of Arcadia"
  },
  {
    id: "p6", name: "DIY PC USB Arcade Joystick Gamepad + LED Encoder", category: "controls",
    price: 1750, qty: 0, essential: false,
    desc: "PC-specific USB arcade joystick gamepad with LED buttons & cables.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/diy-computer-pc-usb-arcade-joystick-gamepad-game-controller-led-usb-encoder-push-buttons-cables-kit",
    vendor: "Home of Arcadia"
  },
  {
    id: "p7", name: "6 Button Control Panel — Fully Wired", category: "controls",
    price: 1450, qty: 0, essential: false,
    desc: "Pre-built & wired 6-button control panel.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/6-button-control-panel-fully-wired",
    vendor: "Home of Arcadia"
  },
  {
    id: "p8", name: "4 Button Control Panel — Fully Wired", category: "controls",
    price: 1250, qty: 0, essential: false,
    desc: "Pre-built & wired 4-button control panel.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/4-button-control-panel-fully-wired",
    vendor: "Home of Arcadia"
  },
  {
    id: "p9", name: "Classic Micro Switch Button", category: "controls",
    price: 35, qty: 20, essential: true,
    desc: "Individual micro switches for buttons. Qty 20 recommended.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/classic-micro-switch-button",
    vendor: "Home of Arcadia"
  },
  {
    id: "p10", name: "Button with Blade Connector", category: "controls",
    price: 19, qty: 0, essential: false,
    desc: "Individual button with blade connector.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/button-with-blade",
    vendor: "Home of Arcadia"
  },
  {
    id: "p11", name: "Red Arcade Joystick Ball Replacement", category: "controls",
    price: 200, qty: 0, essential: false,
    desc: "Replacement ball top for joystick.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/red-arcade-game-joystick-red-ball-replacement",
    vendor: "Home of Arcadia"
  },
  {
    id: "p12", name: "Full Arcade Wiring Kit", category: "electronics",
    price: 400, qty: 1, essential: true,
    desc: "Complete wiring harness for arcade controls.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/full-arcade-wiring-kit",
    vendor: "Home of Arcadia"
  },
  {
    id: "p13", name: "Power Supply", category: "electronics",
    price: 800, qty: 1, essential: true,
    desc: "Arcade power supply unit.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/power-supply",
    vendor: "Home of Arcadia"
  },
  {
    id: "p14", name: "12 Watt Arcade Speaker", category: "audio",
    price: 120, qty: 2, essential: true,
    desc: "12W speaker for cabinet audio. Qty 2 for stereo.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/12-watt-arcade-speaker",
    vendor: "Home of Arcadia"
  },
  {
    id: "p15", name: "40 Watt Arcade Speaker", category: "audio",
    price: 150, qty: 0, essential: false,
    desc: "40W speaker — louder option for bigger builds.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/40-watt-arcade-speaker",
    vendor: "Home of Arcadia"
  },
  {
    id: "p16", name: "Electronic CPU Coin Acceptor", category: "coin",
    price: 400, qty: 0, essential: false,
    desc: "Coin selector for arcade vending.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/hot-electronic-cpu-coin-acceptor-coin-selector-game-part-for-arcade-vending-machine",
    vendor: "Home of Arcadia"
  },
  {
    id: "p17", name: "Multi Coins Operated Timer Box", category: "coin",
    price: 3850, qty: 0, essential: false,
    desc: "Multi-coin timer for commercial-style setups.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/multi-coins-operated-timer-box",
    vendor: "Home of Arcadia"
  },
  {
    id: "p18", name: "Multi Coin Mechanism", category: "coin",
    price: 1050, qty: 0, essential: false,
    desc: "Multi-coin acceptor mechanism.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/multi-coin-mechanism",
    vendor: "Home of Arcadia"
  },
  {
    id: "p19", name: "Pandora's Box 6 Jamma Board", category: "game",
    price: 2600, qty: 0, essential: false,
    desc: "Jamma multi-game board (600+ games). Alternative to PC.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/pandoras-box-4s-jamma-board",
    vendor: "Home of Arcadia"
  },
  {
    id: "p20", name: "Pandora Box 9 Jamma Board", category: "game",
    price: 2100, qty: 0, essential: false,
    desc: "9th gen Jamma board — 1500+ games, HDMI/VGA/USB.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/pandora-box-5-960-in-1-jamma-multi-game-board-video-console-pandoras-box-5-arcade-version-hdmi-vga-usb-for-machine-cabinet",
    vendor: "Home of Arcadia"
  },
  {
    id: "p21", name: "T-Moulding Tape", category: "finishing",
    price: 320, qty: 1, essential: true,
    desc: "Edge trim tape for cabinet finishing.",
    url: "https://homeofarcadia.co.za/collections/diy-arcade-kits/products/t-moulding-tape",
    vendor: "Home of Arcadia"
  },
  {
    id: "p22", name: "PC (Already Owned)", category: "game",
    price: 0, qty: 1, essential: true,
    desc: "Your existing PC — ready and set. No cost.",
    url: null,
    vendor: "Already owned"
  },
  {
    id: "p23", name: "32\" Monitor / TV (To Verify)", category: "electronics",
    price: 0, qty: 1, essential: true,
    desc: "Confirm you have a 32\" display. Budget separately.",
    url: null,
    vendor: "TBD"
  }
];

const STORAGE_KEY = "arcade-build-v2";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getState() {
  const s = loadState();
  if (!s.acquired) s.acquired = {};
  if (!s.quantities) s.quantities = {};
  if (!s.checklist) s.checklist = {};
  if (!s.notes) s.notes = "";
  if (!s.customItems) s.customItems = [];
  if (!s.actualCosts) s.actualCosts = {};
  return s;
}

function toggleAcquired(partId) {
  const state = getState();
  state.acquired[partId] = !state.acquired[partId];
  saveState(state);
  renderAll();
}

function toggleCheck(checkId) {
  const state = getState();
  state.checklist[checkId] = !state.checklist[checkId];
  saveState(state);
  renderAll();
}

function setActualCost(partId, cost) {
  const state = getState();
  state.actualCosts[partId] = parseFloat(cost) || 0;
  saveState(state);
  renderBudget();
}

function addCustomItem(name, cost, qty) {
  const state = getState();
  state.customItems.push({
    id: "custom_" + Date.now(),
    name,
    price: parseFloat(cost) || 0,
    qty: parseInt(qty) || 1,
    essential: false,
    category: "custom",
    vendor: "Custom"
  });
  saveState(state);
  renderAll();
}

function removeCustomItem(id) {
  const state = getState();
  state.customItems = state.customItems.filter(i => i.id !== id);
  saveState(state);
  renderAll();
}

function getFiltered(filter) {
  let parts = [...PARTS, ...(getState().customItems || [])];
  const state = getState();
  switch (filter) {
    case "essential": return parts.filter(p => p.essential);
    case "optional": return parts.filter(p => !p.essential);
    case "acquired": return parts.filter(p => state.acquired[p.id]);
    case "needed": return parts.filter(p => !state.acquired[p.id] && (p.price > 0 || p.essential));
    default: return parts;
  }
}

const CATEGORY_MAP = {
  cabinet: "cabinetParts",
  controls: "controlsParts",
  electronics: "electronicsParts",
  audio: "audioParts",
  coin: "coinParts",
  game: "gameParts",
  finishing: "finishingParts",
  custom: "electronicsParts"
};

let currentFilter = "all";

function renderParts() {
  Object.values(CATEGORY_MAP).forEach(id => {
    document.getElementById(id).innerHTML = "";
  });

  const parts = getFiltered(currentFilter);
  const state = getState();

  parts.forEach(part => {
    const containerId = CATEGORY_MAP[part.category];
    if (!containerId) return;
    const container = document.getElementById(containerId);
    if (!container) return;

    const acquired = state.acquired[part.id];
    const totalCost = part.price * part.qty;

    const card = document.createElement("div");
    card.className = "part-card" + (acquired ? " acquired" : "");
    card.innerHTML = `
      <div class="part-header">
        <span class="part-name">${part.name}</span>
        <span class="part-price">${totalCost > 0 ? "R " + totalCost.toLocaleString() : "Free / TBD"}</span>
      </div>
      <div class="part-desc">${part.desc}</div>
      <div class="part-footer">
        <span class="part-tag ${part.essential ? "tag-essential" : "tag-optional"}">${part.essential ? "Essential" : "Optional"}</span>
        <div style="display:flex;gap:0.5rem;align-items:center">
          ${part.url ? `<a href="${part.url}" target="_blank" class="part-link">View &rarr;</a>` : ""}
          <button class="acquire-btn" onclick="toggleAcquired('${part.id}')">${acquired ? "Acquired" : "Mark Acquired"}</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderDashboard() {
  const state = getState();
  const allParts = [...PARTS, ...state.customItems];
  const total = allParts.filter(p => p.price > 0 || p.essential).length;
  const acquiredCount = allParts.filter(p => state.acquired[p.id]).length;
  const pct = total > 0 ? Math.round((acquiredCount / total) * 100) : 0;

  document.getElementById("statProgress").textContent = pct + "%";
  document.getElementById("statProgressFill").style.width = pct + "%";
  document.getElementById("statParts").textContent = acquiredCount + " / " + total;
  document.getElementById("globalProgress").textContent = pct + "%";
  document.getElementById("globalProgress").style.width = Math.max(pct, 3) + "%";

  const totalBudget = allParts.reduce((s, p) => s + (p.price * p.qty), 0);
  const spent = allParts.reduce((s, p) => s + (state.actualCosts[p.id] || (state.acquired[p.id] ? p.price * p.qty : 0)), 0);
  document.getElementById("statBudget").textContent = "R " + totalBudget.toLocaleString();
  document.getElementById("statSpent").textContent = "R " + spent.toLocaleString();

  for (let i = 1; i <= 5; i++) {
    const checks = document.querySelectorAll(`[data-phase="${i}"] .checklist-items input[type="checkbox"]`);
    const done = [...checks].filter(c => state.checklist[c.dataset.id]).length;
    const pct2 = checks.length > 0 ? Math.round((done / checks.length) * 100) : 0;
    document.getElementById("phase" + i + "Fill").style.width = pct2 + "%";
  }
}

function renderChecklist() {
  const state = getState();
  let totalChecks = 0;
  let doneChecks = 0;

  document.querySelectorAll('.checklist-items input[type="checkbox"]').forEach(cb => {
    const id = cb.dataset.id;
    cb.checked = !!state.checklist[id];
    totalChecks++;
    if (state.checklist[id]) doneChecks++;
  });

  document.getElementById("checklistSummary").textContent = doneChecks + " / " + totalChecks + " complete";

  const overallPct = totalChecks > 0 ? Math.round((doneChecks / totalChecks) * 100) : 0;
  document.getElementById("globalProgress").textContent = overallPct + "%";
  document.getElementById("globalProgress").style.width = Math.max(overallPct, 3) + "%";
}

function renderBudget() {
  const state = getState();
  const allParts = [...PARTS, ...state.customItems];
  const tbody = document.getElementById("budgetBody");
  tbody.innerHTML = "";

  let totalEst = 0;
  let totalActual = 0;

  allParts.forEach(part => {
    const est = part.price * part.qty;
    const actual = state.actualCosts[part.id] || (state.acquired[part.id] ? est : 0);
    totalEst += est;
    if (state.acquired[part.id] || state.actualCosts[part.id]) totalActual += actual;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${part.name} ${part.id.startsWith("custom_") ? `<button onclick="removeCustomItem('${part.id}')" style="background:none;border:none;color:var(--danger);cursor:pointer;font-size:0.7rem;margin-left:0.5rem" title="Remove">&#10005;</button>` : ""}</td>
      <td>R ${est.toLocaleString()}</td>
      <td><input type="number" value="${actual || ""}" placeholder="R 0"
        onchange="setActualCost('${part.id}', this.value)"
        style="background:var(--bg-input);border:1px solid var(--border);color:var(--text);padding:0.25rem 0.5rem;border-radius:4px;width:100px;font-size:0.85rem"></td>
      <td>${part.qty}</td>
      <td><span class="status-badge ${state.acquired[part.id] ? "status-acquired" : "status-needed"}">${state.acquired[part.id] ? "Acquired" : "Needed"}</span></td>
      <td>${part.url ? `<a href="${part.url}" target="_blank">Link</a>` : "—"}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("budgetEstimate").textContent = "R " + totalEst.toLocaleString();
  document.getElementById("budgetActual").textContent = "R " + totalActual.toLocaleString();
  document.getElementById("budgetRemaining").textContent = "R " + Math.max(0, totalEst - totalActual).toLocaleString();
  document.getElementById("footEstimate").innerHTML = "<strong>R " + totalEst.toLocaleString() + "</strong>";
  document.getElementById("footActual").innerHTML = "<strong>R " + totalActual.toLocaleString() + "</strong>";
}

function renderNotes() {
  const state = getState();
  document.getElementById("notesArea").value = state.notes;
}

function renderAll() {
  renderDashboard();
  renderParts();
  renderChecklist();
  renderBudget();
  renderNotes();
}

function togglePhase(h3) {
  const items = h3.nextElementSibling;
  const arrow = h3.querySelector(".toggle-arrow");
  items.classList.toggle("collapsed");
  arrow.style.transform = items.classList.contains("collapsed") ? "rotate(0deg)" : "rotate(90deg)";
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      renderParts();
    });
  });

  document.querySelectorAll('.checklist-items input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", () => toggleCheck(cb.dataset.id));
  });

  document.getElementById("notesArea").addEventListener("input", (e) => {
    const state = getState();
    state.notes = e.target.value;
    saveState(state);
  });

  document.getElementById("resetChecklist").addEventListener("click", () => {
    if (confirm("Reset all checklist items? This cannot be undone.")) {
      const state = getState();
      state.checklist = {};
      saveState(state);
      renderAll();
    }
  });

  document.getElementById("addCustomItem").addEventListener("click", () => {
    const name = document.getElementById("customName").value.trim();
    const cost = document.getElementById("customCost").value;
    const qty = document.getElementById("customQty").value;
    if (name && cost) {
      addCustomItem(name, cost, qty);
      document.getElementById("customName").value = "";
      document.getElementById("customCost").value = "";
      document.getElementById("customQty").value = "1";
    }
  });

  document.getElementById("exportNotes").addEventListener("click", () => {
    const notes = document.getElementById("notesArea").value;
    const blob = new Blob([notes], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "arcade-build-notes.txt";
    a.click();
  });

  document.getElementById("clearNotes").addEventListener("click", () => {
    if (confirm("Clear all notes?")) {
      const state = getState();
      state.notes = "";
      saveState(state);
      document.getElementById("notesArea").value = "";
    }
  });

  document.querySelectorAll(".phase-card").forEach(card => {
    card.addEventListener("click", () => {
      const phase = card.dataset.phase;
      document.querySelector(`.checklist-phase[data-phase="${phase}"] h3`).click();
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
      document.querySelector('[data-tab="checklist"]').classList.add("active");
      document.getElementById("checklist").classList.add("active");
    });
  });
});

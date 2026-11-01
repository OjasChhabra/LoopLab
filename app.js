const $ = (s) => document.querySelector(s);
const state = { topic: "All", difficulty: "All", search: "", selected: null, solved: new Set(JSON.parse(localStorage.getItem("looplab-solved") || "[]")) };
const list = $("#questionList");
const detail = $("#detailPanel");
function filtered() {
  return QUESTIONS.filter(q => (state.topic === "All" || q.topic === state.topic)
    && (state.difficulty === "All" || q.difficulty === state.difficulty)
    && (q.title + " " + q.id).toLowerCase().includes(state.search.toLowerCase()));
}
function renderList() {
  const items = filtered();
  $("#visibleCount").textContent = items.length;
  $("#resultLabel").textContent = "/ " + state.topic;
  $("#emptyState").classList.toggle("hidden", items.length !== 0);
  list.innerHTML = items.map(q => `<button class="question-card ${state.selected===q.id?"selected":""}" data-id="${q.id}">
    <div class="q-top"><span class="q-id">${q.id}</span><span class="q-status">${state.solved.has(q.id)?"✓ SOLVED":""}</span></div>
    <div class="q-title">${q.title}</div>
    <div class="q-meta"><span class="tag ${q.difficulty.toLowerCase()}">${q.difficulty}</span><span>${q.time}</span></div>
  </button>`).join("");
  list.querySelectorAll("[data-id]").forEach(btn => btn.addEventListener("click", () => selectQuestion(btn.dataset.id)));
  updateProgress();
}
function updateProgress() {
  $("#solvedCount").textContent = state.solved.size;
  $("#progressText").textContent = `${state.solved.size} / ${QUESTIONS.length} SOLVED`;
}
function selectQuestion(id) {
  state.selected = id;
  const q = QUESTIONS.find(x => x.id === id);
  renderList();
  detail.innerHTML = `<div class="detail-content">
    <div class="detail-top"><span class="detail-id">${q.id} / ${q.topic.toUpperCase()}</span><button class="solve-btn ${state.solved.has(q.id)?"done":""}" id="solveBtn">${state.solved.has(q.id)?"✓ COMPLETED":"MARK SOLVED +"}</button></div>
    <h2>${q.title}</h2>
    <div class="detail-tags"><span>${q.difficulty}</span><span>${q.time}</span><span>C++</span></div>
    <div class="detail-block"><h4>THE CHALLENGE</h4><p>${q.statement}</p></div>
    <div class="detail-block"><h4>INPUT / OUTPUT</h4><div class="io-grid"><div class="io-box"><label>INPUT</label><p>${q.input}</p></div><div class="io-box"><label>EXPECTED OUTPUT</label><p>${q.output}</p></div></div></div>
    <div class="detail-block"><h4>SAMPLE</h4><div class="io-grid"><div class="io-box"><label>INPUT</label><pre>${escapeHtml(q.sampleIn)}</pre></div><div class="io-box"><label>OUTPUT</label><pre>${escapeHtml(q.sampleOut)}</pre></div></div><p style="margin-top:8px;color:#8294a7;font-size:10px">${q.explanation}</p></div>
    <div class="detail-block"><h4>PROGRESSIVE HINTS</h4>${q.hints.map((h,i)=>`<div class="hint-row"><button class="hint-toggle" data-hint="${i}">＋ Hint ${i+1}</button><div class="hint-text hidden" id="hint-${i}">${h}</div></div>`).join("")}</div>
    <div class="detail-block"><h4>REFERENCE SOLUTION</h4>${q.solution ? `<button class="solution-toggle" id="solutionToggle">＋ REVEAL C++ SOLUTION</button><div class="solution-code hidden" id="solutionBox"><pre>${escapeHtml(q.solution)}</pre><button class="copy-btn" id="copyBtn">COPY CODE</button></div>` : `<div class="io-box"><p style="color:#e6bd67">Full statement, sample tests, and reference solution are being added to this question. Use it as an independent practice prompt for now.</p></div>`}</div>
  </div>`;
  $("#solveBtn").addEventListener("click", () => {
    if (state.solved.has(q.id)) state.solved.delete(q.id); else state.solved.add(q.id);
    localStorage.setItem("looplab-solved", JSON.stringify([...state.solved]));
    selectQuestion(q.id);
  });
  detail.querySelectorAll("[data-hint]").forEach(btn => btn.addEventListener("click", () => {
    const el = $("#hint-" + btn.dataset.hint); el.classList.toggle("hidden");
    btn.textContent = (el.classList.contains("hidden") ? "＋" : "−") + " Hint " + (Number(btn.dataset.hint)+1);
  }));
  if (q.solution) {
    $("#solutionToggle").addEventListener("click", () => {
      $("#solutionBox").classList.toggle("hidden");
      $("#solutionToggle").textContent = ($("#solutionBox").classList.contains("hidden") ? "＋ REVEAL C++ SOLUTION" : "− HIDE C++ SOLUTION");
    });
    $("#copyBtn").addEventListener("click", async () => {
      await navigator.clipboard.writeText(q.solution);
      $("#copyBtn").textContent = "COPIED ✓";
    });
  }
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
document.querySelectorAll("[data-topic]").forEach(btn => btn.addEventListener("click", () => {
  state.topic = btn.dataset.topic;
  document.querySelectorAll("[data-topic]").forEach(b => b.classList.toggle("active", b===btn));
  renderList();
}));
document.querySelectorAll("[data-difficulty]").forEach(btn => btn.addEventListener("click", () => {
  state.difficulty = btn.dataset.difficulty;
  document.querySelectorAll("[data-difficulty]").forEach(b => b.classList.toggle("active", b===btn));
  renderList();
}));
$("#searchInput").addEventListener("input", e => { state.search = e.target.value; renderList(); });
$("#totalCount").textContent = QUESTIONS.length;
$("#allTopicCount").textContent = QUESTIONS.length;
renderList();

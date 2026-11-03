/* Section focus ("⛶ מָסָךְ מָלֵא") — one lesson part alone, full screen, scaled up for the projector.
 * Add to any lesson page (Niflaot or Olam) with ONE line before </body>:
 *   <script src="../shared/section-focus.js"></script>
 * Units: every <section class="step"> — or, if a section contains .sf-part blocks, each .sf-part instead
 * (wrap sub-parts of a long section in <div class="sf-part"> to make them separate units).
 * Each unit gets a "⛶ מָסָךְ מָלֵא" button; clicking the section's tag / step-head also opens it.
 * In focus: the unit is fixed over the whole screen (Fullscreen API when allowed, CSS overlay otherwise), zoomed,
 * with a top bar: ✕ (or Esc), ◀ / ▶ next / previous unit, A− / A+ size. The unit stays in place in the DOM, so all its
 * scripts (cards, 3-2-1, reveals, drag and drop, timers) keep working. */
(() => {
'use strict';
const CSS = `
.sf-btn{position:absolute;top:8px;left:8px;z-index:5;font:800 15px "Noto Sans Hebrew",Arial,sans-serif;border:2px solid #7a5bd1;background:#fff;color:#3b2a82;border-radius:12px;padding:6px 12px;cursor:pointer;box-shadow:0 2px 6px #0002}
.sf-btn:hover{background:#efe9ff}
.sf-unit{position:relative}
.sf-click{cursor:zoom-in}
body.sf-on{overflow:hidden}
body.sf-on .site-nav{display:none}
.sf-cur{position:fixed!important;inset:0!important;z-index:9998!important;margin:0!important;max-width:none!important;width:auto!important;
  background:var(--bg,#fffaf3)!important;overflow:auto!important;padding:70px 3vw 40px!important;border-radius:0!important;zoom:var(--sf-zoom,1.3)}
.sf-cur > .sf-btn{display:none}
.sf-cur .n-pgbank{top:0!important}
.sf-bar{position:fixed;top:0;left:0;right:0;z-index:10000;display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;padding:8px 12px;
  background:rgba(35,35,58,.92);color:#fff;font:800 18px "Noto Sans Hebrew",Arial,sans-serif;direction:rtl}
.sf-bar button{font:800 20px "Noto Sans Hebrew",Arial,sans-serif;border:0;border-radius:12px;padding:8px 16px;cursor:pointer;background:#fff;color:#23233a}
.sf-bar .sf-x{background:#e2506a;color:#fff;font-size:24px;padding:6px 18px}
.sf-bar .sf-t{flex:1;text-align:center;min-width:120px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sf-bar[hidden]{display:none}`;
const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);

let units = [], cur = -1, zoom = +(localStorage.getItem('sf-zoom') || 1.3), bar;
const titleOf = u => { const e = u.querySelector('.lead, h3, .tag, .step-head'); return e ? e.textContent.replace(/\s+/g, ' ').trim().slice(0, 60) : ''; };
function build(){
  units = [];
  document.querySelectorAll('section.step').forEach(s => { const parts = s.querySelectorAll('.sf-part'); if (parts.length) units.push(...parts); else units.push(s); });
  units.forEach((u, i) => {
    u.classList.add('sf-unit');
    const b = document.createElement('button'); b.type = 'button'; b.className = 'sf-btn'; b.textContent = '⛶ מָסָךְ מָלֵא'; b.title = 'Full screen'; b.onclick = e => { e.stopPropagation(); open(i); };
    u.insertBefore(b, u.firstChild);
  });
  document.querySelectorAll('section.step').forEach(s => {
    const h = s.querySelector(':scope > .tag, :scope > .step-head, :scope > .m-bar'); if (!h) return;
    h.classList.add('sf-click'); h.title = 'מָסָךְ מָלֵא';
    h.addEventListener('click', e => { if (e.target.closest('a, button, input')) return; const i = units.findIndex(u => u === s || s.contains(u)); if (i >= 0) open(i); });
  });
  bar = document.createElement('div'); bar.className = 'sf-bar'; bar.hidden = true;
  bar.innerHTML = '<button type="button" class="sf-x" aria-label="סגירה">✕</button><button type="button" data-d="-1">▶ הַקּוֹדֵם</button><span class="sf-t"></span><button type="button" data-d="1">הַבָּא ◀</button><button type="button" data-z="-0.1" aria-label="smaller">A−</button><button type="button" data-z="0.1" aria-label="bigger">A+</button>';
  document.body.appendChild(bar);
  bar.querySelector('.sf-x').onclick = close;
  bar.querySelectorAll('[data-d]').forEach(b => b.onclick = () => go(+b.dataset.d));
  bar.querySelectorAll('[data-z]').forEach(b => b.onclick = () => { zoom = Math.min(2.2, Math.max(.8, +(zoom + +b.dataset.z).toFixed(2))); try { localStorage.setItem('sf-zoom', zoom); } catch (e) {} apply(); });
  document.addEventListener('keydown', e => { if (cur < 0) return; if (e.key === 'Escape') close(); });
  document.addEventListener('fullscreenchange', () => { if (!document.fullscreenElement && cur >= 0) close(true); });
}
function apply(){ if (cur >= 0) units[cur].style.setProperty('--sf-zoom', zoom); }
function show(i){
  if (cur >= 0){ units[cur].classList.remove('sf-cur'); units[cur].style.removeProperty('--sf-zoom'); }
  cur = i; const u = units[i]; u.classList.add('sf-cur'); u.scrollTop = 0; apply();
  u.querySelectorAll('details.q-opt').forEach(d => d.open = true);
  bar.querySelector('.sf-t').textContent = `${i + 1} / ${units.length} · ${titleOf(u)}`;
}
function open(i){
  document.body.classList.add('sf-on'); bar.hidden = false; show(i);
  const el = document.documentElement; if (!document.fullscreenElement && el.requestFullscreen) el.requestFullscreen().catch(() => {});
}
function go(d){ if (cur < 0) return; show((cur + d + units.length) % units.length); }
function close(fromFs){
  if (cur < 0) return; const u = units[cur]; u.classList.remove('sf-cur'); u.style.removeProperty('--sf-zoom'); cur = -1;
  document.body.classList.remove('sf-on'); bar.hidden = true;
  if (!fromFs && document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => {});
  u.scrollIntoView({ block: 'start' });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
window.SectionFocus = { open: i => open(i), close: () => close() };
})();

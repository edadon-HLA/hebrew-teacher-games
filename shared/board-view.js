/* shared/board-view.js — "📺 עַל הַלּוּחַ": show a printable sheet big on the board (teacher, 11/19: "you can create a virtual version so I can
   show it on the board as well").
   Usage on a lesson page: give the PDF link the sheet's HTML source and load this file once:
     <a class="rc" href="X.pdf" data-board="X.html">📄 …</a>      (optional data-board-key="3" = page number of the answer key)
     <script src="../shared/board-view.js"></script>
   The script adds a "📺 עַל הַלּוּחַ" button after every a[data-board]. The button opens a full-screen overlay with the sheet's own HTML in an
   iframe (nothing is redrawn): one printed page at a time, zoomed to fit the screen; ◀ / ▶ (and ← / →) move between pages, "👁 תְּשׁוּבוֹת"
   jumps to the answer-key / teacher-example page when there is one, ✕ / Esc closes. Pages = the sheet's top-level .page / .sheet / .sheet2 / .pg
   elements (the containers every printable on the site uses); a sheet without them is shown whole. Self-contained CSS (bv- classes). */
(function(){
  if (window.BoardView) return;
  const css = `
.bv-btn{display:inline-flex;align-items:center;gap:6px;font:800 16px 'Noto Sans Hebrew',Arial,sans-serif;border:2px solid #7a4cc2;background:#f6f0ff;color:#4b2a8a;border-radius:999px;padding:5px 14px;cursor:pointer;margin-inline-start:6px;vertical-align:middle;text-decoration:none}
.bv-btn:hover{background:#ebe0ff}
.bv-ov{position:fixed;inset:0;z-index:10100;background:#2b2a3a;display:flex;flex-direction:column}
.bv-bar{display:flex;align-items:center;gap:8px;padding:6px 10px;background:#1d1c29;color:#fff;font:800 16px 'Noto Sans Hebrew',Arial,sans-serif;direction:rtl}
.bv-bar b{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.bv-bar button{font:800 18px 'Noto Sans Hebrew',Arial,sans-serif;border:0;border-radius:10px;padding:6px 14px;background:#3d3b52;color:#fff;cursor:pointer}
.bv-bar button:hover{background:#55526e}.bv-bar button:disabled{opacity:.35;cursor:default}
.bv-bar .bv-key{background:#2f9d55}.bv-bar .bv-key.on{background:#1b7a3e;box-shadow:inset 0 0 0 2px #fff}
.bv-bar .bv-n{min-width:64px;text-align:center;direction:ltr}
.bv-frame{flex:1;border:0;width:100%;background:#fff}`;
  if (!document.getElementById('bv-css')){ const s = document.createElement('style'); s.id = 'bv-css'; s.textContent = css; document.head.appendChild(s); }
  const KEYRX = /Answer|מַפְתֵּחַ|מפתח|teacher example|דֻּגְמָה|דוגמה/i;

  function open(src, title, keyPage){
    const ov = document.createElement('div'); ov.className = 'bv-ov'; ov.setAttribute('role', 'dialog');
    ov.innerHTML = `<div class="bv-bar"><b>📺 ${title || ''}</b><button type="button" data-a="prev" aria-label="הַקּוֹדֵם">▶</button><span class="bv-n" data-a="n">…</span><button type="button" data-a="next" aria-label="הַבָּא">◀</button><button type="button" class="bv-key" data-a="key" hidden>👁 תְּשׁוּבוֹת</button><button type="button" data-a="x" aria-label="סְגִירָה">✕</button></div><iframe class="bv-frame" title="sheet"></iframe>`;
    (document.fullscreenElement || document.body).appendChild(ov);
    const q = s => ov.querySelector(`[data-a="${s}"]`), fr = ov.querySelector('iframe');
    /* views = one printed page each, or, on 2-per-page sheets, one half (.ws / .half) — the identical second copy is skipped */
    let pages = [], views = [], cur = 0, keyIdx = -1, doc = null;
    function fit(){
      if (!doc) return; const w = fr.clientWidth, h = fr.clientHeight, v = views[cur]; if (!v) return;
      pages.forEach(p => { p.style.display = p === v.page ? '' : 'none'; p.style.zoom = ''; });
      const el = v.el || v.page, r = el.getBoundingClientRect();
      const z = Math.min((w - 24) / r.width, (h - 24) / r.height); v.page.style.zoom = z > 0 ? z : 1;
      const se = doc.scrollingElement || doc.documentElement; se.scrollTop = 0; se.scrollLeft = 0;
      const r2 = el.getBoundingClientRect(); se.scrollTop = r2.top - 12;
      q('n').textContent = (cur + 1) + ' / ' + views.length; q('prev').disabled = cur === 0; q('next').disabled = cur === views.length - 1;
      q('key').classList.toggle('on', cur === keyIdx);
    }
    const go = i => { cur = Math.max(0, Math.min(views.length - 1, i)); fit(); };
    fr.addEventListener('load', async () => {
      doc = fr.contentDocument; if (!doc) return;
      try { if (doc.fonts && doc.fonts.ready) await doc.fonts.ready; } catch (e) {}
      await new Promise(r => setTimeout(r, 400));   /* let the sheet's own scripts finish (answer-key lines are drawn after fonts.ready) */
      const st = doc.createElement('style');
      st.textContent = 'html,body{background:#fff!important;margin:0!important;padding:0!important;overflow:hidden!important;min-height:300vh}.page,.sheet,.sheet2,.pg{box-shadow:none!important;margin:12px auto!important}';
      doc.head.appendChild(st);
      const all = [...doc.querySelectorAll('.page, .sheet, .sheet2, .pg')];
      pages = all.filter(el => !all.some(o => o !== el && o.contains(el)));
      if (!pages.length) pages = [doc.body];
      views = [];
      pages.forEach(p => { const hs = [...p.querySelectorAll('.ws, .half')].filter((el, i, a) => !a.some(o => o !== el && o.contains(el)) && el.textContent.trim());
        if (!hs.length){ views.push({ page: p }); return; }
        hs.forEach((el, i) => { if (i > 0 && el.innerHTML === hs[0].innerHTML) return; views.push({ page: p, el }); }); });
      keyIdx = keyPage ? keyPage - 1 : views.findIndex((v, i) => i > 0 && KEYRX.test((v.el || v.page).textContent));
      if (keyIdx >= views.length) keyIdx = -1;
      q('key').hidden = keyIdx < 0;
      go(0);
    });
    fr.src = src;
    const close = () => { window.removeEventListener('keydown', onKey, true); window.removeEventListener('resize', fit); ov.remove(); };
    const onKey = e => { if (e.key === 'Escape'){ e.preventDefault(); e.stopPropagation(); close(); } else if (e.key === 'ArrowLeft'){ e.preventDefault(); go(cur + 1); } else if (e.key === 'ArrowRight'){ e.preventDefault(); go(cur - 1); } };
    window.addEventListener('keydown', onKey, true); window.addEventListener('resize', fit);
    q('x').onclick = close; q('next').onclick = () => go(cur + 1); q('prev').onclick = () => go(cur - 1); q('key').onclick = () => { if (keyIdx >= 0) go(keyIdx); };
    return { close, go };
  }
  function attach(root){
    (root || document).querySelectorAll('a[data-board]').forEach(a => {
      if (a.dataset.bvDone) return; a.dataset.bvDone = '1';
      const b = document.createElement('button'); b.type = 'button'; b.className = 'bv-btn'; b.textContent = '📺 עַל הַלּוּחַ';
      b.title = 'Show this sheet on the board';
      const title = a.textContent.replace(/^[^\p{L}]+/u, '').trim();
      b.onclick = () => open(new URL(a.dataset.board, location.href).href, title, +a.dataset.boardKey || 0);
      a.insertAdjacentElement('afterend', b);
    });
  }
  window.BoardView = { open, attach };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => attach()); else attach();
})();

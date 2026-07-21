/* Northbound flow — HKEX northbound capital flow via Sina Finance (free, no key). */
(function () {
  'use strict';
  window.GT_EXTRA_TOOLS = window.GT_EXTRA_TOOLS || {};

  const fmtB = (v) => {
    if (v >= 1e8) return `${(v / 1e8).toFixed(2)}亿`;
    if (v >= 1e4) return `${(v / 1e4).toFixed(1)}万`;
    return `${Math.round(v)}`;
  };

  window.GT_EXTRA_TOOLS['northbound'] = {
    mount(el, setStatus) {
      el.innerHTML = `<div class="tool" style="padding:12px"><div class="tool-hint">加载中…</div></div>`;
      let alive = true;
      let controller = null;
      const load = async () => {
        if (controller) controller.abort();
        controller = new AbortController();
        try {
          const res = await fetch('https://push2.eastmoney.com/api/qt/kamt.rtmin/get?fields1=f1,f2,f3,f4&fields2=f51,f52,f53,f54,f55,f56', { signal: controller.signal });
          const json = await res.json();
          if (!alive) return;
          const data = json.data;
          const sh = parseFloat(data.s2n) || 0;
          const sz = parseFloat(data.s2s) || 0;
          const total = sh + sz;
          const html = `
            <div style="display:flex;flex-direction:column;gap:10px;font-family:var(--font-mono);font-size:12px">
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--hairline)">
                <span>沪股通</span><span class="${sh >= 0 ? 'pos' : 'neg'}">${sh >= 0 ? '+' : ''}${fmtB(sh)}</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--hairline)">
                <span>深股通</span><span class="${sz >= 0 ? 'pos' : 'neg'}">${sz >= 0 ? '+' : ''}${fmtB(sz)}</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;font-weight:600;font-size:14px">
                <span>北向合计</span><span class="${total >= 0 ? 'pos' : 'neg'}">${total >= 0 ? '+' : ''}${fmtB(total)}</span>
              </div>
            </div>`;
          el.firstElementChild.innerHTML = html;
          setStatus('online');
        } catch (e) { if (!alive) return; setStatus('offline'); }
      };
      load();
      const timer = setInterval(load, 60000);
      return () => { alive = false; clearInterval(timer); if (controller) controller.abort(); };
    },
  };
})();
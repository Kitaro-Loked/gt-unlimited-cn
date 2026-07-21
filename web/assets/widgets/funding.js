/* Binance funding rates (free public API, no key). */
(function () {
  'use strict';
  window.GT_EXTRA_TOOLS = window.GT_EXTRA_TOOLS || {};

  const SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'SOLUSDT', 'XRPUSDT', 'BNBUSDT', 'DOGEUSDT', 'ADAUSDT', 'AVAXUSDT'];

  window.GT_EXTRA_TOOLS['funding'] = {
    mount(el, setStatus) {
      el.innerHTML = `<div class="tool" style="padding:12px"><div class="tool-hint">加载中…</div></div>`;
      let alive = true;
      const load = async () => {
        try {
          const res = await fetch(`https://fapi.binance.com/fapi/v1/premiumIndex?symbols=${encodeURIComponent(JSON.stringify(SYMBOLS))}`);
          const data = await res.json();
          if (!alive) return;
          const rows = data.map((d) => {
            const rate = parseFloat(d.lastFundingRate) * 100;
            return `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--hairline);font-family:var(--font-mono);font-size:12px"><span>${d.symbol.replace('USDT','')}</span><span class="${rate >= 0 ? 'pos' : 'neg'}">${rate >= 0 ? '+' : ''}${rate.toFixed(4)}%</span></div>`;
          }).join('');
          el.firstElementChild.innerHTML = rows;
          setStatus('online');
        } catch (e) { if (!alive) return; setStatus('offline'); }
      };
      load();
      const timer = setInterval(load, 300000);
      return () => { alive = false; clearInterval(timer); };
    },
  };
})();
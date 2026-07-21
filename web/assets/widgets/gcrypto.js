/* Global crypto market overview (CoinGecko free, no key). */
(function () {
  'use strict';
  window.GT_EXTRA_TOOLS = window.GT_EXTRA_TOOLS || {};

  window.GT_EXTRA_TOOLS['gcrypto'] = {
    mount(el, setStatus) {
      el.innerHTML = `<div class="tool" style="padding:12px"><div class="tool-hint">加载中…</div></div>`;
      let alive = true;
      const load = async () => {
        try {
          const res = await fetch('https://api.coingecko.com/api/v3/global');
          const json = await res.json();
          if (!alive) return;
          const d = json.data;
          const mcap = (d.total_market_cap.usd / 1e12).toFixed(2);
          const vol = (d.total_volume.usd / 1e9).toFixed(1);
          const btcDom = d.market_cap_percentage.btc.toFixed(1);
          const ethDom = d.market_cap_percentage.eth.toFixed(1);
          const mcapChg = d.market_cap_change_percentage_24h_usd.toFixed(2);
          const html = `
            <div style="display:flex;flex-direction:column;gap:10px;font-family:var(--font-mono);font-size:12px">
              <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--hairline)"><span>总市值</span><span>$${mcap}T <span class="${mcapChg >= 0 ? 'pos' : 'neg'}">(${mcapChg >= 0 ? '+' : ''}${mcapChg}%)</span></span></div>
              <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--hairline)"><span>24h 成交量</span><span>$${vol}B</span></div>
              <div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--hairline)"><span>BTC 占比</span><span>${btcDom}%</span></div>
              <div style="display:flex;justify-content:space-between;padding:6px 0"><span>ETH 占比</span><span>${ethDom}%</span></div>
            </div>`;
          el.firstElementChild.innerHTML = html;
          setStatus('online');
        } catch (e) { if (!alive) return; setStatus('offline'); }
      };
      load();
      const timer = setInterval(load, 60000);
      return () => { alive = false; clearInterval(timer); };
    },
  };
})();
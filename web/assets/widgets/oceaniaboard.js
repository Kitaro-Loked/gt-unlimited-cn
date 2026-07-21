/* Oceania board — AU/NZ market overview (TradingView embed). */
(function () {
  'use strict';
  window.GT_EXTRA_TOOLS = window.GT_EXTRA_TOOLS || {};

  window.GT_EXTRA_TOOLS['oceaniaboard'] = {
    mount(el, setStatus) {
      el.innerHTML = `<div class="tradingview-widget-container" style="height:100%"><div class="tradingview-widget-container__widget"></div></div>`;
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
      script.text = JSON.stringify({
        width: '100%', height: '100%', isTransparent: true, showFloatingTooltip: true,
        dateRange: '1D', showChart: true, showSymbolLogo: true,
        tabs: [{
          title: '大洋洲',
          symbols: [
            { s: 'ASX:XJO', d: 'ASX 200' },
            { s: 'NZX:NZ50', d: 'NZX 50' },
            { s: 'ASX:BHP', d: 'BHP' },
            { s: 'ASX:CBA', d: 'CommBank' },
            { s: 'ASX:CSL', d: 'CSL' },
            { s: 'NZE:AIR', d: 'Air NZ' },
          ]
        }]
      });
      el.firstElementChild.appendChild(script);
      setStatus('online');
    },
  };
})();
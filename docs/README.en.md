<div align="center">

# GT UNLIMITED — Financial Terminal

### GT UNLIMITED — self-hosted financial terminal (multilingual, open source)

English | [中文](../README.md)

</div>

A self-hosted, single-page financial monitoring terminal inspired by Bloomberg / TradingView. Built with vanilla HTML/CSS/JS and designed for traders who want a centralized dashboard for global markets, derivatives, risk, macro events and news.

- **Official instance**: https://trading.2009731.xyz
- **Chinese repository (primary)**: https://github.com/Kitaro-Loked/gt-unlimited-cn ⭐
- **English repository (mirror)**: https://github.com/Kitaro-Loked/gt-unlimited

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Data Sources](#data-sources)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

---

## Introduction

**GT UNLIMITED** is an open-source financial monitoring terminal for professional traders and financial practitioners. Without complex build steps, this single-page application provides institutional-grade market monitoring, derivatives analysis, portfolio risk management, and macro event tracking capabilities.

### Use Cases

- 📊 **Day Trading** — Real-time multi-asset monitoring with quick market switching
- 📈 **Portfolio Management** — VaR calculation, attribution analysis, stress testing
- 🔍 **Fundamental Research** — Financial statements, sell-side research, valuation models
- 🌍 **Macro Trading** — Global event tracking, central bank rates, yield curves
- 📰 **News-Driven** — Multi-source RSS aggregation with TTS broadcast

---

## Features

### Multi-Asset Market Data
- **Global Markets**: Stocks, crypto, FX, commodities, rates, ETFs
- **TradingView Integration**: Main chart, heat-maps, technical analysis, scanners
- **Real-time Data**: Free APIs via Yahoo Finance, Binance, etc.

### Derivatives Toolbox
- **Options Chain & Lab**: Real-time Greeks, implied volatility analysis
- **Volatility Surface**: 2D/3D visualization
- **Swaps Pricing**: Interest rate, credit, and commodity swaps
- **Structured Products**: Snowball, reverse convertible bonds pricing

### Portfolio & Risk Management
- Real-time PnL & Attribution Analysis
- Beta / Alpha calculation
- **VaR Engine**:
  - Parametric (Variance-Covariance)
  - Historical Simulation
  - Monte Carlo Simulation
- Stress Testing with custom scenarios
- Bond Duration / Convexity analysis

### Fundamental Analysis
- Financial statements (20+ years standardized & raw)
- Auto-adjusted financial ratios
- Company profile (DES) & ownership analysis
- Sell-side research (RES): Morgan Stanley, Goldman Sachs, etc.
- Global M&A deals database
- Valuation models: DCF, Comps, Precedent Transactions

### Macro & Global Events
- Interactive 2D/3D globe (globe.gl)
- Risk monitors, central bank rates, yield curves
- Economic calendar with event severity levels

### Newsroom & Audio
- Multi-source RSS news wall
- Text-to-speech (TTS) broadcast
- Broadcast dashboard
- Built-in radio/streaming player

### Workspace Presets
One-click dashboards:
- 🇨🇳 **A-Shares** — CSI indices, sector heat, dragon/tiger list
- 🇺🇸 **US Tech** — NASDAQ, S&P, tech giants
- ₿ **Crypto** — BTC, ETH, major exchanges
- 🌐 **FX & Commodities** — Major pairs, gold, crude oil
- ⚠️ **Risk Center** — VaR, stress tests, correlation matrix
- 📰 **News Live** — Full-screen news wall + TTS

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vanilla HTML5 / CSS3 / JavaScript (zero build step) |
| **Layout** | [GridStack](https://gridstackjs.com/) — draggable, resizable widgets |
| **Charts** | [TradingView](https://www.tradingview.com/widget/) embed widgets |
| **Maps/Globe** | Leaflet + [globe.gl](https://globe.gl/) |
| **Proxy** | Lightweight Node.js CORS proxy (`api/proxy-server.js`) |
| **Production** | [Caddy](https://caddyserver.com/) — auto HTTPS, reverse proxy |

---

## Quick Start

### A. IP + Port (Fastest, HTTP)

```bash
git clone https://github.com/Kitaro-Loked/gt-unlimited.git
cd gt-unlimited
node api/proxy-server.js
```

Open `http://<server-ip>:3456`

> Default port: `3456`. Change with: `PORT=8080 node api/proxy-server.js`

### B. Domain + Auto HTTPS (Production)

```bash
cd gt-unlimited

cp Caddyfile.example Caddyfile
# Edit Caddyfile: replace example.com with your domain

node api/proxy-server.js &
caddy run
```

Requirements:
- DNS A record → server IP
- Ports 80 / 443 open
- Caddy auto-renews Let's Encrypt certificates

### C. Local Development

```bash
git clone https://github.com/Kitaro-Loked/gt-unlimited.git
cd gt-unlimited
node api/proxy-server.js &
# Open http://localhost:3456
```

---

## Project Structure

```
gt-unlimited/
├── api/                       # Node.js CORS proxy
├── web/                       # Frontend static files
│   ├── index.html             # Main entry
│   ├── assets/                # Styles, scripts, images, fonts
│   ├── config.example.js      # Auth template
│   └── sw.js                  # Service Worker
├── scripts/                   # Helper scripts
├── docs/                      # Multilingual documentation
├── Caddyfile.example          # Caddy config template
├── .gitignore
├── LICENSE                    # MIT License
└── README.md                  # English main documentation
```

---

## Configuration

### Enable Login Authentication

```bash
cp web/config.example.js web/config.js
# Edit web/config.js with your credentials
```

Add to `web/index.html` **before** `/assets/app.js`:

```html
<script src="/config.js"></script>
```

> `web/config.js` is git-ignored.

### Custom Data Sources

Edit `api/proxy-server.js`:

```javascript
const PROXY_CONFIG = {
  '/api/yahoo': 'https://query1.finance.yahoo.com',
  '/api/binance': 'https://api.binance.com',
  // Add your custom APIs
};
```

---

## Data Sources

All data comes from free public APIs via `/api/proxy`:

| Data Type | Source |
|-----------|--------|
| Stocks | Yahoo Finance |
| Crypto | Binance |
| FX Rates | Frankfurter |
| Macro | FRED |
| Events | GDACS |
| News | BBC, Reuters RSS |

---

## Roadmap

### Near-term (Q3 2026)
- [ ] 3D volatility surface visualization
- [ ] Interest-rate / credit / commodity swap calculators
- [ ] Structured product pricing engine

### Mid-term (Q4 2026)
- [ ] Standardized financial statement teardown (20+ years)
- [ ] Sell-side research aggregation and full-text search
- [ ] Portfolio attribution and risk models

### Long-term (2027)
- [ ] Excel / Google Sheets add-on
- [ ] 2D/3D globe feature parity
- [ ] News TTS broadcast dashboard
- [ ] Stable audio player

See [ARCHITECTURE.md](ARCHITECTURE.md) for design details.

---

## Contributing

We welcome contributors from all languages and backgrounds!

### Priority Areas

- 🔧 Derivatives pricing: vol surface, swaps, structured products
- 📊 Fundamental data: financial statement parsing, ratio adjustments
- ⚠️ Risk models: VaR, stress testing, attribution
- 🌍 Globe/map features: 2D/3D event visualization
- 📰 Newsroom: RSS aggregation, TTS, audio fixes
- 🌐 Translations and documentation
- 📎 Excel / Google Sheets plugin prototypes

### Workflow

1. Fork this repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit and test
4. Open Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

[MIT License](../LICENSE) © 2026 Kitaro-Loked

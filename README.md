<div align="center">

# GT UNLIMITED — 金融终端

[English](docs/README.en.md) | 中文（主文档）

</div>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)
[![Deploy](https://img.shields.io/badge/部署-一键启动-blue.svg)](#快速开始)

</div>

> 一个自托管、单页的金融监控终端，灵感来自 Bloomberg / TradingView。使用原生 HTML/CSS/JS 构建，面向希望拥有集中式全球行情、衍生品、风险、宏观事件与新闻看板的交易者。

- **🌐 在线演示**: https://trading.2009731.xyz
- **📦 中文主仓库**: https://github.com/Kitaro-Loked/gt-unlimited-cn
- **📦 英文副仓库**: https://github.com/Kitaro-Loked/gt-unlimited

---

## 📋 目录

- [项目简介](#项目简介)
- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [配置说明](#配置说明)
- [数据源](#数据源)
- [开发路线](#开发路线)
- [如何贡献](#如何贡献)
- [行为准则](#行为准则)
- [开源许可](#开源许可)

---

## 🏦 项目简介

**GT UNLIMITED** 是一款面向专业交易者和金融从业者的开源金融监控终端。无需复杂构建步骤，单页应用即可提供接近机构级的行情监控、衍生品分析、投资组合风险管理和宏观事件追踪能力。

### 适用场景

- 📊 **日内交易** — 实时监控多资产行情，快速切换市场视角
- 📈 **投资组合管理** — VaR 测算、归因分析、压力测试
- 🔍 **基本面研究** — 财务报表、卖方研报、估值模型
- 🌍 **宏观交易** — 全球事件追踪、央行利率、收益率曲线
- 📰 **新闻驱动** — 多源 RSS 聚合、TTS 语音播报

---

## ✨ 功能特性

### 多资产行情监控
- **全球市场**：A股、港股、美股、加密货币、外汇、大宗商品、利率、ETF
- **TradingView 深度集成**：主图、热力图、技术分析工具、扫描器
- **实时数据**：通过 CORS 代理获取 Yahoo Finance、Binance 等免费 API 数据

### 衍生品工具箱
- **期权链与期权实验室**：实时 Greeks、隐含波动率分析
- **波动率曲面（Volatility Surface）**：2D/3D 可视化
- **互换（Swaps）定价**：利率互换、信用互换、商品互换现金流分析
- **结构化产品**：雪球、反向可转换债券等定价与情景分析

### 投资组合与风险管理
- **实时 PnL 与归因分析**（Attribution Analysis）
- **Beta / Alpha 测算**：基于历史数据与市场基准
- **VaR 计算引擎**：
  - 参数法（方差-协方差）
  - 历史模拟法
  - 蒙特卡洛模拟法
- **压力测试**（Stress Testing）：自定义情景与历史回溯
- **债券分析**：久期（Duration）/ 凸性（Convexity）拉动分析

### 基本面与财务分析
- **财务报表**：超过 20 年的标准化与原始数据（FA）
- **自动财务比率**：自动调整后比率计算
- **公司概况**（DES）：管理层信息、股权结构
- **卖方研究**（RES）：摩根士丹利、高盛等投行研报聚合
- **并购数据库**（M&A Deals）：全球交易追踪
- **估值模型**：DCF、可比公司分析（Comps）、 precedent transactions

### 宏观与全球事件
- **交互式地球仪**：2D / 3D  globe.gl 可视化全球事件
- **风险监控**：央行利率、收益率曲线、经济日历
- **事件层级**：可切换显示的新闻事件重要性分级

### 新闻室与音频
- **多源 RSS 新闻墙**：BBC、Reuters、财经新闻实时聚合
- **TTS 语音播报**：文本转语音自动播报重大新闻
- **广播看板**：可直接播放新闻的独立界面
- **背景音乐播放器**：内置电台/流媒体播放器

### 工作区预设
一键切换预设看板：
- 🇨🇳 **A股全景** — 沪深主要指数、板块热度、龙虎榜
- 🇺🇸 **美股科技** — 纳斯达克、标普、科技巨头
- ₿ **加密货币** — BTC、ETH、主要交易所行情
- 🌐 **外汇大宗** — 主要货币对、黄金、原油
- ⚠️ **风控中心** — VaR、压力测试、相关性矩阵
- 📰 **新闻直播** — 全屏新闻墙 + TTS 播报

---

## 🛠 技术栈

| 层级 | 技术 |
|------|------|
| **前端** | 原生 HTML5 / CSS3 / JavaScript（零构建步骤） |
| **布局引擎** | [GridStack](https://gridstackjs.com/) — 可拖拽、可调整大小的 Widget 布局 |
| **图表组件** | [TradingView](https://www.tradingview.com/widget/) 嵌入 Widget |
| **地图/地球仪** | Leaflet + [globe.gl](https://globe.gl/) |
| **代理服务** | 轻量级 Node.js CORS 代理（`api/proxy-server.js`） |
| **生产服务器** | [Caddy](https://caddyserver.com/) — 自动 HTTPS、反向代理 |

### 架构特点

- **无构建步骤**：直接部署静态文件，无需 Webpack/Vite
- **Widget 化设计**：每个面板独立，可自由组合
- **配置优先**：通过 `web/config.js` 启用功能，无需修改源码
- **CORS 代理**：浏览器直接请求金融 API 受限，代理解决跨域问题

---

## 🚀 快速开始

GT UNLIMITED 可在任意服务器部署，以下提供三种启动方式。

### 方式一：IP + 端口（最快，纯 HTTP）

无需域名或 Caddy，Node 代理直接提供静态服务。

```bash
# 克隆仓库
git clone https://github.com/Kitaro-Loked/gt-unlimited-cn.git
cd gt-unlimited-cn

# 启动代理（同时提供静态文件服务）
node api/proxy-server.js
```

访问 `http://<服务器IP>:3456`

> 默认监听 `0.0.0.0:3456`。修改端口：`PORT=8080 node api/proxy-server.js`

### 方式二：绑定域名 + 自动 HTTPS（推荐生产环境）

```bash
cd gt-unlimited-cn

# 1. 复制 Caddy 配置模板并编辑域名
cp Caddyfile.example Caddyfile
# 编辑 Caddyfile，将 example.com 替换为你的域名

# 2. 启动 CORS 代理
node api/proxy-server.js &

# 3. 启动 Caddy
caddy run
```

**自动 HTTPS 前提条件**：
- ✅ DNS A 记录指向服务器 IP
- ✅ 服务器 80 / 443 端口对外开放
- ✅ Caddy 自动向 Let's Encrypt 申请并续期证书

### 方式三：本地开发

```bash
git clone https://github.com/Kitaro-Loked/gt-unlimited-cn.git
cd gt-unlimited-cn
node api/proxy-server.js &
# 打开 http://localhost:3456
```

---

## 📁 项目结构

```
gt-unlimited-cn/
├── 📂 api/                    # Node.js CORS 代理服务
│   └── proxy-server.js        # 轻量级 Express 代理
│
├── 📂 web/                    # 前端静态文件（单页应用）
│   ├── index.html             # 单页入口
│   ├── assets/                # 样式、脚本、图片、字体
│   │   ├── app.js             # 主应用逻辑
│   │   ├── widgets/           # 各功能模块 Widget
│   │   └── styles/            # 全局样式
│   ├── config.example.js      # 登录配置模板
│   └── sw.js                  # Service Worker（离线缓存）
│
├── 📂 scripts/                # 辅助脚本
│   └── setup.sh               # 一键安装脚本
│
├── 📂 docs/                   # 多语言文档
│   ├── README.en.md           # 英文文档
│   ├── README.zh-CN.md        # 中文文档（副本）
│   ├── ARCHITECTURE.md        # 架构设计文档
│   ├── CONTRIBUTING.md        # 贡献指南
│   └── CODE_OF_CONDUCT.md     # 行为准则
│
├── Caddyfile.example          # Caddy 配置模板
├── .gitignore                 # Git 忽略规则
├── LICENSE                    # MIT 许可证
└── README.md                  # 中文主文档（本文件）
```

---

## ⚙️ 配置说明

### 启用登录认证

默认无需登录即可访问。如需启用简单登录：

```bash
cp web/config.example.js web/config.js
# 编辑 web/config.js，设置用户名和密码
```

在 `web/index.html` 中 **于 `/assets/app.js` 之前** 添加：

```html
<script src="/config.js"></script>
```

> `web/config.js` 已被 Git 忽略，密码不会提交到仓库。

### 自定义数据源

编辑 `api/proxy-server.js` 中的代理规则，添加或修改 API 端点：

```javascript
const PROXY_CONFIG = {
  '/api/yahoo': 'https://query1.finance.yahoo.com',
  '/api/binance': 'https://api.binance.com',
  // 添加你的自定义 API
};
```

---

## 📡 数据源

所有数据来源于免费公开 API 和 RSS 源，通过 `/api/proxy` 代理转发以解决浏览器 CORS 限制：

| 数据类型 | 来源 |
|---------|------|
| 股票行情 | Yahoo Finance |
| 加密货币 | Binance |
| 外汇汇率 | Frankfurter |
| 宏观数据 | FRED (美联储经济数据) |
| 全球事件 | GDACS |
| 新闻 | BBC, Reuters RSS |

> 如需接入付费数据源（如 Wind、Bloomberg、Refinitiv），可自行扩展 `web/assets/data-adapters/` 目录下的适配器。

---

## 🗺 开发路线

### 近期（Q3 2026）
- [ ] 期权波动率曲面 3D 可视化
- [ ] 利率 / 信用 / 商品互换计算器
- [ ] 结构化产品定价引擎（雪球、反向可转债等）

### 中期（Q4 2026）
- [ ] 标准化财务报表拆解（20+ 年历史数据）
- [ ] 卖方研报聚合与全文检索
- [ ] 投资组合归因与风险模型完善

### 远期（2027）
- [ ] Excel / Google Sheets 插件（财务建模与估值）
- [ ] 3D 地球仪与 2D 地图功能对齐
- [ ] 新闻 TTS 广播看板
- [ ] 音乐播放器稳定性优化

详细架构设计请参阅 [ARCHITECTURE.md](docs/ARCHITECTURE.md)。

---

## 🤝 如何贡献

GT UNLIMITED 欢迎全球开发者参与贡献！无论你擅长前端开发、金融建模、数据分析还是文档翻译，都能找到适合的方向。

### 优先需要帮助的领域

- 🔧 **衍生品定价**：期权波动率曲面、互换定价、结构化产品
- 📊 **基本面数据**：财务报表解析、比率自动调整
- ⚠️ **风险模型**：VaR 引擎优化、压力测试框架、归因分析
- 🌍 **地球仪/地图**：2D 与 3D 事件可视化对齐
- 📰 **新闻室**：RSS 聚合优化、TTS 引擎、音频播放器
- 🌐 **多语言翻译**：西班牙语、法语、日语等文档翻译
- 📎 **插件生态**：Excel / Google Sheets 插件原型

### 贡献流程

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/你的功能名`
3. 提交代码并测试
4. 发起 Pull Request（PR 模板见 `.github/PULL_REQUEST_TEMPLATE.md`）

详细指南请参阅 [CONTRIBUTING.md](docs/CONTRIBUTING.md)。

---

## 📜 行为准则

本项目遵循 [Contributor Covenant](docs/CODE_OF_CONDUCT.md) 行为准则，致力于为所有参与者提供一个开放、友好、安全的协作环境。

---

## 📄 开源许可

本项目基于 [MIT License](LICENSE) 开源协议发布。

Copyright © 2026 [Kitaro-Loked](https://github.com/Kitaro-Loked)

---

<div align="center">

⭐ **如果本项目对你有帮助，请点亮 Star 支持我们！** ⭐

[在线演示](https://trading.2009731.xyz) · [问题反馈](../../issues) · [功能建议](../../discussions)

</div>

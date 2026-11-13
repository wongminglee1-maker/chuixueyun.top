# 吹雪云官网 · Yuki Minimal 独立 URL 多页面品牌官网

> **风吹云雪，畅行云间** —— 以轻盈之名，探索更广阔的网络世界。

* 官方唯一域名：`https://chuixueyun.top`
* 官方注册通道：`https://varnexa.lingdongaff.com/#/?code=HHoxxHGa`

---

## 📖 项目简介

本项目为 **吹雪云（ChuiXue Cloud）** 官方品牌多页面官网，采用 **Yuki Minimal · 日系雪境** 极简美学设计规范，已完成由单页落地页到 **7 个独立路由页面 + 6 篇独立 SEO 技术专栏长文** 的完整架构升级。

### 🌟 7 个独立页面路由架构
1. **首页**：`/` (`index.html`) —— 品牌 Hero 视觉区、核心数据指标、品牌速览、5 款套餐卡片及快捷入口。
2. **关于吹雪云**：`/about/` (`about/index.html`) —— 品牌宣言、创立初衷、服务定位、基础设施与零日志安全承诺。
3. **套餐价格（¥2起）**：`/pricing/` (`pricing/index.html`) —— 5 款实际套餐深度对照、原版价目表图、技术参数矩阵与购买须知。
4. **核心优势**：`/advantages/` (`advantages/index.html`) —— 6 大技术优势详析、全平台客户端兼容矩阵与典型场景剖析。
5. **技术专栏（6篇精选）**：`/articles/` (`articles/index.html`) —— 专栏文章聚合中心，含文章摘要、字数及阅读时长。
6. **用户评价**：`/reviews/` (`reviews/index.html`) —— 6 位不同领域用户真实深度评测反馈与口碑统计看板。
7. **常见问题**：`/faq/` (`faq/index.html`) —— 包含套餐支付、客户端配置、设备共享、Claude解锁与排障指南的交互手风琴。

---

## 📂 项目完整文件结构

```
chuixueyun.top/
├── index.html                   # 首页 (/)
├── 404.html                     # 友好 404 错误页
├── style.css                    # Yuki Minimal 核心样式表
├── main.js                      # 交互脚本（FAQ手风琴、移动端抽屉、延迟动态监测）
├── server.js                    # 本地多页面静态测试服务脚本
├── robots.txt                   # 搜索引擎抓取协议（配置 Bingbot/Googlebot）
├── sitemap.xml                  # 标准 XML 网站地图（收录全部 13 个独立 URL）
├── README.md                    # 项目说明文档
│
├── about/                       # 关于吹雪云 (/about/)
│   └── index.html
├── pricing/                     # 套餐价格 (/pricing/)
│   └── index.html
├── advantages/                  # 核心优势 (/advantages/)
│   └── index.html
├── reviews/                     # 用户评价 (/reviews/)
│   └── index.html
├── faq/                         # 常见问题 (/faq/)
│   └── index.html
│
├── assets/                      # 静态资源
│   ├── logo.svg                 # 吹雪云专属矢量图形 LOGO
│   ├── favicon.svg              # 网站雪花图标
│   └── pricing-table.png        # 官方价格对照图
│
└── articles/                    # 技术专栏 (/articles/)
    ├── index.html                               # 专栏聚合列表主页
    ├── dns-leak-prevention.html                 # 机场DNS泄露解决 (独立长文)
    ├── airport-connection-troubleshooting.html  # 机场连接失败怎么办 (独立长文)
    ├── claude-ai-airport-guide.html             # Claude AI机场 (独立长文)
    ├── multi-device-airport-setup.html          # 多设备使用机场 (独立长文)
    ├── airport-review-2026.html                 # 机场测评 (独立长文)
    └── best-vpn-recommendation-2026.html        # VPN推荐2026 (独立长文)
```

---

## 🔍 Bing & Google SEO 体系设计

* **唯一元数据**：每个页面均配置独一无二的 `<title>`、`<meta description>` 及主要 `<h1>` 标题。
* **规范链接 (Canonical)**：每个独立页面均配置标准指向其绝对 URL（如 `https://chuixueyun.top/about/`）。
* **Schema.org 结构化数据**：包含 `WebSite`、`Organization`、`Product/AggregateOffer`、`AboutPage`、`FAQPage`、`CollectionPage` 与 `Article`。
* **状态码与死链预防**：所有正常页面均返回标准 HTTP 200，不存在页面返回 404 状态，全站内链与面包屑 100% 连通闭环。

---

## 🚀 部署与上线指南

由于采用纯净的现代标准静态多目录结构（`/about/index.html` 对应 `/about/`），无需复杂构建命令，可直接部署在：
* **Cloudflare Pages**（推荐：全球 CDN 边缘加速）
* **Vercel / Netlify**
* **GitHub Pages**
* **Nginx / 宝塔面板**（配置 `try_files $uri $uri/ /index.html;`）

---

© 2026 吹雪云 (chuixueyun.top). All rights reserved.

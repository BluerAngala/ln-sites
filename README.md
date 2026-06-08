# 岭南律师事务所 · 官网

> 广东岭南律师事务所（Guangdong Lingnan Law Firm）官网源码仓库。
> 创立于 1984 年，学院派综合性大所，公司商事、争议解决、知识产权、跨境投资、刑事辩护、资本市场等业务领域。

本仓库托管：

1. **`web/`** — 选定的**正式版官网方案**（Astro 5 + 飞书多维表格 CMS）
2. **`site/`** — 设计稿 A：墨分五色 / The Counsel / Lex A（备选）
3. **`sites/`** — 设计稿 B：学院派（带深 / 浅 / 编辑三主题切换，备选）
4. **`docs/`** — 飞书建表操作指南

---

## 一、`web/` 官网主仓库

技术栈：**Astro 5 静态站 + 飞书多维表格作 CMS**。

- 视觉风格：复用 `site/01-lingnan-yin/` 的墨分五色 + 印章 + 大字
- 内容管理：律师/助理在飞书多维表格里加案例、改数字，网站自动同步
- **无需飞书凭证也能跑**（用本地 mock 兜底）
- 部署支持：Vercel / Netlify / Cloudflare Pages / 任意静态托管
- 完全开源（MIT 依赖）

### 快速开始

```bash
cd web
npm install
cp .env.example .env       # 可选：填飞书凭证
npm run dev                # http://localhost:4321
```

### 接入飞书

1. 飞书开放平台建自建应用（5 分钟）
2. 创建一个多维表格「岭南所官网内容库」，按 [docs/FEISHU_CMS.md](docs/FEISHU_CMS.md) 建 8 张表
3. 复制 Base Token + 8 个 Table ID 到 `.env`
4. 跑 `npm run lark:test` 验证连通
5. 跑 `npm run build` 部署

### 飞书建表操作指南

→ [docs/FEISHU_CMS.md](docs/FEISHU_CMS.md)（**给运营/律师助理看的，零代码**）

### 部署到 Vercel

1. 仓库连到 Vercel
2. **Root Directory** = `web`
3. **Build Command** = `npm run build`
4. **Output Directory** = `dist`
5. 触发首次部署

详细：[web/README.md](web/README.md)

---

## 二、设计稿（备选方案）

> 这两组设计稿是评审期产出的备选方案，**不影响** `web/` 正式版。
> 设计稿保留在这里作为视觉风格参考 / 备选 / 复用。

### `site/` 设计稿 A：墨分五色（东方雅致）

```
site/
├── 01-lingnan-yin/    方案 01 — 墨分五色，印信立言（已被 web/ 复用为视觉底版）
├── 02-the-counsel/    方案 02 — The Counsel
└── 03-lex-a/          方案 03 — Lex A
```

### `sites/` 设计稿 B：学院派（深 / 浅 / 编辑 三主题切换）

```
sites/
├── A-campus/          方案 A — Campus（学院派）
├── B-modern/          方案 B — Modern（现代派）
└── C-editorial/       方案 C — Editorial（编辑设计）
```

---

## 三、目录结构

```
.
├── web/                # ★ 官网主仓库（Astro + 飞书 CMS）
├── docs/
│   └── FEISHU_CMS.md   # 飞书建表操作指南
│
├── site/               # 设计稿 A：墨分五色（东方雅致）
│   ├── 01-lingnan-yin/
│   ├── 02-the-counsel/
│   └── 03-lex-a/
│
└── sites/              # 设计稿 B：学院派
    ├── A-campus/
    ├── B-modern/
    └── C-editorial/
```

---

## 四、技术栈

### `web/` 正式版

- **Astro 5.x** 静态站生成器
- **TypeScript** 全量类型
- **飞书多维表格 REST API** 作为内容源
- **本地 mock 兜底**（无凭证/CI/本地预览）
- **RSS + Sitemap** 内置
- 字体：Google Fonts（Fraunces / Noto Serif SC / Noto Sans SC / Cormorant）

### `site/` `sites/` 设计稿

- 纯静态 HTML 5 + 原生 CSS + 原生 JavaScript（ES6+）
- 无构建步骤，不依赖 npm / Node / Webpack
- 字体走 Google Fonts CDN

---

## 五、本地预览

### `web/` 主仓库

```bash
cd web
npm install
npm run dev
# → http://localhost:4321
```

### `site/` `sites/` 设计稿

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx --yes serve .
```

然后浏览器访问：

- 设计稿 A：http://localhost:8000/site/01-lingnan-yin/
- 设计稿 B：http://localhost:8000/sites/A-campus/

---

## 六、浏览器兼容性

| 浏览器        | 最低版本 | `web/` | `site/` | `sites/` |
| ------------- | -------- | ------ | ------- | -------- |
| Chrome / Edge | 90+      | ✅     | ✅      | ✅       |
| Safari        | 14+      | ✅     | ✅      | ✅       |
| Firefox       | 88+      | ✅     | ✅      | ✅       |
| IE            | ❌        | ❌      | ❌      | ❌        |

---

## 七、开发约定

- **不动顶层结构**：`web/` 是正式版，`site/` `sites/` 是设计稿，新增加内容请放 `web/src/`
- **设计稿互不依赖**：`site/` 和 `sites/` 两组设计稿各自独立、各自完整
- **字体走 Google Fonts CDN**
- **图禁用图片优先**：能用 CSS / Unicode / SVG 实现的就不放位图
- **不要提交**：
  - `.DS_Store`（已加 .gitignore）
  - `web/node_modules/`（已加 .gitignore）
  - `web/.env`（已加 .gitignore，含飞书凭证）
  - `web/.cache/`（飞书数据缓存）
  - `web/dist/`（构建产物）
  - `web/.astro/`（Astro 临时）
  - `.netlify/state.json`（已加 .gitignore）
  - 个人编辑器配置（`.vscode/`、`.idea/` 已加 .gitignore）

---

## 八、版权与许可

本站点（含文字、设计稿、HTML / CSS / JS 源码、静态资源、文档等）的全部权利归属 **陈恒律师** 个人所有。
未经权利人书面授权，请勿公开传播、转载、再发布或用于任何商业用途。

如需使用源码、复用设计稿或对外展示，请先与权利人确认授权范围与方式。

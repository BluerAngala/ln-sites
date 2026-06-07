# 岭南律师事务所 · 官网

> 广东岭南律师事务所（Guangdong Lingnan Law Firm）官网静态站源码仓库。
> 创立于 1984 年 / 1998 年（依站点不同），学院派综合性大所，公司商事、争议解决、知识产权、跨境投资、刑事辩护、资本市场等业务领域。

本仓库托管**两组备选官网设计稿**及对应的静态站源码，供内部评审、复用与部署。

---

## 目录结构

```
.
├── site/                     # 设计稿 A：墨分五色（东方雅致）
│   ├── 01-lingnan-yin/       #   方案 01 — 墨分五色，印信立言
│   ├── 02-the-counsel/       #   方案 02 — The Counsel
│   └── 03-lex-a/             #   方案 03 — Lex A
│
└── sites/                    # 设计稿 B：学院派（带深 / 浅主题切换）
    ├── A-campus/             #   方案 A — Campus（学院派）
    ├── B-modern/             #   方案 B — Modern（现代派）
    └── C-editorial/          #   方案 C — Editorial（编辑设计）
```

> ⚠️ 两组目录各自独立、各自完整，**互不依赖**。每个子目录都是一个可单独部署的静态站。

---

## 技术栈

- **纯静态**：HTML 5 + 原生 CSS + 原生 JavaScript（ES6+）
- **无构建步骤**：不依赖 npm / Node / Webpack
- **字体**：通过 Google Fonts 引入
  - `site/`：Fraunces、Noto Serif SC、Noto Sans SC、Cormorant Garamond
  - `sites/`：Cormorant Garamond、Noto Serif SC
- **图标**：纯文本 / Unicode 符号
- **依赖运行时**：现代浏览器（Chrome 90+ / Edge 90+ / Safari 14+ / Firefox 88+）

---

## 本地预览

无需安装任何依赖。任选一种方式：

### 方式一：直接打开（最简单）

```bash
# macOS
open site/01-lingnan-yin/index.html

# Windows
start site\01-lingnan-yin\index.html
```

> ⚠️ 部分浏览器对 `file://` 协议下的 fetch / 字体加载有限制，复杂页面建议用方式二。

### 方式二：本地起一个静态服务器（推荐）

任选其一：

```bash
# Python 3
python3 -m http.server 8000

# Node.js（无需安装 npx 自带）
npx --yes serve .

# PHP
php -S localhost:8000
```

然后浏览器访问：

- 设计稿 A：http://localhost:8000/site/01-lingnan-yin/
- 设计稿 B：http://localhost:8000/sites/A-campus/

---

## 部署

每个 `sites/*/` 目录都自带 `.netlify/netlify.toml`，可用 [Netlify](https://www.netlify.com/) 部署。

### Netlify 部署步骤

1. 把仓库连接到 Netlify（Netlify UI 或 `netlify init`）
2. 在 Site settings → Build & deploy 设置：
   - **Base directory**：选你要部署的子目录（如 `sites/A-campus`）
   - **Build command**：留空
   - **Publish directory**：留空（或填 `.`，因为 `netlify.toml` 已声明 `publish`）
3. 触发部署

> 📌 当前仓库里的 `netlify.toml` 是在本地 `netlify dev` 自动生成的，`publish` 字段是绝对路径，**首次部署前请改成相对路径**，例如：
>
> ```toml
> [build]
> publish = "."
> ```

### 其他平台

也可直接部署到 Vercel、Cloudflare Pages、GitHub Pages 等任意静态托管平台：

- **Vercel / Cloudflare Pages**：在「Root Directory」里选对应子目录即可
- **GitHub Pages**：把单一子目录作为仓库根目录推送，或配置 GitHub Actions 自动构建

---

## 浏览器兼容性

| 浏览器        | 最低版本     | 备注                           |
| ------------- | ------------ | ------------------------------ |
| Chrome / Edge | 90+          | 推荐                           |
| Safari        | 14+          | iOS 14+                        |
| Firefox       | 88+          |                                |
| IE            | ❌ 不支持     | 使用了 CSS 自定义属性、Grid 等 |

`sites/*/` 自带「深色 / 浅色 / 编辑」主题切换（点击导航栏右侧 ○ 按钮），偏好会写入 `localStorage`。

---

## 开发约定

- **不动顶层结构**：`site/` 与 `sites/` 是两个独立的设计稿体系，新增方案请按 `site/NN-xxx/` 或 `sites/X-xxx/` 命名
- **静态资源就近放置**：HTML、CSS、JS 各自放子目录的根或 `css/` `js/` 目录，不跨子目录共享
- **字体走 Google Fonts CDN**：不下载到本地，避免许可证 / 体积问题
- **图禁用图片优先**：能用 CSS / Unicode / SVG 实现的就不放位图
- **不要提交**：
  - `.DS_Store`（已加 .gitignore）
  - `.netlify/state.json`（已加 .gitignore，Netlify 本地运行时自动生成）
  - 个人编辑器配置（`.vscode/`、`.idea/` 已加 .gitignore）

---

## 版权与许可

本站点（含文字、设计稿、HTML / CSS / JS 源码、静态资源等）的全部权利归属 **陈恒律师** 个人所有。
未经权利人书面授权，请勿公开传播、转载、再发布或用于任何商业用途。

如需使用源码、复用设计稿或对外展示，请先与权利人确认授权范围与方式。

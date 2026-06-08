# 岭南律师事务所 · 官网（web/）

> 官方网站主仓库。Astro 静态站 + 飞书多维表格（Base）作为内容源。

**所在路径**：`/岭南所官网/web/`

## 技术栈

- **Astro 5.x** — 静态站点生成器，零 JS 优先，极快首屏
- **TypeScript** — 全量类型
- **飞书多维表格** — 后端 CMS（可选），通过 REST API 拉取
- **本地 mock 兜底** — 没配飞书凭证时仍可跑、CI 可稳过 build

## 快速开始

```bash
cd web
npm install
cp .env.example .env       # 可选：填入飞书凭证
npm run dev                # 打开 http://localhost:4321
```

不需要任何凭证就能跑（用本地 mock 数据）。

## 接入飞书

详细步骤见 [../docs/FEISHU_CMS.md](../docs/FEISHU_CMS.md)。

简短版：
1. 飞书开放平台建自建应用，拿到 App ID / Secret
2. 创建一个多维表格「岭南所官网内容库」，按文档建 8 张表
3. 复制 Base Token + 8 个 Table ID 到 `.env`
4. 跑 `npm run lark:test` 验证连通
5. 跑 `npm run build` 部署

## 目录结构

```
web/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── .env.example
├── public/                       # 静态资源
│   ├── favicon.svg
│   └── robots.txt
├── scripts/
│   └── lark-test.mjs            # 飞书连通性测试
└── src/
    ├── components/              # 共享组件
    │   ├── Nav.astro
    │   ├── Footer.astro
    │   ├── Seal.astro           # 印章
    │   ├── StatBar.astro        # 数字指标
    │   ├── PageHero.astro
    │   ├── LawyerCard.astro
    │   ├── CaseCard.astro
    │   └── NewsCard.astro
    ├── layouts/
    │   └── BaseLayout.astro
    ├── lib/
    │   ├── types.ts             # 全局类型
    │   ├── lark.ts              # 飞书 API 客户端
    │   ├── content.ts           # 内容获取层（飞书 → mock 降级）
    │   └── mock.ts              # 本地 mock 数据
    ├── pages/
    │   ├── index.astro          # 首页
    │   ├── about.astro
    │   ├── practice.astro
    │   ├── honors.astro
    │   ├── social.astro
    │   ├── contact.astro
    │   ├── team/
    │   │   ├── index.astro      # 律师列表
    │   │   └── [slug].astro     # 律师详情
    │   ├── cases/
    │   │   ├── index.astro
    │   │   └── [slug].astro
    │   ├── news/
    │   │   ├── index.astro
    │   │   └── [slug].astro
    │   └── rss.xml.ts           # RSS
    └── styles/
        └── global.css           # 全局样式（设计系统）
```

## 数据源切换

通过 `.env` 的 `CONTENT_SOURCE` 控制：

| 值 | 行为 |
|---|---|
| `auto` | 默认。有 LARK_APP_ID / SECRET / BASE_TOKEN → 用飞书；否则用 mock |
| `lark` | 强制飞书（凭证缺失会报错） |
| `mock` | 强制本地 mock（适合 CI / 本地预览） |

## 常用脚本

| 命令 | 用途 |
|---|---|
| `npm run dev` | 本地开发 |
| `npm run build` | 构建静态站到 `dist/` |
| `npm run preview` | 本地预览 build 产物 |
| `npm run lark:test` | 测试飞书连通性 |

## 部署

支持任意静态托管。推荐：

- **Vercel**：导入 Git 仓库即可，自动 build
- **Netlify**：同上，build command `npm run build`，publish `dist/`
- **Cloudflare Pages**：同上
- **阿里云 / 腾讯云 OSS**：先 build，再用 `ossutil` / `coscli` 同步 `dist/`

详细部署步骤见 [../docs/FEISHU_CMS.md §6](../docs/FEISHU_CMS.md#6-进阶自动重新部署可选)。

## 设计系统

视觉风格参考 `../site/01-lingnan-yin/`（墨分五色）和 kingpound.com：

- **颜色**：宣纸米白 `#F5F0E6` + 浓墨 `#1A1714` + 印泥朱砂 `#B53127` + 远山青 `#6B7A5A`
- **字体**：Fraunces (EN 标题) + Noto Serif SC (ZH) + Cormorant (引文)
- **印章**：红色方印，所有视觉锚点
- **大数字指标**：4 个核心数据，黑色背景反衬
- **零图片**：能用 CSS / SVG / Unicode 实现的不用位图

## 添加新内容类型

比如要加「出版物」类型：

1. **类型**：`src/lib/types.ts` 加 `Publication` interface
2. **mock**：`src/lib/mock.ts` 加 `publications: []`
3. **content**：`src/lib/content.ts` 加 `mapPublication` + `getPublications()`
4. **飞书**：在 Base 建 `publications` 表，按字段填
5. **页面**：`src/pages/publications/index.astro` + `[slug].astro`
6. **导航**：`src/components/Nav.astro` 加链接

## 故障排查

| 症状 | 原因 | 解决 |
|---|---|---|
| build 报 `LARK_BASE_TOKEN 未配置` | `CONTENT_SOURCE=lark` 但 env 没配 | 改成 `auto` 或填凭证 |
| 首页 4 个大数字全为 0 | `site_config` 表里没数据 | 走 mock / 在飞书填 26 个 key |
| 案例详情页 404 | `slug` 没填或写错 | 检查飞书表里 `slug` 字段 |
| 律师头像不显示 | 没传附件 | 上传图片到 `avatar` 字段 |
| 表单提交失败 | 没配 formspree / 后端 | `src/pages/contact.astro` 改 `action` |

## License & 版权

源码、设计稿、文档的全部权利归陈恒律师个人所有。未经书面授权请勿公开传播或商用。

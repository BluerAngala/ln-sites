// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
//
// i18n 策略：
//   - 中文站：`/`  `/about`  `/team/wang-bo`  (无前缀)
//   - 英文站：`/en/`  `/en/about`  `/en/team/wang-bo`  (字面 en 目录)
//   - 不使用 Astro 内置 i18n 路由（避免 [slug] 动态页的 redirect bug）
//   - 所有英文页放在 `src/pages/en/` 镜像目录
export default defineConfig({
  // 使用原站官方域名
  site: process.env.PUBLIC_SITE_URL || 'http://www.lnlawfirm.cn',
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'ignore',   // dev 模式接受两种；build 产物依然以 /xxx/ 形式存在（部署平台会 redirect）
  integrations: [sitemap()],
  vite: {
    ssr: { noExternal: ['@astrojs/rss'] },
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://astro.build/config
//
// i18n 策略：
//   - 中文站：`/`  `/about`  `/team/wang-bo`  (无前缀)
//   - 英文站：`/en/`  `/en/about`  `/en/team/wang-bo`  (字面 en 目录)
//   - 不使用 Astro 内置 i18n 路由（Astro 5.x 静态页不会自动产出多语言；动态页 [slug] 自带
//     getStaticPaths 双语循环已足够），保留 src/pages/en/ 镜像目录
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'http://www.lnlawfirm.cn',
  output: 'static',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tsconfigPaths()],
    ssr: { noExternal: ['@astrojs/rss'] },
  },
});

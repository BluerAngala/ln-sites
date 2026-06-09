/**
 * Locale 工具
 * - detectLocale()      从 URL 推断当前 locale（页面 / 组件都能用）
 * - prefixFor(locale)   '/en' 或 ''（用于拼接 href）
 * - localizedHref(path) 在当前 locale 下生成等价 URL（zh 不变，en 加 /en 前缀）
 * - isEnPath(path)      给 hreflang/canonical 用
 */
import { DEFAULT_LOCALE, type Locale } from '~/i18n';

export function detectLocale(pathname: string = '/'): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return DEFAULT_LOCALE;
}

/** 给定 locale，返回路径前缀。zh='', en='/en' */
export function prefixFor(locale: Locale): '' | '/en' {
  return locale === 'en' ? '/en' : '';
}

/**
 * 把"中性路径"（如 '/team'、'/practice?area=x'）转成当前 locale 的等价 URL。
 * - 中文：/team
 * - 英文：/en/team
 * - 查询串保留
 */
export function localizedHref(path: string, locale: Locale): string {
  const [p, q] = path.split('?');
  const clean = p.startsWith('/') ? p : `/${p}`;
  const withLocale = locale === 'en' ? (clean === '/' ? '/en/' : `/en${clean}`) : clean;
  return q ? `${withLocale}?${q}` : withLocale;
}

/** 判断路径是否在英文区（用于 hreflang 切换链接） */
export function isEnPath(pathname: string): boolean {
  return pathname === '/en' || pathname.startsWith('/en/');
}

/**
 * 把"en 区路径"还原成中性路径；中文路径直接返回。
 *   /en/team/wang-bo  -> /team/wang-bo
 *   /team/wang-bo     -> /team/wang-bo
 *   /en               -> /
 *   /                 -> /
 */
export function stripEnPrefix(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3) || '/';
  return pathname;
}

/**
 * 切换到目标 locale 的等价 URL（中文 ↔ 英文）
 *   switchLocaleUrl('/team/wang-bo', 'en')  -> '/en/team/wang-bo'
 *   switchLocaleUrl('/en/team/wang-bo', 'zh') -> '/team/wang-bo'
 */
export function switchLocaleUrl(currentPath: string, target: Locale): string {
  const neutral = stripEnPrefix(currentPath);
  if (target === 'zh') return neutral;
  return localizedHref(neutral, 'en');
}

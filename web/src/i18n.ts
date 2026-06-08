/**
 * 极简 i18n 工具
 * - Locale 类型 + 默认值
 * - I18n<T> 嵌套对象的 fallback helper
 * - 一份小 UI 字符串字典（仅页面外的固定文案：nav / 按钮 / 章节）
 *   内容字段（律师名、案例描述等）用 I18n<T> 直接写在 mock 数据里
 *   模板里写 `name[locale]` / `t(locale, 'nav.home')`
 */
import type { I18n, Locale } from '~/lib/types';

export type { I18n, Locale };
export const DEFAULT_LOCALE: Locale = 'zh';

/** 从 I18n<T> 拿当前 locale 的值，缺 en 时回退到 zh */
export function t<T>(field: I18n<T> | undefined, locale: Locale): T | undefined {
  if (!field) return undefined;
  return field[locale] ?? field.zh;
}

/** 强制返回字符串（缺翻译时用 fallback） */
export function ts(field: I18n<string> | undefined, locale: Locale): string {
  return t(field, locale) ?? '';
}

/** 数组 fallback */
export function ta(field: I18n<string[]> | undefined, locale: Locale): string[] {
  return t(field, locale) ?? [];
}

/* ============================================================
   UI 字符串字典（仅 nav / 按钮 / 段落标题，约 30 个 key）
   命名空间 = 上下文（nav / footer / home / common ...）
   ============================================================ */
type Str = I18n<string>;

export const ui = {
  'nav.home':      { zh: '首页',       en: 'Home' },
  'nav.about':     { zh: '关于我们',   en: 'About' },
  'nav.practice':  { zh: '业务领域',   en: 'Practice' },
  'nav.team':      { zh: '专业人员',   en: 'Counsel' },
  'nav.cases':     { zh: '业绩案例',   en: 'Works' },
  'nav.news':      { zh: '新闻动态',   en: 'News' },
  'nav.honors':    { zh: '荣誉奖项',   en: 'Honors' },
  'nav.offices':   { zh: '办公室',     en: 'Offices' },
  'nav.social':    { zh: '党建公益',   en: 'Public' },
  'nav.contact':   { zh: '委托咨询',   en: 'Contact' },

  'footer.lead':   {
    zh: '创立于 1984 年，由中山大学法律系创办。立足粤港澳大湾区，为客户提供专业、诚信、高效的法律服务。',
    en: 'Founded in 1984 by the Law Faculty of Sun Yat-sen University. Rooted in the Greater Bay Area, we deliver professional, trustworthy and efficient legal services.',
  },
  'footer.copyright': {
    zh: '© 广东岭南律师事务所 Lingnan Counsel & Attorneys at Law',
    en: '© Lingnan Counsel & Attorneys at Law. All rights reserved.',
  },

  'home.scroll':   { zh: 'SCROLL', en: 'SCROLL' },
  'home.cta.primary':   { zh: '委托咨询',  en: 'Engage Us' },
  'home.cta.secondary': { zh: '走进岭南 / About Us', en: 'Learn More' },

  'common.viewAll':  { zh: '查看全部', en: 'View All' },
  'common.readMore': { zh: '阅读更多', en: 'Read More' },
  'common.back':     { zh: '返回',     en: 'Back' },
  'common.empty':    { zh: '内容筹备中。', en: 'Content is being prepared.' },

  'team.partners':  { zh: '合伙人 · Partners',  en: 'Partners' },
  'team.counsels':  { zh: '资深律师 · Senior Counsels', en: 'Senior Counsels' },
  'team.back':      { zh: '返回律师列表', en: 'Back to Counsel' },

  'cases.back':     { zh: '返回案例列表', en: 'Back to Works' },
  'cases.consult':  { zh: '就此咨询',     en: 'Inquire' },
  'cases.leadLawyer':   { zh: '主理律师', en: 'Lead Counsel' },
  'cases.assocLawyers': { zh: '协办律师', en: 'Co-Counsel' },

  'news.back':      { zh: '返回资讯列表', en: 'Back to News' },

  'contact.title':  { zh: '一份委托，<br/>一份郑重。', en: 'An Engagement.<br/>A Commitment.' },
  'contact.submit': { zh: '提交委托',     en: 'Submit' },
  'contact.required': { zh: '必填',       en: 'Required' },
} satisfies Record<string, Str>;

/** 查 UI 字典 */
export function ut(key: keyof typeof ui, locale: Locale): string {
  const entry = ui[key];
  return entry[locale] ?? entry.zh;
}

/* ============================================================
   路径切换：根据当前 locale + 目标 locale 计算新 URL
   ============================================================ */

/** 去掉 /en 前缀 */
function stripEn(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3) || '/';
  return pathname;
}

/** 加上 /en 前缀 */
function addEn(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/en/';
  return '/en' + pathname;
}

/** 切换到目标 locale 的等价 URL（中文 ↔ 英文） */
export function switchLocaleUrl(currentPath: string, target: Locale): string {
  if (target === 'zh') return stripEn(currentPath);
  return addEn(stripEn(currentPath));
}

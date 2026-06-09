/**
 * 极简 i18n 工具
 * - Locale / I18n<T> / t() / ts() / ta() 一律来自 ~/lib/types
 * - 一份小 UI 字符串字典（仅页面外的固定文案：nav / 按钮 / 章节）
 *   内容字段（律师名、案例描述等）用 I18n<T> 直接写在 mock 数据里
 *   模板里写 `ts(name, locale)` / `ut('nav.home', locale)`
 */
import type { I18n, Locale } from '~/lib/types';

export type { I18n, Locale };
export { t, ts, ta } from '~/lib/types';
export const DEFAULT_LOCALE: Locale = 'zh';

/* ============================================================
   UI 字符串字典（仅 nav / 按钮 / 段落标题，约 30 个 key）
   命名空间 = 上下文（nav / footer / home / common ...）
   ============================================================ */
type Str = I18n<string>;

export const ui = {
  'nav.home': { zh: '首页', en: 'Home' },
  'nav.about': { zh: '关于我们', en: 'About' },
  'nav.practice': { zh: '业务领域', en: 'Practice' },
  'nav.team': { zh: '专业律师', en: 'Counsel' },
  'nav.cases': { zh: '业绩案例', en: 'Works' },
  'nav.news': { zh: '新闻动态', en: 'News' },
  'nav.honors': { zh: '荣誉奖项', en: 'Honors' },
  'nav.offices': { zh: '办公室', en: 'Offices' },
  'nav.social': { zh: '党建公益', en: 'Public' },
  'nav.contact': { zh: '委托咨询', en: 'Contact' },

  'footer.lead': {
    zh: '创立于 1984 年，由中山大学法律系创办。立足粤港澳大湾区，为客户提供专业、诚信、高效的法律服务。',
    en: 'Founded in 1984 by the Law Faculty of Sun Yat-sen University. Rooted in the Greater Bay Area, we deliver professional, trustworthy and efficient legal services.',
  },
  'footer.copyright': {
    zh: '© 广东岭南律师事务所 Lingnan Counsel & Attorneys at Law',
    en: '© Lingnan Counsel & Attorneys at Law. All rights reserved.',
  },

  'home.scroll': { zh: 'SCROLL', en: 'SCROLL' },
  'home.cta.primary': { zh: '委托咨询', en: 'Engage Us' },
  'home.cta.secondary': { zh: '走进岭南 / About Us', en: 'Learn More' },

  'common.viewAll': { zh: '查看全部', en: 'View All' },
  'common.readMore': { zh: '阅读更多', en: 'Read More' },
  'common.back': { zh: '返回', en: 'Back' },
  'common.empty': { zh: '内容筹备中。', en: 'Content is being prepared.' },

  'team.partners': { zh: '合伙人 · Partners', en: 'Partners' },
  'team.counsels': { zh: '资深律师 · Senior Counsels', en: 'Senior Counsels' },
  'team.back': { zh: '返回律师列表', en: 'Back to Counsel' },
  'team.eyebrow.contact': { zh: '联系 · Engage', en: 'Contact' },
  'team.section.practice': { zh: '业务领域', en: 'Practice Areas' },
  'team.section.specialties': { zh: '擅长案件', en: 'Specialties' },
  'team.section.works': { zh: '代表性业绩', en: 'Selected Works' },
  'team.cta.engage': { zh: '委托咨询', en: 'Engage' },
  'team.cta.engageUs': { zh: '发起委托', en: 'Engage Us' },
  'team.cta.findPrefix': { zh: '找 ', en: 'Engage ' },
  'team.cta.findSuffix': { zh: ' 处理您的委托。', en: ' for your matter.' },
  'team.cta.lede': {
    zh: '提交委托需求后,本所将在 24 小时内回复。',
    en: 'Submit your engagement request and we will respond within 24 hours.',
  },

  'cases.back': { zh: '返回案例列表', en: 'Back to Works' },
  'cases.consult': { zh: '就此咨询', en: 'Inquire' },
  'cases.leadLawyer': { zh: '主理律师', en: 'Lead Counsel' },
  'cases.assocLawyers': { zh: '协办律师', en: 'Co-Counsel' },
  'cases.highlights': { zh: '亮点', en: 'Highlights' },
  'cases.cta.inquire': { zh: '就此咨询 · Inquire', en: 'Inquire' },

  'news.back': { zh: '返回资讯列表', en: 'Back to News' },
  'news.byAuthor': { zh: '由 {author} 发布', en: 'By {author}' },

  'rss.title': {
    zh: '岭南律师事务所 · 新闻动态',
    en: 'Lingnan Law Firm · News',
  },
  'rss.description': {
    zh: '广东岭南律师事务所所内动态、行业观察、媒体报道',
    en: 'Firm news, industry insight, and media coverage from Lingnan.',
  },
  'rss.lang': { zh: 'zh-cn', en: 'en-us' },

  'contact.submit': { zh: '提交委托', en: 'Submit' },
  'contact.required': { zh: '必填', en: 'Required' },
} satisfies Record<string, Str>;

/**
 * 查 UI 字典 + 占位符替换
 *   ut('news.byAuthor', locale, { author: '张三' })
 *     → zh: '由 张三 发布'
 *     → en: 'By 张三'
 */
export function ut(
  key: keyof typeof ui,
  locale: Locale,
  vars?: Record<string, string | number>,
): string {
  const entry = ui[key];
  let s = entry[locale] ?? entry.zh;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      s = s.replaceAll(`{${k}}`, String(v));
    }
  }
  return s;
}

/* ============================================================
   路径切换：实现已统一在 ~/lib/locale.ts
   这里只 re-export 保留旧 import 兼容
   ============================================================ */
export {
  switchLocaleUrl,
  stripEnPrefix,
  localizedHref,
  detectLocale,
  prefixFor,
  isEnPath,
} from '~/lib/locale';

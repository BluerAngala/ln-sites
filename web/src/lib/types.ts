/**
 * 内容类型定义
 * 双语字段用 I18n<T> 包装：`{ zh, en }`，模板里写 `name[locale]`
 * 缺翻译时回退到中文（@see content.ts）
 */

export type Locale = 'zh' | 'en';
export const LOCALES: Locale[] = ['zh', 'en'];
export type I18n<T> = { zh: T; en?: T };

export type ContentSource = 'lark' | 'mock' | 'auto';

export interface BaseContent {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

/* ---------- Lawyer ---------- */
export type LawyerLevel = '高级合伙人' | '合伙人' | '资深律师' | '律师' | '顾问';
export type LawyerStatus = '在职' | '已离职';

export interface Lawyer extends BaseContent {
  slug: string;
  name: I18n<string>;
  level: I18n<string>;
  licenseNo?: string;
  phone?: string;
  email?: string;
  bio: I18n<string>;
  bioLong?: I18n<string>;
  avatar?: string;
  practiceAreas: I18n<string[]>;
  expertise?: I18n<string[]>;
  education?: I18n<string[]>;
  languages?: string[];
  office: I18n<string>;
  status: LawyerStatus;
  order?: number;
}

/* ---------- Case ---------- */
export type CaseStatus = 'published' | 'draft';

export interface CaseItem extends BaseContent {
  slug: string;
  title: I18n<string>;
  type: I18n<string>;
  industry: I18n<string>;
  client?: I18n<string>;
  year: number;
  /** 客户背景 / 案情梗概：律师介入前是什么情况 */
  background: I18n<string>;
  /** 律师团队提供的服务 / 介入动作 */
  approach: I18n<string>;
  /** 最终结果 / 客户收获 */
  result: I18n<string>;
  summary?: I18n<string>;
  content?: I18n<string>;
  highlights?: I18n<string[]>;
  leadLawyerId?: string;
  lawyerIds?: string[];
  practiceArea?: I18n<string>;
  isFeatured?: boolean;
  status: CaseStatus;
}

/* ---------- News ---------- */
export type NewsStatus = 'published' | 'draft';

export interface NewsItem extends BaseContent {
  slug: string;
  title: I18n<string>;
  category: I18n<string>;
  date: string;
  summary: I18n<string>;
  content: I18n<string>;
  cover?: string;
  author?: string;
  /** 外部原文链接（如广州律协通知），存在时卡片直接跳转 */
  sourceUrl?: string;
  isFeatured?: boolean;
  status: NewsStatus;
}

/* ---------- Honor ---------- */
export interface Honor extends BaseContent {
  title: I18n<string>;
  issuer: I18n<string>;
  date: string;
  description?: I18n<string>;
  category: I18n<string>;
  ranking?: string;
}

/* ---------- Practice ---------- */
export interface Practice extends BaseContent {
  name: I18n<string>;
  nameEn: string;        // 保留原字段，English 永远有
  description: I18n<string>;
  content?: I18n<string>;
  caseCount?: number;
  icon?: string;
  order?: number;
}

/* ---------- Office ---------- */
export interface Office extends BaseContent {
  city: string;
  cityEn: string;
  address: I18n<string>;
  phone: string;
  fax?: string;
  email?: string;
  description?: I18n<string>;
  isHeadquarters?: boolean;
  order?: number;
  image?: string;
  lng?: number;
  lat?: number;
  mapUrl?: string;
  mapEmbedUrl?: string;
  mapAmap?: string;
  mapBaidu?: string;
}

/* ---------- Social ---------- */
export interface SocialItem extends BaseContent {
  title: I18n<string>;
  date: string;
  location?: I18n<string>;
  lawyerIds?: string[];
  category: I18n<string>;
  description: I18n<string>;
  content?: I18n<string>;
}

/* ---------- Site Config ---------- */
export interface SiteConfig {
  heroKicker1: I18n<string>;
  heroKicker2: I18n<string>;
  heroTitle1: I18n<string>;
  heroTitle2: I18n<string>;
  heroLede: I18n<string>;
  stat1Num: I18n<string>; stat1Suffix: I18n<string>; stat1Label: I18n<string>;
  stat2Num: I18n<string>; stat2Suffix: I18n<string>; stat2Label: I18n<string>;
  stat3Num: I18n<string>; stat3Suffix: I18n<string>; stat3Label: I18n<string>;
  stat4Num: I18n<string>; stat4Suffix: I18n<string>; stat4Label: I18n<string>;
  aboutQuote: I18n<string>;
  aboutQuoteAttr: I18n<string>;
  aboutBody: I18n<string>;
  tagline1: I18n<string>;
  taglineAttr1: I18n<string>;
  tagline2: I18n<string>;
  taglineAttr2: I18n<string>;
  contactPhone: string;
  contactEmail: string;
  contactAddress: I18n<string>;
  icpNo: string;
  copyright: I18n<string>;
}

export interface ContentBundle {
  source: 'lark' | 'mock';
  generatedAt: string;
  lawyers: Lawyer[];
  cases: CaseItem[];
  news: NewsItem[];
  honors: Honor[];
  practices: Practice[];
  offices: Office[];
  social: SocialItem[];
  config: SiteConfig;
}

/* ============================================================
   工具：从 I18n 字段取值（缺翻译时回退中文）
   ============================================================ */

export function t<T>(field: I18n<T> | undefined, locale: Locale): T | undefined {
  if (!field) return undefined;
  return (locale === 'en' ? field.en : field.zh) ?? field.zh;
}

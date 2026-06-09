/**
 * 站点配置（首页 Hero / 数字指标 / 关于 / 联系 / 版权）
 * 数据来源:lnlawfirm.cn 真实公开信息
 */
import type { SiteConfig } from '~/lib/types';

export const config: SiteConfig = {
  heroKicker: { zh: '庚子年立 · 一九八四', en: 'FOUNDED 1984 · GUANGZHOU' },
  heroBadge: { zh: '中山大学法律系创办', en: 'FOUNDED BY THE LAW FACULTY OF SYSU' },
  heroTitle: {
    zh: '四十载岭南，一所而百年心。',
    en: 'Forty Years of Lingnan. A Century of Vision.',
  },
  heroSubtitle: {
    zh: 'Lingnan · Counsel & Attorneys at Law',
    en: 'Counsel & Attorneys at Law · Guangzhou',
  },
  heroLede: {
    zh: '一九八四年，中山大学法律系薪火相传。\n四十年，岭南所立足粤港澳大湾区，\n凝八大专业，一以贯之，\n为各级党政机关、企事业单位及个人客户提供专业、诚信、高效的法律服务。',
    en: 'Founded in 1984 by the Law Faculty of Sun Yat-sen University.\nFour decades of scholarship, rooted in the Greater Bay Area,\neight practices, one standard,\ndelivering professional, trustworthy and efficient legal services to government agencies, enterprises, and individuals.',
  },
  stats: [
    {
      num: { zh: '40', en: '40' },
      suffix: { zh: '+', en: '+' },
      label: { zh: '执业沉淀\n自 1984', en: 'Years in Practice\nSince 1984' },
    },
    {
      num: { zh: '7', en: '7' },
      suffix: { zh: '大', en: '' },
      label: { zh: '城市办公室', en: 'Cities' },
    },
    {
      num: { zh: '150', en: '150' },
      suffix: { zh: '+', en: '+' },
      label: { zh: '执业律师\n含多名合伙人', en: 'Lawyers\nincl. Senior Partners' },
    },
    {
      num: { zh: '8', en: '8' },
      suffix: { zh: '大', en: '' },
      label: { zh: '业务领域', en: 'Practice Areas' },
    },
  ],
  aboutQuote: {
    zh: '一所之重，不在楼宇，而在其心。其心者何？敬法律、敬客户、敬同道。',
    en: 'A firm is measured not by its premises, but by its heart. Its heart is reverence—for the law, the client, and the profession.',
  },
  aboutQuoteAttr: { zh: '— 岭南所训', en: '— Founding Motto' },
  aboutBody: {
    zh:
      '<p>广东岭南律师事务所由<strong>中山大学法律系</strong>于<strong>1984 年</strong>创办，是全国最早开办的律师事务所之一。</p>' +
      '<p>作为具有独特学院风格的律师事务所，岭南所依托中山大学等高等学府雄厚的学术力量，汇集了包括公司法、民商法、刑法、诉讼法、房地产法、婚姻法、行政法、金融法等领域的专家教授，以及一支专业化分工、团队化协作的专职律师队伍，为各级党政机关、大型企事业单位和个人客户提供高水平的法律服务。</p>' +
      '<p>先后荣获广东省优秀律师事务所、广州市优秀律师事务所、广州市十佳律师事务所、广州市管理优秀律师事务所、广州市普法工作先进集体、全省律师行业先进基层党组织等荣誉，是各法律服务领域被广泛认可的综合性律师事务所。</p>',
    en:
      '<p>Lingnan Counsel & Attorneys at Law was founded in <strong>1984</strong> by the <strong>Law Faculty of Sun Yat-sen University</strong>, and is one of the earliest law firms established in China.</p>' +
      '<p>With a distinctive academic style, the firm draws on the scholarly strength of leading universities—including Sun Yat-sen University—to bring together experts across corporate, civil and commercial, criminal, procedural, real estate, family, administrative, and financial law, alongside a dedicated team of practicing attorneys.</p>' +
      '<p>The firm has been recognized as an Outstanding Law Firm of Guangdong, an Outstanding Law Firm of Guangzhou, one of the Top-Ten Law Firms of Guangzhou, and a Model Law Firm of Guangzhou, among other distinctions.</p>',
  },
  tagline: { zh: '锐意进取，开放包容。', en: 'Enterprising. Open. Inclusive.' },
  taglineAttr: { zh: '— 岭南所风', en: '— Firm Spirit' },
  tagline2: {
    zh: '在商事领域和诉讼领域被广泛认可的中国律师事务所。',
    en: 'A widely recognized Chinese law firm in commercial and litigation practice.',
  },
  tagline2Attr: { zh: '— 业界评价', en: '— Peer Recognition' },
  contactPhone: '020-81836088',
  contactEmail: 'lnlawfirm@163.com',
  contactAddress: {
    zh: '广州市海珠区阅江西路 370 号 广报中心北塔 15F',
    en: '15F, North Tower, Guangzhou Newspaper Center, 370 Yuejiang West Road, Haizhu District, Guangzhou',
  },
  icpNo: '粤ICP备17022019号',
  copyright: {
    zh: '© 广东岭南律师事务所 Lingnan Counsel & Attorneys at Law',
    en: '© Lingnan Counsel & Attorneys at Law. All rights reserved.',
  },
};

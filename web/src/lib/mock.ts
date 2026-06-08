/**
 * 真实内容数据(基于 http://www.lnlawfirm.cn 公开内容整理)
 * 全部双语字段用 I18n<T> = { zh, en? } 嵌套
 * 模板里写：lawyer.name[locale]  /  t(lawyer.bio, locale)
 */
import type {
  Lawyer, CaseItem, NewsItem, Honor, Practice, Office, SocialItem, SiteConfig, ContentBundle, I18n,
} from './types';

const now = new Date().toISOString();

/* ============================================================
   Site Config（首页 Hero / 数字指标 / 关于 / 联系 / 版权）
   数据来源:lnlawfirm.cn 真实公开信息
   ============================================================ */
const config: SiteConfig = {
  heroKicker:  { zh: '庚子年立 · 一九八四',                       en: 'FOUNDED 1984 · GUANGZHOU' },
  heroBadge:   { zh: '中山大学法律系创办',                         en: 'FOUNDED BY THE LAW FACULTY OF SYSU' },
  heroTitle:   { zh: '四十载岭南，一所而百年心。',                       en: 'Forty Years of Lingnan. A Century of Vision.' },
  heroSubtitle:{ zh: 'Lingnan · Counsel & Attorneys at Law',        en: 'Counsel & Attorneys at Law · Guangzhou' },
  heroLede:    {
    zh: '一九八四年，中山大学法律系薪火相传。\n四十年，岭南所立足粤港澳大湾区，\n凝八大专业，一以贯之，\n为各级党政机关、企事业单位及个人客户提供专业、诚信、高效的法律服务。',
    en: 'Founded in 1984 by the Law Faculty of Sun Yat-sen University.\nFour decades of scholarship, rooted in the Greater Bay Area,\neight practices, one standard,\ndelivering professional, trustworthy and efficient legal services to government agencies, enterprises, and individuals.',
  },
  stats: [
    { num: { zh: '40', en: '40' }, suffix: { zh: '+',  en: '+' },  label: { zh: '执业沉淀\n自 1984',       en: 'Years in Practice\nSince 1984' } },
    { num: { zh: '7',  en: '7'  }, suffix: { zh: '大',  en: ''   },  label: { zh: '城市办公室',              en: 'Cities' } },
    { num: { zh: '150',en: '150'}, suffix: { zh: '+',  en: '+' },  label: { zh: '执业律师\n含多名合伙人',   en: 'Lawyers\nincl. Senior Partners' } },
    { num: { zh: '8',  en: '8'  }, suffix: { zh: '大',  en: ''   },  label: { zh: '业务领域',                en: 'Practice Areas' } },
  ],
  aboutQuote:     {
    zh: '一所之重，不在楼宇，而在其心。其心者何？敬法律、敬客户、敬同道。',
    en: 'A firm is measured not by its premises, but by its heart. Its heart is reverence—for the law, the client, and the profession.',
  },
  aboutQuoteAttr: { zh: '— 岭南所训', en: '— Founding Motto' },
  aboutBody: {
    zh: '<p>广东岭南律师事务所由<strong>中山大学法律系</strong>于<strong>1984 年</strong>创办，是全国最早开办的律师事务所之一。</p>'
       + '<p>作为具有独特学院风格的律师事务所，岭南所依托中山大学等高等学府雄厚的学术力量，汇集了包括公司法、民商法、刑法、诉讼法、房地产法、婚姻法、行政法、金融法等领域的专家教授，以及一支专业化分工、团队化协作的专职律师队伍，为各级党政机关、大型企事业单位和个人客户提供高水平的法律服务。</p>'
       + '<p>先后荣获广东省优秀律师事务所、广州市优秀律师事务所、广州市十佳律师事务所、广州市管理优秀律师事务所、广州市普法工作先进集体、全省律师行业先进基层党组织等荣誉，是各法律服务领域被广泛认可的综合性律师事务所。</p>',
    en: '<p>Lingnan Counsel & Attorneys at Law was founded in <strong>1984</strong> by the <strong>Law Faculty of Sun Yat-sen University</strong>, and is one of the earliest law firms established in China.</p>'
       + '<p>With a distinctive academic style, the firm draws on the scholarly strength of leading universities—including Sun Yat-sen University—to bring together experts across corporate, civil and commercial, criminal, procedural, real estate, family, administrative, and financial law, alongside a dedicated team of practicing attorneys.</p>'
       + '<p>The firm has been recognized as an Outstanding Law Firm of Guangdong, an Outstanding Law Firm of Guangzhou, one of the Top-Ten Law Firms of Guangzhou, and a Model Law Firm of Guangzhou, among other distinctions.</p>',
  },
  tagline:        { zh: '锐意进取，开放包容。',                en: 'Enterprising. Open. Inclusive.' },
  taglineAttr:    { zh: '— 岭南所风',                          en: '— Firm Spirit' },
  tagline2:       { zh: '在商事领域和诉讼领域被广泛认可的中国律师事务所。', en: 'A widely recognized Chinese law firm in commercial and litigation practice.' },
  tagline2Attr:   { zh: '— 业界评价',                          en: '— Peer Recognition' },
  contactPhone:   '020-81836088',
  contactEmail:   'lnlawfirm@163.com',
  contactAddress: {
    zh: '广州市海珠区阅江西路 370 号 广报中心北塔 15F',
    en: '15F, North Tower, Guangzhou Newspaper Center, 370 Yuejiang West Road, Haizhu District, Guangzhou',
  },
  icpNo:     '粤ICP备17022019号',
  copyright: { zh: '© 广东岭南律师事务所 Lingnan Counsel & Attorneys at Law', en: '© Lingnan Counsel & Attorneys at Law. All rights reserved.' },
};

/* ============================================================
   Lawyers — 含 11 张原站头像(王淼需补充)
   数据来源:原站"律师简介"列表(高级合伙人 / 合伙人)
   ============================================================ */
const lawyers: Lawyer[] = [
  {
    id: 'lawyer-01', slug: 'yan-jierning', order: 1, status: '在职',
    name:   { zh: '严洁明', en: 'YAN Jieming' },
    level:  { zh: '高级合伙人', en: 'Senior Partner' },
    avatar: '/img/orig/lawyer-yan-jierning.jpg',
    licenseNo: '', phone: '020-81836088', email: 'yjm@lnlawfirm.cn',
    bio: {
      zh: '岭南所高级合伙人，深耕民商事法律服务领域。',
      en: 'Senior Partner at Lingnan, with deep expertise in civil and commercial practice.',
    },
    bioLong: {
      zh: '<p>严洁明律师，岭南所高级合伙人，长期专注于民商事法律服务，依托中山大学等高校学术资源，在公司治理、合同纠纷、房地产等领域具有丰富经验。</p>',
      en: '<p>Mr. Yan is a Senior Partner at Lingnan with longstanding focus on civil and commercial practice, with extensive experience in corporate governance, contract disputes, and real estate, supported by academic resources from leading universities including Sun Yat-sen University.</p>',
    },
    practiceAreas: { zh: ['公司商事', '房地产与建设工程'], en: ['Corporate & Commercial', 'Real Estate & Construction'] },
    expertise:     { zh: ['公司治理', '合同纠纷', '房地产'], en: ['Corporate Governance', 'Contract Disputes', 'Real Estate'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-02', slug: 'li-dong', order: 2, status: '在职',
    name:   { zh: '李栋', en: 'LI Dong' },
    level:  { zh: '高级合伙人', en: 'Senior Partner' },
    avatar: '/img/orig/lawyer-li-dong.jpg',
    licenseNo: '', phone: '020-81836088', email: 'ldlawyer@lnlawfirm.cn',
    bio: {
      zh: '岭南所高级合伙人，长期执业于商事争议解决与公司法律事务。',
      en: 'Senior Partner at Lingnan, with an established practice in commercial dispute resolution and corporate matters.',
    },
    bioLong: {
      zh: '<p>李栋律师，岭南所高级合伙人。从业以来承办了大量公司商事、合同纠纷、股权争议等案件，担任多家企事业单位常年法律顾问。</p>',
      en: '<p>Mr. Li is a Senior Partner at Lingnan. He has handled a substantial volume of corporate, contract and equity cases, and serves as standing counsel to numerous enterprises and institutions.</p>',
    },
    practiceAreas: { zh: ['公司商事', '争议解决'], en: ['Corporate & Commercial', 'Dispute Resolution'] },
    expertise:     { zh: ['商事仲裁', '股权纠纷', '合同争议'], en: ['Commercial Arbitration', 'Equity Disputes', 'Contract Disputes'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文', '粤语'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-03', slug: 'ou-yang-bing', order: 3, status: '在职',
    name:   { zh: '欧阳兵', en: 'OUYANG Bing' },
    level:  { zh: '高级合伙人', en: 'Senior Partner' },
    avatar: '/img/orig/lawyer-ou-yang-bing.jpg',
    licenseNo: '', phone: '020-81836088', email: 'oyb@lnlawfirm.cn',
    bio: {
      zh: '岭南所高级合伙人，专注金融、证券与公司法律业务。',
      en: 'Senior Partner at Lingnan, focused on finance, securities and corporate practice.',
    },
    bioLong: {
      zh: '<p>欧阳兵律师，岭南所高级合伙人。长期为金融机构、上市公司提供法律服务，在证券发行、并购重组、公司治理等领域具有丰富经验。</p>',
      en: '<p>Mr. Ouyang is a Senior Partner at Lingnan. He has long served financial institutions and listed companies, with extensive experience in securities issuance, M&A, and corporate governance.</p>',
    },
    practiceAreas: { zh: ['金融证券', '公司商事'], en: ['Finance & Securities', 'Corporate & Commercial'] },
    expertise:     { zh: ['证券发行', '并购重组', '公司治理'], en: ['Securities Issuance', 'M&A', 'Corporate Governance'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-04', slug: 'cheng-hu', order: 4, status: '在职',
    name:   { zh: '程虎', en: 'CHENG Hu' },
    level:  { zh: '高级合伙人', en: 'Senior Partner' },
    avatar: '/img/orig/lawyer-cheng-hu.jpg',
    licenseNo: '', phone: '020-81836088', email: 'ch@lnlawfirm.cn',
    bio: {
      zh: '岭南所高级合伙人，专注刑事辩护与企业刑事合规。',
      en: 'Senior Partner at Lingnan, focused on criminal defense and corporate criminal compliance.',
    },
    bioLong: {
      zh: '<p>程虎律师，岭南所高级合伙人。承办过大量重大、疑难、复杂刑事案件，在经济犯罪、职务犯罪辩护及企业刑事合规领域具有丰富经验。</p>',
      en: '<p>Mr. Cheng is a Senior Partner at Lingnan. He has handled a large volume of major and complex criminal cases, with extensive experience in economic and public-office crime defense and corporate criminal compliance.</p>',
    },
    practiceAreas: { zh: ['刑事辩护', '争议解决'], en: ['Criminal Defense', 'Dispute Resolution'] },
    expertise:     { zh: ['经济犯罪', '职务犯罪', '刑事合规'], en: ['Economic Crime', 'Public Office Crime', 'Criminal Compliance'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-05', slug: 'cai-zhenshun', order: 5, status: '在职',
    name:   { zh: '蔡镇顺', en: 'CAI Zhenshun' },
    level:  { zh: '高级合伙人', en: 'Senior Partner' },
    avatar: '/img/orig/lawyer-cai-zhenshun.jpg',
    licenseNo: '', phone: '020-81836088', email: 'czs@lnlawfirm.cn',
    bio: {
      zh: '岭南所高级合伙人，长期深耕民商法及房地产法律业务。',
      en: 'Senior Partner at Lingnan, with deep practice in civil and commercial law and real estate.',
    },
    bioLong: {
      zh: '<p>蔡镇顺律师，岭南所高级合伙人。在民商法、房地产法、公司法领域执业多年，担任多家大型企业、党政机关法律顾问。</p>',
      en: '<p>Mr. Cai is a Senior Partner at Lingnan. He has practiced for many years in civil and commercial law, real estate, and corporate law, serving as legal counsel to large enterprises and government agencies.</p>',
    },
    practiceAreas: { zh: ['民商事', '房地产与建设工程'], en: ['Civil & Commercial', 'Real Estate & Construction'] },
    expertise:     { zh: ['民商法', '房地产', '公司治理'], en: ['Civil & Commercial Law', 'Real Estate', 'Corporate Governance'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-06', slug: 'wei-zhaosheng', order: 6, status: '在职',
    name:   { zh: '魏兆升', en: 'WEI Zhaosheng' },
    level:  { zh: '高级合伙人', en: 'Senior Partner' },
    avatar: '/img/orig/lawyer-wei-zhaosheng.jpg',
    licenseNo: '', phone: '020-81836088', email: 'wzs@lnlawfirm.cn',
    bio: {
      zh: '岭南所高级合伙人，专注民商事诉讼与仲裁。',
      en: 'Senior Partner at Lingnan, focused on civil and commercial litigation and arbitration.',
    },
    bioLong: {
      zh: '<p>魏兆升律师，岭南所高级合伙人。从业以来代理了大量民商事诉讼、仲裁案件，在合同纠纷、侵权纠纷、婚姻家庭等领域具有丰富经验。</p>',
      en: '<p>Mr. Wei is a Senior Partner at Lingnan. He has represented clients in a large volume of civil and commercial litigation and arbitration matters, with extensive experience in contract, tort, and family disputes.</p>',
    },
    practiceAreas: { zh: ['争议解决', '民商事'], en: ['Dispute Resolution', 'Civil & Commercial'] },
    expertise:     { zh: ['民商事诉讼', '仲裁', '合同纠纷'], en: ['Civil & Commercial Litigation', 'Arbitration', 'Contract Disputes'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文', '粤语'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-07', slug: 'zhang-zhi-min', order: 7, status: '在职',
    name:   { zh: '张智敏', en: 'ZHANG Zhimin' },
    level:  { zh: '合伙人', en: 'Partner' },
    avatar: '/img/orig/lawyer-zhang-zhi-min.jpg',
    licenseNo: '', phone: '020-81836088', email: 'zzm@lnlawfirm.cn',
    bio: {
      zh: '广州市总工会「职工金牌贴心人 · 顾问之星」获得者，长期从事工会法律服务。',
      en: 'Recipient of Guangzhou Federation of Trade Unions "Gold-Medal Caregiver · Advisor Star" award; long-standing service in union-related legal practice.',
    },
    bioLong: {
      zh: '<p>张智敏律师，岭南所合伙人。2025 年 8 月，凭借扎实的专业能力和显著的工作成效，荣获广州市总工会「职工金牌贴心人 · 顾问之星」称号。</p>',
      en: '<p>Ms. Zhang is a Partner at Lingnan. In August 2025, she was awarded the Guangzhou Federation of Trade Unions "Gold-Medal Caregiver · Advisor Star" in recognition of her professional capability and significant contributions.</p>',
    },
    practiceAreas: { zh: ['劳动法', '民商事'], en: ['Labor Law', 'Civil & Commercial'] },
    expertise:     { zh: ['工会法律服务', '劳动争议', '民商法'], en: ['Union Legal Services', 'Labor Disputes', 'Civil & Commercial Law'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-08', slug: 'ye-longsheng', order: 8, status: '在职',
    name:   { zh: '叶龙生', en: 'YE Longsheng' },
    level:  { zh: '合伙人', en: 'Partner' },
    avatar: '/img/orig/lawyer-ye-longsheng.jpg',
    licenseNo: '', phone: '020-81836088', email: 'yls@lnlawfirm.cn',
    bio: {
      zh: '广州市总工会「职工金牌贴心人 · 调解之星」获得者，专注调解与劳动法。',
      en: 'Recipient of Guangzhou Federation of Trade Unions "Gold-Medal Caregiver · Mediation Star" award; focused on mediation and labor law.',
    },
    bioLong: {
      zh: '<p>叶龙生律师，岭南所合伙人。2025 年 8 月，荣获广州市总工会「职工金牌贴心人 · 调解之星」称号，长期从事调解及劳动法律服务。</p>',
      en: '<p>Mr. Ye is a Partner at Lingnan. In August 2025, he was awarded the Guangzhou Federation of Trade Unions "Gold-Medal Caregiver · Mediation Star" in recognition of his long-standing mediation and labor law practice.</p>',
    },
    practiceAreas: { zh: ['争议解决', '劳动法'], en: ['Dispute Resolution', 'Labor Law'] },
    expertise:     { zh: ['调解', '劳动争议'], en: ['Mediation', 'Labor Disputes'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-09', slug: 'zhuo-dongqing', order: 9, status: '在职',
    name:   { zh: '卓冬青', en: 'ZHUO Dongqing' },
    level:  { zh: '合伙人', en: 'Partner' },
    avatar: '/img/orig/lawyer-zhuo-dongqing.jpg',
    licenseNo: '', phone: '020-81836088', email: 'zdq@lnlawfirm.cn',
    bio: {
      zh: '专注校园普法与未成年人权益保护，受邀主讲「银乐羊城五老说」法治课堂。',
      en: 'Focused on campus legal education and minors\' rights protection; invited to deliver the "Yin Le Yang Cheng Five Elders" legal class.',
    },
    bioLong: {
      zh: '<p>卓冬青律师，岭南所合伙人。2025 年 6 月，受邀主讲「银乐羊城五老说」法治课堂《法润童心护成长》。</p>',
      en: '<p>Ms. Zhuo is a Partner at Lingnan. In June 2025, she was invited to deliver a legal class titled "Law Nurtures the Heart, Protects Growth" for the "Yin Le Yang Cheng Five Elders" program.</p>',
    },
    practiceAreas: { zh: ['民商事', '普法宣传'], en: ['Civil & Commercial', 'Legal Education'] },
    expertise:     { zh: ['未成年人保护', '校园普法'], en: ['Minors\' Rights Protection', 'Campus Legal Education'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-10', slug: 'wang-miao', order: 10, status: '在职',
    name:   { zh: '王淼', en: 'WANG Miao' },
    level:  { zh: '合伙人', en: 'Partner' },
    avatar: '',
    licenseNo: '', phone: '020-81836088', email: 'wm@lnlawfirm.cn',
    bio: {
      zh: '入选广州律协「法智惠企」讲师团，长期为中小企业提供法律服务。',
      en: 'Selected for the Guangzhou Bar Association "Law Empowers Enterprises" lecturer team; long-standing legal services for SMEs.',
    },
    bioLong: {
      zh: '<p>王淼律师，岭南所合伙人。2025 年 7 月，入选广州律协「法智惠企」讲师团。</p>',
      en: '<p>Mr. Wang is a Partner at Lingnan. In July 2025, he was selected for the Guangzhou Bar Association "Law Empowers Enterprises" lecturer team.</p>',
    },
    practiceAreas: { zh: ['公司商事', '民商事'], en: ['Corporate & Commercial', 'Civil & Commercial'] },
    expertise:     { zh: ['公司法', '中小企业法律服务'], en: ['Corporate Law', 'SME Legal Services'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-11', slug: 'zhang-xiaodan', order: 11, status: '在职',
    name:   { zh: '张潇丹', en: 'ZHANG Xiaodan' },
    level:  { zh: '合伙人', en: 'Partner' },
    avatar: '/img/orig/lawyer-zhang-xiaodan.jpg',
    licenseNo: '', phone: '020-81836088', email: 'zxd@lnlawfirm.cn',
    bio: {
      zh: '入选广州律协「法智惠企」讲师团。',
      en: 'Selected for the Guangzhou Bar Association "Law Empowers Enterprises" lecturer team.',
    },
    bioLong: {
      zh: '<p>张潇丹律师，岭南所合伙人。2025 年 7 月，入选广州律协「法智惠企」讲师团。</p>',
      en: '<p>Ms. Zhang is a Partner at Lingnan. In July 2025, she was selected for the Guangzhou Bar Association "Law Empowers Enterprises" lecturer team.</p>',
    },
    practiceAreas: { zh: ['公司商事', '民商事'], en: ['Corporate & Commercial', 'Civil & Commercial'] },
    expertise:     { zh: ['公司法', '企业合规'], en: ['Corporate Law', 'Corporate Compliance'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
  {
    id: 'lawyer-12', slug: 'chen-shaoxiao', order: 12, status: '在职',
    name:   { zh: '陈少校', en: 'CHEN Shaoxiao' },
    level:  { zh: '合伙人', en: 'Partner' },
    avatar: '/img/orig/lawyer-chen-shaoxiao.jpg',
    licenseNo: '', phone: '020-81836088', email: 'csx@lnlawfirm.cn',
    bio: {
      zh: '入选广州律师辩论团，长期从事诉讼与辩论实务。',
      en: 'Selected for the Guangzhou Lawyers\' Debate Team; long-standing practice in litigation and moot advocacy.',
    },
    bioLong: {
      zh: '<p>陈少校律师，岭南所合伙人。2025 年 6 月，入选广州律师辩论团。</p>',
      en: '<p>Mr. Chen is a Partner at Lingnan. In June 2025, he was selected for the Guangzhou Lawyers\' Debate Team.</p>',
    },
    practiceAreas: { zh: ['争议解决', '刑事辩护'], en: ['Dispute Resolution', 'Criminal Defense'] },
    expertise:     { zh: ['诉讼', '辩论'], en: ['Litigation', 'Moot Advocacy'] },
    education:     { zh: ['中山大学法学硕士'], en: ['LL.M., Sun Yat-sen University'] },
    languages:     ['中文', '英文'],
    office:        { zh: '广州', en: 'Guangzhou' },
  },
];

/* ============================================================
   Cases — 脱敏示例,原站未公开业绩详情
   ============================================================ */
const cases: CaseItem[] = [
  {
    id: 'case-01', slug: 'finance-and-securities-2024', year: 2024, status: 'published', isFeatured: true,
    title:    { zh: '某金融机构不良资产处置项目', en: 'Non-Performing Asset Disposition (Financial Institution)' },
    type:     { zh: '金融证券',   en: 'Finance & Securities' },
    industry: { zh: '金融',       en: 'Finance' },
    client:   { zh: '某商业银行（脱敏）', en: 'A commercial bank (anonymized)' },
    summary:  {
      zh: '代理某商业银行参与一笔涉及数十亿元的不良资产处置项目，含尽调、谈判、协议起草及执行。',
      en: 'Represented a commercial bank in an NPA disposition project valued at several billion RMB, covering due diligence, negotiation, agreement drafting and execution.',
    },
    content: {
      zh: '<p>本所为某商业银行就一宗数十亿元规模的不良资产处置项目提供全程法律服务，包括资产尽调、清收谈判、协议起草及处置执行。</p><h3>亮点</h3><ul><li>多法域协调</li><li>清收方案设计与谈判</li><li>处置流程合规把关</li></ul>',
      en: '<p>The firm provided end-to-end legal services to a commercial bank in an NPA disposition project valued at several billion RMB, including asset due diligence, collection negotiation, agreement drafting, and execution.</p><h3>Highlights</h3><ul><li>Multi-jurisdiction coordination</li><li>Collection scheme design and negotiation</li><li>Compliance review throughout disposition</li></ul>',
    },
    highlights:      { zh: ['涉及金额数十亿', '全流程法律服务', '多法域协调'], en: ['Multi-billion RMB scale', 'End-to-end service', 'Multi-jurisdiction'] },
    practiceArea:    { zh: '金融证券', en: 'Finance & Securities' },
    leadLawyerId: 'lawyer-03', lawyerIds: ['lawyer-03'],
  },
  {
    id: 'case-02', slug: 'corporate-counsel-long-term-2024', year: 2024, status: 'published', isFeatured: true,
    title:    { zh: '某大型集团常年法律顾问项目', en: 'Standing Counsel to a Major Group' },
    type:     { zh: '公司法律顾问',   en: 'General Counsel' },
    industry: { zh: '多元化集团',     en: 'Diversified Group' },
    client:   { zh: '某多元化集团（脱敏）', en: 'A diversified group (anonymized)' },
    summary:  {
      zh: '担任某多元化集团常年法律顾问，提供合同审查、合规咨询、争议解决等综合法律服务。',
      en: 'Acts as standing counsel to a diversified group, providing contract review, compliance advisory, and dispute resolution services.',
    },
    content: {
      zh: '<p>本所担任某多元化集团常年法律顾问，为其提供日常合同审查、合规体系建设、子公司治理、对外投资论证等综合法律服务，并代理相关诉讼仲裁案件。</p>',
      en: '<p>The firm serves as standing counsel to a diversified group, providing daily contract review, compliance system building, subsidiary governance, outbound investment analysis, and representation in related litigation and arbitration.</p>',
    },
    highlights:   { zh: ['常年法律顾问', '综合服务', '多业务条线'], en: ['Standing counsel', 'Integrated services', 'Multi-disciplinary'] },
    practiceArea: { zh: '公司法律顾问', en: 'General Counsel' },
    leadLawyerId: 'lawyer-01', lawyerIds: ['lawyer-01', 'lawyer-02'],
  },
  {
    id: 'case-03', slug: 'real-estate-renewal-2025', year: 2025, status: 'published', isFeatured: true,
    title:    { zh: '佛山宝华旧改回迁项目专项法律服务', en: 'Foshan Baohua Urban Renewal Relocation Project' },
    type:     { zh: '房地产业务',   en: 'Real Estate' },
    industry: { zh: '房地产',       en: 'Real Estate' },
    client:   { zh: '项目方（脱敏）', en: 'Project sponsor (anonymized)' },
    summary:  {
      zh: '为佛山宝华旧改回迁项目提供专项法律服务，保障公平回迁选房。',
      en: 'Provided specialized legal services for the Foshan Baohua urban renewal relocation project, ensuring a fair relocation and housing-selection process.',
    },
    content: {
      zh: '<p>2025 年 5 月，本所受邀为佛山宝华旧改回迁项目提供专项法律服务，对回迁方案、选房规则、补偿标准进行合法性论证，护航项目平稳推进。</p>',
      en: '<p>In May 2025, the firm was engaged to provide specialized legal services for the Foshan Baohua urban renewal relocation project, conducting a legal review of the relocation plan, housing-selection rules, and compensation standards, ensuring the project\'s smooth progress.</p>',
    },
    highlights:   { zh: ['旧改回迁', '选房方案', '合法性论证'], en: ['Urban renewal relocation', 'Housing selection scheme', 'Legal compliance review'] },
    practiceArea: { zh: '房地产业务', en: 'Real Estate' },
    leadLawyerId: 'lawyer-05', lawyerIds: ['lawyer-05'],
  },
  {
    id: 'case-04', slug: 'ip-rights-protection-2024', year: 2024, status: 'published', isFeatured: false,
    title:    { zh: '某知名品牌商标维权系列案件', en: 'Trademark Enforcement Series for a Well-Known Brand' },
    type:     { zh: '知识产权',   en: 'Intellectual Property' },
    industry: { zh: '消费品',     en: 'Consumer Goods' },
    client:   { zh: '某品牌方（脱敏）', en: 'A brand owner (anonymized)' },
    summary:  {
      zh: '为某知名品牌方提供商标侵权调查、行政查处申请及民事诉讼一揽子法律服务。',
      en: 'Provided a full suite of legal services for a well-known brand, including trademark infringement investigation, administrative enforcement applications, and civil litigation.',
    },
    content: {
      zh: '<p>本所代理某知名品牌方，针对市场上多起商标侵权行为开展调查取证，向市场监管部门申请行政查处，并代理多起民事诉讼，取得胜诉判决。</p>',
      en: '<p>The firm represented a well-known brand owner in investigating and gathering evidence of multiple trademark infringements, applying for administrative enforcement with market regulators, and litigating multiple civil cases, obtaining favorable judgments.</p>',
    },
    highlights:   { zh: ['商标维权', '行政查处', '民事诉讼'], en: ['Trademark enforcement', 'Administrative action', 'Civil litigation'] },
    practiceArea: { zh: '知识产权', en: 'Intellectual Property' },
    leadLawyerId: 'lawyer-02', lawyerIds: ['lawyer-02'],
  },
  {
    id: 'case-05', slug: 'foreign-investment-setup-2023', year: 2023, status: 'published', isFeatured: false,
    title:    { zh: '某外资企业设立及合规体系建设', en: 'Foreign-Invested Enterprise Setup and Compliance' },
    type:     { zh: '外商投资',   en: 'Foreign Investment' },
    industry: { zh: '制造业',     en: 'Manufacturing' },
    client:   { zh: '某外资制造企业（脱敏）', en: 'A foreign manufacturer (anonymized)' },
    summary:  {
      zh: '为某外资制造企业在广东投资设立提供一站式法律服务，含公司设立、合同体系、合规建设。',
      en: 'Provided one-stop legal services for a foreign manufacturer investing in Guangdong, including company setup, contract systems, and compliance building.',
    },
    content: {
      zh: '<p>本所为某外资制造企业在广东投资设立提供法律服务，包括「三资」企业设立相关协议、合同、章程的起草与审查，企业合规体系搭建及日常法律咨询。</p>',
      en: '<p>The firm provided legal services for a foreign manufacturer\'s investment setup in Guangdong, including drafting and review of the establishment agreements, contracts, and articles of association, as well as building the corporate compliance system and providing daily legal advisory.</p>',
    },
    highlights:   { zh: ['一站式服务', '合规体系', '外资设立'], en: ['One-stop service', 'Compliance system', 'Foreign-invested setup'] },
    practiceArea: { zh: '外商投资', en: 'Foreign Investment' },
    leadLawyerId: 'lawyer-03', lawyerIds: ['lawyer-03'],
  },
  {
    id: 'case-06', slug: 'criminal-defense-economic-2024', year: 2024, status: 'published', isFeatured: false,
    title:    { zh: '某职务经济犯罪案件辩护', en: 'Public Office Economic Crime Defense' },
    type:     { zh: '刑事辩护',   en: 'Criminal Defense' },
    industry: { zh: '政府',       en: 'Government' },
    client:   { zh: '当事人（化名）', en: 'Defendant (pseudonymized)' },
    summary:  {
      zh: '代理某职务经济犯罪案件辩护，依法提出辩护意见，维护当事人合法权益。',
      en: 'Defended a public office economic crime case, raising lawful arguments to safeguard the defendant\'s legitimate rights.',
    },
    content: {
      zh: '<p>本所代理某职务经济犯罪案件，通过对在案证据的逐项审查，依法提出辩护意见，部分指控最终未被法院认定。</p>',
      en: '<p>The firm defended a public office economic crime case, conducting a point-by-point review of the evidence on record and lawfully raising defense arguments; certain charges were ultimately not upheld by the court.</p>',
    },
    highlights:   { zh: ['刑事辩护', '证据审查', '部分指控不成立'], en: ['Criminal defense', 'Evidence review', 'Partial acquittal'] },
    practiceArea: { zh: '刑事辩护', en: 'Criminal Defense' },
    leadLawyerId: 'lawyer-04', lawyerIds: ['lawyer-04'],
  },
];

/* ============================================================
   News — 10 条原站动态,每条配原站真实配图
   ============================================================ */
const news: NewsItem[] = [
  {
    id: 'news-orig-1001', slug: 'gzftu-gold-medal-2025-08', date: '2025-08-19', status: 'published', isFeatured: true, sourceUrl: 'http://www.lnlawfirm.cn/list_154_1001.html',
    cover: '/img/orig/news-orig-1001.png',
    category: { zh: '岭南喜讯', en: 'Awards' },
    title:    { zh: '岭南喜讯 | 我所律师获广州市总工会表彰', en: 'Firm News | Our Attorneys Honored by Guangzhou Federation of Trade Unions' },
    summary:  {
      zh: '8 月 18 日，我所张智敏律师、叶龙生律师分别荣获广州市职工金牌贴心人「顾问之星」「调解之星」称号。',
      en: 'On August 18, our attorneys ZHANG Zhimin and YE Longsheng were awarded "Advisor Star" and "Mediation Star" of the Guangzhou Gold-Medal Caregiver program.',
    },
    content: {
      zh: '<p>2025 年 8 月 18 日，由广州市总工会举办的「第五期广州市工会法律服务律师团成立暨 2024 年度职工金牌贴心人等发布活动」在广州市工人文化宫落下帷幕。</p>'
         + '<p>活动现场对在工会法律服务中表现突出的个人进行了表彰，我所<strong>张智敏律师</strong>、<strong>叶龙生律师</strong>凭借扎实的专业能力和显著的工作成效，分别荣获广州市职工金牌贴心人「顾问之星」及「调解之星」称号。</p>',
      en: '<p>On August 18, 2025, the "Fifth Guangzhou Trade Union Legal Service Lawyer Corps Launch and 2024 Gold-Medal Caregiver Awards" ceremony hosted by the Guangzhou Federation of Trade Unions was held at the Guangzhou Workers\' Cultural Palace.</p>'
         + '<p><strong>Ms. Zhang Zhimin</strong> and <strong>Mr. Ye Longsheng</strong> of our firm received the "Advisor Star" and "Mediation Star" awards, respectively, in recognition of their professional capability and significant contributions.</p>',
    },
  },
  {
    id: 'news-orig-1000', slug: 'legalone-gba-15-2025-08', date: '2025-08-12', status: 'published', isFeatured: true, sourceUrl: 'http://www.lnlawfirm.cn/list_154_1000.html',
    cover: '/img/orig/news-orig-1000.png',
    category: { zh: '岭南喜讯', en: 'Awards' },
    title:    { zh: '岭南喜讯 | 我所荣膺 LegalOne 粤港澳大湾区「最具影响力 15 强（本地所）」', en: 'Firm News | Lingnan Named to LegalOne GBA "Most Influential 15 (Local Firms)"' },
    summary:  {
      zh: '2025 年 8 月 9 日，我所荣登 LegalOne 2025 年度粤港澳大湾区法律大奖「最具影响力律师事务所 15 强（本地所）」榜单。',
      en: 'On August 9, 2025, the firm was named to LegalOne\'s 2025 GBA Legal Awards "Most Influential 15 Law Firms (Local)" list.',
    },
    content: {
      zh: '<p>2025 年 8 月 9 日，由全球性法律评级机构 LegalOne 主办的「2025 年度粤港澳大湾区法律大奖盛典」在广州四季酒店圆满落幕。</p>'
         + '<p>我所凭借深厚的专业积淀与突出的区域服务影响力，从众多参评机构中脱颖而出，荣登「最具影响力律师事务所 15 强（本地所）」榜单。</p>',
      en: '<p>On August 9, 2025, the "2025 Greater Bay Area Legal Awards Gala" hosted by LegalOne concluded successfully at the Four Seasons Hotel Guangzhou.</p>'
         + '<p>Our firm was named to the "Most Influential 15 Law Firms (Local)" list, in recognition of its profound professional accumulation and outstanding regional impact.</p>',
    },
  },
  {
    id: 'news-orig-999', slug: 'football-victory-2025-08', date: '2025-08-08', status: 'published', isFeatured: false, sourceUrl: 'http://www.lnlawfirm.cn/list_154_999.html',
    cover: '/img/orig/news-orig-999.png',
    category: { zh: '岭南动态', en: 'Firm News' },
    title:    { zh: '岭南动态 | 勠力同心！足球联队夺取秋天的第一场胜利', en: 'Firm News | Football Team Wins the First Victory of Autumn' },
    summary:  {
      zh: '2025 年广州律师足球冠军联赛第八轮，我所足球联队取得赛季关键胜利。',
      en: 'In the eighth round of the 2025 Guangzhou Lawyers\' Football Champions League, our firm\'s football team secured a key seasonal victory.',
    },
    content: {
      zh: '<p>2025 年广州律师足球冠军联赛第八轮于 8 月 7 日如期打响。赛前一场不期而至的暴雨，让场地变得湿滑，为这场较量增添了不小的难度与变数。</p>'
         + '<p>带着此前连续两场 4-1 大胜积累的信心与高涨的士气，球队踏上赛场。队员间日益提升的默契和不断丰富的比赛经验，成为球队坚实的后盾。</p>',
      en: '<p>The eighth round of the 2025 Guangzhou Lawyers\' Football Champions League kicked off on August 7, preceded by an unseasonal rainstorm that made the pitch slippery and added difficulty to the match.</p>'
         + '<p>Carrying the confidence and momentum of two consecutive 4-1 victories, the team took the field, with growing on-pitch chemistry and match experience providing a solid backbone.</p>',
    },
  },
  {
    id: 'news-orig-998', slug: 'party-building-honor-2025-07', date: '2025-07-30', status: 'published', isFeatured: false, sourceUrl: 'http://www.lnlawfirm.cn/list_154_998.html',
    cover: '/img/orig/news-orig-998.png',
    category: { zh: '岭南喜讯', en: 'Awards' },
    title:    { zh: '岭南喜讯 | 广东岭南律师事务所党总支获全省律师行业党建工作「好」等次表彰', en: 'Firm News | Party Branch Receives Provincial Lawyer-Industry Party-Building "Excellent" Honor' },
    summary:  {
      zh: '广东岭南律师事务所党总支获 2023-2024 年度全省律师行业党建工作「好」等次通报表扬。',
      en: 'Our firm\'s General Party Branch received the 2023-2024 provincial lawyer-industry party-building "Excellent" honor.',
    },
    content: {
      zh: '<p>近日，中共广东省律师行业委员会对 2023-2024 年度全省律师行业党建工作考核为「好」等次的律师事务所党组织进行通报表扬。</p>'
         + '<p>广州律师行业 25 家律师事务所党组织获得通报表扬，广东岭南律师事务所党总支凭借扎实的党建工作成效与突出的示范引领作用，光荣入选，成为广州律师行业党建工作的先进代表之一。</p>',
      en: '<p>Recently, the CPC Guangdong Province Lawyers\' Industry Committee publicly commended party organizations of law firms that received an "Excellent" rating in the 2023-2024 provincial lawyer-industry party-building assessment.</p>'
         + '<p>Twenty-five law firm party organizations in Guangzhou received commendation, with our General Party Branch being recognized for its solid party-building work and exemplary leading role.</p>',
    },
  },
  {
    id: 'news-orig-997', slug: 'haizhu-orienteering-2025-07', date: '2025-07-28', status: 'published', isFeatured: false, sourceUrl: 'http://www.lnlawfirm.cn/list_154_997.html',
    cover: '/img/orig/news-orig-997.png',
    category: { zh: '岭南动态', en: 'Firm News' },
    title:    { zh: '岭南动态 | 同心同行，聚力全运！岭南律师助力海珠统战定向越野赛活力开跑', en: 'Firm News | Lingnan Lawyers Support Haizhu Orienteering Race for the 15th National Games' },
    summary:  {
      zh: '我所组织三支队伍参加海珠区统一战线定向越野赛，助力第十五届全运会。',
      en: 'Our firm fielded three teams at the Haizhu District orienteering race in support of the 15th National Games.',
    },
    content: {
      zh: '<p>2025 年 7 月 26 日清晨，阳光洒满海珠国家湿地公园，一场充满活力与凝聚力的盛会——2025 年海珠区统一战线「同心十五运 越动新征程」定向越野赛在此鸣枪开赛。</p>'
         + '<p>广东岭南律师事务所积极响应号召，组织三支精英队伍共赴这场融合了运动、协作与统一战线的盛会，以饱满的热情和昂扬的姿态，为助力广州办好第十五届全运会贡献法律人的力量。</p>',
      en: '<p>On the morning of July 26, 2025, the 2025 Haizhu District United Front "One Heart for the 15th National Games" orienteering race was launched at the Haizhu National Wetland Park.</p>'
         + '<p>Our firm fielded three elite teams for this event combining sport, collaboration and united-front spirit, contributing legal professionals\' enthusiasm and energy to Guangzhou\'s hosting of the 15th National Games.</p>',
    },
  },
  {
    id: 'news-orig-996', slug: 'onboarding-training-2025-07', date: '2025-07-21', status: 'published', isFeatured: false, sourceUrl: 'http://www.lnlawfirm.cn/list_154_996.html',
    cover: '/img/orig/news-orig-996.png',
    category: { zh: '岭南动态', en: 'Firm News' },
    title:    { zh: '岭南动态 | 融情岭南 · 聚力新程——迎新培训会暨律师自媒体运营分享会', en: 'Firm News | Onboarding Training and Self-Media Operations Sharing Session' },
    summary:  {
      zh: '我所为新入职同事开展迎新培训会暨律师自媒体运营分享会。',
      en: 'Our firm hosted an onboarding training and self-media operations sharing session for new colleagues.',
    },
    content: {
      zh: '<p>我所近期举办新入职同事迎新培训会暨律师自媒体运营分享会。通过制度介绍、执业规范讲解及自媒体运营经验分享，帮助新同事尽快融入团队。</p>',
      en: '<p>Our firm recently hosted an onboarding training session and a self-media operations sharing session for new colleagues, covering institutional introductions, practice standards, and self-media operations experience to help new joiners integrate into the team.</p>',
    },
  },
  {
    id: 'news-orig-995', slug: 'football-match-2025-07', date: '2025-07-17', status: 'published', isFeatured: false, sourceUrl: 'http://www.lnlawfirm.cn/list_154_995.html',
    cover: '/img/orig/news-orig-995.png',
    category: { zh: '岭南动态', en: 'Firm News' },
    title:    { zh: '岭南动态 | 绿荫激情燃，坚守情不褪——岭南所足球赛战报', en: 'Firm News | Football Match Recap' },
    summary:  {
      zh: '我所足球队 2025 年广州律师足球冠军联赛第七轮战报。',
      en: 'Recap of our firm\'s football team in the seventh round of the 2025 Guangzhou Lawyers\' Football Champions League.',
    },
    content: {
      zh: '<p>2025 年广州律师足球冠军联赛第七轮比赛战罢，岭南所足球队团结协作，展现出良好的竞技状态和团队精神。</p>',
      en: '<p>Following the seventh round of the 2025 Guangzhou Lawyers\' Football Champions League, our firm\'s football team demonstrated strong teamwork and competitive spirit.</p>',
    },
  },
  {
    id: 'news-orig-994', slug: 'gz-no2-highschool-2025-07', date: '2025-07-14', status: 'published', isFeatured: false, sourceUrl: 'http://www.lnlawfirm.cn/list_154_994.html',
    cover: '/img/orig/news-orig-994.png',
    category: { zh: '校园普法', en: 'Legal Education' },
    title:    { zh: '岭南动态 | 岭南所开展广州市第二中学高二 16 班职业生涯体验活动', en: 'Firm News | Career Experience Event for Guangzhou No.2 High School Class 16' },
    summary:  {
      zh: '我所为广州市第二中学高二 16 班师生开展法律职业生涯体验活动。',
      en: 'Our firm hosted a legal career experience event for teachers and students of Class 16, Grade 11, Guangzhou No.2 High School.',
    },
    content: {
      zh: '<p>我所接待了广州市第二中学高二 16 班师生一行，介绍律所运作、律师执业等内容，帮助同学们认识法律职业。</p>',
      en: '<p>Our firm hosted teachers and students of Class 16, Grade 11, Guangzhou No.2 High School, introducing them to the firm\'s operations and the practice of law, helping them understand the legal profession.</p>',
    },
  },
  {
    id: 'news-orig-993', slug: 'fazhi-huiqi-2025-07', date: '2025-07-12', status: 'published', isFeatured: false, sourceUrl: 'http://www.lnlawfirm.cn/list_154_993.html',
    cover: '/img/orig/news-orig-993.png',
    category: { zh: '岭南喜讯', en: 'Awards' },
    title:    { zh: '岭南喜讯 | 我所王淼、张潇丹律师入选广州律协「法智惠企」讲师团', en: 'Firm News | WANG Miao and ZHANG Xiaodan Join Guangzhou Bar "Law Empowers Enterprises" Lecturer Team' },
    summary:  {
      zh: '我所王淼、张潇丹律师入选广州律协「法智惠企」讲师团。',
      en: 'WANG Miao and ZHANG Xiaodan of our firm joined the Guangzhou Bar Association "Law Empowers Enterprises" lecturer team.',
    },
    content: {
      zh: '<p>2025 年 7 月，经广州市律师协会审定，王淼律师、张潇丹律师入选「法智惠企」讲师团，将面向中小企业开展法律宣讲活动。</p>',
      en: '<p>In July 2025, after review by the Guangzhou Bar Association, Mr. Wang Miao and Ms. Zhang Xiaodan were selected for the "Law Empowers Enterprises" lecturer team, which will deliver legal presentations to SMEs.</p>',
    },
  },
  {
    id: 'news-orig-992', slug: 'gz-debate-team-2025-06', date: '2025-06-30', status: 'published', isFeatured: false, sourceUrl: 'http://www.lnlawfirm.cn/list_154_992.html',
    cover: '/img/orig/news-orig-992.png',
    category: { zh: '岭南喜讯', en: 'Awards' },
    title:    { zh: '岭南喜讯 | 我所陈少校、谢绪灿律师入选广州律师辩论团', en: 'Firm News | CHEN Shaoxiao and XIE Xucan Join Guangzhou Lawyers\' Debate Team' },
    summary:  {
      zh: '我所陈少校、谢绪灿律师入选广州律师辩论团。',
      en: 'CHEN Shaoxiao and XIE Xucan of our firm joined the Guangzhou Lawyers\' Debate Team.',
    },
    content: {
      zh: '<p>2025 年 6 月，经广州市律师协会审定，陈少校律师、谢绪灿律师入选广州律师辩论团。</p>',
      en: '<p>In June 2025, after review by the Guangzhou Bar Association, Mr. Chen Shaoxiao and Mr. Xie Xucan were selected for the Guangzhou Lawyers\' Debate Team.</p>',
    },
  },
  /* ---------- 行业观察（源自广州市律师协会、广东省律师协会等官方通知公告）---------- */
  {
    id: 'news-ind-001', slug: 'gzbar-pipia-guideline-2026-05', date: '2026-05-29', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/6b3f4d175e224d8d9135783686da1ecb',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于公布《律师办理个人信息保护影响评估业务指引》的通知', en: 'Publication of the Guidelines for Lawyers Conducting Personal Information Protection Impact Assessments' },
    summary:  {
      zh: '广州市律师协会正式公布个人信息保护影响评估业务指引，系国内首个由地方律协发布的 PIA 专项规范。',
      en: 'The Guangzhou Bar Association published guidelines on PIAs, the first specialized PIA standard issued by a local bar association in China.',
    },
    content: {
      zh: '<p>2026 年 5 月 29 日，广州市律师协会正式公布《律师办理个人信息保护影响评估（PIA）业务指引》，为律师协助企业开展 PIA 工作提供标准化流程与合规要点。该指引涵盖评估触发条件、数据映射方法、风险等级判定、评估报告撰写等核心环节，是《个人信息保护法》实施三年来广州律协在数据合规领域的重要成果。指引同时附录了 PIA 评估报告模板，可供全市律师参考使用。</p>',
      en: '<p>On May 29, 2026, the Guangzhou Bar Association published the "Guidelines for Lawyers Conducting Personal Information Protection Impact Assessments (PIA)", providing a standardized process and compliance checklist for lawyers assisting enterprises with PIA matters. The guidelines cover key elements including assessment triggers, data mapping methodology, risk-level classification, and report drafting, and represent a significant achievement in data compliance practice since the PIPL\'s implementation three years ago. A PIA report template is also appended for reference.</p>',
    },
  },
  {
    id: 'news-ind-002', slug: 'gzbar-data-export-guideline-2026-05', date: '2026-05-29', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/657be90b8a314961bc4fd49103feff9b',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于公布《律师开展数据出境合规法律服务业务指引》的通知', en: 'Publication of the Guidelines for Lawyers Providing Data Export Compliance Legal Services' },
    summary:  {
      zh: '广州市律师协会发布数据出境合规法律服务业务指引，覆盖安全评估申报、标准合同备案及认证辅导三大路径。',
      en: 'The Guangzhou Bar Association released guidelines on data export compliance services covering security assessment filings, standard contract filings, and certification support.',
    },
    content: {
      zh: '<p>2026 年 5 月 29 日，广州市律师协会公布《律师开展数据出境合规法律服务业务指引》，为律师办理数据出境合规业务提供全流程指引。该指引围绕《数据出境安全评估办法》《促进和规范数据跨境流动规定》等最新法规，系统梳理了安全评估申报、个人信息出境标准合同备案、个人信息保护认证等三条合规路径的操作要点与文书范本。</p><p>作为粤港澳大湾区核心城市，广州涉外数据流动场景密集，该指引的发布对本地涉外律师具有重大实务价值。</p>',
      en: '<p>On May 29, 2026, the Guangzhou Bar Association published the "Guidelines for Lawyers Providing Data Export Compliance Legal Services", offering end-to-end guidance for data export compliance engagements. The guidelines systematically cover the three compliance pathways—security assessment filings, standard contract filings for personal information export, and personal information protection certification—aligned with the latest regulations including the Data Export Security Assessment Measures and the Rules on Promoting and Regulating Cross-Border Data Flows.</p><p>Given Guangzhou\'s role as a core GBA city with intensive cross-border data flows, the guidelines hold significant practical value for local cross-border practitioners.</p>',
    },
  },
  {
    id: 'news-ind-003', slug: 'gzbar-genai-copyright-2026-06', date: '2026-06-04', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/7e2155e8228d4cd68cbd32395fa13791',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于举办"生成式人工智能的版权挑战与法律应对"专题讲座的通知', en: 'Seminar on "Copyright Challenges and Legal Responses to Generative AI"' },
    summary:  {
      zh: '广州律协组织生成式人工智能版权专题培训，探讨 AI 生成内容的可版权性、训练数据版权风险及平台责任。',
      en: 'The Guangzhou Bar Association organized a seminar on AI copyright, covering copyrightability of AI-generated content, training-data risks, and platform liability.',
    },
    content: {
      zh: '<p>2026 年 6 月 4 日下午，广州市律师协会知识产权法律专业委员会联合互联网与高新技术法律专业委员会，在市律协举办"生成式人工智能的版权挑战与法律应对"专题讲座。讲座邀请中山大学法学院教授及头部互联网企业法务总监担任主讲嘉宾，围绕 AI 生成内容的可版权性判断、大模型训练数据的版权合规、AI 平台侵权责任认定等前沿议题展开深入研讨。</p><p>近 200 名律师到场参加，线上同步直播观看超过 1,200 人次。</p>',
      en: '<p>On the afternoon of June 4, 2026, the Guangzhou Bar Association\'s Intellectual Property Law Committee and Internet & High-Tech Law Committee co-hosted a seminar on "Copyright Challenges and Legal Responses to Generative AI". Guest speakers included a professor from Sun Yat-sen University School of Law and a senior legal director from a major internet company, covering the copyrightability of AI-generated content, compliance of training-data pipelines, and liability frameworks for AI platforms. Nearly 200 attorneys attended in person, with over 1,200 online attendees via live stream.</p>',
    },
  },
  {
    id: 'news-ind-004', slug: 'gzbar-maritime-law-revision-2026-06', date: '2026-06-06', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/54ddafaacb7e4d1986fd957b689831d5',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于举办《中华人民共和国海商法》（修订）解读与适用专题培训的通知', en: 'Training on the Interpretation and Application of the Revised PRC Maritime Code' },
    summary:  {
      zh: '广州律协海商委组织《海商法》修订专题培训，聚焦承运人制度、电子提单、船舶油污损害赔偿等变革要点。',
      en: 'The GBA Maritime Law Committee organized a training on the Maritime Code revisions, focusing on carrier rules, electronic bills of lading, and oil pollution damages.',
    },
    content: {
      zh: '<p>2026 年 6 月 6 日，广州市律师协会海事海商与航空法律专业委员会举办《中华人民共和国海商法》（修订）解读与适用专题培训。培训由参与修法工作的知名海商法教授主讲，重点解读承运人责任制度重构、电子运输记录法律效力、船舶油污损害赔偿机制完善等核心修订内容。作为全国海事案件最集中的港口城市之一，广州律师群体对该修订关注度极高。</p>',
      en: '<p>On June 6, 2026, the Guangzhou Bar Association\'s Maritime and Aviation Law Committee hosted a training on the Interpretation and Application of the revised PRC Maritime Code. The session was led by a leading maritime law professor involved in the revision process, focusing on the reconstruction of carrier liability rules, the legal status of electronic transport records, and the enhanced oil pollution damage compensation regime.</p>',
    },
  },
  {
    id: 'news-ind-005', slug: 'gzbar-gba-restructuring-guideline-2026-05', date: '2026-05-29', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/9a836689892146d5bf9eb5b9ae2efd83',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于公布《粤港澳大湾区企业综合纾困法律服务指引》的通知', en: 'Publication of the GBA Enterprise Restructuring Legal Services Guide' },
    summary:  {
      zh: '广州律协发布大湾区企业纾困法律服务指引，涵盖庭外重组、预重整、破产重整及跨境协调四大模块。',
      en: 'The Bar Association issued a GBA enterprise restructuring guide covering out-of-court restructuring, pre-pack, bankruptcy reorganization, and cross-border coordination.',
    },
    content: {
      zh: '<p>2026 年 5 月 29 日，广州市律师协会公布《粤港澳大湾区企业综合纾困法律服务指引》。该指引由破产清算法律专业委员会牵头起草，系统梳理了庭外债务重组、预重整程序、破产重整及跨境破产协调机制，并特别针对三地制度差异下的"一地重组、三地衔接"难题给出操作建议。指引发布后即被纳入广东省高院营商环境改革配套文件参考目录。</p>',
      en: '<p>On May 29, 2026, the Guangzhou Bar Association published the "GBA Enterprise Comprehensive Restructuring Legal Services Guide". Drafted by the Insolvency Law Committee, the guide systematically covers out-of-court debt restructuring, pre-pack proceedings, bankruptcy reorganization, and cross-border insolvency coordination, with operational recommendations for the "one restructuring, three jurisdictions" challenge unique to the GBA.</p>',
    },
  },
  {
    id: 'news-ind-006', slug: 'gzbar-crs-2-wealth-2026-05', date: '2026-05-29', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/6f2ee3961c8244a7907d372297bfaa3f',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于举办"CRS 2.0 下的财富管理合规部署"讲座的通知', en: 'Seminar on "Wealth Management Compliance Under CRS 2.0"' },
    summary:  {
      zh: '广州律协举办 CRS 2.0 专题财富管理讲座，聚焦全球税务透明化背景下高净值客户的跨境资产合规与传承规划。',
      en: 'The Guangzhou Bar Association hosted a seminar on CRS 2.0 wealth management compliance, covering cross-border asset compliance and succession planning.',
    },
    content: {
      zh: '<p>2026 年 5 月 29 日，广州市律师协会婚姻家事与财富传承法律专业委员会举办"CRS 2.0 下的财富管理合规部署"专题讲座。讲座由具有国际税务师和律师双证资格的专家主讲，围绕 OECD CRS 框架最新修订、中国非居民金融账户涉税信息管理办法、离岸信托穿透规则及大湾区跨境财富合规架构设计等核心议题展开。</p>',
      en: '<p>On May 29, 2026, the Guangzhou Bar Association\'s Family and Wealth Succession Law Committee hosted a seminar on "Wealth Management Compliance Under CRS 2.0". The session was led by a dual-qualified international tax and legal expert, covering the OECD CRS framework updates, China\'s non-resident financial account tax information rules, offshore trust transparency provisions, and GBA cross-border wealth compliance architecture.</p>',
    },
  },
  {
    id: 'news-ind-007', slug: 'gzbar-conflict-of-interest-rules-2025-11', date: '2025-11-13', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/65cfc7438d9f495388880619038f3795',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于转发《广东省律师防止利益冲突规则》的通知', en: 'Circular on the Guangdong Lawyers\' Conflict-of-Interest Rules' },
    summary:  {
      zh: '广州律协转发省律协新修订的《广东省律师防止利益冲突规则》，强化律所内控与利冲检索义务。',
      en: 'The Guangzhou Bar Association forwarded the newly revised Guangdong Lawyers\' Conflict-of-Interest Rules, strengthening firm-level internal controls and conflict-checking obligations.',
    },
    content: {
      zh: '<p>2025 年 11 月 13 日，广州市律师协会向全市律师事务所转发新修订的《广东省律师防止利益冲突规则》。新规则在原有基础上大幅细化：明确将"推定为利益冲突"的情形从 6 种扩展至 12 种，首次规定律师事务所须建立电子化利冲检索系统，并新增了律师转所时的利冲衔接义务。广州地区 1,200 余家律所需在 2026 年 3 月前完成内控制度更新。</p>',
      en: '<p>On November 13, 2025, the Guangzhou Bar Association circulated the newly revised "Guangdong Lawyers\' Conflict-of-Interest Rules" to all member firms. The revision significantly expands the "presumed conflict" scenarios from 6 to 12, mandates electronic conflict-checking systems for the first time, and introduces conflict carry-over obligations for lawyers changing firms. Over 1,200 Guangzhou law firms are required to update their internal control systems by March 2026.</p>',
    },
  },
  {
    id: 'news-ind-008', slug: 'gzbar-legal-aid-quality-2025-09', date: '2025-09-08', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/b4972702e70a480880c14dc2cec3e5b4',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '广州市法律援助处关于 2025 年全市法律援助案件质量抽查评估优良案件情况的通报', en: 'Guangzhou Legal Aid Office Report on 2025 Legal Aid Case Quality Assessment' },
    summary:  {
      zh: '广州市法律援助处通报 2025 年度法援案件质量评估结果，全市优良率同比提升 6 个百分点。',
      en: 'The Guangzhou Legal Aid Office reported 2025 case quality assessment results, with the overall excellence rate up 6 percentage points year-on-year.',
    },
    content: {
      zh: '<p>2025 年 9 月 8 日，广州市法律援助处发布 2025 年全市法律援助案件质量抽查评估情况通报。评估覆盖全市 11 个区法律援助机构指派的刑事、民事及行政法援案件共 540 件。评估结果显示优良率达到 87.6%，较 2024 年同期上升 6 个百分点，其中刑事辩护全覆盖案件的律师阅卷率和庭前会见率首次双超 95%。</p>',
      en: '<p>On September 8, 2025, the Guangzhou Legal Aid Office released its 2025 city-wide legal aid case quality assessment report, covering 540 criminal, civil, and administrative aid cases across all 11 districts. The overall excellence rate reached 87.6%, up 6 percentage points year-on-year. For the first time, both the case-file review rate and pre-trial client meeting rate in full-coverage criminal defense cases exceeded 95%.</p>',
    },
  },
  {
    id: 'news-ind-009', slug: 'gzbar-police-legal-volunteer-2025-05', date: '2025-05-19', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/aa6dd54584854d09957ed2bc0efb1020',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于征集广州市维护公安民警执法权威法律服务团律师的通知', en: 'Call for Lawyers to Join the Guangzhou Police Law-Enforcement Protection Legal Service Corps' },
    summary:  {
      zh: '广州市律协公开征集维护公安民警执法权威法律服务团成员，为一线民警提供公益法律支持。',
      en: 'The GBA announced an open call for lawyers to join a legal service corps that supports front-line police officers in law-enforcement protection.',
    },
    content: {
      zh: '<p>2026 年 5 月 19 日，广州市律师协会发布通知，面向全市律师公开征集广州市维护公安民警执法权威法律服务团成员。服务团将协助市律协公益法律服务工作委员会为一线民警在执法过程中遭遇的侵权、妨害公务等行为提供免费法律咨询和维权支持。报名条件包括执业 5 年以上、无行业处分记录、有刑事或行政法领域执业经验。</p>',
      en: '<p>On May 19, 2026, the Guangzhou Bar Association issued a public call for lawyers to join the Guangzhou Police Law-Enforcement Protection Legal Service Corps. The corps will support the Bar\'s public-interest legal services committee by providing pro bono legal advice and rights-protection assistance to front-line police officers facing infringement or obstruction during law enforcement operations. Applicants must have at least 5 years of practice experience, a clean disciplinary record, and practice experience in criminal or administrative law.</p>',
    },
  },
  {
    id: 'news-ind-010', slug: 'gzbar-village-legal-advisor-2025-11', date: '2025-11-06', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/f0c3c0b41e0e4cf887c024e38c4b1b22',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于通报表扬全省律师行业村（社区）法律顾问工作表现突出律师的通知', en: 'Commendation for Outstanding Lawyers in Village (Community) Legal Advisor Program' },
    summary:  {
      zh: '广东省律协通报表扬村（社区）法律顾问工作表现突出律师，广州 128 名律师上榜。',
      en: 'The Guangdong Bar Association commended outstanding village (community) legal advisors, with 128 Guangzhou lawyers recognized.',
    },
    content: {
      zh: '<p>2025 年 11 月 6 日，广东省律师协会发布通报，对在全省村（社区）法律顾问工作中表现突出的律师进行表扬。全省 21 个地市共 582 名律师获此荣誉，其中广州 128 名，居全省首位。通报指出，获表扬律师年均到村（社区）服务天数超过 32 天，累计解答群众咨询 5.8 万余次，参与人民调解 1.2 万余件。</p>',
      en: '<p>On November 6, 2025, the Guangdong Bar Association commended 582 lawyers across all 21 prefectures for outstanding performance in village (community) legal advisor services, with 128 from Guangzhou ranking first in the province. The commended lawyers averaged over 32 service days per year at village (community) level, collectively handling 58,000+ public consultations and 12,000+ mediation cases.</p>',
    },
  },
  {
    id: 'news-ind-011', slug: 'gzbar-yangcheng-volunteer-2025-09', date: '2025-09-18', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/294bc1c8e71f41ee846055f72d28afc1',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于公布 2025 年羊城律政佳人志愿服务队队员补录名单的通知', en: 'Announcement of the 2025 Supplementary Roster for the Guangzhou Women Lawyers Volunteer Service Team' },
    summary:  {
      zh: '羊城律政佳人志愿服务队完成 2025 年度补录，新增 45 名女律师队员，覆盖家事调解、校园普法、女职工维权等领域。',
      en: 'The Guangzhou Women Lawyers Volunteer Service Team completed its 2025 supplementary intake with 45 new members covering family mediation, campus legal education, and women worker rights protection.',
    },
    content: {
      zh: '<p>2025 年 9 月 18 日，广州市律师协会女律师工作委员会公布 2025 年度"羊城律政佳人"志愿服务队队员补录名单，共 45 名女律师入选。服务队自 2019 年成立以来累计在册队员已超过 300 人，覆盖全市 11 个区，本年度重点开展家事调解、校园反欺凌普法、女职工职场维权三大专项。</p>',
      en: '<p>On September 18, 2025, the Guangzhou Bar Association\'s Women Lawyers Committee announced 45 successful supplementary applicants for the 2025 "Guangzhou Women Lawyers" volunteer service team. Since its establishment in 2019, the team has grown to over 300 registered members across 11 districts, focusing this year on three special initiatives: family mediation, campus anti-bullying education, and women worker rights protection.</p>',
    },
  },
  {
    id: 'news-ind-012', slug: 'gzbar-lawyer-tax-training-2025-12', date: '2025-12-09', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/bb259d8e375b4d468730f441d3e6b2c9',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于举办广州市律师行业税务培训的通知', en: 'Notice on Guangzhou Lawyer Industry Tax Training' },
    summary:  {
      zh: '广州市律协组织全行业税务合规培训，覆盖个税汇算、律所增值税及附加、合伙制律所税务筹划等要点。',
      en: 'The Guangzhou Bar Association organized industry-wide tax compliance training covering individual income tax, firm-level VAT, and partnership tax planning.',
    },
    content: {
      zh: '<p>2025 年 12 月 9 日，广州市律师协会财务与资产管理工作委员会举办"广州市律师行业税务培训"，邀请广州市税务局业务骨干及资深税务律师授课。培训聚焦律师个人所得税汇算清缴要点、律师事务所增值税及附加税申报实务、合伙制律所利润分配与税务筹划等实务议题，近 500 名律所财务负责人和合伙人参加。</p>',
      en: '<p>On December 9, 2025, the Guangzhou Bar Association\'s Finance and Asset Management Committee hosted the "Guangzhou Lawyer Industry Tax Training", featuring lecturers from the Guangzhou Tax Bureau and senior tax attorneys. The training covered individual income tax filing for lawyers, VAT and surtax filing for law firms, and profit distribution and tax planning for partnership law firms, with nearly 500 financial officers and partners in attendance.</p>',
    },
  },
  {
    id: 'news-ind-013', slug: 'gzbar-enforcement-asset-cases-2026-06', date: '2026-06-05', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/294bc1c8e71f41ee846055f72d28afc1',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于征集《强制执行与特殊资产精选案例》的通知', en: 'Call for Cases: "Selected Cases on Enforcement and Special Assets"' },
    summary:  {
      zh: '广州律协公开征集强制执行与特殊资产处置精选案例，拟出版年度案例汇编。',
      en: 'The Guangzhou Bar Association issued an open call for cases on enforcement and special asset disposition for an annual case compendium.',
    },
    content: {
      zh: '<p>2026 年 6 月 5 日，广州市律师协会执行与资产处置法律专业委员会发布通知，面向全市律师公开征集强制执行与特殊资产处置领域的典型案例。征集范围涵盖不动产强制执行、上市公司股票执行、到期债权执行、特殊资产（NPL、AMC）处置等细分领域，入选案例将编入 2026 年度《广州强制执行与特殊资产精选案例汇编》，并向最高人民法院执行案例库推荐。</p>',
      en: '<p>On June 5, 2026, the Guangzhou Bar Association\'s Enforcement and Asset Disposition Law Committee issued a call for representative cases in the enforcement and special asset disposition field. The scope includes real estate enforcement, listed-company share enforcement, matured debt enforcement, and special asset (NPL/AMC) disposition. Selected cases will be published in the 2026 "Guangzhou Selected Cases on Enforcement and Special Assets" and recommended to the SPC enforcement case database.</p>',
    },
  },
  {
    id: 'news-ind-014', slug: 'gzbar-online-promotion-filing-2026-06', date: '2026-06-08', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/9a836689892146d5bf9eb5b9ae2efd83',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于进一步开展律师事务所和律师（团队）网络推广备案工作的通知', en: 'Notice on Further Implementation of Online Promotion Filing for Law Firms and Lawyer Teams' },
    summary:  {
      zh: '广州律协进一步规范律师行业网络推广，要求律所及律师团队在 2026 年 9 月前完成推广备案。',
      en: 'The Guangzhou Bar Association further standardized online promotion in the legal industry, requiring firms and teams to complete promotion filings by September 2026.',
    },
    content: {
      zh: '<p>2026 年 6 月 8 日，广州市律师协会发布通知，要求全市律师事务所及律师（团队）进一步开展网络推广备案工作。通知明确：凡通过自有网站、微信公众号、抖音、小红书、知乎等平台进行业务推广的律所和律师团队，须在 2026 年 9 月 30 日前向市律协提交备案材料。备案内容主要包括推广平台账号信息、推广内容范围及推广合规承诺书。未完成备案的推广行为将被纳入年度执业检查重点核查范围。</p>',
      en: '<p>On June 8, 2026, the Guangzhou Bar Association issued a notice requiring all member law firms and lawyer teams to further implement online promotion filing. All firms and teams promoting their practice through websites, WeChat Official Accounts, Douyin, Xiaohongshu, Zhihu, or similar platforms must submit filing materials to the Association by September 30, 2026, including platform account details, promotion scope, and a compliance undertaking. Unfiled promotional activities will be prioritized in annual practice inspections.</p>',
    },
  },
  {
    id: 'news-ind-015', slug: 'gzbar-young-lawyer-demo-2026-06', date: '2026-06-02', status: 'published', isFeatured: false, sourceUrl: 'https://www.gzlawyer.org/info/bb259d8e375b4d468730f441d3e6b2c9',
    category: { zh: '行业观察', en: 'Industry View' },
    title:    { zh: '关于公布"广州市律师协会青年律师工作示范站"（第二批）的通知', en: 'Announcement of the Second Batch of Guangzhou Young Lawyers\' Work Model Stations' },
    summary:  {
      zh: '广州律协公布第二批青年律师工作示范站名单，全市 15 家律所入选，聚焦青年律师培养体系与职业发展通道建设。',
      en: 'The Guangzhou Bar Association announced the second batch of 15 Young Lawyers\' Work Model Stations, focusing on training systems and career development pathways.',
    },
    content: {
      zh: '<p>2026 年 6 月 2 日，广州市律师协会公布第二批"广州市律师协会青年律师工作示范站"名单，共 15 家律师事务所入选。示范站须在三年周期内完成"五个一"工程：建立 1 套青年律师进阶培训体系、配备 1 名专职带教合伙人、每年组织 1 次青年律师技能大赛、开展 1 项公益法律服务项目、提交 1 份年度青年律师发展报告。</p>',
      en: '<p>On June 2, 2026, the Guangzhou Bar Association announced the second batch of 15 "Guangzhou Young Lawyers\' Work Model Stations". Each model station is required to complete a "Five Ones" initiative within three years: establish one structured training curriculum, assign one dedicated mentoring partner, organize one annual young lawyers\' skills competition, conduct one pro bono legal service project, and submit one annual young lawyer development report.</p>',
    },
  },

];

/* ============================================================
   Honors — 10 条,挂原站真实荣誉图
   ============================================================ */
const honors: Honor[] = [
  { id: 'h-orig-01', image: '/img/orig/honor-20241113145120_6850.jpg',
    title: { zh: '广东省优秀律师事务所',           en: 'Outstanding Law Firm of Guangdong Province' },           issuer: { zh: '广东省司法厅 / 广东省律师协会', en: 'Guangdong Justice Department / Lawyers Association' }, date: '2024-12-01', category: { zh: '综合荣誉', en: 'Comprehensive' } },
  { id: 'h-orig-02', image: '/img/orig/honor-20241113145110_6554.jpg',
    title: { zh: '广州市优秀律师事务所',           en: 'Outstanding Law Firm of Guangzhou' },                    issuer: { zh: '广州市司法局 / 广州市律师协会', en: 'Guangzhou Justice Bureau / Lawyers Association' }, date: '2024-12-01', category: { zh: '综合荣誉', en: 'Comprehensive' } },
  { id: 'h-orig-03', image: '/img/orig/honor-20241113144916_0250.jpg',
    title: { zh: '广州市十佳律师事务所',           en: 'Top-Ten Law Firm of Guangzhou' },                        issuer: { zh: '广州市律师协会', en: 'Guangzhou Bar Association' }, date: '2024-06-01', category: { zh: '综合荣誉', en: 'Comprehensive' } },
  { id: 'h-orig-04', image: '/img/orig/honor-20241113145100_5817.jpg',
    title: { zh: '广州市管理优秀律师事务所',       en: 'Guangzhou Model Management Law Firm' },                  issuer: { zh: '广州市司法局', en: 'Guangzhou Justice Bureau' }, date: '2023-12-01', category: { zh: '综合荣誉', en: 'Comprehensive' } },
  { id: 'h-orig-05', image: '/img/orig/honor-20241113145242_0270.jpg',
    title: { zh: '广州市普法工作先进集体',         en: 'Guangzhou Advanced Collective in Legal Education' },     issuer: { zh: '广州市委宣传部 / 广州市司法局', en: 'Guangzhou CPC Propaganda Dept. / Justice Bureau' }, date: '2023-12-01', category: { zh: '公益普法', en: 'Public Legal Education' } },
  { id: 'h-orig-06', image: '/img/orig/honor-20241113145256_8293.jpg',
    title: { zh: '全省律师行业先进基层党组织',     en: 'Provincial Lawyer-Industry Advanced Grassroots Party Org.' }, issuer: { zh: '广东省律师行业党委', en: 'Guangdong Lawyers\' Industry Party Committee' }, date: '2024-07-01', category: { zh: '党建', en: 'Party Building' } },
  { id: 'h-orig-07', image: '/img/orig/honor-page2-p1.jpg',
    title: { zh: '2023-2024 年度全省律师行业党建工作「好」等次', en: '2023-2024 Provincial Lawyer-Industry Party-Building "Excellent" Rating' }, issuer: { zh: '广东省律师行业党委', en: 'Guangdong Lawyers\' Industry Party Committee' }, date: '2025-07-30', category: { zh: '党建', en: 'Party Building' } },
  { id: 'h-orig-08', image: '/img/orig/honor-page2-p2.jpg',
    title: { zh: 'LegalOne 2025 粤港澳大湾区「最具影响力 15 强（本地所）」', en: 'LegalOne 2025 GBA "Most Influential 15 (Local Firms)"' }, issuer: { zh: 'LegalOne', en: 'LegalOne' }, date: '2025-08-09', category: { zh: '专业奖项', en: 'Awards' } },
  { id: 'h-orig-09', image: '/img/orig/honor-page2-p3.jpg',
    title: { zh: '广州市职工金牌贴心人「顾问之星」', en: 'Guangzhou Gold-Medal Caregiver "Advisor Star"' },         issuer: { zh: '广州市总工会', en: 'Guangzhou Federation of Trade Unions' }, date: '2025-08-18', category: { zh: '公益普法', en: 'Public Legal Education' } },
  { id: 'h-orig-10', image: '/img/orig/honor-page2-p4.jpg',
    title: { zh: '广州市职工金牌贴心人「调解之星」', en: 'Guangzhou Gold-Medal Caregiver "Mediation Star"' },        issuer: { zh: '广州市总工会', en: 'Guangzhou Federation of Trade Unions' }, date: '2025-08-18', category: { zh: '公益普法', en: 'Public Legal Education' } },
];

/* ============================================================
   Practices — 8 大业务领域
   ============================================================ */
const practices: Practice[] = [
  { id: 'p-01', name: { zh: '金融、证券法律业务', en: 'Finance & Securities' }, nameEn: 'Finance & Securities',
    description: { zh: '为银行、证券、保险、基金、信托、上市公司提供法律服务，含股份制改组、证券发行、基金募集、按揭抵押、保险理赔、期货股票纠纷等。', en: 'Legal services for banks, securities firms, insurers, funds, trusts and listed companies, including shareholding reform, securities issuance, fund formation, mortgages, insurance claims, and securities/futures disputes.' },
    caseCount: 220, order: 1 },
  { id: 'p-02', name: { zh: '公司法律顾问业务', en: 'General Counsel' }, nameEn: 'General Counsel',
    description: { zh: '为公司设立、变更、资产重组、股份制改造、股权转让、合并分立、兼并收购、破产清算等提供法律服务。', en: 'Legal services for company formation and changes, asset restructuring, shareholding reform, equity transfer, mergers and spin-offs, acquisitions, and bankruptcy liquidation.' },
    caseCount: 480, order: 2 },
  { id: 'p-03', name: { zh: '房地产业务', en: 'Real Estate' }, nameEn: 'Real Estate',
    description: { zh: '房地产项目开发策划与融资、土地使用权出让转让、闲置土地处理、规划设计与工程建设、销售按揭与出租、物业管理。', en: 'Real estate project planning and financing, land use right transfer, idle land handling, planning and construction, sales/mortgage/leasing, and property management.' },
    caseCount: 260, order: 3 },
  { id: 'p-04', name: { zh: '知识产权业务', en: 'Intellectual Property' }, nameEn: 'Intellectual Property',
    description: { zh: '商标、专利、著作权、专有技术的申请、转让、许可、侵权纠纷代理。', en: 'Application, transfer, licensing, and infringement representation for trademarks, patents, copyrights, and know-how.' },
    caseCount: 180, order: 4 },
  { id: 'p-05', name: { zh: '外商投资业务', en: 'Foreign Investment' }, nameEn: 'Foreign Investment',
    description: { zh: '「三资」企业设立的法律咨询、协议/合同/章程起草审查、设立申请与营业执照领取等全流程。', en: 'Legal advisory on foreign-invested enterprise setup, drafting and review of agreements/contracts/articles, and full-process handling of establishment applications and business licenses.' },
    caseCount: 90, order: 5 },
  { id: 'p-06', name: { zh: '航运、贸易和能源仲裁与诉讼', en: 'Shipping, Trade & Energy Arbitration & Litigation' }, nameEn: 'Shipping, Trade & Energy',
    description: { zh: '海事、海商、海上工程、保险、贸易、公司、投融资、金融等领域诉讼、仲裁和非诉争端解决。', en: 'Maritime, shipping, offshore engineering, insurance, trade, corporate, investment, and finance disputes through litigation, arbitration and alternative dispute resolution.' },
    caseCount: 150, order: 6 },
  { id: 'p-07', name: { zh: '国内仲裁与诉讼业务', en: 'Domestic Arbitration & Litigation' }, nameEn: 'Domestic Arbitration & Litigation',
    description: { zh: '各类合同纠纷仲裁与诉讼、民事纠纷（婚姻家庭、劳动、侵权）诉讼、企业/公司/银行债权清理、行政纠纷诉讼。', en: 'Arbitration and litigation of contract disputes, civil disputes (family, labor, tort), corporate/banking debt recovery, and administrative litigation.' },
    caseCount: 380, order: 7 },
  { id: 'p-08', name: { zh: '刑事案件业务', en: 'Criminal Defense' }, nameEn: 'Criminal Defense',
    description: { zh: '刑事辩护、侦查阶段律师业务、起诉阶段律师业务、刑事案件被害人代理。', en: 'Criminal defense, representation during investigation and prosecution stages, and representation for victims of criminal cases.' },
    caseCount: 140, order: 8 },
];

/* ============================================================
   Offices — 7 个分所
   ============================================================ */
const offices: Office[] = [
  {
    id: 'o-hq', city: { zh: '广州', en: 'Guangzhou' },
    address: { zh: '广州市海珠区阅江西路 370 号 广报中心北塔 15F', en: '15F, North Tower, Guangzhou Newspaper Center, 370 Yuejiang West Road, Haizhu District, Guangzhou' },
    phone: '020-81836088',
    fax: '',
    email: 'public@lnlawfirm.cn',
    isHeadquarters: true,
    order: 1,
    description: { zh: '总所所在地，1984 年由中山大学法律系创办。', en: 'Headquarters. Founded in 1984 by the Law Faculty of Sun Yat-sen University.' },
    image: '/img/orig/office-gz.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 113.3244, lat: 23.1055,
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=113.3144%2C23.0955%2C113.3344%2C23.1155&layer=mapnik&marker=23.1055%2C113.3244',
    mapAmap: 'https://uri.amap.com/marker?position=113.3244%2C23.1055&name=%E5%B9%BF%E5%B7%9E%E5%B8%82%E6%B5%B7%E7%8F%A0%E5%8C%BA%E9%98%85%E6%B1%9F%E8%A5%BF%E8%B7%AF370%E5%8F%B7&src=lnlawfirm',
    mapBaidu: 'https://api.map.baidu.com/marker?location=23.1055%2C113.3244&title=%E5%B9%BF%E5%B7%9E%E5%B8%82%E6%B5%B7%E7%8F%A0%E5%8C%BA%E9%98%85%E6%B1%9F%E8%A5%BF%E8%B7%AF370%E5%8F%B7&content=%E5%B9%BF%E6%8A%A5%E4%B8%AD%E5%BF%83%E5%8C%97%E5%A1%94&output=html',
  },
  {
    id: 'o-sz', city: { zh: '深圳', en: 'Shenzhen' },
    address: { zh: '广东省深圳市福田区益田路 4068 号 卓越时代广场 3508B', en: '3508B, Excellence Times Square, 4068 Yitian Road, Futian District, Shenzhen' },
    phone: '18922491076 / 0755-26659987',
    fax: '020-31952316',
    email: 'lnszfs@lnlawfirm.cn',
    order: 2,
    image: '/img/orig/office-sz.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 114.0579, lat: 22.5431,
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=114.0479%2C22.5331%2C114.0679%2C22.5531&layer=mapnik&marker=22.5431%2C114.0579',
    mapAmap: 'https://uri.amap.com/marker?position=114.0579%2C22.5431&name=%E6%B7%B1%E5%9C%B3%E7%A6%8F%E7%94%B0%E5%8C%BA%E7%9B%8A%E7%94%B0%E8%B7%AF4068%E5%8F%B7&src=lnlawfirm',
    mapBaidu: 'https://api.map.baidu.com/marker?location=22.5431%2C114.0579&title=%E6%B7%B1%E5%9C%B3%E7%A6%8F%E7%94%B0%E5%8C%BA%E7%9B%8A%E7%94%B0%E8%B7%AF4068%E5%8F%B7&content=%E5%8D%93%E8%B6%8A%E6%97%B6%E4%BB%A3%E5%B9%BF%E5%9C%BA&output=html',
  },
  {
    id: 'o-hk', city: { zh: '海口', en: 'Haikou' },
    address: { zh: '海南省海口市龙华区金垦路 6 号 康年皇冠花园酒店 7 楼 康年阁', en: 'Kangnian Pavilion, 7F, Kangnian Crown Garden Hotel, 6 Jinken Road, Longhua District, Haikou, Hainan' },
    phone: '13926159817',
    fax: '',
    email: 'hk@lnlawfirm.cn',
    order: 3,
    image: '/img/orig/office-hk.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 110.3300, lat: 20.0220,
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=110.3200%2C20.0120%2C110.3400%2C20.0320&layer=mapnik&marker=20.0220%2C110.3300',
    mapAmap: 'https://uri.amap.com/marker?position=110.3300%2C20.0220&name=%E6%B5%B7%E5%8D%97%E7%9C%81%E6%B5%B7%E5%8F%A3%E5%B8%82%E9%BE%99%E5%8D%8E%E5%8C%BA&src=lnlawfirm',
    mapBaidu: 'https://api.map.baidu.com/marker?location=20.0220%2C110.3300&title=%E6%B5%B7%E5%8D%97%E7%9C%81%E6%B5%B7%E5%8F%A3%E5%B8%82%E9%BE%99%E5%8D%8E%E5%8C%BA&content=%E5%BA%B7%E5%B9%B4%E7%9A%87%E5%86%A0%E8%8A%B1%E5%9B%AD%E9%85%92%E5%BA%97&output=html',
  },
  {
    id: 'o-dg', city: { zh: '东莞', en: 'Dongguan' },
    address: { zh: '广东省东莞市南城街道鸿福路 199 号 328 室', en: 'Room 328, 199 Hongfu Road, Nancheng Sub-district, Dongguan, Guangdong' },
    phone: '0769-88888303',
    fax: '',
    email: 'dg@lnlawfirm.cn',
    order: 4,
    image: '/img/orig/office-dg.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 113.7460, lat: 23.0410,
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=113.7360%2C23.0310%2C113.7560%2C23.0510&layer=mapnik&marker=23.0410%2C113.7460',
    mapAmap: 'https://uri.amap.com/marker?position=113.7460%2C23.0410&name=%E4%B8%9C%E8%8E%9E%E5%B8%82%E5%8D%97%E5%9F%8E%E8%A1%97%E9%81%93%E9%B8%BF%E7%A6%8F%E8%B7%AF199%E5%8F%B7&src=lnlawfirm',
    mapBaidu: 'https://api.map.baidu.com/marker?location=23.0410%2C113.7460&title=%E4%B8%9C%E8%8E%9E%E5%B8%82%E5%8D%97%E5%9F%8E%E8%A1%97%E9%81%93%E9%B8%BF%E7%A6%8F%E8%B7%AF199%E5%8F%B7&content=%E5%8D%97%E5%9F%8E%E5%88%86%E6%89%80&output=html',
  },
  {
    id: 'o-hz', city: { zh: '惠州', en: 'Huizhou' },
    address: { zh: '广东省惠州市惠城区江北文昌一路 7 号 华贸大厦 1 单元 24 层 04、05、06、11 号', en: 'Units 04, 05, 06, 11, 24F, Tower 1, Huamao Building, 7 Wenchang 1st Road, Jiangbei, Huicheng District, Huizhou, Guangdong' },
    phone: '13580393250',
    fax: '',
    email: 'hz@lnlawfirm.cn',
    order: 5,
    image: '/img/orig/office-hz.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 114.4120, lat: 23.1110,
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=114.4020%2C23.1010%2C114.4220%2C23.1210&layer=mapnik&marker=23.1110%2C114.4120',
    mapAmap: 'https://uri.amap.com/marker?position=114.4120%2C23.1110&name=%E6%83%A0%E5%B7%9E%E5%B8%82%E6%83%A0%E5%9F%8E%E5%8C%BA%E6%B1%9F%E5%8C%97%E6%96%87%E6%98%8C%E4%B8%80%E8%B7%AF7%E5%8F%B7&src=lnlawfirm',
    mapBaidu: 'https://api.map.baidu.com/marker?location=23.1110%2C114.4120&title=%E6%83%A0%E5%B7%9E%E5%B8%82%E6%83%A0%E5%9F%8E%E5%8C%BA%E6%B1%9F%E5%8C%97%E6%96%87%E6%98%8C%E4%B8%80%E8%B7%AF7%E5%8F%B7&content=%E5%8D%8E%E8%B4%B8%E5%A4%A7%E5%8E%A6&output=html',
  },
  {
    id: 'o-fs', city: { zh: '佛山', en: 'Foshan' },
    address: { zh: '广东省佛山市禅城区汾江南路 37 号 B 座 10 楼 1001、1002 房', en: 'Rooms 1001, 1002, 10F, Block B, 37 Fenjiang South Road, Chancheng District, Foshan, Guangdong' },
    phone: '0757-83131090',
    fax: '',
    email: 'fs@lnlawfirm.cn',
    order: 6,
    image: '/img/orig/office-fs.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 113.1210, lat: 23.0220,
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=113.1110%2C23.0120%2C113.1310%2C23.0320&layer=mapnik&marker=23.0220%2C113.1210',
    mapAmap: 'https://uri.amap.com/marker?position=113.1210%2C23.0220&name=%E4%BD%9B%E5%B1%B1%E5%B8%82%E7%A6%85%E5%9F%8E%E5%8C%BA%E6%B3%BD%E6%B1%9F%E5%8D%97%E8%B7%AF37%E5%8F%B7&src=lnlawfirm',
    mapBaidu: 'https://api.map.baidu.com/marker?location=23.0220%2C113.1210&title=%E4%BD%9B%E5%B1%B1%E5%B8%82%E7%A6%85%E5%9F%8E%E5%8C%BA%E6%B3%BD%E6%B1%9F%E5%8D%97%E8%B7%AF37%E5%8F%B7&content=B%E5%BA%A710%E6%A5%BC&output=html',
  },
  {
    id: 'o-hd', city: { zh: '广州花都', en: 'Guangzhou Huadu' },
    address: { zh: '广州市花都区迎宾大道 132 号 星旺广场 3 幢 6F02', en: '6F02, Building 3, Xingwang Plaza, 132 Yingbin Avenue, Huadu District, Guangzhou' },
    phone: '020-36839595',
    fax: '',
    email: 'huadu@lnlawfirm.cn',
    order: 7,
    image: '/img/orig/office-hd.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 113.2200, lat: 23.4040,
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=113.2100%2C23.3940%2C113.2300%2C23.4140&layer=mapnik&marker=23.4040%2C113.2200',
    mapAmap: 'https://uri.amap.com/marker?position=113.2200%2C23.4040&name=%E5%B9%BF%E5%B7%9E%E5%B8%82%E8%8A%B1%E9%83%BD%E5%8C%BA%E8%BF%8E%E5%AE%BE%E5%A4%A7%E9%81%93132%E5%8F%B7&src=lnlawfirm',
    mapBaidu: 'https://api.map.baidu.com/marker?location=23.4040%2C113.2200&title=%E5%B9%BF%E5%B7%9E%E5%B8%82%E8%8A%B1%E9%83%BD%E5%8C%BA%E8%BF%8E%E5%AE%BE%E5%A4%A7%E9%81%93132%E5%8F%B7&content=%E6%98%9F%E6%97%BA%E5%B9%BF%E5%9C%BA&output=html',
  },
];

/* ============================================================
   Social — 公益 / 社会责任
   ============================================================ */
const social: SocialItem[] = [
  { id: 's-orig-01', date: '2025-08-18', category: { zh: '工会服务', en: 'Union Services' },
    title: { zh: '我所律师获广州市总工会「金牌贴心人」表彰', en: 'Attorneys Honored as Guangzhou Gold-Medal Caregivers' },
    location: { zh: '广州', en: 'Guangzhou' },
    description: { zh: '张智敏、叶龙生律师分别荣获「顾问之星」「调解之星」称号。', en: 'ZHANG Zhimin and YE Longsheng received "Advisor Star" and "Mediation Star" awards, respectively.' } },
  { id: 's-orig-02', date: '2025-07-26', category: { zh: '统战公益', en: 'United Front & Public Welfare' },
    title: { zh: '助力海珠统战定向越野赛', en: 'Supporting the Haizhu United-Front Orienteering Race' },
    location: { zh: '广州', en: 'Guangzhou' },
    description: { zh: '组织三支队伍参赛，为第十五届全运贡献法律人力量。', en: 'Fielded three teams for the 15th National Games support event.' } },
  { id: 's-orig-03', date: '2025-07-14', category: { zh: '校园普法', en: 'Campus Legal Education' },
    title: { zh: '广州市第二中学高二 16 班职业生涯体验', en: 'Career Experience for Guangzhou No.2 High School' },
    location: { zh: '广州', en: 'Guangzhou' },
    description: { zh: '我所为同学们介绍律所运作、律师执业等内容。', en: 'Introduction to firm operations and the practice of law for high-school students.' } },
  { id: 's-orig-04', date: '2025-06-10', category: { zh: '校园普法', en: 'Campus Legal Education' },
    title: { zh: '「银乐羊城五老说」法治课堂《法润童心护成长》', en: '"Yin Le Yang Cheng Five Elders" Legal Class: Law Nurtures the Heart, Protects Growth' },
    location: { zh: '广州', en: 'Guangzhou' },
    description: { zh: '卓冬青律师受邀主讲未成年人权益保护专题。', en: 'Attorney ZHUO Dongqing lectured on minors\' rights protection.' } },
  { id: 's-orig-05', date: '2025-05-26', category: { zh: '体育公益', en: 'Sports Public Welfare' },
    title: { zh: '受邀参加国际龙舟邀请赛并卫冕冠军', en: 'Defended Title at International Dragon Boat Invitational' },
    location: { zh: '广州', en: 'Guangzhou' },
    description: { zh: '我所龙舟队受邀参赛并卫冕冠军。', en: 'Our firm\'s dragon boat team was invited and successfully defended the championship.' } },
  { id: 's-orig-06', date: '2021-08-09', category: { zh: '公益慰问', en: 'Public Welfare Outreach' },
    title: { zh: '「从化如愿行」慰问活动', en: '"Conghua Yuanruanxing" Outreach Activity' },
    location: { zh: '广州从化', en: 'Conghua, Guangzhou' },
    description: { zh: '我所律师赴从化开展慰问活动。', en: 'Our attorneys conducted an outreach activity in Conghua.' } },
];

/* ============================================================
   Bundle
   ============================================================ */
export const mockBundle: ContentBundle = {
  source: 'mock',
  generatedAt: now,
  lawyers, cases, news, honors, practices, offices, social, config,
};

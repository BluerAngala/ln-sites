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
  heroTitle:   { zh: '行商法之\n轻重缓急。',                       en: 'Counsel of\nConsequence.' },
  heroSubtitle:{ zh: 'Lingnan · Counsel & Attorneys at Law',        en: 'Counsel & Attorneys at Law · Guangzhou' },
  heroLede:    {
    zh: '一九八四年，由中山大学法律系创办。\n四十年，岭南所立足粤港澳大湾区，\n七大办公室、数十位合伙人，\n为各级党政机关、企事业单位及个人客户提供专业、诚信、高效的法律服务。',
    en: 'Founded in 1984 by the Law Faculty of Sun Yat-sen University.\nFour decades rooted in the Greater Bay Area,\nseven offices and dozens of partners,\ndelivering professional, trustworthy and efficient legal services to government agencies, enterprises, and individuals.',
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
    id: 'news-orig-1001', slug: 'gzftu-gold-medal-2025-08', date: '2025-08-19', status: 'published', isFeatured: true,
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
    id: 'news-orig-1000', slug: 'legalone-gba-15-2025-08', date: '2025-08-12', status: 'published', isFeatured: true,
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
    id: 'news-orig-999', slug: 'football-victory-2025-08', date: '2025-08-08', status: 'published', isFeatured: false,
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
    id: 'news-orig-998', slug: 'party-building-honor-2025-07', date: '2025-07-30', status: 'published', isFeatured: false,
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
    id: 'news-orig-997', slug: 'haizhu-orienteering-2025-07', date: '2025-07-28', status: 'published', isFeatured: false,
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
    id: 'news-orig-996', slug: 'onboarding-training-2025-07', date: '2025-07-21', status: 'published', isFeatured: false,
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
    id: 'news-orig-995', slug: 'football-match-2025-07', date: '2025-07-17', status: 'published', isFeatured: false,
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
    id: 'news-orig-994', slug: 'gz-no2-highschool-2025-07', date: '2025-07-14', status: 'published', isFeatured: false,
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
    id: 'news-orig-993', slug: 'fazhi-huiqi-2025-07', date: '2025-07-12', status: 'published', isFeatured: false,
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
    id: 'news-orig-992', slug: 'gz-debate-team-2025-06', date: '2025-06-30', status: 'published', isFeatured: false,
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
    email: 'lnlawfirm@163.com',
    isHeadquarters: true,
    order: 1,
    description: { zh: '总所所在地，1984 年由中山大学法律系创办。', en: 'Headquarters. Founded in 1984 by the Law Faculty of Sun Yat-sen University.' },
    image: '/img/orig/office-gz.png',
  },
  {
    id: 'o-sz', city: { zh: '深圳', en: 'Shenzhen' },
    address: { zh: '广东省深圳市福田区益田路 4068 号 卓越时代广场 3508B', en: '3508B, Excellence Times Square, 4068 Yitian Road, Futian District, Shenzhen' },
    phone: '0755-26659987',
    email: 'sz@lnlawfirm.cn',
    order: 2,
    image: '/img/orig/office-sz.png',
  },
  {
    id: 'o-hk', city: { zh: '海口', en: 'Haikou' },
    address: { zh: '海南省海口市龙华区金垦路 6 号 康年皇冠花园酒店 7 楼 康年阁', en: 'Kangnian Pavilion, 7F, Kangnian Crown Garden Hotel, 6 Jinken Road, Longhua District, Haikou, Hainan' },
    phone: '13926159817',
    email: 'hk@lnlawfirm.cn',
    order: 3,
    image: '/img/orig/office-hk.png',
  },
  {
    id: 'o-dg', city: { zh: '东莞', en: 'Dongguan' },
    address: { zh: '广东省东莞市南城街道鸿福路 199 号 328 室', en: 'Room 328, 199 Hongfu Road, Nancheng Sub-district, Dongguan, Guangdong' },
    phone: '0769-88888303',
    email: 'dg@lnlawfirm.cn',
    order: 4,
    image: '/img/orig/office-dg.png',
  },
  {
    id: 'o-hz', city: { zh: '惠州', en: 'Huizhou' },
    address: { zh: '广东省惠州市惠城区江北文昌一路 7 号 华贸大厦 1 单元 24 层 04、05、06、11 号', en: 'Units 04, 05, 06, 11, 24F, Tower 1, Huamao Building, 7 Wenchang 1st Road, Jiangbei, Huicheng District, Huizhou, Guangdong' },
    phone: '13580393250',
    email: 'hz@lnlawfirm.cn',
    order: 5,
    image: '/img/orig/office-hz.png',
  },
  {
    id: 'o-fs', city: { zh: '佛山', en: 'Foshan' },
    address: { zh: '广东省佛山市禅城区汾江南路 37 号 B 座 10 楼 1001、1002 房', en: 'Rooms 1001, 1002, 10F, Block B, 37 Fenjiang South Road, Chancheng District, Foshan, Guangdong' },
    phone: '0757-83131090',
    email: 'fs@lnlawfirm.cn',
    order: 6,
    image: '/img/orig/office-fs.png',
  },
  {
    id: 'o-hd', city: { zh: '广州花都', en: 'Guangzhou Huadu' },
    address: { zh: '广州市花都区迎宾大道 132 号 星旺广场 3 幢 6F02', en: '6F02, Building 3, Xingwang Plaza, 132 Yingbin Avenue, Huadu District, Guangzhou' },
    phone: '020-36839595',
    email: 'huadu@lnlawfirm.cn',
    order: 7,
    image: '/img/orig/office-hd.png',
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

/**
 * News — 10 条原站动态 + 15 条行业观察（源自广州市律师协会、广东省律师协会等官方通知公告）
 */
import type { NewsItem } from '~/lib/types';

export const news: NewsItem[] = [
  {
    id: 'news-orig-1001',
    slug: 'gzftu-gold-medal-2025-08',
    date: '2025-08-19',
    status: 'published',
    isFeatured: true,
    sourceUrl: 'http://www.lnlawfirm.cn/list_154_1001.html',
    cover: '/img/orig/news-orig-1001.png',
    category: { zh: '岭南喜讯', en: 'Awards' },
    title: {
      zh: '岭南喜讯 | 我所律师获广州市总工会表彰',
      en: 'Firm News | Our Attorneys Honored by Guangzhou Federation of Trade Unions',
    },
    summary: {
      zh: '8 月 18 日，我所张智敏律师、叶龙生律师分别荣获广州市职工金牌贴心人「顾问之星」「调解之星」称号。',
      en: 'On August 18, our attorneys ZHANG Zhimin and YE Longsheng were awarded "Advisor Star" and "Mediation Star" of the Guangzhou Gold-Medal Caregiver program.',
    },
    content: {
      zh:
        '<p>2025 年 8 月 18 日，由广州市总工会举办的「第五期广州市工会法律服务律师团成立暨 2024 年度职工金牌贴心人等发布活动」在广州市工人文化宫落下帷幕。</p>' +
        '<p>活动现场对在工会法律服务中表现突出的个人进行了表彰，我所<strong>张智敏律师</strong>、<strong>叶龙生律师</strong>凭借扎实的专业能力和显著的工作成效，分别荣获广州市职工金牌贴心人「顾问之星」及「调解之星」称号。</p>',
      en:
        '<p>On August 18, 2025, the "Fifth Guangzhou Trade Union Legal Service Lawyer Corps Launch and 2024 Gold-Medal Caregiver Awards" ceremony hosted by the Guangzhou Federation of Trade Unions was held at the Guangzhou Workers\' Cultural Palace.</p>' +
        '<p><strong>Ms. Zhang Zhimin</strong> and <strong>Mr. Ye Longsheng</strong> of our firm received the "Advisor Star" and "Mediation Star" awards, respectively, in recognition of their professional capability and significant contributions.</p>',
    },
  },
  {
    id: 'news-orig-1000',
    slug: 'legalone-gba-15-2025-08',
    date: '2025-08-12',
    status: 'published',
    isFeatured: true,
    sourceUrl: 'http://www.lnlawfirm.cn/list_154_1000.html',
    cover: '/img/orig/news-orig-1000.png',
    category: { zh: '岭南喜讯', en: 'Awards' },
    title: {
      zh: '岭南喜讯 | 我所荣膺 LegalOne 粤港澳大湾区「最具影响力 15 强（本地所）」',
      en: 'Firm News | Lingnan Named to LegalOne GBA "Most Influential 15 (Local Firms)"',
    },
    summary: {
      zh: '2025 年 8 月 9 日，我所荣登 LegalOne 2025 年度粤港澳大湾区法律大奖「最具影响力律师事务所 15 强（本地所）」榜单。',
      en: 'On August 9, 2025, the firm was named to LegalOne\'s 2025 GBA Legal Awards "Most Influential 15 Law Firms (Local)" list.',
    },
    content: {
      zh:
        '<p>2025 年 8 月 9 日，由全球性法律评级机构 LegalOne 主办的「2025 年度粤港澳大湾区法律大奖盛典」在广州四季酒店圆满落幕。</p>' +
        '<p>我所凭借深厚的专业积淀与突出的区域服务影响力，从众多参评机构中脱颖而出，荣登「最具影响力律师事务所 15 强（本地所）」榜单。</p>',
      en:
        '<p>On August 9, 2025, the "2025 Greater Bay Area Legal Awards Gala" hosted by LegalOne concluded successfully at the Four Seasons Hotel Guangzhou.</p>' +
        '<p>Our firm was named to the "Most Influential 15 Law Firms (Local)" list, in recognition of its profound professional accumulation and outstanding regional impact.</p>',
    },
  },
  {
    id: 'news-orig-999',
    slug: 'football-victory-2025-08',
    date: '2025-08-08',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'http://www.lnlawfirm.cn/list_154_999.html',
    cover: '/img/orig/news-orig-999.png',
    category: { zh: '岭南动态', en: 'Firm News' },
    title: {
      zh: '岭南动态 | 勠力同心！足球联队夺取秋天的第一场胜利',
      en: 'Firm News | Football Team Wins the First Victory of Autumn',
    },
    summary: {
      zh: '2025 年广州律师足球冠军联赛第八轮，我所足球联队取得赛季关键胜利。',
      en: "In the eighth round of the 2025 Guangzhou Lawyers' Football Champions League, our firm's football team secured a key seasonal victory.",
    },
    content: {
      zh:
        '<p>2025 年广州律师足球冠军联赛第八轮于 8 月 7 日如期打响。赛前一场不期而至的暴雨，让场地变得湿滑，为这场较量增添了不小的难度与变数。</p>' +
        '<p>带着此前连续两场 4-1 大胜积累的信心与高涨的士气，球队踏上赛场。队员间日益提升的默契和不断丰富的比赛经验，成为球队坚实的后盾。</p>',
      en:
        "<p>The eighth round of the 2025 Guangzhou Lawyers' Football Champions League kicked off on August 7, preceded by an unseasonal rainstorm that made the pitch slippery and added difficulty to the match.</p>" +
        '<p>Carrying the confidence and momentum of two consecutive 4-1 victories, the team took the field, with growing on-pitch chemistry and match experience providing a solid backbone.</p>',
    },
  },
  {
    id: 'news-orig-998',
    slug: 'party-building-honor-2025-07',
    date: '2025-07-30',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'http://www.lnlawfirm.cn/list_154_998.html',
    cover: '/img/orig/news-orig-998.png',
    category: { zh: '岭南喜讯', en: 'Awards' },
    title: {
      zh: '岭南喜讯 | 广东岭南律师事务所党总支获全省律师行业党建工作「好」等次表彰',
      en: 'Firm News | Party Branch Receives Provincial Lawyer-Industry Party-Building "Excellent" Honor',
    },
    summary: {
      zh: '广东岭南律师事务所党总支获 2023-2024 年度全省律师行业党建工作「好」等次通报表扬。',
      en: 'Our firm\'s General Party Branch received the 2023-2024 provincial lawyer-industry party-building "Excellent" honor.',
    },
    content: {
      zh:
        '<p>近日，中共广东省律师行业委员会对 2023-2024 年度全省律师行业党建工作考核为「好」等次的律师事务所党组织进行通报表扬。</p>' +
        '<p>广州律师行业 25 家律师事务所党组织获得通报表扬，广东岭南律师事务所党总支凭借扎实的党建工作成效与突出的示范引领作用，光荣入选，成为广州律师行业党建工作的先进代表之一。</p>',
      en:
        '<p>Recently, the CPC Guangdong Province Lawyers\' Industry Committee publicly commended party organizations of law firms that received an "Excellent" rating in the 2023-2024 provincial lawyer-industry party-building assessment.</p>' +
        '<p>Twenty-five law firm party organizations in Guangzhou received commendation, with our General Party Branch being recognized for its solid party-building work and exemplary leading role.</p>',
    },
  },
  {
    id: 'news-orig-997',
    slug: 'haizhu-orienteering-2025-07',
    date: '2025-07-28',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'http://www.lnlawfirm.cn/list_154_997.html',
    cover: '/img/orig/news-orig-997.png',
    category: { zh: '岭南动态', en: 'Firm News' },
    title: {
      zh: '岭南动态 | 同心同行，聚力全运！岭南律师助力海珠统战定向越野赛活力开跑',
      en: 'Firm News | Lingnan Lawyers Support Haizhu Orienteering Race for the 15th National Games',
    },
    summary: {
      zh: '我所组织三支队伍参加海珠区统一战线定向越野赛，助力第十五届全运会。',
      en: 'Our firm fielded three teams at the Haizhu District orienteering race in support of the 15th National Games.',
    },
    content: {
      zh:
        '<p>2025 年 7 月 26 日清晨，阳光洒满海珠国家湿地公园，一场充满活力与凝聚力的盛会——2025 年海珠区统一战线「同心十五运 越动新征程」定向越野赛在此鸣枪开赛。</p>' +
        '<p>广东岭南律师事务所积极响应号召，组织三支精英队伍共赴这场融合了运动、协作与统一战线的盛会，以饱满的热情和昂扬的姿态，为助力广州办好第十五届全运会贡献法律人的力量。</p>',
      en:
        '<p>On the morning of July 26, 2025, the 2025 Haizhu District United Front "One Heart for the 15th National Games" orienteering race was launched at the Haizhu National Wetland Park.</p>' +
        "<p>Our firm fielded three elite teams for this event combining sport, collaboration and united-front spirit, contributing legal professionals' enthusiasm and energy to Guangzhou's hosting of the 15th National Games.</p>",
    },
  },
  {
    id: 'news-orig-996',
    slug: 'onboarding-training-2025-07',
    date: '2025-07-21',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'http://www.lnlawfirm.cn/list_154_996.html',
    cover: '/img/orig/news-orig-996.png',
    category: { zh: '岭南动态', en: 'Firm News' },
    title: {
      zh: '岭南动态 | 融情岭南 · 聚力新程——迎新培训会暨律师自媒体运营分享会',
      en: 'Firm News | Onboarding Training and Self-Media Operations Sharing Session',
    },
    summary: {
      zh: '我所为新入职同事开展迎新培训会暨律师自媒体运营分享会。',
      en: 'Our firm hosted an onboarding training and self-media operations sharing session for new colleagues.',
    },
    content: {
      zh: '<p>我所近期举办新入职同事迎新培训会暨律师自媒体运营分享会。通过制度介绍、执业规范讲解及自媒体运营经验分享，帮助新同事尽快融入团队。</p>',
      en: '<p>Our firm recently hosted an onboarding training session and a self-media operations sharing session for new colleagues, covering institutional introductions, practice standards, and self-media operations experience to help new joiners integrate into the team.</p>',
    },
  },
  {
    id: 'news-orig-995',
    slug: 'football-match-2025-07',
    date: '2025-07-17',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'http://www.lnlawfirm.cn/list_154_995.html',
    cover: '/img/orig/news-orig-995.png',
    category: { zh: '岭南动态', en: 'Firm News' },
    title: {
      zh: '岭南动态 | 绿荫激情燃，坚守情不褪——岭南所足球赛战报',
      en: 'Firm News | Football Match Recap',
    },
    summary: {
      zh: '我所足球队 2025 年广州律师足球冠军联赛第七轮战报。',
      en: "Recap of our firm's football team in the seventh round of the 2025 Guangzhou Lawyers' Football Champions League.",
    },
    content: {
      zh: '<p>2025 年广州律师足球冠军联赛第七轮比赛战罢，岭南所足球队团结协作，展现出良好的竞技状态和团队精神。</p>',
      en: "<p>Following the seventh round of the 2025 Guangzhou Lawyers' Football Champions League, our firm's football team demonstrated strong teamwork and competitive spirit.</p>",
    },
  },
  {
    id: 'news-orig-994',
    slug: 'gz-no2-highschool-2025-07',
    date: '2025-07-14',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'http://www.lnlawfirm.cn/list_154_994.html',
    cover: '/img/orig/news-orig-994.png',
    category: { zh: '校园普法', en: 'Legal Education' },
    title: {
      zh: '岭南动态 | 岭南所开展广州市第二中学高二 16 班职业生涯体验活动',
      en: 'Firm News | Career Experience Event for Guangzhou No.2 High School Class 16',
    },
    summary: {
      zh: '我所为广州市第二中学高二 16 班师生开展法律职业生涯体验活动。',
      en: 'Our firm hosted a legal career experience event for teachers and students of Class 16, Grade 11, Guangzhou No.2 High School.',
    },
    content: {
      zh: '<p>我所接待了广州市第二中学高二 16 班师生一行，介绍律所运作、律师执业等内容，帮助同学们认识法律职业。</p>',
      en: "<p>Our firm hosted teachers and students of Class 16, Grade 11, Guangzhou No.2 High School, introducing them to the firm's operations and the practice of law, helping them understand the legal profession.</p>",
    },
  },
  {
    id: 'news-orig-993',
    slug: 'fazhi-huiqi-2025-07',
    date: '2025-07-12',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'http://www.lnlawfirm.cn/list_154_993.html',
    cover: '/img/orig/news-orig-993.png',
    category: { zh: '岭南喜讯', en: 'Awards' },
    title: {
      zh: '岭南喜讯 | 我所王淼、张潇丹律师入选广州律协「法智惠企」讲师团',
      en: 'Firm News | WANG Miao and ZHANG Xiaodan Join Guangzhou Bar "Law Empowers Enterprises" Lecturer Team',
    },
    summary: {
      zh: '我所王淼、张潇丹律师入选广州律协「法智惠企」讲师团。',
      en: 'WANG Miao and ZHANG Xiaodan of our firm joined the Guangzhou Bar Association "Law Empowers Enterprises" lecturer team.',
    },
    content: {
      zh: '<p>2025 年 7 月，经广州市律师协会审定，王淼律师、张潇丹律师入选「法智惠企」讲师团，将面向中小企业开展法律宣讲活动。</p>',
      en: '<p>In July 2025, after review by the Guangzhou Bar Association, Mr. Wang Miao and Ms. Zhang Xiaodan were selected for the "Law Empowers Enterprises" lecturer team, which will deliver legal presentations to SMEs.</p>',
    },
  },
  {
    id: 'news-orig-992',
    slug: 'gz-debate-team-2025-06',
    date: '2025-06-30',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'http://www.lnlawfirm.cn/list_154_992.html',
    cover: '/img/orig/news-orig-992.png',
    category: { zh: '岭南喜讯', en: 'Awards' },
    title: {
      zh: '岭南喜讯 | 我所陈少校、谢绪灿律师入选广州律师辩论团',
      en: "Firm News | CHEN Shaoxiao and XIE Xucan Join Guangzhou Lawyers' Debate Team",
    },
    summary: {
      zh: '我所陈少校、谢绪灿律师入选广州律师辩论团。',
      en: "CHEN Shaoxiao and XIE Xucan of our firm joined the Guangzhou Lawyers' Debate Team.",
    },
    content: {
      zh: '<p>2025 年 6 月，经广州市律师协会审定，陈少校律师、谢绪灿律师入选广州律师辩论团。</p>',
      en: "<p>In June 2025, after review by the Guangzhou Bar Association, Mr. Chen Shaoxiao and Mr. Xie Xucan were selected for the Guangzhou Lawyers' Debate Team.</p>",
    },
  },
  /* ---------- 行业观察（源自广州市律师协会、广东省律师协会等官方通知公告）---------- */
  {
    id: 'news-ind-001',
    slug: 'gzbar-pipia-guideline-2026-05',
    date: '2026-05-29',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/6b3f4d175e224d8d9135783686da1ecb',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于公布《律师办理个人信息保护影响评估业务指引》的通知',
      en: 'Publication of the Guidelines for Lawyers Conducting Personal Information Protection Impact Assessments',
    },
    summary: {
      zh: '广州市律师协会正式公布个人信息保护影响评估业务指引，系国内首个由地方律协发布的 PIA 专项规范。',
      en: 'The Guangzhou Bar Association published guidelines on PIAs, the first specialized PIA standard issued by a local bar association in China.',
    },
    content: {
      zh: '<p>2026 年 5 月 29 日，广州市律师协会正式公布《律师办理个人信息保护影响评估（PIA）业务指引》，为律师协助企业开展 PIA 工作提供标准化流程与合规要点。该指引涵盖评估触发条件、数据映射方法、风险等级判定、评估报告撰写等核心环节，是《个人信息保护法》实施三年来广州律协在数据合规领域的重要成果。指引同时附录了 PIA 评估报告模板，可供全市律师参考使用。</p>',
      en: '<p>On May 29, 2026, the Guangzhou Bar Association published the "Guidelines for Lawyers Conducting Personal Information Protection Impact Assessments (PIA)", providing a standardized process and compliance checklist for lawyers assisting enterprises with PIA matters. The guidelines cover key elements including assessment triggers, data mapping methodology, risk-level classification, and report drafting, and represent a significant achievement in data compliance practice since the PIPL\'s implementation three years ago. A PIA report template is also appended for reference.</p>',
    },
  },
  {
    id: 'news-ind-002',
    slug: 'gzbar-data-export-guideline-2026-05',
    date: '2026-05-29',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/657be90b8a314961bc4fd49103feff9b',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于公布《律师开展数据出境合规法律服务业务指引》的通知',
      en: 'Publication of the Guidelines for Lawyers Providing Data Export Compliance Legal Services',
    },
    summary: {
      zh: '广州市律师协会发布数据出境合规法律服务业务指引，覆盖安全评估申报、标准合同备案及认证辅导三大路径。',
      en: 'The Guangzhou Bar Association released guidelines on data export compliance services covering security assessment filings, standard contract filings, and certification support.',
    },
    content: {
      zh: '<p>2026 年 5 月 29 日，广州市律师协会公布《律师开展数据出境合规法律服务业务指引》，为律师办理数据出境合规业务提供全流程指引。该指引围绕《数据出境安全评估办法》《促进和规范数据跨境流动规定》等最新法规，系统梳理了安全评估申报、个人信息出境标准合同备案、个人信息保护认证等三条合规路径的操作要点与文书范本。</p><p>作为粤港澳大湾区核心城市，广州涉外数据流动场景密集，该指引的发布对本地涉外律师具有重大实务价值。</p>',
      en: '<p>On May 29, 2026, the Guangzhou Bar Association published the "Guidelines for Lawyers Providing Data Export Compliance Legal Services", offering end-to-end guidance for data export compliance engagements. The guidelines systematically cover the three compliance pathways—security assessment filings, standard contract filings for personal information export, and personal information protection certification—aligned with the latest regulations including the Data Export Security Assessment Measures and the Rules on Promoting and Regulating Cross-Border Data Flows.</p><p>Given Guangzhou\'s role as a core GBA city with intensive cross-border data flows, the guidelines hold significant practical value for local cross-border practitioners.</p>',
    },
  },
  {
    id: 'news-ind-003',
    slug: 'gzbar-genai-copyright-2026-06',
    date: '2026-06-04',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/7e2155e8228d4cd68cbd32395fa13791',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于举办"生成式人工智能的版权挑战与法律应对"专题讲座的通知',
      en: 'Seminar on "Copyright Challenges and Legal Responses to Generative AI"',
    },
    summary: {
      zh: '广州律协组织生成式人工智能版权专题培训，探讨 AI 生成内容的可版权性、训练数据版权风险及平台责任。',
      en: 'The Guangzhou Bar Association organized a seminar on AI copyright, covering copyrightability of AI-generated content, training-data risks, and platform liability.',
    },
    content: {
      zh: '<p>2026 年 6 月 4 日下午，广州市律师协会知识产权法律专业委员会联合互联网与高新技术法律专业委员会，在市律协举办"生成式人工智能的版权挑战与法律应对"专题讲座。讲座邀请中山大学法学院教授及头部互联网企业法务总监担任主讲嘉宾，围绕 AI 生成内容的可版权性判断、大模型训练数据的版权合规、AI 平台侵权责任认定等前沿议题展开深入研讨。</p><p>近 200 名律师到场参加，线上同步直播观看超过 1,200 人次。</p>',
      en: '<p>On the afternoon of June 4, 2026, the Guangzhou Bar Association\'s Intellectual Property Law Committee and Internet & High-Tech Law Committee co-hosted a seminar on "Copyright Challenges and Legal Responses to Generative AI". Guest speakers included a professor from Sun Yat-sen University School of Law and a senior legal director from a major internet company, covering the copyrightability of AI-generated content, compliance of training-data pipelines, and liability frameworks for AI platforms. Nearly 200 attorneys attended in person, with over 1,200 online attendees via live stream.</p>',
    },
  },
  {
    id: 'news-ind-004',
    slug: 'gzbar-maritime-law-revision-2026-06',
    date: '2026-06-06',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/54ddafaacb7e4d1986fd957b689831d5',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于举办《中华人民共和国海商法》（修订）解读与适用专题培训的通知',
      en: 'Training on the Interpretation and Application of the Revised PRC Maritime Code',
    },
    summary: {
      zh: '广州律协海商委组织《海商法》修订专题培训，聚焦承运人制度、电子提单、船舶油污损害赔偿等变革要点。',
      en: 'The GBA Maritime Law Committee organized a training on the Maritime Code revisions, focusing on carrier rules, electronic bills of lading, and oil pollution damages.',
    },
    content: {
      zh: '<p>2026 年 6 月 6 日，广州市律师协会海事海商与航空法律专业委员会举办《中华人民共和国海商法》（修订）解读与适用专题培训。培训由参与修法工作的知名海商法教授主讲，重点解读承运人责任制度重构、电子运输记录法律效力、船舶油污损害赔偿机制完善等核心修订内容。作为全国海事案件最集中的港口城市之一，广州律师群体对该修订关注度极高。</p>',
      en: "<p>On June 6, 2026, the Guangzhou Bar Association's Maritime and Aviation Law Committee hosted a training on the Interpretation and Application of the revised PRC Maritime Code. The session was led by a leading maritime law professor involved in the revision process, focusing on the reconstruction of carrier liability rules, the legal status of electronic transport records, and the enhanced oil pollution damage compensation regime.</p>",
    },
  },
  {
    id: 'news-ind-005',
    slug: 'gzbar-gba-restructuring-guideline-2026-05',
    date: '2026-05-29',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/9a836689892146d5bf9eb5b9ae2efd83',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于公布《粤港澳大湾区企业综合纾困法律服务指引》的通知',
      en: 'Publication of the GBA Enterprise Restructuring Legal Services Guide',
    },
    summary: {
      zh: '广州律协发布大湾区企业纾困法律服务指引，涵盖庭外重组、预重整、破产重整及跨境协调四大模块。',
      en: 'The Bar Association issued a GBA enterprise restructuring guide covering out-of-court restructuring, pre-pack, bankruptcy reorganization, and cross-border coordination.',
    },
    content: {
      zh: '<p>2026 年 5 月 29 日，广州市律师协会公布《粤港澳大湾区企业综合纾困法律服务指引》。该指引由破产清算法律专业委员会牵头起草，系统梳理了庭外债务重组、预重整程序、破产重整及跨境破产协调机制，并特别针对三地制度差异下的"一地重组、三地衔接"难题给出操作建议。指引发布后即被纳入广东省高院营商环境改革配套文件参考目录。</p>',
      en: '<p>On May 29, 2026, the Guangzhou Bar Association published the "GBA Enterprise Comprehensive Restructuring Legal Services Guide". Drafted by the Insolvency Law Committee, the guide systematically covers out-of-court debt restructuring, pre-pack proceedings, bankruptcy reorganization, and cross-border insolvency coordination, with operational recommendations for the "one restructuring, three jurisdictions" challenge unique to the GBA.</p>',
    },
  },
  {
    id: 'news-ind-006',
    slug: 'gzbar-crs-2-wealth-2026-05',
    date: '2026-05-29',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/6f2ee3961c8244a7907d372297bfaa3f',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于举办"CRS 2.0 下的财富管理合规部署"讲座的通知',
      en: 'Seminar on "Wealth Management Compliance Under CRS 2.0"',
    },
    summary: {
      zh: '广州律协举办 CRS 2.0 专题财富管理讲座，聚焦全球税务透明化背景下高净值客户的跨境资产合规与传承规划。',
      en: 'The Guangzhou Bar Association hosted a seminar on CRS 2.0 wealth management compliance, covering cross-border asset compliance and succession planning.',
    },
    content: {
      zh: '<p>2026 年 5 月 29 日，广州市律师协会婚姻家事与财富传承法律专业委员会举办"CRS 2.0 下的财富管理合规部署"专题讲座。讲座由具有国际税务师和律师双证资格的专家主讲，围绕 OECD CRS 框架最新修订、中国非居民金融账户涉税信息管理办法、离岸信托穿透规则及大湾区跨境财富合规架构设计等核心议题展开。</p>',
      en: '<p>On May 29, 2026, the Guangzhou Bar Association\'s Family and Wealth Succession Law Committee hosted a seminar on "Wealth Management Compliance Under CRS 2.0". The session was led by a dual-qualified international tax and legal expert, covering the OECD CRS framework updates, China\'s non-resident financial account tax information rules, offshore trust transparency provisions, and GBA cross-border wealth compliance architecture.</p>',
    },
  },
  {
    id: 'news-ind-007',
    slug: 'gzbar-conflict-of-interest-rules-2025-11',
    date: '2025-11-13',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/65cfc7438d9f495388880619038f3795',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于转发《广东省律师防止利益冲突规则》的通知',
      en: "Circular on the Guangdong Lawyers' Conflict-of-Interest Rules",
    },
    summary: {
      zh: '广州律协转发省律协新修订的《广东省律师防止利益冲突规则》，强化律所内控与利冲检索义务。',
      en: "The Guangzhou Bar Association forwarded the newly revised Guangdong Lawyers' Conflict-of-Interest Rules, strengthening firm-level internal controls and conflict-checking obligations.",
    },
    content: {
      zh: '<p>2025 年 11 月 13 日，广州市律师协会向全市律师事务所转发新修订的《广东省律师防止利益冲突规则》。新规则在原有基础上大幅细化：明确将"推定为利益冲突"的情形从 6 种扩展至 12 种，首次规定律师事务所须建立电子化利冲检索系统，并新增了律师转所时的利冲衔接义务。广州地区 1,200 余家律所需在 2026 年 3 月前完成内控制度更新。</p>',
      en: '<p>On November 13, 2025, the Guangzhou Bar Association circulated the newly revised "Guangdong Lawyers\' Conflict-of-Interest Rules" to all member firms. The revision significantly expands the "presumed conflict" scenarios from 6 to 12, mandates electronic conflict-checking systems for the first time, and introduces conflict carry-over obligations for lawyers changing firms. Over 1,200 Guangzhou law firms are required to update their internal control systems by March 2026.</p>',
    },
  },
  {
    id: 'news-ind-008',
    slug: 'gzbar-legal-aid-quality-2025-09',
    date: '2025-09-08',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/b4972702e70a480880c14dc2cec3e5b4',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '广州市法律援助处关于 2025 年全市法律援助案件质量抽查评估优良案件情况的通报',
      en: 'Guangzhou Legal Aid Office Report on 2025 Legal Aid Case Quality Assessment',
    },
    summary: {
      zh: '广州市法律援助处通报 2025 年度法援案件质量评估结果，全市优良率同比提升 6 个百分点。',
      en: 'The Guangzhou Legal Aid Office reported 2025 case quality assessment results, with the overall excellence rate up 6 percentage points year-on-year.',
    },
    content: {
      zh: '<p>2025 年 9 月 8 日，广州市法律援助处发布 2025 年全市法律援助案件质量抽查评估情况通报。评估覆盖全市 11 个区法律援助机构指派的刑事、民事及行政法援案件共 540 件。评估结果显示优良率达到 87.6%，较 2024 年同期上升 6 个百分点，其中刑事辩护全覆盖案件的律师阅卷率和庭前会见率首次双超 95%。</p>',
      en: '<p>On September 8, 2025, the Guangzhou Legal Aid Office released its 2025 city-wide legal aid case quality assessment report, covering 540 criminal, civil, and administrative aid cases across all 11 districts. The overall excellence rate reached 87.6%, up 6 percentage points year-on-year. For the first time, both the case-file review rate and pre-trial client meeting rate in full-coverage criminal defense cases exceeded 95%.</p>',
    },
  },
  {
    id: 'news-ind-009',
    slug: 'gzbar-police-legal-volunteer-2025-05',
    date: '2025-05-19',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/aa6dd54584854d09957ed2bc0efb1020',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于征集广州市维护公安民警执法权威法律服务团律师的通知',
      en: 'Call for Lawyers to Join the Guangzhou Police Law-Enforcement Protection Legal Service Corps',
    },
    summary: {
      zh: '广州市律协公开征集维护公安民警执法权威法律服务团成员，为一线民警提供公益法律支持。',
      en: 'The GBA announced an open call for lawyers to join a legal service corps that supports front-line police officers in law-enforcement protection.',
    },
    content: {
      zh: '<p>2026 年 5 月 19 日，广州市律师协会发布通知，面向全市律师公开征集广州市维护公安民警执法权威法律服务团成员。服务团将协助市律协公益法律服务工作委员会为一线民警在执法过程中遭遇的侵权、妨害公务等行为提供免费法律咨询和维权支持。报名条件包括执业 5 年以上、无行业处分记录、有刑事或行政法领域执业经验。</p>',
      en: "<p>On May 19, 2026, the Guangzhou Bar Association issued a public call for lawyers to join the Guangzhou Police Law-Enforcement Protection Legal Service Corps. The corps will support the Bar's public-interest legal services committee by providing pro bono legal advice and rights-protection assistance to front-line police officers facing infringement or obstruction during law enforcement operations. Applicants must have at least 5 years of practice experience, a clean disciplinary record, and practice experience in criminal or administrative law.</p>",
    },
  },
  {
    id: 'news-ind-010',
    slug: 'gzbar-village-legal-advisor-2025-11',
    date: '2025-11-06',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/f0c3c0b41e0e4cf887c024e38c4b1b22',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于通报表扬全省律师行业村（社区）法律顾问工作表现突出律师的通知',
      en: 'Commendation for Outstanding Lawyers in Village (Community) Legal Advisor Program',
    },
    summary: {
      zh: '广东省律协通报表扬村（社区）法律顾问工作表现突出律师，广州 128 名律师上榜。',
      en: 'The Guangdong Bar Association commended outstanding village (community) legal advisors, with 128 Guangzhou lawyers recognized.',
    },
    content: {
      zh: '<p>2025 年 11 月 6 日，广东省律师协会发布通报，对在全省村（社区）法律顾问工作中表现突出的律师进行表扬。全省 21 个地市共 582 名律师获此荣誉，其中广州 128 名，居全省首位。通报指出，获表扬律师年均到村（社区）服务天数超过 32 天，累计解答群众咨询 5.8 万余次，参与人民调解 1.2 万余件。</p>',
      en: '<p>On November 6, 2025, the Guangdong Bar Association commended 582 lawyers across all 21 prefectures for outstanding performance in village (community) legal advisor services, with 128 from Guangzhou ranking first in the province. The commended lawyers averaged over 32 service days per year at village (community) level, collectively handling 58,000+ public consultations and 12,000+ mediation cases.</p>',
    },
  },
  {
    id: 'news-ind-011',
    slug: 'gzbar-yangcheng-volunteer-2025-09',
    date: '2025-09-18',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/294bc1c8e71f41ee846055f72d28afc1',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于公布 2025 年羊城律政佳人志愿服务队队员补录名单的通知',
      en: 'Announcement of the 2025 Supplementary Roster for the Guangzhou Women Lawyers Volunteer Service Team',
    },
    summary: {
      zh: '羊城律政佳人志愿服务队完成 2025 年度补录，新增 45 名女律师队员，覆盖家事调解、校园普法、女职工维权等领域。',
      en: 'The Guangzhou Women Lawyers Volunteer Service Team completed its 2025 supplementary intake with 45 new members covering family mediation, campus legal education, and women worker rights protection.',
    },
    content: {
      zh: '<p>2025 年 9 月 18 日，广州市律师协会女律师工作委员会公布 2025 年度"羊城律政佳人"志愿服务队队员补录名单，共 45 名女律师入选。服务队自 2019 年成立以来累计在册队员已超过 300 人，覆盖全市 11 个区，本年度重点开展家事调解、校园反欺凌普法、女职工职场维权三大专项。</p>',
      en: '<p>On September 18, 2025, the Guangzhou Bar Association\'s Women Lawyers Committee announced 45 successful supplementary applicants for the 2025 "Guangzhou Women Lawyers" volunteer service team. Since its establishment in 2019, the team has grown to over 300 registered members across 11 districts, focusing this year on three special initiatives: family mediation, campus anti-bullying education, and women worker rights protection.</p>',
    },
  },
  {
    id: 'news-ind-012',
    slug: 'gzbar-lawyer-tax-training-2025-12',
    date: '2025-12-09',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/bb259d8e375b4d468730f441d3e6b2c9',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于举办广州市律师行业税务培训的通知',
      en: 'Notice on Guangzhou Lawyer Industry Tax Training',
    },
    summary: {
      zh: '广州市律协组织全行业税务合规培训，覆盖个税汇算、律所增值税及附加、合伙制律所税务筹划等要点。',
      en: 'The Guangzhou Bar Association organized industry-wide tax compliance training covering individual income tax, firm-level VAT, and partnership tax planning.',
    },
    content: {
      zh: '<p>2025 年 12 月 9 日，广州市律师协会财务与资产管理工作委员会举办"广州市律师行业税务培训"，邀请广州市税务局业务骨干及资深税务律师授课。培训聚焦律师个人所得税汇算清缴要点、律师事务所增值税及附加税申报实务、合伙制律所利润分配与税务筹划等实务议题，近 500 名律所财务负责人和合伙人参加。</p>',
      en: '<p>On December 9, 2025, the Guangzhou Bar Association\'s Finance and Asset Management Committee hosted the "Guangzhou Lawyer Industry Tax Training", featuring lecturers from the Guangzhou Tax Bureau and senior tax attorneys. The training covered individual income tax filing for lawyers, VAT and surtax filing for law firms, and profit distribution and tax planning for partnership law firms, with nearly 500 financial officers and partners in attendance.</p>',
    },
  },
  {
    id: 'news-ind-013',
    slug: 'gzbar-enforcement-asset-cases-2026-06',
    date: '2026-06-05',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/294bc1c8e71f41ee846055f72d28afc1',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于征集《强制执行与特殊资产精选案例》的通知',
      en: 'Call for Cases: "Selected Cases on Enforcement and Special Assets"',
    },
    summary: {
      zh: '广州律协公开征集强制执行与特殊资产处置精选案例，拟出版年度案例汇编。',
      en: 'The Guangzhou Bar Association issued an open call for cases on enforcement and special asset disposition for an annual case compendium.',
    },
    content: {
      zh: '<p>2026 年 6 月 5 日，广州市律师协会执行与资产处置法律专业委员会发布通知，面向全市律师公开征集强制执行与特殊资产处置领域的典型案例。征集范围涵盖不动产强制执行、上市公司股票执行、到期债权执行、特殊资产（NPL、AMC）处置等细分领域，入选案例将编入 2026 年度《广州强制执行与特殊资产精选案例汇编》，并向最高人民法院执行案例库推荐。</p>',
      en: '<p>On June 5, 2026, the Guangzhou Bar Association\'s Enforcement and Asset Disposition Law Committee issued a call for representative cases in the enforcement and special asset disposition field. The scope includes real estate enforcement, listed-company share enforcement, matured debt enforcement, and special asset (NPL/AMC) disposition. Selected cases will be published in the 2026 "Guangzhou Selected Cases on Enforcement and Special Assets" and recommended to the SPC enforcement case database.</p>',
    },
  },
  {
    id: 'news-ind-014',
    slug: 'gzbar-online-promotion-filing-2026-06',
    date: '2026-06-08',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/9a836689892146d5bf9eb5b9ae2efd83',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于进一步开展律师事务所和律师（团队）网络推广备案工作的通知',
      en: 'Notice on Further Implementation of Online Promotion Filing for Law Firms and Lawyer Teams',
    },
    summary: {
      zh: '广州律协进一步规范律师行业网络推广，要求律所及律师团队在 2026 年 9 月前完成推广备案。',
      en: 'The Guangzhou Bar Association further standardized online promotion in the legal industry, requiring firms and teams to complete promotion filings by September 2026.',
    },
    content: {
      zh: '<p>2026 年 6 月 8 日，广州市律师协会发布通知，要求全市律师事务所及律师（团队）进一步开展网络推广备案工作。通知明确：凡通过自有网站、微信公众号、抖音、小红书、知乎等平台进行业务推广的律所和律师团队，须在 2026 年 9 月 30 日前向市律协提交备案材料。备案内容主要包括推广平台账号信息、推广内容范围及推广合规承诺书。未完成备案的推广行为将被纳入年度执业检查重点核查范围。</p>',
      en: '<p>On June 8, 2026, the Guangzhou Bar Association issued a notice requiring all member law firms and lawyer teams to further implement online promotion filing. All firms and teams promoting their practice through websites, WeChat Official Accounts, Douyin, Xiaohongshu, Zhihu, or similar platforms must submit filing materials to the Association by September 30, 2026, including platform account details, promotion scope, and a compliance undertaking. Unfiled promotional activities will be prioritized in annual practice inspections.</p>',
    },
  },
  {
    id: 'news-ind-015',
    slug: 'gzbar-young-lawyer-demo-2026-06',
    date: '2026-06-02',
    status: 'published',
    isFeatured: false,
    sourceUrl: 'https://www.gzlawyer.org/info/bb259d8e375b4d468730f441d3e6b2c9',
    category: { zh: '行业观察', en: 'Industry View' },
    title: {
      zh: '关于公布"广州市律师协会青年律师工作示范站"（第二批）的通知',
      en: "Announcement of the Second Batch of Guangzhou Young Lawyers' Work Model Stations",
    },
    summary: {
      zh: '广州律协公布第二批青年律师工作示范站名单，全市 15 家律所入选，聚焦青年律师培养体系与职业发展通道建设。',
      en: "The Guangzhou Bar Association announced the second batch of 15 Young Lawyers' Work Model Stations, focusing on training systems and career development pathways.",
    },
    content: {
      zh: '<p>2026 年 6 月 2 日，广州市律师协会公布第二批"广州市律师协会青年律师工作示范站"名单，共 15 家律师事务所入选。示范站须在三年周期内完成"五个一"工程：建立 1 套青年律师进阶培训体系、配备 1 名专职带教合伙人、每年组织 1 次青年律师技能大赛、开展 1 项公益法律服务项目、提交 1 份年度青年律师发展报告。</p>',
      en: '<p>On June 2, 2026, the Guangzhou Bar Association announced the second batch of 15 "Guangzhou Young Lawyers\' Work Model Stations". Each model station is required to complete a "Five Ones" initiative within three years: establish one structured training curriculum, assign one dedicated mentoring partner, organize one annual young lawyers\' skills competition, conduct one pro bono legal service project, and submit one annual young lawyer development report.</p>',
    },
  },
];

/**
 * Cases — 脱敏示例,原站未公开业绩详情
 */
import type { CaseItem } from '~/lib/types';

export const cases: CaseItem[] = [
  {
    id: 'case-01',
    slug: 'finance-and-securities-2024',
    year: 2024,
    status: 'published',
    isFeatured: true,
    title: {
      zh: '某金融机构不良资产处置项目',
      en: 'Non-Performing Asset Disposition (Financial Institution)',
    },
    type: { zh: '金融证券', en: 'Finance & Securities' },
    industry: { zh: '金融', en: 'Finance' },
    client: { zh: '某商业银行（脱敏）', en: 'A commercial bank (anonymized)' },
    summary: {
      zh: '代理某商业银行参与一笔涉及数十亿元的不良资产处置项目，含尽调、谈判、协议起草及执行。',
      en: 'Represented a commercial bank in an NPA disposition project valued at several billion RMB, covering due diligence, negotiation, agreement drafting and execution.',
    },
    content: {
      zh: '<p>本所为某商业银行就一宗数十亿元规模的不良资产处置项目提供全程法律服务，包括资产尽调、清收谈判、协议起草及处置执行。</p><h3>亮点</h3><ul><li>多法域协调</li><li>清收方案设计与谈判</li><li>处置流程合规把关</li></ul>',
      en: '<p>The firm provided end-to-end legal services to a commercial bank in an NPA disposition project valued at several billion RMB, including asset due diligence, collection negotiation, agreement drafting, and execution.</p><h3>Highlights</h3><ul><li>Multi-jurisdiction coordination</li><li>Collection scheme design and negotiation</li><li>Compliance review throughout disposition</li></ul>',
    },
    highlights: {
      zh: ['涉及金额数十亿', '全流程法律服务', '多法域协调'],
      en: ['Multi-billion RMB scale', 'End-to-end service', 'Multi-jurisdiction'],
    },
    background: {
      zh: '某商业银行持有一笔涉及金额数十亿元、跨多省抵押物的不良资产包，原有处置方案停滞，资产贬值压力持续增加。',
      en: 'A commercial bank held an NPA portfolio worth several billion RMB with cross-province collateral; the prior disposition plan had stalled and asset value was eroding.',
    },
    approach: {
      zh: '组建金融 + 诉讼 + 谈判跨条线专组，48 小时内完成资产尽调与法律关系图谱，主导与债务人及担保方的多轮现场谈判，同步起草一揽子和解与重组协议。',
      en: 'Assembled a cross-disciplinary team (finance, litigation, negotiation), completed due diligence and a legal-relationship map within 48 hours, led multiple on-site rounds of negotiation with the debtor and guarantors, and drafted a packaged settlement and restructuring agreement in parallel.',
    },
    result: {
      zh: '推动达成一揽子和解协议，回款金额显著高于原方案预期，处置周期较常规压缩近一半，资产价值实现最大化。',
      en: 'Secured a packaged settlement with recoveries materially above the original plan and cut the disposition cycle by nearly half versus the benchmark, maximizing asset value.',
    },
    practiceArea: { zh: '金融证券', en: 'Finance & Securities' },
    leadLawyerId: 'lawyer-03',
    lawyerIds: ['lawyer-03'],
    outcome: 'win',
    extraMeta: {
      caseNo: '(2024) 粤 0105 民初 1823 号',
      amount: '涉及标的 30+ 亿元',
      stats: '8 周内达成和解',
    },
  },
  {
    id: 'case-02',
    slug: 'corporate-counsel-long-term-2024',
    year: 2024,
    status: 'published',
    isFeatured: true,
    title: { zh: '某大型集团常年法律顾问项目', en: 'Standing Counsel to a Major Group' },
    type: { zh: '公司法律顾问', en: 'General Counsel' },
    industry: { zh: '多元化集团', en: 'Diversified Group' },
    client: { zh: '某多元化集团（脱敏）', en: 'A diversified group (anonymized)' },
    summary: {
      zh: '担任某多元化集团常年法律顾问，提供合同审查、合规咨询、争议解决等综合法律服务。',
      en: 'Acts as standing counsel to a diversified group, providing contract review, compliance advisory, and dispute resolution services.',
    },
    content: {
      zh: '<p>本所担任某多元化集团常年法律顾问，为其提供日常合同审查、合规体系建设、子公司治理、对外投资论证等综合法律服务，并代理相关诉讼仲裁案件。</p>',
      en: '<p>The firm serves as standing counsel to a diversified group, providing daily contract review, compliance system building, subsidiary governance, outbound investment analysis, and representation in related litigation and arbitration.</p>',
    },
    highlights: {
      zh: ['常年法律顾问', '综合服务', '多业务条线'],
      en: ['Standing counsel', 'Integrated services', 'Multi-disciplinary'],
    },
    background: {
      zh: '客户为旗下拥有十数家子公司的多元化集团，业务横跨制造、贸易、地产，原法律顾问对子公司治理与新业务合规响应缓慢。',
      en: 'A diversified group with more than a dozen subsidiaries spanning manufacturing, trade and real estate; the prior counsel was slow to respond on subsidiary governance and new-business compliance.',
    },
    approach: {
      zh: '派驻 3 人常驻团队贴近业务，建立合同模板库与合规清单月度更新机制，针对每条新业务线配套前置法律评估表，实现"业务启动即合规"。',
      en: 'Embedded a three-person resident team alongside the business, built a contract template library with a monthly-updated compliance checklist, and paired each new business line with a front-loaded legal assessment to embed compliance from day one.',
    },
    result: {
      zh: '一年内累计审查合同超 2000 份，重大决策法律意见响应时间由 5 天压缩至 24 小时内，集团整体合规风险显著下降。',
      en: "Reviewed more than 2,000 contracts in a year, cut the response time for major legal opinions from five days to under 24 hours, and materially reduced the group's overall compliance risk.",
    },
    practiceArea: { zh: '公司法律顾问', en: 'General Counsel' },
    leadLawyerId: 'lawyer-01',
    lawyerIds: ['lawyer-01', 'lawyer-02'],
    outcome: 'win',
    extraMeta: {
      caseNo: '常年顾问 2024-KF-008',
      amount: '集团年营收 50+ 亿元',
      stats: '合同审查 2000+ 份/年',
    },
  },
  {
    id: 'case-03',
    slug: 'real-estate-renewal-2025',
    year: 2025,
    status: 'published',
    isFeatured: true,
    title: {
      zh: '佛山宝华旧改回迁项目专项法律服务',
      en: 'Foshan Baohua Urban Renewal Relocation Project',
    },
    type: { zh: '房地产业务', en: 'Real Estate' },
    industry: { zh: '房地产', en: 'Real Estate' },
    client: { zh: '项目方（脱敏）', en: 'Project sponsor (anonymized)' },
    summary: {
      zh: '为佛山宝华旧改回迁项目提供专项法律服务，保障公平回迁选房。',
      en: 'Provided specialized legal services for the Foshan Baohua urban renewal relocation project, ensuring a fair relocation and housing-selection process.',
    },
    content: {
      zh: '<p>2025 年 5 月，本所受邀为佛山宝华旧改回迁项目提供专项法律服务，对回迁方案、选房规则、补偿标准进行合法性论证，护航项目平稳推进。</p>',
      en: "<p>In May 2025, the firm was engaged to provide specialized legal services for the Foshan Baohua urban renewal relocation project, conducting a legal review of the relocation plan, housing-selection rules, and compensation standards, ensuring the project's smooth progress.</p>",
    },
    highlights: {
      zh: ['旧改回迁', '选房方案', '合法性论证'],
      en: ['Urban renewal relocation', 'Housing selection scheme', 'Legal compliance review'],
    },
    background: {
      zh: '佛山宝华旧改项目涉及原住居民逾 600 户，补偿标准、回迁选房顺序长期存在分歧，曾出现群体性沟通僵局。',
      en: 'The Foshan Baohua renewal project involved over 600 original-resident households; compensation standards and the housing-selection order had long been disputed, with several rounds of stalled mass communications.',
    },
    approach: {
      zh: '设计"补偿标准 + 选房规则 + 异议复核"三段式方案，独立第三方见证下组织公开摇号与现场选房，对每一户补偿依据出具书面法律意见。',
      en: "Designed a three-stage plan covering compensation standards, housing-selection rules, and objection review; organized public lottery and on-site housing selection under independent third-party witnessing, and issued written legal opinions for each household's compensation basis.",
    },
    result: {
      zh: '选房过程平稳有序，全程零投诉、零群体性事件，项目按计划进入建设阶段。',
      en: 'The housing selection process was stable and orderly, with zero complaints and zero group incidents, and the project moved into construction on schedule.',
    },
    practiceArea: { zh: '房地产业务', en: 'Real Estate' },
    leadLawyerId: 'lawyer-05',
    lawyerIds: ['lawyer-05'],
    outcome: 'mediation',
    extraMeta: {
      caseNo: '佛山宝华旧改 · 2025',
      amount: '涉及原住户 600+ 户',
      stats: '选房零投诉、零群体事件',
    },
  },
  {
    id: 'case-04',
    slug: 'ip-rights-protection-2024',
    year: 2024,
    status: 'published',
    isFeatured: false,
    title: {
      zh: '某知名品牌商标维权系列案件',
      en: 'Trademark Enforcement Series for a Well-Known Brand',
    },
    type: { zh: '知识产权', en: 'Intellectual Property' },
    industry: { zh: '消费品', en: 'Consumer Goods' },
    client: { zh: '某品牌方（脱敏）', en: 'A brand owner (anonymized)' },
    summary: {
      zh: '为某知名品牌方提供商标侵权调查、行政查处申请及民事诉讼一揽子法律服务。',
      en: 'Provided a full suite of legal services for a well-known brand, including trademark infringement investigation, administrative enforcement applications, and civil litigation.',
    },
    content: {
      zh: '<p>本所代理某知名品牌方，针对市场上多起商标侵权行为开展调查取证，向市场监管部门申请行政查处，并代理多起民事诉讼，取得胜诉判决。</p>',
      en: '<p>The firm represented a well-known brand owner in investigating and gathering evidence of multiple trademark infringements, applying for administrative enforcement with market regulators, and litigating multiple civil cases, obtaining favorable judgments.</p>',
    },
    highlights: {
      zh: ['商标维权', '行政查处', '民事诉讼'],
      en: ['Trademark enforcement', 'Administrative action', 'Civil litigation'],
    },
    background: {
      zh: '客户为消费品行业知名品牌，市面上出现跨电商平台、跨省份的仿冒销售与抢注行为，单一诉讼难以全面遏制。',
      en: 'A well-known consumer-goods brand faced cross-platform and cross-province counterfeiting and preemptive trademark filings; isolated lawsuits were unable to contain the spread.',
    },
    approach: {
      zh: '调查 + 行政查处 + 民事诉讼三轨并行：先固定线上线下侵权证据，再推动多地市场监管部门同步查处，最后对典型主体发起民事诉讼，形成立体维权。',
      en: 'Ran investigation, administrative enforcement, and civil litigation in parallel: secured online and offline evidence, coordinated simultaneous enforcement actions with market regulators across regions, then pursued representative defendants in civil suits to build a three-dimensional enforcement strategy.',
    },
    result: {
      zh: '成功关停侵权店铺数百家，主要仿冒主体被认定侵权并承担赔偿责任，客户线上渠道恢复秩序。',
      en: "Successfully shut down hundreds of infringing shops, had the principal counterfeiters found liable for infringement with damages, and restored order to the client's online channels.",
    },
    practiceArea: { zh: '知识产权', en: 'Intellectual Property' },
    leadLawyerId: 'lawyer-02',
    lawyerIds: ['lawyer-02'],
    outcome: 'win',
    extraMeta: {
      caseNo: '知民初 2024-0307',
      amount: '关停侵权店铺 300+ 家',
      stats: '多地同步查处、一审胜诉',
    },
  },
  {
    id: 'case-05',
    slug: 'foreign-investment-setup-2023',
    year: 2023,
    status: 'published',
    isFeatured: false,
    title: {
      zh: '某外资企业设立及合规体系建设',
      en: 'Foreign-Invested Enterprise Setup and Compliance',
    },
    type: { zh: '外商投资', en: 'Foreign Investment' },
    industry: { zh: '制造业', en: 'Manufacturing' },
    client: { zh: '某外资制造企业（脱敏）', en: 'A foreign manufacturer (anonymized)' },
    summary: {
      zh: '为某外资制造企业在广东投资设立提供一站式法律服务，含公司设立、合同体系、合规建设。',
      en: 'Provided one-stop legal services for a foreign manufacturer investing in Guangdong, including company setup, contract systems, and compliance building.',
    },
    content: {
      zh: '<p>本所为某外资制造企业在广东投资设立提供法律服务，包括「三资」企业设立相关协议、合同、章程的起草与审查，企业合规体系搭建及日常法律咨询。</p>',
      en: "<p>The firm provided legal services for a foreign manufacturer's investment setup in Guangdong, including drafting and review of the establishment agreements, contracts, and articles of association, as well as building the corporate compliance system and providing daily legal advisory.</p>",
    },
    highlights: {
      zh: ['一站式服务', '合规体系', '外资设立'],
      en: ['One-stop service', 'Compliance system', 'Foreign-invested setup'],
    },
    background: {
      zh: '客户为某欧洲制造业集团，拟在广东设立全资子公司及 2 家分支机构，面临外资准入、行业许可、外汇及劳动用工等多重合规要求。',
      en: 'A European manufacturing group planned to set up a wholly-owned subsidiary and two branch offices in Guangdong, navigating multiple compliance requirements: foreign-investment access, industry licensing, foreign exchange, and labor employment.',
    },
    approach: {
      zh: '一站式服务：完成公司设立、行业许可、章程与治理文件起草，搭建覆盖反贿赂、反洗钱、数据出境与劳动人事的全套合规体系，并配套英文版制度手册。',
      en: 'Delivered one-stop service: completed company setup, industry licensing, articles of association and governance documents, and built a full compliance system covering anti-bribery, anti-money-laundering, cross-border data, and labor/HR, paired with an English-language policy handbook.',
    },
    result: {
      zh: '8 周内完成全部设立手续，一次性通过主管部门审批，外资合规体系顺利落地，后续运营未发生合规整改事项。',
      en: 'Completed all setup procedures within eight weeks, passed authority approvals on the first review, and the compliance system was fully implemented with no subsequent remediation required.',
    },
    practiceArea: { zh: '外商投资', en: 'Foreign Investment' },
    leadLawyerId: 'lawyer-03',
    lawyerIds: ['lawyer-03'],
    outcome: 'win',
    extraMeta: {
      caseNo: 'WFOE-2023-GZ-021',
      amount: '投资规模 1.2 亿欧元',
      stats: '8 周完成设立、一次过审',
    },
  },
  {
    id: 'case-06',
    slug: 'criminal-defense-economic-2024',
    year: 2024,
    status: 'published',
    isFeatured: false,
    title: { zh: '某职务经济犯罪案件辩护', en: 'Public Office Economic Crime Defense' },
    type: { zh: '刑事辩护', en: 'Criminal Defense' },
    industry: { zh: '政府', en: 'Government' },
    client: { zh: '当事人（化名）', en: 'Defendant (pseudonymized)' },
    summary: {
      zh: '代理某职务经济犯罪案件辩护，依法提出辩护意见，维护当事人合法权益。',
      en: "Defended a public office economic crime case, raising lawful arguments to safeguard the defendant's legitimate rights.",
    },
    content: {
      zh: '<p>本所代理某职务经济犯罪案件，通过对在案证据的逐项审查，依法提出辩护意见，部分指控最终未被法院认定。</p>',
      en: '<p>The firm defended a public office economic crime case, conducting a point-by-point review of the evidence on record and lawfully raising defense arguments; certain charges were ultimately not upheld by the court.</p>',
    },
    highlights: {
      zh: ['刑事辩护', '证据审查', '部分指控不成立'],
      en: ['Criminal defense', 'Evidence review', 'Partial acquittal'],
    },
    background: {
      zh: '当事人被指控在任职期间涉嫌多起经济犯罪，涉案金额较大，案卷材料逾百卷，证据链庞杂。',
      en: 'The defendant was charged with multiple economic offenses committed during public office, with large sums at issue and a case file spanning more than a hundred volumes of evidence.',
    },
    approach: {
      zh: '组织刑辩团队对全部在案证据逐项梳理、交叉比对，定位证据链关键缺口，针对每一起指控形成独立质证意见与无罪/罪轻辩护观点。',
      en: 'Assembled a criminal defense team to comb through the entire record point by point and cross-check, locating critical gaps in the evidence chain, and built independent evidentiary challenges and acquittal/mitigating arguments for each charge.',
    },
    result: {
      zh: '法院采纳核心辩护意见，多项指控因证据不足未被认定，最终量刑显著低于检方建议，当事人合法权益得到有效维护。',
      en: "The court adopted the core defense arguments, declined to uphold several charges for lack of evidence, and the final sentence was significantly below the prosecution's recommendation, effectively safeguarding the defendant's legitimate rights.",
    },
    practiceArea: { zh: '刑事辩护', en: 'Criminal Defense' },
    leadLawyerId: 'lawyer-04',
    lawyerIds: ['lawyer-04'],
    outcome: 'partial',
    extraMeta: {
      caseNo: '（2024）粤 0115 刑初 442 号',
      amount: '卷宗 100+ 卷',
      stats: '多项指控不予认定',
    },
  },
];

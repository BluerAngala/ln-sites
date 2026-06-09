/**
 * Practices — 8 大业务领域
 */
import type { Practice } from '~/lib/types';

export const practices: Practice[] = [
  {
    id: 'p-01',
    name: { zh: '金融、证券法律业务', en: 'Finance & Securities' },
    nameEn: 'Finance & Securities',
    description: {
      zh: '为银行、证券、保险、基金、信托、上市公司提供法律服务，含股份制改组、证券发行、基金募集、按揭抵押、保险理赔、期货股票纠纷等。',
      en: 'Legal services for banks, securities firms, insurers, funds, trusts and listed companies, including shareholding reform, securities issuance, fund formation, mortgages, insurance claims, and securities/futures disputes.',
    },
    aliases: {
      zh: ['金融、证券', '金融证券'],
      en: ['Finance', 'Securities', 'Finance & Securities'],
    },
    caseCount: 220,
    order: 1,
  },
  {
    id: 'p-02',
    name: { zh: '公司法律顾问业务', en: 'General Counsel' },
    nameEn: 'General Counsel',
    description: {
      zh: '为公司设立、变更、资产重组、股份制改造、股权转让、合并分立、兼并收购、破产清算等提供法律服务。',
      en: 'Legal services for company formation and changes, asset restructuring, shareholding reform, equity transfer, mergers and spin-offs, acquisitions, and bankruptcy liquidation.',
    },
    aliases: {
      zh: ['公司法律顾问', '公司商事', '公司法'],
      en: ['General Counsel', 'Corporate & Commercial', 'Corporate Law'],
    },
    caseCount: 480,
    order: 2,
  },
  {
    id: 'p-03',
    name: { zh: '房地产业务', en: 'Real Estate' },
    nameEn: 'Real Estate',
    description: {
      zh: '房地产项目开发策划与融资、土地使用权出让转让、闲置土地处理、规划设计与工程建设、销售按揭与出租、物业管理。',
      en: 'Real estate project planning and financing, land use right transfer, idle land handling, planning and construction, sales/mortgage/leasing, and property management.',
    },
    aliases: {
      zh: ['房地产', '房地产与建设工程', '建设工程'],
      en: ['Real Estate', 'Real Estate & Construction'],
    },
    caseCount: 260,
    order: 3,
  },
  {
    id: 'p-04',
    name: { zh: '知识产权业务', en: 'Intellectual Property' },
    nameEn: 'Intellectual Property',
    description: {
      zh: '商标、专利、著作权、专有技术的申请、转让、许可、侵权纠纷代理。',
      en: 'Application, transfer, licensing, and infringement representation for trademarks, patents, copyrights, and know-how.',
    },
    aliases: {
      zh: ['知识产权', '商标', '专利', '著作权'],
      en: ['Intellectual Property', 'Trademark', 'Patent', 'Copyright'],
    },
    caseCount: 180,
    order: 4,
  },
  {
    id: 'p-05',
    name: { zh: '外商投资业务', en: 'Foreign Investment' },
    nameEn: 'Foreign Investment',
    description: {
      zh: '「三资」企业设立的法律咨询、协议/合同/章程起草审查、设立申请与营业执照领取等全流程。',
      en: 'Legal advisory on foreign-invested enterprise setup, drafting and review of agreements/contracts/articles, and full-process handling of establishment applications and business licenses.',
    },
    aliases: { zh: ['外商投资', '三资'], en: ['Foreign Investment', 'FIE'] },
    caseCount: 90,
    order: 5,
  },
  {
    id: 'p-06',
    name: {
      zh: '航运、贸易和能源仲裁与诉讼',
      en: 'Shipping, Trade & Energy Arbitration & Litigation',
    },
    nameEn: 'Shipping, Trade & Energy',
    description: {
      zh: '海事、海商、海上工程、保险、贸易、公司、投融资、金融等领域诉讼、仲裁和非诉争端解决。',
      en: 'Maritime, shipping, offshore engineering, insurance, trade, corporate, investment, and finance disputes through litigation, arbitration and alternative dispute resolution.',
    },
    aliases: {
      zh: ['航运', '贸易', '能源', '海事', '海商'],
      en: ['Shipping', 'Trade', 'Energy', 'Maritime'],
    },
    caseCount: 150,
    order: 6,
  },
  {
    id: 'p-07',
    name: { zh: '国内仲裁与诉讼业务', en: 'Domestic Arbitration & Litigation' },
    nameEn: 'Domestic Arbitration & Litigation',
    description: {
      zh: '各类合同纠纷仲裁与诉讼、民事纠纷（婚姻家庭、劳动、侵权）诉讼、企业/公司/银行债权清理、行政纠纷诉讼。',
      en: 'Arbitration and litigation of contract disputes, civil disputes (family, labor, tort), corporate/banking debt recovery, and administrative litigation.',
    },
    aliases: {
      zh: ['仲裁', '诉讼', '争议解决', '民商事', '劳动法', '普法宣传', '公司商事'],
      en: ['Arbitration', 'Litigation', 'Dispute Resolution', 'Civil & Commercial', 'Labor Law'],
    },
    caseCount: 380,
    order: 7,
  },
  {
    id: 'p-08',
    name: { zh: '刑事案件业务', en: 'Criminal Defense' },
    nameEn: 'Criminal Defense',
    description: {
      zh: '刑事辩护、侦查阶段律师业务、起诉阶段律师业务、刑事案件被害人代理。',
      en: 'Criminal defense, representation during investigation and prosecution stages, and representation for victims of criminal cases.',
    },
    aliases: { zh: ['刑事案件', '刑事辩护'], en: ['Criminal Defense', 'Criminal'] },
    caseCount: 140,
    order: 8,
  },
];

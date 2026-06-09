/**
 * Offices — 7 个分所（含广州总所 + 6 分所）
 */
import type { Office } from '~/lib/types';

export const offices: Office[] = [
  {
    id: 'o-hq',
    city: { zh: '广州', en: 'Guangzhou' },
    address: {
      zh: '广州市海珠区阅江西路 370 号 广报中心北塔 15F',
      en: '15F, North Tower, Guangzhou Newspaper Center, 370 Yuejiang West Road, Haizhu District, Guangzhou',
    },
    phone: '020-81836088',
    fax: '',
    email: 'public@lnlawfirm.cn',
    isHeadquarters: true,
    order: 1,
    description: {
      zh: '总所所在地，1984 年由中山大学法律系创办。',
      en: 'Headquarters. Founded in 1984 by the Law Faculty of Sun Yat-sen University.',
    },
    image: '/img/orig/office-gz.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 113.3244,
    lat: 23.1055,
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=113.3144%2C23.0955%2C113.3344%2C23.1155&layer=mapnik&marker=23.1055%2C113.3244',
    mapAmap:
      'https://uri.amap.com/marker?position=113.3244%2C23.1055&name=%E5%B9%BF%E5%B7%9E%E5%B8%82%E6%B5%B7%E7%8F%A0%E5%8C%BA%E9%98%85%E6%B1%9F%E8%A5%BF%E8%B7%AF370%E5%8F%B7&src=lnlawfirm',
    mapBaidu:
      'https://api.map.baidu.com/marker?location=23.1055%2C113.3244&title=%E5%B9%BF%E5%B7%9E%E5%B8%82%E6%B5%B7%E7%8F%A0%E5%8C%BA%E9%98%85%E6%B1%9F%E8%A5%BF%E8%B7%AF370%E5%8F%B7&content=%E5%B9%BF%E6%8A%A5%E4%B8%AD%E5%BF%83%E5%8C%97%E5%A1%94&output=html',
  },
  {
    id: 'o-sz',
    city: { zh: '深圳', en: 'Shenzhen' },
    address: {
      zh: '广东省深圳市福田区益田路 4068 号 卓越时代广场 3508B',
      en: '3508B, Excellence Times Square, 4068 Yitian Road, Futian District, Shenzhen',
    },
    phone: '18922491076 / 0755-26659987',
    fax: '020-31952316',
    email: 'lnszfs@lnlawfirm.cn',
    order: 2,
    image: '/img/orig/office-sz.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 114.0579,
    lat: 22.5431,
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=114.0479%2C22.5331%2C114.0679%2C22.5531&layer=mapnik&marker=22.5431%2C114.0579',
    mapAmap:
      'https://uri.amap.com/marker?position=114.0579%2C22.5431&name=%E6%B7%B1%E5%9C%B3%E7%A6%8F%E7%94%B0%E5%8C%BA%E7%9B%8A%E7%94%B0%E8%B7%AF4068%E5%8F%B7&src=lnlawfirm',
    mapBaidu:
      'https://api.map.baidu.com/marker?location=22.5431%2C114.0579&title=%E6%B7%B1%E5%9C%B3%E7%A6%8F%E7%94%B0%E5%8C%BA%E7%9B%8A%E7%94%B0%E8%B7%AF4068%E5%8F%B7&content=%E5%8D%93%E8%B6%8A%E6%97%B6%E4%BB%A3%E5%B9%BF%E5%9C%BA&output=html',
  },
  {
    id: 'o-hk',
    city: { zh: '海口', en: 'Haikou' },
    address: {
      zh: '海南省海口市龙华区金垦路 6 号 康年皇冠花园酒店 7 楼 康年阁',
      en: 'Kangnian Pavilion, 7F, Kangnian Crown Garden Hotel, 6 Jinken Road, Longhua District, Haikou, Hainan',
    },
    phone: '13926159817',
    fax: '',
    email: 'hk@lnlawfirm.cn',
    order: 3,
    image: '/img/orig/office-hk.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 110.33,
    lat: 20.022,
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=110.3200%2C20.0120%2C110.3400%2C20.0320&layer=mapnik&marker=20.0220%2C110.3300',
    mapAmap:
      'https://uri.amap.com/marker?position=110.3300%2C20.0220&name=%E6%B5%B7%E5%8D%97%E7%9C%81%E6%B5%B7%E5%8F%A3%E5%B8%82%E9%BE%99%E5%8D%8E%E5%8C%BA&src=lnlawfirm',
    mapBaidu:
      'https://api.map.baidu.com/marker?location=20.0220%2C110.3300&title=%E6%B5%B7%E5%8D%97%E7%9C%81%E6%B5%B7%E5%8F%A3%E5%B8%82%E9%BE%99%E5%8D%8E%E5%8C%BA&content=%E5%BA%B7%E5%B9%B4%E7%9A%87%E5%86%A0%E8%8A%B1%E5%9B%AD%E9%85%92%E5%BA%97&output=html',
  },
  {
    id: 'o-dg',
    city: { zh: '东莞', en: 'Dongguan' },
    address: {
      zh: '广东省东莞市南城街道鸿福路 199 号 328 室',
      en: 'Room 328, 199 Hongfu Road, Nancheng Sub-district, Dongguan, Guangdong',
    },
    phone: '0769-88888303',
    fax: '',
    email: 'dg@lnlawfirm.cn',
    order: 4,
    image: '/img/orig/office-dg.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 113.746,
    lat: 23.041,
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=113.7360%2C23.0310%2C113.7560%2C23.0510&layer=mapnik&marker=23.0410%2C113.7460',
    mapAmap:
      'https://uri.amap.com/marker?position=113.7460%2C23.0410&name=%E4%B8%9C%E8%8E%9E%E5%B8%82%E5%8D%97%E5%9F%8E%E8%A1%97%E9%81%93%E9%B8%BF%E7%A6%8F%E8%B7%AF199%E5%8F%B7&src=lnlawfirm',
    mapBaidu:
      'https://api.map.baidu.com/marker?location=23.0410%2C113.7460&title=%E4%B8%9C%E8%8E%9E%E5%B8%82%E5%8D%97%E5%9F%8E%E8%A1%97%E9%81%93%E9%B8%BF%E7%A6%8F%E8%B7%AF199%E5%8F%B7&content=%E5%8D%97%E5%9F%8E%E5%88%86%E6%89%80&output=html',
  },
  {
    id: 'o-hz',
    city: { zh: '惠州', en: 'Huizhou' },
    address: {
      zh: '广东省惠州市惠城区江北文昌一路 7 号 华贸大厦 1 单元 24 层 04、05、06、11 号',
      en: 'Units 04, 05, 06, 11, 24F, Tower 1, Huamao Building, 7 Wenchang 1st Road, Jiangbei, Huicheng District, Huizhou, Guangdong',
    },
    phone: '13580393250',
    fax: '',
    email: 'hz@lnlawfirm.cn',
    order: 5,
    image: '/img/orig/office-hz.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 114.412,
    lat: 23.111,
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=114.4020%2C23.1010%2C114.4220%2C23.1210&layer=mapnik&marker=23.1110%2C114.4120',
    mapAmap:
      'https://uri.amap.com/marker?position=114.4120%2C23.1110&name=%E6%83%A0%E5%B7%9E%E5%B8%82%E6%83%A0%E5%9F%8E%E5%8C%BA%E6%B1%9F%E5%8C%97%E6%96%87%E6%98%8C%E4%B8%80%E8%B7%AF7%E5%8F%B7&src=lnlawfirm',
    mapBaidu:
      'https://api.map.baidu.com/marker?location=23.1110%2C114.4120&title=%E6%83%A0%E5%B7%9E%E5%B8%82%E6%83%A0%E5%9F%8E%E5%8C%BA%E6%B1%9F%E5%8C%97%E6%96%87%E6%98%8C%E4%B8%80%E8%B7%AF7%E5%8F%B7&content=%E5%8D%8E%E8%B4%B8%E5%A4%A7%E5%8E%A6&output=html',
  },
  {
    id: 'o-fs',
    city: { zh: '佛山', en: 'Foshan' },
    address: {
      zh: '广东省佛山市禅城区汾江南路 37 号 B 座 10 楼 1001、1002 房',
      en: 'Rooms 1001, 1002, 10F, Block B, 37 Fenjiang South Road, Chancheng District, Foshan, Guangdong',
    },
    phone: '0757-83131090',
    fax: '',
    email: 'fs@lnlawfirm.cn',
    order: 6,
    image: '/img/orig/office-fs.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 113.121,
    lat: 23.022,
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=113.1110%2C23.0120%2C113.1310%2C23.0320&layer=mapnik&marker=23.0220%2C113.1210',
    mapAmap:
      'https://uri.amap.com/marker?position=113.1210%2C23.0220&name=%E4%BD%9B%E5%B1%B1%E5%B8%82%E7%A6%85%E5%9F%8E%E5%8C%BA%E6%B3%BE%E6%B1%9F%E5%8D%97%E8%B7%AF37%E5%8F%B7&src=lnlawfirm',
    mapBaidu:
      'https://api.map.baidu.com/marker?location=23.0220%2C113.1210&title=%E4%BD%9B%E5%B1%B1%E5%B8%82%E7%A6%85%E5%9F%8E%E5%8C%BA%E6%B3%BE%E6%B1%9F%E5%8D%97%E8%B7%AF37%E5%8F%B7&content=B%E5%BA%A710%E6%A5%BC&output=html',
  },
  {
    id: 'o-hd',
    city: { zh: '广州花都', en: 'Guangzhou Huadu' },
    address: {
      zh: '广州市花都区迎宾大道 132 号 星旺广场 3 幢 6F02',
      en: '6F02, Building 3, Xingwang Plaza, 132 Yingbin Avenue, Huadu District, Guangzhou',
    },
    phone: '020-36839595',
    fax: '',
    email: 'huadu@lnlawfirm.cn',
    order: 7,
    image: '/img/orig/office-hd.png',
    mapUrl: 'http://www.lnlawfirm.cn/view_129.html',
    lng: 113.22,
    lat: 23.404,
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=113.2100%2C23.3940%2C113.2300%2C23.4140&layer=mapnik&marker=23.4040%2C113.2200',
    mapAmap:
      'https://uri.amap.com/marker?position=113.2200%2C23.4040&name=%E5%B9%BF%E5%B7%9E%E5%B8%82%E8%8A%B1%E9%83%BD%E5%8C%BA%E8%BF%8E%E5%AE%BE%E5%A4%A7%E9%81%93132%E5%8F%B7&src=lnlawfirm',
    mapBaidu:
      'https://api.map.baidu.com/marker?location=23.4040%2C113.2200&title=%E5%B9%BF%E5%B7%9E%E5%B8%82%E8%8A%B1%E9%83%BD%E5%8C%BA%E8%BF%8E%E5%AE%BE%E5%A4%A7%E9%81%93132%E5%8F%B7&content=%E6%98%9F%E6%97%BA%E5%B9%BF%E5%9C%BA&output=html',
  },
];

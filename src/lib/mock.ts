/**
 * Mock content bundle
 * - 数据按实体拆到 src/lib/data/*.ts
 * - 这里只做装配 + re-export，保持旧 import 路径 `~/lib/mock` 可用
 */
import type { ContentBundle } from './types';
import { lawyers } from './data/lawyers';
import { cases } from './data/cases';
import { news } from './data/news';
import { honors } from './data/honors';
import { practices } from './data/practices';
import { offices } from './data/offices';
import { social } from './data/social';
import { config } from './data/config';

const now = new Date().toISOString();

export const mockBundle: ContentBundle = {
  source: 'mock',
  generatedAt: now,
  lawyers,
  cases,
  news,
  honors,
  practices,
  offices,
  social,
  config,
};

// re-export 各段，方便 content.ts 或脚本按需 import
export { lawyers, cases, news, honors, practices, offices, social, config };

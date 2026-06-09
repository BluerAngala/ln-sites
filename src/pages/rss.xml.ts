import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getNews } from '~/lib/content';
import { t, type Locale } from '~/i18n';
import { detectLocale, prefixFor } from '~/lib/locale';

export async function GET(context: APIContext) {
  const locale: Locale = detectLocale(context.url.pathname);
  const news = await getNews({ limit: 30 });
  return rss({
    title: locale === 'en' ? 'Lingnan Law Firm · News' : '岭南律师事务所 · 新闻动态',
    description:
      locale === 'en'
        ? 'Firm news, industry insight, and media coverage from Lingnan.'
        : '广东岭南律师事务所所内动态、行业观察、媒体报道',
    site: context.site ?? 'https://www.lingnanlaw.com',
    items: news.map((n) => ({
      title: t(n.title, locale) ?? '',
      pubDate: new Date(n.date),
      description: t(n.summary, locale) ?? '',
      link: `${prefixFor(locale)}/news/${n.slug}`,
      categories: [t(n.category, locale) ?? ''],
    })),
    customData: '<language>zh-cn</language>',
  });
}

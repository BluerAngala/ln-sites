import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getNews } from '~/lib/content';
import { t, type Locale } from '~/i18n';

export async function GET(context: APIContext) {
  const locale: Locale = 'en';
  const news = await getNews({ limit: 30 });
  return rss({
    title: 'Lingnan Law Firm · News',
    description: 'Firm news, industry insight, and media coverage from Lingnan.',
    site: context.site ?? 'https://www.lingnanlaw.com',
    items: news.map(n => ({
      title: t(n.title, locale) ?? '',
      pubDate: new Date(n.date),
      description: t(n.summary, locale) ?? '',
      link: `/en/news/${n.slug}/`,
      categories: [t(n.category, locale) ?? ''],
    })),
    customData: '<language>en-us</language>',
  });
}

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { slugFromId, sortByDate } from "../lib/articles";
import { asset } from "../lib/asset";

export async function GET(context: { site: URL | undefined }) {
  const articles = sortByDate(
    await getCollection("articles", ({ data }) => !data.draft),
  );

  const site = new URL(
    import.meta.env.BASE_URL,
    context.site ?? "https://geekienews.com",
  ).href;

  return rss({
    title: "GeekieNews",
    description:
      "Essays, audits, and releases on AI software reliability. Static analysis, never the model.",
    site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishDate,
      link: asset(`articles/${slugFromId(article.id)}/`),
      categories: [article.data.category, ...article.data.tags],
      author: article.data.author,
    })),
    customData: `<language>en-gb</language>`,
  });
}

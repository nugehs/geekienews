import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { slugFromId, sortByDate } from "../lib/articles";

export async function GET(context: { site: URL | string | undefined }) {
  const articles = sortByDate(
    await getCollection("articles", ({ data }) => !data.draft),
  );

  return rss({
    title: "GeekieNews",
    description:
      "Essays, audits, and releases on AI software reliability. Static analysis, never the model.",
    site: context.site ?? "https://geekienews.com",
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishDate,
      link: `/articles/${slugFromId(article.id)}/`,
      categories: [article.data.category, ...article.data.tags],
      author: article.data.author,
    })),
    customData: `<language>en-gb</language>`,
  });
}

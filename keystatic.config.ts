import { config, fields, collection } from "@keystatic/core";

const repo =
  (process.env.KEYSTATIC_GITHUB_REPO as `${string}/${string}` | undefined) ??
  "nugehs/geekienews";

export default config({
  storage:
    process.env.KEYSTATIC_STORAGE === "github"
      ? { kind: "github", repo }
      : { kind: "local" },
  ui: {
    brand: { name: "GeekieNews" },
  },
  collections: {
    articles: collection({
      label: "Articles",
      slugField: "title",
      path: "src/content/articles/*/",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: { length: { min: 1, max: 280 } },
        }),
        publishDate: fields.date({ label: "Publish date" }),
        author: fields.text({
          label: "Author",
          defaultValue: "Oluwasegun Olumbe",
        }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Essay", value: "essay" },
            { label: "Audit", value: "audit" },
            { label: "Release", value: "release" },
            { label: "Comparison", value: "comparison" },
          ],
          defaultValue: "essay",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        draft: fields.checkbox({ label: "Draft", defaultValue: false }),
        featured: fields.checkbox({ label: "Featured", defaultValue: false }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "public/images/articles",
              publicPath: "/images/articles/",
            },
          },
        }),
      },
    }),
  },
});

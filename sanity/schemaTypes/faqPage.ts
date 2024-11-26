import { defineField, defineType } from "sanity";

export default defineType({
  name: "faqPage",
  title: "FAQ Page Setting",
  type: "document",
  groups: [
    {
      name: "header",
      title: "Header",
    },
    {
      name: "faqCategories",
      title: "FAQ Groups",
    },
  ],
  fields: [
    defineField({
      name: "articleLink",
      title: "Article Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
      group: "header",
    }),
    defineField({
      name: "faqCategories",
      title: "FAQ Categories",
      type: "array",
      of: [
        defineField({
          name: "category",
          title: "Cetegory",
          type: "reference",
          to: { type: "faqCategory" },
        }),
      ],
      group: "faqCategories",
    }),
  ],
});

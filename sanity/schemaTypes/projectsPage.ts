import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectsPage",
  title: "Projects Page Setting",
  type: "document",
  groups: [
    {
      name: "header",
      title: "Header",
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
  ],
});

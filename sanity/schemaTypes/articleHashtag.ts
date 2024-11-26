import { defineField, defineType } from "sanity";

export default defineType({
  name: "articleHashtag",
  title: "Article Hashtag",
  type: "document",
  fields: [
    defineField({
      name: "hashtag",
      title: "Hashtag",
      type: "string",
    }),
  ],
});

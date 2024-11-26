import { defineField } from "sanity";

export default defineField({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "faqCategory" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [
        {
          type: "block",
          styles: [],
          lists: [],
          marks: {
            decorators: [
              {
                title: "Bold",
                value: "strong",
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "button",
      type: "object",
      title: "Button",
      fields: [
        defineField({
          name: "text",
          title: "Text",
          type: "string",
        }),
        defineField({
          name: "isCalCom",
          title: "Show Cal.com modal on click",
          type: "boolean",
        }),
        defineField({
          name: "link",
          title: "Link",
          type: "url",
        }),
      ],
    }),
  ],
});

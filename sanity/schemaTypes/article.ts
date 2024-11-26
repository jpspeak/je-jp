import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
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
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description:
        "This will be used as thumbnail and main image of the article.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainVideoLink",
      title: "Main Video Link",
      type: "url",
      description: "This will override the image.",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              options: { isHighlighted: true },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "blocks",
      title: "Blocks",
      type: "array",
      of: [
        defineField({
          name: "body",
          title: "Body",
          type: "object",
          fields: [
            defineField({
              name: "body",
              title: "Body",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "Heading 1", value: "h1" },
                    { title: "Heading 2", value: "h2" },
                    { title: "Heading 3", value: "h3" },
                    { title: "Quote", value: "blockquote" },
                  ],
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Numbered", value: "number" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Bold", value: "strong" },
                      { title: "Italic", value: "em" },
                      { title: "Underline", value: "underline" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "URL",
                        fields: [
                          {
                            name: "href",
                            type: "url",
                            title: "URL",
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative text",
                      options: { isHighlighted: true },
                    },
                  ],
                },
              ],
            }),
          ],
        }),
        defineField({
          name: "buttons",
          title: "Buttons",
          type: "object",
          fields: [
            defineField({
              name: "primaryButton",
              type: "object",
              title: "Primary Button",
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
            defineField({
              name: "secondaryButton",
              type: "object",
              title: "Secondary Button",
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
        }),
      ],
    }),
    // defineField({
    //   name: "sections",
    //   title: "Sections",
    //   type: "array",
    //   of: [
    //     defineField({
    //       name: "section",
    //       title: "Section",
    //       type: "object",
    //       fields: [
    //         defineField({
    //           name: "image",
    //           title: "Image",
    //           type: "image",
    //         }),
    //         defineField({
    //           name: "videoLink",
    //           title: "Video Link",
    //           type: "url",
    //           description: "This will override the image.",
    //         }),
    //         defineField({
    //           name: "title",
    //           title: "Title",
    //           type: "string",
    //         }),
    //         defineField({
    //           name: "body",
    //           title: "Body",
    //           type: "array",
    //           of: [
    //             {
    //               type: "block",
    //               styles: [],
    //               lists: [],
    //               marks: {
    //                 decorators: [
    //                   {
    //                     title: "Bold",
    //                     value: "strong",
    //                   },
    //                 ],
    //               },
    //             },
    //           ],
    //         }),
    //         defineField({
    //           name: "primaryButton",
    //           type: "object",
    //           title: "Primary Button",
    //           fields: [
    //             defineField({
    //               name: "text",
    //               title: "Text",
    //               type: "string",
    //             }),
    //             defineField({
    //               name: "isCalCom",
    //               title: "Show Cal.com modal on click",
    //               type: "boolean",
    //             }),
    //             defineField({
    //               name: "link",
    //               title: "Link",
    //               type: "url",
    //             }),
    //           ],
    //         }),
    //         defineField({
    //           name: "secondaryButton",
    //           type: "object",
    //           title: "Secondary Button",
    //           fields: [
    //             defineField({
    //               name: "text",
    //               title: "Text",
    //               type: "string",
    //             }),
    //             defineField({
    //               name: "isCalCom",
    //               title: "Show Cal.com modal on click",
    //               type: "boolean",
    //             }),
    //             defineField({
    //               name: "link",
    //               title: "Link",
    //               type: "url",
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //   ],
    // }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "articleCategory" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hashtags",
      title: "Hashtags",
      type: "array",
      of: [{ type: "reference", to: { type: "articleHashtag" } }],
    }),
  ],
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page Setting",
  type: "document",
  groups: [
    {
      name: "header",
      title: "Header",
    },
    {
      name: "featuredStories",
      title: "Featured Stories",
    },
    // {
    //   name: "ourSolutions",
    //   title: "Our Solutions",
    // },
    {
      name: "projects",
      title: "Projects",
    },
    {
      name: "sketchConcept",
      title: "Sketch Concept",
    },
    {
      name: "reviews",
      title: "Reviews",
    },
    {
      name: "footer",
      title: "Footer",
    },
  ],
  fields: [
    defineField({
      name: "projectLinkHeader",
      title: "Project Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
      group: "header",
    }),
    defineField({
      name: "featuredStories",
      title: "Featured Stories",
      type: "array",
      of: [{ type: "reference", to: { type: "review" } }],
      validation: (Rule) => Rule.max(3),
      group: "featuredStories",
    }),
    // defineField({
    //   name: "ourSolutions",
    //   title: "Our Solutions",
    //   type: "array",
    //   of: [
    //     defineField({
    //       type: "object",
    //       title: "Solution",
    //       name: "solution",
    //       fields: [
    //         defineField({
    //           name: "name",
    //           title: "Name",
    //           type: "string",
    //         }),
    //         defineField({
    //           name: "description",
    //           title: "Description",
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
    //           name: "images",
    //           title: "Images",
    //           type: "array",
    //           of: [{ type: "image" }],
    //         }),
    //         defineField({
    //           name: "content",
    //           title: "Content",
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
    //           name: "button",
    //           type: "object",
    //           title: "Button",
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
    //   group: "ourSolutions",
    // }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
      group: "projects",
    }),
    defineField({
      name: "sketchConcept",
      title: "Sketch Concept",
      type: "object",
      fields: [
        defineField({
          name: "sketchBefore",
          title: "Image Before",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "sketchAfter",
          title: "Image After",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
      group: "sketchConcept",
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "reference", to: { type: "review" } }],
      group: "reviews",
    }),
    defineField({
      name: "projectLinkFooter",
      title: "Project Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
      group: "footer",
    }),
  ],
});

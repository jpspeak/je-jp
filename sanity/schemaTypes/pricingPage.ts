import { defineField, defineType } from "sanity";

export default defineType({
  name: "pricingPage",
  title: "Pricing Page Setting",
  type: "document",
  groups: [
    {
      name: "header",
      title: "Header",
    },
    {
      name: "sketchConcept",
      title: "Sketch Concept",
    },
    {
      name: "projects",
      title: "Projects",
    },
    {
      name: "featuredStories",
      title: "Featured Stories",
    },
    // {
    //   name: "packages",
    //   title: "Packages",
    // },
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
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
      group: "projects",
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
    //   name: "packages",
    //   title: "Packages",
    //   type: "array",
    //   of: [
    //     defineField({
    //       type: "object",
    //       title: "Package",
    //       name: "package",
    //       fields: [
    //         defineField({
    //           name: "name",
    //           title: "Name",
    //           type: "string",
    //         }),
    //         defineField({
    //           name: "icon",
    //           title: "Icon",
    //           type: "image",
    //         }),
    //         defineField({
    //           name: "packageItems",
    //           title: "Package Items",
    //           type: "array",
    //           of: [
    //             defineField({
    //               name: "packageItem",
    //               title: "Package Item",
    //               type: "string",
    //             }),
    //           ],
    //         }),
    //       ],
    //     }),
    //   ],
    //   group: "packages",
    // }),
  ],
});

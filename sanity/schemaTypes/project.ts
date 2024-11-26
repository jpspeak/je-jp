import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
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
      name: "body",
      title: "Body",
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
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "secondaryBody",
      title: "Secondary Body",
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
      name: "sliderImages",
      title: "Slider Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "secondaryImage",
      title: "Secondary image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "reference",
      to: { type: "industry" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "reference", to: { type: "review" } }],
    }),
    orderRankField({ type: "project" }),
  ],

  //   preview: {
  //     select: {
  //       title: 'title',
  //       author: 'author.name',
  //       media: 'mainImage',
  //     },
  //     prepare(selection) {
  //       const {author} = selection
  //       return {...selection, subtitle: author && `by ${author}`}
  //     },
  //   },
});

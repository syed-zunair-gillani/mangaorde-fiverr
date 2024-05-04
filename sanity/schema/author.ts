import { defineType, defineField, defineArrayMember } from 'sanity'

export const authorSchemaTypes = defineType({
  title: "Author",
  name: "author",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "strings",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }),

  ]
})  
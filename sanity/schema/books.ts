import { defineType, defineField, defineArrayMember } from 'sanity'

export const booksSchemaTypes = defineType({
    title: "Books",
    name: "books",
    type: "document",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string",
        }),
        defineField({
            title: "Slug",
            name: "slug",
            type: 'slug',
            options: {
                source: ({title}) => {
                  return `${title}`
                },
                slugify: (input) =>
                  input.toLowerCase().replace(/\s+/g, "-").replace(/\:+/g, "").slice(0, 200),
              },
        }),
        defineField({
            title: "Image",
            name: "image",
            type: "image",
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text',
                            description: ``,
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                },
            ]
        }),
        
        defineField({
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{ type: 'category' }]
        }),
        defineField({
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }]
        }),
        {
            title: 'Volume',
            name: 'volume',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [
                  {type: 'volumes'},
                ]
              }
            ]
          },
        

    ]
})  
import { defineType, defineField, defineArrayMember } from 'sanity'

export const VolumesSchemaTypes = defineType({
  title: "Volumes",
  name: "volumes",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Volume Number",
      name: "volume",
      type: "string",
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
    }),
    defineField({
      title: "Link",
      name: "link",
      type: "url",
    }),
  ]
})  
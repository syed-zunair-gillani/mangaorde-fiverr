import { type SchemaTypeDefinition } from 'sanity'
import { booksSchemaTypes } from './schema/books'
import { categorySchemaTypes } from './schema/category'
import { authorSchemaTypes } from './schema/author'
import { VolumesSchemaTypes } from './schema/volumes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [booksSchemaTypes, VolumesSchemaTypes, categorySchemaTypes, authorSchemaTypes],
}

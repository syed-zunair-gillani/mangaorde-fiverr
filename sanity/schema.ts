import { type SchemaTypeDefinition } from 'sanity'
import { booksSchemaTypes } from './schema/books'
import { categorySchemaTypes } from './schema/category'
import { authorSchemaTypes } from './schema/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [booksSchemaTypes, categorySchemaTypes, authorSchemaTypes],
}

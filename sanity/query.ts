export const QBooks = `*[ _type == "books"] {
    _id,
    title,
    slug,
    content,
    _createdAt,
    _updatedAt,
    volume,
    image{
        asset->{
            url
        }
    },
    category->{
        name,
        slug
    },
    author->{
        name,
        slug
    },
    link

}`;
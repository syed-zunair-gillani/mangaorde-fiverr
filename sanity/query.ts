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


export const QSingleBooks = `*[ _type == "books" && slug.current == $slug][0]{
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

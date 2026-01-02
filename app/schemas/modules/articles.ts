export const ARTICLES_QUERY = `
  query {
    articulos(sort: "createdAt:desc") {
      titulo
      descripcion
      slug
      imagen {
        url
        alternativeText
      }
    }
  }
`;

export const ARTICLE_BY_SLUG_QUERY = `
  query($slug: String!) {
    articulos(filters: { slug: { eq: $slug } }) {
      titulo
      descripcion
      slug
      imagen {
        url
        alternativeText
      }
    }
  }
`;

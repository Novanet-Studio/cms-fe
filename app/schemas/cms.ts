export const FAQ_QUERY = `
  query {
    preguntas(sort: "id:asc") {
      titulo
      descripcion
    }
  }
`;

export const CAROUSEL_QUERY = `
  query {
    carruseles(filters:  {
       nombre:  {
        eq: "contacto"
       }
    }) {
      imagenes {
        url
        alternativeText
      }
    }
  }
`;

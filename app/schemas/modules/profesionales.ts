export const PROFESSIONALS_QUERY = `
  query {
    profesionales(sort: "id:asc") {
      nombre_apellido
      extracto
      bio
      link
      imagen {
        url
        alternativeText
      }
    }
  }
`;

export const PROFESSIONAL_BY_LINK_QUERY = `
  query($link: String!) {
    profesionales(filters: { link: { eq: $link } }) {
      nombre_apellido
      extracto
      bio
      link
      imagen {
        url
        alternativeText
      }
    }
  }
`;

export const EMPRESA_PROF_HEADER_QUERY = `
  query {
    empresa {
      profesionales {
        titulo
        descripcion
        imagen {
          url
          alternativeText
        }
      }
    }
  }
`;

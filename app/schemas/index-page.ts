export const INDEX_QUERY = `
  query {
    inicio {
      principal {
        titulo
        descripcion
        imagen {
          url
          alternativeText
        }
      }
      mensaje {
        titulo
        descripcion
      }
    }
    carruseles(filters:  {
       nombre:  {
        eq: "inicio"
       }
    }) {
      imagenes {
        url
        alternativeText
      }
    }
    disciplinas(sort: "id:asc") {
      nombre
      link
      icono {
        url
        alternativeText
      }
    }
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
    aliados(sort: "nombre:asc") {
      link
      imagen {
        url
        alternativeText
      }
    }
  }
`;

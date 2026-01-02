export const ALLIES_QUERY = `
  query {
    inicio {
      principal {
        descripcion
        imagen {
          url
          alternativeText
        }
      }
    }

    aliados(sort: "nombre:asc") {      
      documentId
      nombre
      descripcion
      link
      imagen {
        url
        alternativeText
      }
      servicios {
        id
      }
      personal {
        id
      }
    }
  }
`;

export const ALLIES_DETAIL_QUERY = `
  query ($id: ID!) {
    aliado(id: $id) {
      nombre
      descripcion_interna
      link
      handle
      icono_rrss
      imagen {
        url
        alternativeText
      }
      imagen_info {
        url
        alternativeText
      }
      telefonos {
        numero
      }
      servicios {
        titulo
        descripcion
        servicio {
          titulo
          icono {
            url
          }
        }
      }
      personal {
        profesionales {
          titulo
          descripcion
          imagen {
            url
          }
        }
      }
    }
  }
`;

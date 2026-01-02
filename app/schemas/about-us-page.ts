export const ABOUT_US_QUERY = `
  query {
    empresa {
      principal {
        titulo
        descripcion
        imagen {
          url
          alternativeText
        }
      }
      identidad {
        titulo
        descripcion
        imagen {
          url
          alternativeText
        }
      }
      profesionales {
        titulo
        descripcion
        imagen {
          url
          alternativeText
        }
      }
      trabajo {
        titulo
        descripcion
      }
    }
    requisito {
      requisitos {
        titulo
        descripcion
      }
    }
    norma {
      normas {
        titulo
        descripcion
      }
    }
  }
`;

export const DISCIPLINES_QUERY = `
  query {
    disciplinas(sort: "id:asc") {
      nombre
      descripcion
      link
      icono {
        url
        alternativeText
      }
      imagen {
        url
        alternativeText
      }
      clases {
        ... on ComponentDisciplinasClases {
          titulo
          descripcion
          icono {
            url
            alternativeText
          }
          planes
          horarios
        }
      }
      horarios {
        ... on ComponentDisciplinasHorarios {
          horarios
        }
      }
      planes {
        ... on ComponentDisciplinasPlanes {
          planes
        }
      }
      informacion_adicional {
        titulo
        descripcion
      }
      requisitos {
        titulo
        descripcion
      }
    }
  }
`;

export const DISCIPLINE_BY_LINK_QUERY = `
  query($link: String!) {
    disciplinas(filters: { link: { eq: $link } }) {
      nombre
      descripcion
      link
      icono {
        url
        alternativeText
      }
      imagen {
        url
        alternativeText
      }
      clases {
        ... on ComponentDisciplinasClases {
          titulo
          descripcion
          icono {
            url
            alternativeText
          }
          planes
          horarios
        }
      }
      horarios {
        ... on ComponentDisciplinasHorarios {
          horarios
        }
      }
      planes {
        ... on ComponentDisciplinasPlanes {
          planes
        }
      }
      informacion_adicional {
        titulo
        descripcion
      }
      requisitos {
        titulo
        descripcion
      }
    }
  }
`;

export const DISCIPLINES_EXTRA_QUERY = `
  query {
    carruseles(filters:  {
       nombre:  {
        eq: "disciplinas"
       }
    }) {
      imagenes {
        url
        alternativeText
      }
    }
    norma {
      normas {
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
    descuento {
      descuentos {
        titulo
        descripcion
      }
    }
  }
`;

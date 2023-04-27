import type { Ref } from 'vue';

export const useDisciplines = (
  params: { link?: string } = {}
): {
  disciplines: Ref<Project.DisplicinesStrapi[]>;
  discipline: Ref<Project.DisplicinesStrapi | null>;
  loading: Ref<boolean>;
} => {
  const disciplines = ref<any>([]);
  const loading = ref(false);
  const discipline = ref<Project.DisplicinesStrapi | null>(null);
  const graphql = useStrapiGraphQL();

  onMounted(async () => {
    try {
      loading.value = true;
      const query = await graphql<Project.DisplicinesResponse>(`
        query {
          disciplinas(sort: "id:asc") {
            data {
              attributes {
                nombre
                descripcion
                link
                icono {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }

                imagen {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }

                clases {
                  ... on ComponentDisciplinasClases {
                    titulo
                    descripcion
                    icono {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
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
          }
        }
      `);

      if (params?.link) {
        query.data.disciplinas.data.forEach((item: any) => {
          if (item.attributes.link === params.link) {
            discipline.value = item;
            return;
          }
        });
      }

      disciplines.value = query.data.disciplinas.data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  });

  return {
    discipline,
    disciplines,
    loading,
  };
};

import type { Ref } from "vue";

export const useProfessionals = (
  params: { link?: string } = {}
): {
  profesionals: Ref<any[]>;
  profesional: Ref<any | null>;
  loading: Ref<boolean>;
} => {
  const profesionals = useState<any>("profesionals", () => []);
  const loading = useState<boolean>("loading", () => false);
  const profesional = useState<any | null>("profesional", () => null);
  const graphql = useStrapiGraphQL();

  onMounted(async () => {
    try {
      loading.value = true;
      const query = await graphql<any>(`
        query {
          profesionales(sort: "id:asc") {
            data {
              attributes {
                nombre_apellido
                extracto
                bio
                link
                imagen {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      `);

      if (params?.link) {
        query.data.profesionales.data.forEach((item: any) => {
          if (item.attributes.link === params.link) {
            profesional.value = item;
            return;
          }
        });
      }

      profesionals.value = query.data.profesionales.data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  });

  return {
    profesional,
    profesionals,
    loading,
  };
};

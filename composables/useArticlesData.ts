import type { Ref } from "vue";

export const useArticlesData = (
  params: { slug?: string } = {}
): {
  articles: Ref<any[]>;
  article: Ref<any | null>;
  loading: Ref<boolean>;
} => {
  const articles = useState<any>("articles", () => []);
  const loading = useState<boolean>("loadingArticles", () => false);
  const article = useState<any | null>("article", () => null);
  const graphql = useStrapiGraphQL();

  onMounted(async () => {
    try {
      loading.value = true;
      const query = await graphql<any>(`
        query {
          articulos(sort: "createdAt:desc") {
            data {
              attributes {
                titulo
                descripcion
                slug
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

      if (params?.slug) {
        query.data.articulos.data.forEach((item: any) => {
          if (item.attributes.slug === params.slug) {
            article.value = item;
            return;
          }
        });
      }

      articles.value = query.data.articulos.data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  });

  return {
    article,
    articles,
    loading,
  };
};

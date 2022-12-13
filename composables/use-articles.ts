import type { Ref } from 'vue';

export const useArticles = (
  params: { slug?: string } = {}
): {
  articles: Ref<Project.ArticlesStrapi[]>;
  article: Ref<Project.ArticlesStrapi | null>;
} => {
  const articles = ref<any>([]);
  const article = ref<Project.ArticlesStrapi | null>(null);
  const graphql = useStrapiGraphQL();

  onMounted(async () => {
    try {
      const query = await graphql<Project.ArticlesResponse>(`
      query {
        articulos(sort: "createdAt:asc") {
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
    }
  });

  return {
    article,
    articles,
  };
};

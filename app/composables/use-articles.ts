import {
  ARTICLE_BY_SLUG_QUERY,
  ARTICLES_QUERY,
} from "~/schemas/modules/articles";

export const useArticles = () => {
  const graphql = useStrapiGraphQL();

  const articles = useState<any[]>("articles", () => []);
  const article = useState<any | null>("article", () => null);
  const loading = useState<boolean>("loadingArticles", () => false);

  const getArticles = async () => {
    try {
      loading.value = true;

      const response = await graphql<any>(ARTICLES_QUERY);

      articles.value = response.data.articulos || [];

      return articles.value;
    } catch (error) {
      console.error("Error fetching articles:", error);

      return [];
    } finally {
      loading.value = false;
    }
  };

  const getArticleBySlug = async (slug: string) => {
    try {
      loading.value = true;

      const response = await graphql<any>(ARTICLE_BY_SLUG_QUERY, { slug });

      const found = response.data.articulos?.[0] || null;

      article.value = found;
      return found;
    } catch (error) {
      console.error("Error fetching article by slug:", error);

      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    articles,
    article,
    loading,
    getArticles,
    getArticleBySlug,
  };
};

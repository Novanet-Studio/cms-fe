import {
  PROFESSIONAL_BY_LINK_QUERY,
  PROFESSIONALS_QUERY,
} from "~/schemas/modules/profesionales";

export const useProfesionals = () => {
  const graphql = useStrapiGraphQL();

  const profesionals = useState<any[]>("profesionals", () => []);
  const profesional = useState<any | null>("profesional", () => null);
  const loading = useState<boolean>("loadingProfesionals", () => false);

  const getProfesionals = async () => {
    try {
      loading.value = true;
      const response = await graphql<any>(PROFESSIONALS_QUERY);
      profesionals.value = response.data.profesionales || [];
      return profesionals.value;
    } catch (error) {
      console.error("Error fetching profesionales:", error);
      return [];
    } finally {
      loading.value = false;
    }
  };

  const getProfesionalByLink = async (link: string) => {
    try {
      loading.value = true;
      const response = await graphql<any>(PROFESSIONAL_BY_LINK_QUERY, { link });

      const found = response.data.profesionales?.[0] || null;
      profesional.value = found;
      return found;
    } catch (error) {
      console.error("Error fetching profesional by link:", error);
      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    profesional,
    profesionals,
    loading,
    getProfesionals,
    getProfesionalByLink,
  };
};

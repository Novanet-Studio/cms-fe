import {
  DISCIPLINE_BY_LINK_QUERY,
  DISCIPLINES_QUERY,
} from "~/schemas/modules/disciplines";

export const useDisciplines = () => {
  const disciplines = useState<any[]>("disciplines", () => []);
  const loading = useState<boolean>("loadingDisciplines", () => false);
  const discipline = useState<any | null>("discipline", () => null);
  const graphql = useStrapiGraphQL();

  const getDisciplines = async () => {
    try {
      loading.value = true;
      const response = await graphql<any>(DISCIPLINES_QUERY);
      disciplines.value = response.data.disciplinas || [];
      return disciplines.value;
    } catch (error) {
      console.error("Error fetching disciplines:", error);
      return [];
    } finally {
      loading.value = false;
    }
  };

  const getDisciplineByLink = async (link: string) => {
    try {
      loading.value = true;
      const response = await graphql<any>(DISCIPLINE_BY_LINK_QUERY, { link });

      const found = response.data.disciplinas?.[0] || null;
      discipline.value = found;
      return found;
    } catch (error) {
      console.error("Error fetching discipline by link:", error);
      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    discipline,
    disciplines,
    loading,
    getDisciplines,
    getDisciplineByLink,
  };
};

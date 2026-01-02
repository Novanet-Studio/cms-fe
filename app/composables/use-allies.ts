import { ALLIES_DETAIL_QUERY, ALLIES_QUERY } from "~/schemas/modules/allies";

export const useAllies = () => {
  const graphql = useStrapiGraphQL();

  const getAllies = async () => {
    try {
      const response = await graphql<
        CMS.Response<{
          inicio: CMS.SingleTypeIndex_Inicio;
          aliados: CMS.Ally[];
        }>
      >(ALLIES_QUERY);

      if (!response.data) {
        return { principal: null, aliados: [] };
      }

      return {
        principal: response.data.inicio?.principal || null,
        aliados: response.data.aliados || [],
      };
    } catch (error) {
      console.error("Error fetching allies list:", error);

      return { principal: null, aliados: [] };
    }
  };

  const getAllyDetail = async (id: string): Promise<CMS.Ally | null> => {
    try {
      const response = await graphql<CMS.Response<CMS.Ally[]>>(
        ALLIES_DETAIL_QUERY,
        { id }
      );

      if (!response.data) {
        return null;
      }

      return response.data[0] || null;
    } catch (error) {
      console.error("Error fetching ally detail:", error);

      return null;
    }
  };

  return {
    getAllies,
    getAllyDetail,
  };
};

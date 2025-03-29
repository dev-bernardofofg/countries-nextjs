import api from "../_providers/api";

interface GetAllCountrys {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
}

export const fetchGetAllCountrys = async (): Promise<GetAllCountrys[]> => {
  try {
    const response = await api.get<GetAllCountrys[]>('/all');
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar países");
  }
};

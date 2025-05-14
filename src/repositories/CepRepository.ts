import { ViaCepApi } from "../services/ViaCep";
import type { ViaCepResponse } from "../types/address";

export const CepRepository = {
    fetchAddress: async (cep: string): Promise<ViaCepResponse> => {
        const response = await ViaCepApi.get<ViaCepResponse>(`/${cep}/json/`);
        if (!response?.data || response?.data.erro) {
            throw new Error("CEP não encontrado");
        }

        return response.data;
    }
}
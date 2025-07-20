import { PrivateAxios } from "@/helpers/PrivateAxios";

export const exchangeCode = async (code: string) => {
  try {
    const response = await PrivateAxios.post("/whatsapp/exchange-code", {
      code,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to exchange code", error);
    throw error;
  }
};

import { PrivateAxios } from "@/helpers/PrivateAxios";
import { useUserStore } from "@/utils/store";
import axios from "axios";
import Cookies from "js-cookie";

interface ILoginBody {
  email: string;
  password: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (requestBody: ILoginBody) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, requestBody);
    if (response.data.Result === "SUCCESS") {
      return response.data.Token;
    }
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    const response = await PrivateAxios.get(`${API_URL}/user-details`);

    return response.data.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const changeUserRole = async (role: string) => {
  try {
    const response = await PrivateAxios.post(
      `${API_URL}/user-details/change-role`,
      { role }
    );

    return response.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

export const logout = (): void => {
  Cookies.remove("authToken");
  Cookies.remove("currentRole");
  useUserStore.persist.clearStorage();
};

import { PrivateAxios } from "@/helpers/PrivateAxios";

interface CreateFolder {
  name: string;
  description?: string;
}

export const fetchFoldersWithArticles = async () => {
  try {
    const response = await PrivateAxios.get("/folders/structure");

    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

export const createFolder = async (requestBody: CreateFolder) => {
  try {
    const response = await PrivateAxios.post("/folders", requestBody);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

export const deleteFolder = async (folderId: string) => {
  try {
    const response = await PrivateAxios.delete(`/folders/${folderId}`);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

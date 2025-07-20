import { PrivateAxios } from "@/helpers/PrivateAxios";

interface updateArticle {
  title: string;
  content: string;
  status: string;
  views: number;
  likes: number;
  dislikes: number;
}

export const createArticle = async (requestBody: any) => {
  try {
    const response = await PrivateAxios.post("/articles", requestBody);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

export const getArticle = async (articleId: string) => {
  try {
    const response = await PrivateAxios.get(`/articles/${articleId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

export const updateArticleById = async (
  articleId: string,
  requestBody: Partial<updateArticle>
) => {
  try {
    const response = await PrivateAxios.put(
      `/articles/${articleId}`,
      requestBody
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

export const deleteArticleById = async (articleId: string) => {
  try {
    const response = await PrivateAxios.delete(`/articles/${articleId}`);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

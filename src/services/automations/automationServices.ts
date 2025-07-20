import { PrivateAxios } from "@/helpers/PrivateAxios";

interface Article {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
}

export const createOrUpdateAutomation = async (data: {
  training_url?: { url: string; updatedAt: string }[];
  training_pdf?:
    | string[]
    | (string | { s3Name: string; originalName: string })[]
    | (string | { s3Name: string; originalName: string })[]
    | undefined;
  training_article?: Article[] | undefined;
  isChatbotTrained: boolean;
}) => {
  try {
    const response = await PrivateAxios.post(
      "/automations/update-automation",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Failed to create or update automation", error);
    throw error;
  }
};

export const getAutomation = async () => {
  try {
    const response = await PrivateAxios.get("/automations");

    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

export const getArticleForAutomation = async () => {
  try {
    const response = await PrivateAxios.get("/automations/get-article");

    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

export const analyseUrl = async (url: string) => {
  try {
    const response = await PrivateAxios.post("/automations/analyze-url", {
      url,
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

import { PrivateAxios } from "@/helpers/PrivateAxios";

export interface AnalyticsFilters {
  device?: string;
  location?: string;
  source?: string;
}

export const fetchAnalytics = async ({
  device = "all",
  location = "all",
  source = "all",
}: AnalyticsFilters) => {
  try {
    const response = await PrivateAxios.get("/seo/analytics", {
      params: {
        device,
        location,
        source,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch analytics data", error);
    throw error;
  }
};

export const fetchCompliance = async () => {
  try {
    const response = await PrivateAxios.get(`/seo/complaints`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch SEO compliance:", error);
    throw error;
  }
};

export const triggerCompliance = async () => {
  try {
    const response = await PrivateAxios.post(`/seo/trigger-complaint`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch SEO compliance:", error);
    throw error;
  }
};

export const fetchPerformance = async () => {
  try {
    const response = await PrivateAxios.get(`/seo/performance`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch SEO compliance:", error);
    throw error;
  }
};

export const triggerPerformance = async () => {
  try {
    const response = await PrivateAxios.post(`/seo/trigger-performance`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch SEO compliance:", error);
    throw error;
  }
};

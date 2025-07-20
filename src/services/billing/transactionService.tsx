import { PrivateAxios } from "@/helpers/PrivateAxios";


export const createPaymentGateway = async (values: {
  amount: number;
  currency: string;
  receipt: string;
  plan: string;
  plan_cycle: "monthly" | "annual";
}) => {
  try {
    const response = await PrivateAxios.post("/transactions/order", {
      ...values,
    });

    return response;
  } catch (error) {
    console.log("error create payment gateway");
    throw error;
  }
};

export const validatePayment = async (requestBody: {
  paymentOrderId: string;
  paymentId: string;
  paymentSignature: string;
  plan: string;
  plan_cycle: string;
}) => {
  try {
    const response = await PrivateAxios.post("/transactions/order/validate", {
      ...requestBody,
    });
    return response;
  } catch (error) {
    console.log("payment validation failed");
  }
};

export const getTransactionHistory = async () => {
  try {
    const response = await PrivateAxios.get("/transactions/get-transactions");
    return response.data;
  } catch (error) {
    console.log("failed to fetch transaction history");
  }
};

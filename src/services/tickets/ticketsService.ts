import { PrivateAxios } from "@/helpers/PrivateAxios";

interface SendValue {
  provider: string;
  message: string;
  subject: string;
}

export interface Conversation {
  role: string;
  text: string;
  timestamp: string; // ISO 8601 date string, not number
}

export interface Customer {
  id: number;
  organization_id: number;
  email: string;
  custom_data: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  first_name: string;
  last_name: string;
}

export interface User {
  email: string;
  users_profile: UserProfile;
}

export interface Ticket {
  id: number;
  customer_id: number;
  organization_id: number;
  assigned_user_id: number | null;
  subject: string;
  custom_data: Record<string, any>;
  conversations: Conversation[];
  is_new: boolean;
  status: string;
  priority: string;
  tags: string[];
  created_at: string;
  updated_at: string;
  customer: Customer;
  user: User;
}

export const createTickets = async (values:any) => {
  try {
    const response = await PrivateAxios.post(`tickets/create-ticket`,values);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch SEO compliance:", error);
    throw error;
  }
};
export const fetchTickets = async () => {
  try {
    const response = await PrivateAxios.get(`/tickets`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch SEO compliance:", error);
    throw error;
  }
};

export const sendTicketEmail = async (
  ticketId: number,
  sendValues: SendValue
) => {
  try {
    const response = await PrivateAxios.post(
      `/tickets/reply-email/${ticketId}`,
      sendValues
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch SEO compliance:", error);
    throw error;
  }
};

export const markTicketAsRead = async (ticketId: number) => {
  try {
    const response = await PrivateAxios.put(
      `/tickets/update-ticket/${ticketId}`,
      {
        isOpened: true,
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch SEO compliance:", error);
    throw error;
  }
};

interface UpdateTicket {
  status?: string;
  priority?: string;
  assignee_id?: number;
}

export const updateTicket = async (ticketId: number, values: UpdateTicket) => {
  try {
    const response = await PrivateAxios.put(
      `/tickets/update-ticket/${ticketId}`,
      values
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch SEO compliance:", error);
    throw error;
  }
};

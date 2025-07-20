// utils/store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserData = {
  userId: number;
  orgId: number;
  userPlan: string;
  isPlanValid: boolean;
  orgName: string;
  currentRole: string;
  assignedRoles: string[];
  assignedRolePermissions: Record<string, string>; 
  userEmail: string;
  userFirstName: string;
  userLastName: string;
  profilePic: string | null;
  assignedBy: number;
  companySize: string;
  orgRoles: string[];
  orgRolesAccess: Record<string, string>; 
};


export type AdminActions = {
  setUsetData: (data: Partial<UserData>) => void;
};

const initialUserData: UserData = {
  userId: 0,
  orgId: 0,
  userPlan: "Trial",
  isPlanValid: false,
  orgName: "",
  currentRole: "",
  assignedRoles: [],
  assignedRolePermissions:{},
  userEmail: "",
  userFirstName: "",
  userLastName: "",
  profilePic: null,
  assignedBy: 0,
  companySize: "",
  orgRoles:[],
  orgRolesAccess:{},
};

export const useUserStore = create<{
  userData: UserData;
  setUserData: (data: Partial<UserData>) => void;
}>()(
  persist(
    (set) => ({
      userData: initialUserData,
      setUserData: (data) =>
        set((state) => ({
          userData: { ...state.userData, ...data },
        })),
    }),
    {
      name: "user-data",
    }
  )
);

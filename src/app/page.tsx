"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Loading from "./loading";
import { getUserDetails } from "@/services/authServices";
import { useUserStore } from "@/utils/store";
import { getUser } from "@/services/settings/accountServices";
import { useTokenManager } from "@/hooks/userTokenManager";

export default function Home() {
  const router = useRouter();
  const setUserData = useUserStore((state) => state.setUserData);

  const redirectAccToUserRole = (userRole: string) => {
    router.push(`/${userRole}/dashboard`);
  };

  const getUserDetailsFn = async () => {
    try {
      const response = await getUserDetails();

      console.log(response);
      if (!response?.current_role) {
        Cookies.remove("authToken");
        Cookies.remove("currentRole");
        router.push("/auth/login");
        return;
      }

      // Save current role in cookie
      Cookies.set("currentRole", response.current_role);

      // Calculate if plan is still valid
      const trialEndDate = new Date(response.subscription_end_date);
      const currentDate = new Date();
      const isPlanValid = trialEndDate > currentDate;

      // Save in Zustand
      setUserData({
        userId: response.user_id,
        userEmail: response.email,
        assignedBy: response.assigned_by,
        userFirstName: response.first_name,
        userLastName: response.last_name,
        currentRole: response.current_role,
        assignedRoles: response.assigned_roles,
        assignedRolePermissions: response.permissions,
        orgId: response.organization_id,
        orgName: response.organization_name,
        userPlan: response.subscription_tier,
        companySize: response.company_size,
        isPlanValid,
        orgRoles: response.roles,
        orgRolesAccess: response.access,
        profilePic: response.profile_pic ?? null,
      });

      redirectAccToUserRole(response.current_role);
    } catch (err) {
      console.error("Error fetching user details:", err);
      Cookies.remove("authToken");
      Cookies.remove("currentRole");
      router.push("/auth/login");
    }
  };

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  // 1. Get tokens from backend
  const getUserFn = async () => {
    try {
      const response = await getUser({ provider: "GOOGLE" });

      const data = response.data;

      setAccessToken(data.access_token);
      setRefreshToken(data.refresh_token);
    } catch (error) {
      console.error("Failed to fetch user/token:", error);
    }
  };

  // 3. Hook to auto-refresh the token
  useTokenManager(refreshToken || "", (newAccessToken) => {
    setAccessToken(newAccessToken);
  });

  useEffect(() => {
    const authToken = Cookies.get("authToken");
    getUserFn();
    console.log("authToken", authToken);
    if (authToken) {
      getUserDetailsFn();
    } else {
      Cookies.remove("authToken");
      Cookies.remove("currentRole");
      router.push("/auth/login");
    }
  }, []);

  return <Loading />;
}

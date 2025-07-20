import { updateOrCreateUser } from "@/services/settings/accountServices";
import { getNewAccessToken } from "@/services/settings/googleServices";
import { useEffect, useRef } from "react";

export function useTokenManager(
  refreshToken: string,
  onAccessTokenUpdate: (token: string) => void
) {
  console.log("refreshToken", refreshToken);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const scheduleRefresh = (expiresIn = 3600, immediate = false) => {
    const refreshDelay = immediate ? 0 : (expiresIn - 60) * 1000;

    timerRef.current = setTimeout(async () => {
      const refreshed = await getNewAccessToken(refreshToken);
      console.log("refreshed", refreshed);
      if (refreshed?.access_token) {
        onAccessTokenUpdate(refreshed.access_token);
        await updateOrCreateUser(refreshed);
        scheduleRefresh(); // continue next cycle
      }
    }, refreshDelay);
  };

  useEffect(() => {
    if (refreshToken) {
      scheduleRefresh(3600, true);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [refreshToken]);
}

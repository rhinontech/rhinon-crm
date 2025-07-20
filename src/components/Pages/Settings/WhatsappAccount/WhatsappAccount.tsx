"use client";

import { useEffect, useState } from "react";
import { PanelLeft } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { exchangeCode } from "@/services/settings/whatsappServices";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

export default function WhatsappAccount() {
  const { toggleSettingSidebar } = useSidebar();
  const [sessionInfo, setSessionInfo] = useState<string | null>(null);
  const [sdkResponse, setSdkResponse] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const launchWhatsAppSignup = () => {
    const redirectUri = encodeURIComponent(
      "https://rhinon.vercel.app/superadmin/settings/whatsapp-account"
    );
    const clientId = "2354391968251323";

    const fbOAuthUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=whatsapp_business_messaging,business_management`;

    window.location.href = fbOAuthUrl;
  };

  // Inject FB SDK
  const injectFbSdk = () => {
    if (document.getElementById("facebook-jssdk")) return;

    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    document.body.appendChild(script);

    window.fbAsyncInit = () => {
      window.FB.init({
        appId: "2354391968251323",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v18.0",
      });
    };
  };

  useEffect(() => {
    injectFbSdk();

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      (async () => {
        try {
          const response = await exchangeCode(code);
          console.log("Access token response:", response);
          setSdkResponse(JSON.stringify(response, null, 2));

          const { access_token } = response;
          if (access_token) {
            setAccessToken(access_token);
          }
        } catch (err) {
          console.error("Token exchange failed:", err);
        }
      })();
    }

    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin !== "https://www.facebook.com" &&
        event.origin !== "https://web.facebook.com"
      )
        return;

      try {
        const data = JSON.parse(event.data);
        if (data.type === "WA_EMBEDDED_SIGNUP") {
          setSessionInfo(JSON.stringify(data, null, 2));
        }
      } catch (err) {
        console.log("Non-JSON message", event.data);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (accessToken && window.FB) {
      window.FB.XFBML.parse(); // Render iframe
    }
  }, [accessToken]);

  return (
    <div className="flex h-full w-full rounded-lg border bg-background">
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b h-[60px] p-4">
          <div className="flex items-center gap-4">
            <PanelLeft onClick={toggleSettingSidebar} className="h-4 w-4" />
            <h2 className="text-base font-bold">WhatsApp Account</h2>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          {!accessToken && (
            <button
              onClick={launchWhatsAppSignup}
              className="bg-blue-600 text-white px-6 py-3 rounded font-bold text-lg">
              Login with Facebook
            </button>
          )}

          {accessToken && (
            <div
              className="w-full max-w-3xl fb-wa-embed-signup"
              data-app-id="2354391968251323"
              data-access-token={accessToken}
              data-ref="signup"
              id="wa-embedded-signup"></div>
          )}

          <div className="text-left w-full max-w-2xl px-4">
            <p className="font-semibold">Session info:</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {sessionInfo || "No session info yet."}
            </pre>

            <br />

            <p className="font-semibold">SDK/API Response:</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
              {sdkResponse || "No response yet."}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

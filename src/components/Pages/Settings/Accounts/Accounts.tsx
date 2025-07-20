"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { PanelLeft } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { Button } from "@/components/ui/button";
import {
  getGoogleUserInfo,
  getUserTokensFromGoogle,
} from "@/services/settings/googleServices";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  deleteUser,
  getUser,
  IGoogleProvider,
  updateOrCreateUser,
} from "@/services/settings/accountServices";
import { GoogleIcon, MicrosoftIcon } from "@/components/Constants/SvgIcons";
import Loader from "@/components/Common/Loader/Loader";

interface Account {
  name: string;
  email: string;
  picture: string;
}

export default function Accounts() {
  const { toggleSettingSidebar } = useSidebar();
  const [googleAccount, setGoogleAccount] = useState<Account | null>();
  const [microsoftAccount, setMicrosoftAccount] = useState<Account | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const handleGoogleCalendarConnect = () => {
    const loadGoogleAPI = async () => {
      const { gapi } = await import("gapi-script");
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.grantOfflineAccess().then((res: any) => {
        getUserTokenDataFn(res.code);
      });
    };
    loadGoogleAPI();
  };

  const getUserTokenDataFn = async (token: string) => {
    try {
      const data = await getUserTokensFromGoogle(token);

      console.log("Token Data :", data);

      const googleAccount = await getGoogleUserInfo(data.access_token);
      setGoogleAccount(googleAccount);

      const requestBody: IGoogleProvider = {
        ...data,
        provider: "GOOGLE",
      };

      updateOrCreateUserFn(requestBody);
    } catch (error) {
      console.error("Error is", error);
    }
  };

  const getUserFn = async () => {
    const requestBody = {
      provider: "GOOGLE",
    };
    try {
      const response = await getUser(requestBody);
      const googleAccount = await getGoogleUserInfo(response.data.access_token);
      setGoogleAccount(googleAccount);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const updateOrCreateUserFn = async (requestBody: IGoogleProvider) => {
    try {
      const response = await updateOrCreateUser(requestBody);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUserFn = async () => {
    try {
      const response = await deleteUser("GOOGLE");
      console.log(response);

      setGoogleAccount(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadGoogleAPI = async () => {
      const { gapi } = await import("gapi-script");
      gapi.load("client:auth2", {
        callback: function () {
          gapi.auth2.init({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            scope: process.env.NEXT_PUBLIC_GOOGLE_SCOPE,
          });
        },
      });
    };

    loadGoogleAPI();
  }, []);

  useEffect(() => {
    getUserFn();
  }, []);

  return (
    <div className="flex h-full w-full overflow-hidden rounded-lg border bg-background">
      <div className="flex flex-1 flex-col w-full">
        <div className="flex items-center justify-between border-b h-[60px] p-4">
          <div className="flex items-center gap-4">
            <PanelLeft onClick={toggleSettingSidebar} className="h-4 w-4" />
            <h2 className="text-base font-bold">Accounts</h2>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <ScrollArea className="flex-1 h-0 p-4">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Connect your email accounts to send tickets and sync calendar
                  events. Each account can be managed independently.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium flex items-center gap-2">
                    <GoogleIcon />
                    Google Account
                  </h3>
                  {!googleAccount && (
                    <Button
                      onClick={handleGoogleCalendarConnect}
                      size="sm"
                      variant="outline">
                      Connect Google
                    </Button>
                  )}
                </div>

                {googleAccount ? (
                  <Card className="py-5">
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            {googleAccount?.picture ? (
                              <img
                                src={googleAccount.picture}
                                alt="User"
                                className="w-8 h-8 rounded-full"
                              />
                            ) : (
                              <AvatarFallback className="bg-muted">
                                {googleAccount?.name
                                  ?.charAt(0)
                                  ?.toUpperCase() ?? "?"}
                              </AvatarFallback>
                            )}
                          </Avatar>

                          <div>
                            <p className="text-sm font-medium">
                              {googleAccount.email}
                            </p>
                          </div>
                        </div>
                        {googleAccount && (
                          <Button
                            onClick={deleteUserFn}
                            size="sm"
                            variant="outline">
                            Disconnect
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-dashed py-5">
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        No Google account connected
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium flex items-center gap-2">
                    <MicrosoftIcon />
                    Microsoft Account
                  </h3>
                  {!microsoftAccount && (
                    <Button size="sm" variant="outline">
                      Connect Microsoft
                    </Button>
                  )}
                </div>

                {microsoftAccount ? (
                  <Card className="py-5">
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-muted">
                              <MicrosoftIcon />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              {microsoftAccount.email}
                            </p>
                          </div>
                        </div>
                        {microsoftAccount && (
                          <Button
                            onClick={handleGoogleCalendarConnect}
                            size="sm"
                            variant="outline">
                            Disconnect
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-dashed py-5">
                    <CardContent>
                      <p className="text-sm text-muted-foreground text-center">
                        No Microsoft account connected
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>

              {(googleAccount || microsoftAccount) && (
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground">
                    Connected accounts can be used as senders for tickets and
                    calendar integration.
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
        )}
      </div>
    </div>
  );
}

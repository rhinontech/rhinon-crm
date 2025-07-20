"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Cookies from "js-cookie";
const role = Cookies.get("currentRole");
const BASE_PATH = `/${role}/settings`;

export const sidebarItems = [
  {
    id: "integrations",
    label: "Integrations",
    isIcon: true,
    submenu: [
      { id: "code", label: "Install Messenger", path: `${BASE_PATH}/messenger` },
      { id: "whatsapp-account", label: "Whatsapp Messenger", path: `${BASE_PATH}/whatsapp-account` },
    ],
  },
  {
    id: "messenger",
    label: "Messenger",
    isIcon: true,
    submenu: [
      { id: "theme", label: "Customization", path: `${BASE_PATH}/theme` },
      { id: "language", label: "Language", path: `${BASE_PATH}/language` },
    ],
  },
  {
    id: "forms",
    label: "Forms",
    isIcon: true,
    submenu: [
      { id: "pre-chat-form", label: "Pre-chat form", path: `${BASE_PATH}/pre-chat-form` },
      { id: "post-chat-form", label: "Post-chat form", path: `${BASE_PATH}/post-chat-form` },
      { id: "ticket-form", label: "Ticket Form", path: `${BASE_PATH}/ticket-form` },
    ],
  },
  {
    id: "security",
    label: "Security",
    isIcon: true,
    submenu: [
      { id: "login-settings", label: "Login settings", path: `${BASE_PATH}/login-settings` },
    ],
  },
  {
    id: "workspace",
    label: "Workspace",
    isIcon: true,
    submenu: [
      { id: "senders", label: "Senders", path: `${BASE_PATH}/senders` },
      { id: "accounts", label: "Accounts", path: `${BASE_PATH}/accounts` },
    ],
  },
];

export function SettingSidebar({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();
  const { isSettingOpen } = useSidebar();

  // ✅ Only one open at a time
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSubmenu = (id: string) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex h-[calc(100vh-4.5rem)] w-full overflow-hidden bg-sidebar">
      <div
        className={cn("flex flex-col transition-all duration-300 ease-in-out", {
          "w-80": isSettingOpen,
          "w-0": !isSettingOpen,
        })}
      >
        <div className="flex items-center justify-between h-[60px] p-4 bg-sidebar">
          <h2 className="text-lg font-bold">Settings</h2>
        </div>

        <ScrollArea className="flex-1 h-0">
          <div className="space-y-1 p-2">
            {sidebarItems.map((item) => {
              const isSubmenuOpen =
                openMenu === item.id ||
                (item.submenu && item.submenu.some((sub) => pathName.includes(sub.path)));

              return (
                <div key={item.id}>
                  {/* Collapsible Section Header */}
                  <div
                    className={cn(
                      "flex cursor-pointer items-center justify-between gap-2 rounded-lg p-2 px-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                    )}
                    onClick={() => toggleSubmenu(item.id)}
                  >
                    <span className="flex items-center gap-2">
                      {item.isIcon && item.submenu && (
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            isSubmenuOpen ? "rotate-180" : "rotate-0"
                          )}
                        />
                      )}
                      {item.label}
                    </span>
                  </div>

                  {/* Submenu Items */}
                  {item.submenu && isSubmenuOpen && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.submenu.map((sub) => (
                        <div
                          key={sub.id}
                          className={cn(
                            "cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition",
                            pathName.includes(sub.path) && "bg-muted text-foreground"
                          )}
                          onClick={() => router.push(sub.path)}
                        >
                          {sub.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      <div className="flex h-[calc(100vh-4.5rem)] w-full overflow-hidden rounded-lg border bg-background">
        {children}
      </div>
    </div>
  );
}

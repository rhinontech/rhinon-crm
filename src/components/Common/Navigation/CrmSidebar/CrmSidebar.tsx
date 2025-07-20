"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Cookies from "js-cookie";
const role = Cookies.get("currentRole");

const BASE_PATH = `/${role}/crm`;

export const sidebarItems: {
  id: string;
  label: string | React.ReactNode;
  path: string;
  isIcon: boolean;
  submenu?: { id: string; label: string | React.ReactNode; path: string }[];
}[] = [
  {
    id: "leads",
    label: "Leads",
    path: `${BASE_PATH}/leads`,
    isIcon: true,
    submenu: [
      {
        id: "pipeline",
        label: "Pipeline",
        path: `${BASE_PATH}/leads/pipeline`,
      },
      {
        id: "all-leads",
        label: "All Leads",
        path: `${BASE_PATH}/leads/all-leads`,
      },
    ],
  },
  // {
  //   id: "clients",
  //   label: "Clients",
  //   path: `${BASE_PATH}/leads`,
  //   isIcon: false,
  //   // submenu: [
  //   //   {
  //   //     id: "pipeline",
  //   //     label: "Pipeline",
  //   //     path: `${BASE_PATH}/leads/pipeline`,
  //   //   },
  //   //   {
  //   //     id: "all-leads",
  //   //     label: "All Leads",
  //   //     path: `${BASE_PATH}/leads/all-leads`,
  //   //   },
  //   // ],
  // },
];

export function CrmSidebar({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();
  const { isAutomateOpen } = useSidebar();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (id: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex h-[calc(100vh-4.5rem)] w-full overflow-hidden bg-sidebar">
      <div
        className={cn("flex flex-col transition-all duration-300 ease-in-out", {
          "w-56": isAutomateOpen,
          "w-0": !isAutomateOpen,
        })}
      >
        <div className="flex items-center justify-between h-[60px] p-4 bg-sidebar">
          <h2 className="text-lg font-bold">CRM</h2>
        </div>

        <ScrollArea className="flex-1 h-0">
          <div className="space-y-1 p-2">
            {sidebarItems.map((item) => {
              const isSubmenuOpen =
                openMenus[item.id] ||
                (item.submenu &&
                  item.submenu.some((sub) => pathName.includes(sub.path)));

              return (
                <div key={item.id}>
                  <div
                    className={cn(
                      "flex cursor-pointer items-center justify-between gap-2 rounded-lg p-2 px-3 text-sm transition-colors hover:bg-accent",
                      pathName.includes(item.path) &&
                        !(
                          item.submenu &&
                          item.submenu.some((sub) =>
                            pathName.includes(sub.path)
                          )
                        ) &&
                        "bg-accent"
                    )}
                    onClick={() => {
                      if (item.submenu) {
                        toggleSubmenu(item.id);
                      } else {
                        router.push(item.path);
                      }
                    }}
                  >
                    <span className="flex items-center gap-2 font-semibold">
                      {item.isIcon && item.submenu ? (
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            isSubmenuOpen ? "rotate-180" : "rotate-0"
                          )}
                        />
                      ) : (
                        <p className="w-4 h-4" />
                      )}
                      {item.label}
                    </span>
                  </div>

                  {item.submenu && isSubmenuOpen && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.submenu.map((sub) => (
                        <div
                          key={sub.id}
                          className={cn(
                            "cursor-pointer rounded-lg px-3 py-1 text-sm text-muted-foreground hover:bg-muted",
                            pathName.includes(sub.path) && "bg-muted"
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

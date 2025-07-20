"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  CrmIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from "@/components/Constants/SvgIcons";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { NavMain } from "./NavMain";
import { useUserStore } from "@/utils/store";

const allNavItems = {
  navMain: [
    {
      id: "access_dashboard",
      title: "Dashboard",
      path: "dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      id: "manage_crm",
      title: "CRM",
      path: "crm",
      icon: CrmIcon,
    },
  ],
  navFooter: [
    {
      id: "manage_settings",
      title: "Settings",
      path: "settings",
      icon: SettingsIcon,
    },
  ],
};

export function RootSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const role = Cookies.get("currentRole") || "";
  const roleAccess = useUserStore((state) => state.userData.orgRolesAccess);
  const permissions = role === "superadmin" ? "ALL" : roleAccess?.[role] ?? [];

  const filterNavItems = (
    items: typeof allNavItems.navMain | typeof allNavItems.navFooter
  ) =>
    (permissions === "ALL"
      ? items
      : items.filter((item) => permissions.includes(item.id))
    ).map((item) => ({
      title: item.title,
      url: `/${role}/${item.path}`,
      icon: <item.icon isActive={pathname.includes(`/${role}/${item.path}`)} />,
      isActive: pathname.includes(`/${role}/${item.path}`),
    }));

  const data = {
    navMain: filterNavItems(allNavItems.navMain),
    navFooter: filterNavItems(allNavItems.navFooter),
  };

  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
      collapsible="icon"
      variant="inset">
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavMain items={data.navFooter} />
      </SidebarFooter>
    </Sidebar>
  );
}

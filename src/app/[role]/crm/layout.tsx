import { CrmSidebar } from "@/components/Common/Navigation/CrmSidebar/CrmSidebar";
import { SidebarProvider } from "@/context/SidebarContext";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rhinontech - Your One Stop Solution",
  description:
    "Rhinontech is your one-stop solution for all your business needs, offering a wide range of services to help you succeed.",
};

export default function CRMLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider>
        <CrmSidebar>{children}</CrmSidebar>
      </SidebarProvider>
    </div>
  );
}

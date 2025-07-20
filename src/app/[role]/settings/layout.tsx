import { SettingSidebar } from "@/components/Common/Navigation/SettingSidebar/SettingSidebar";
import { ChatbotProvider } from "@/context/ChatbotContext";
import { SidebarProvider } from "@/context/SidebarContext";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rhinontech - Your One Stop Solution",
  description:
    "Rhinontech is your one-stop solution for all your business needs, offering a wide range of services to help you succeed.",
};

export default function AutomateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider>
        <ChatbotProvider>
          <SettingSidebar>{children}</SettingSidebar>
        </ChatbotProvider>
      </SidebarProvider>
    </div>
  );
}


import { RootSidebar } from "@/components/Common/Navigation/MainNavigation/RootSidebar";
import { SiteHeader } from "@/components/Common/Navigation/MainNavigation/SiteHeader";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rhinontech - Your One Stop Solution",
  description:
    "Rhinontech is your one-stop solution for all your business needs, offering a wide range of services to help you succeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <div className="[--header-height:calc(--spacing(14))]">
        <SidebarProvider className="flex flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <RootSidebar />
            <SidebarInset className="shadow-none">
              <div className="flex flex-1 flex-col gap-4">{children}</div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </main>
  );
}

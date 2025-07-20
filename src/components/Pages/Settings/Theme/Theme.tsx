"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { PanelLeft } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import ChatbotPreview from "@/components/Common/ChatbotPreview/ChatbotPreview";
import CollapsibleSection from "@/components/Common/CollapsibleSection/CollapsibleSection";

export default function Theme() {
  const { toggleSettingSidebar } = useSidebar();
  return (
    <div className="flex h-full w-full overflow-hidden rounded-lg border bg-background">
      <div className="flex flex-1 flex-col w-full">
        <div className="flex items-center justify-between border-b-2 h-[60px] p-4">
          <div className="flex items-center gap-4">
            <PanelLeft onClick={toggleSettingSidebar} className="h-4 w-4" />
            <h2 className="text-base font-bold">Theme</h2>
          </div>
        </div>
        <ScrollArea className="flex-1 h-0 p-4">
          <CollapsibleSection />
        </ScrollArea>
      </div>
      <div className="flex flex-col w-96 border-l-2">
        <div className="flex items-center justify-between border-b-2 h-[60px] p-4">
          <div className="flex items-center gap-4">
            <h2 className="text-base font-bold">Preview</h2>
          </div>
        </div>
        <ScrollArea className="flex-1 h-0 p-4">
          <ChatbotPreview />
        </ScrollArea>
      </div>
    </div>
  );
}

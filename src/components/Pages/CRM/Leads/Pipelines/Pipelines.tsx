import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import KanbanBoard from "../../Kanban/kanban-board";
import { PanelLeft } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const Pipelines = () => {
  const { toggleAutomateSidebar } = useSidebar();
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b h-[60px] p-4">
        <div className="flex items-center gap-4">
          <PanelLeft
            onClick={toggleAutomateSidebar}
            className="h-4 w-4 cursor-pointer text-muted-foreground"
          />
          <h2 className="text-base font-bold">Pipelines</h2>
        </div>
      </div>

      {/* Body */}
      <ScrollArea className="flex-1 h-0">
        <div className="p-4">
          <KanbanBoard />
        </div>
        <ScrollBar orientation="horizontal" />
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

export default Pipelines;

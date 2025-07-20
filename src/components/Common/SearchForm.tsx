"use client";

import { useKBar } from "kbar";
import { Button } from "@/components/ui/button";
import { Search, Command } from "lucide-react";

export function SearchForm({ className }: { className?: string }) {
  const { query } = useKBar();

  return (
    <Button
      variant="outline"
      className={`justify-start text-muted-foreground ${className}`}
      onClick={() => query.toggle()}
    >
      <Search className="mr-2 h-4 w-4" />
      Search or ask
      <div className="ml-auto flex items-center gap-1">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <Command className="h-3 w-3" />K
        </kbd>
      </div>
    </Button>
  );
}

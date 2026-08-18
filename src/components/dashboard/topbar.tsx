"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Greeting } from "./greeting";
import { submission } from "@/mock-data/dossier";

export function DashboardTopBar() {
  return (
    <div className="bg-background px-6 py-3.5 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="shrink-0" />
          <Greeting name={submission.clientName} />
        </div>
      </div>
    </div>
  );
}
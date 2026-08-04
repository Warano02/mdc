"use client";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardTopBar } from "@/components/dashboard/topbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="bg-sidebar">
      <DashboardSidebar />
      <div className="h-svh overflow-hidden lg:py-2 lg:pr-2 w-full">
        <div className=" lg:rounded-2xl overflow-hidden flex flex-col items-center justify-start bg-background h-full w-full">
          <DashboardTopBar />
          <div className="w-full flex-1 min-h-0 overflow-y-auto">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
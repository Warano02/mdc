"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Workflow,
  FileText,
  Calendar,
  MessageCircle,
  Receipt,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dossier } from "@/mock-data/dossier";

const navItems = [
  { href: "/account", label: "Dashboard", icon: LayoutGrid },
  { href: "/account/case", label: "My Case", icon: Workflow },
  { href: "/account/documents", label: "Documents", icon: FileText },
  { href: "/account/appointments", label: "Appointments", icon: Calendar },
  { href: "/account/messages", label: "Messages", icon: MessageCircle },
  { href: "/account/billing", label: "Billing", icon: Receipt },
];

function SidebarBrand() {
  const { state } = useSidebar();

  return (
    <Link href="/" className="flex items-center justify-center w-full">
      {state === "collapsed" ? (
        <Image
          src="/icon.png"
          alt="MDC Canada"
          width={32}
          height={32}
          className="size-8 rounded-md object-contain"
        />
      ) : (
        <Image
          src="https://mdccanada.ca/assets/images/Logo_colour_tagline.svg"
          alt="MDC Canada"
          width={120}
          height={40}
          className="h-9 w-auto object-contain"
        />
      )}
    </Link>
  );
}

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar className="lg:border-r-0!" collapsible="icon" {...props}>
      <SidebarHeader className="border-b px-4 py-3 h-[65px] lg:h-[74px] flex items-center justify-center">
        <SidebarBrand />
      </SidebarHeader>

      <SidebarContent className="px-3 pb-4 pt-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground uppercase tracking-wider px-3">
            My Space
          </SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => {
              const active =
                item.href === "/account"
                  ? pathname === "/account"
                  : pathname?.startsWith(item.href);
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.label}
                    className="w-full justify-start gap-3 text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    <Link href={item.href}>
                      <item.icon className={cn("size-4", active && "text-primary")} />
                      <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground uppercase tracking-wider px-3">
            Account
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip="Profile"
                className="w-full justify-start gap-3 text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Link href="/account/profile">
                  <Settings
                    className={cn(
                      "size-4",
                      pathname?.startsWith("/account/profile") && "text-primary"
                    )}
                  />
                  <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">
                    Profile
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-3 py-4">
        <Link
          href="/account/messages"
          className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 hover:bg-muted transition-colors group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-1.5"
        >
          <Avatar className="size-9 border border-border shrink-0">
            <AvatarImage src={dossier.agent.photo} />
            <AvatarFallback>
              {dossier.agent.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="text-sm font-medium truncate">{dossier.agent.name}</p>
            <p className="text-xs text-muted-foreground truncate">Your RCIC agent</p>
          </div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
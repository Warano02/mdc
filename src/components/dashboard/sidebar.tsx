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
  ChevronsUpDown,
  HelpCircle,
  LogOut,
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
import { useAuthStore } from "@/store/auth.store";
import { getInitial } from "@/lib";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useEffect } from "react";

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

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { user, loading, logout, loadUser } = useAuthStore()

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <Sidebar className="lg:border-r-0 border-none" collapsible="icon" {...props}>
      <SidebarHeader className="px-4 py-3 h-16.25 lg:h-18.5 flex items-center justify-center">
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
                    className="w-full justify-start gap-3  hover:bg-muted hover:text-foreground"
                  >
                    <Link href={item.href}>
                      <item.icon className={cn("size-4", active && "text-primary")} />
                      <span className="text-sm  group-data-[collapsible=icon]:hidden">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>


      </SidebarContent>


      <SidebarFooter className="px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4 lg:pb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-9 sm:h-9.5">
              <Link href="#">
                <HelpCircle className="size-4 sm:size-5" />
                <span className="text-sm">Help Center</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-9 sm:h-9.5">
              <Link href="#">
                <Settings className="size-4 sm:size-5" />
                <span className="text-sm">Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>


        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 sm:gap-3 group-data-[collapsible=icon]:p-0 p-2 sm:p-3 rounded-lg cursor-pointer hover:bg-accent transition-colors">
              <Avatar className="size-7 sm:size-8 group-data-[collapsible=icon]:size-5">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="text-xs">{getInitial(user.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0 group-data-[collapsible=icon]:hidden">
                <p className="font-semibold text-xs sm:text-sm ">{user.name} </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                  {user.email}
                </p>
              </div>
              <ChevronsUpDown className="size-4 text-muted-foreground shrink-0 group-data-[collapsible=icon]:hidden" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-50">

            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive cursor-pointer" disabled={loading} onClick={() => logout()}>
              {
                loading ? <div>
                  <span className="size-6  animate-spin" />
                  Login out...
                </div> : <>
                  <LogOut className="size-4 mr-2" />
                  Log out
                </>
              }
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
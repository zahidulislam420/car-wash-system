"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  CalendarDays,
  CarFront,
  LayoutDashboard,
  LogOut,
  UserRound,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { signOut, useSession } from "@/lib/auth-client";

const roleBasedSidebarItems = {
    user: [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
    ],
    admin: [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "My Bookings",
            href: "/bookings",
            icon: CalendaCheck,
        },
        {
            title: "Upcoming Bookings",
            href: "/bookings/upcoming",
            icon: CalendarDays,
        },
          {
            title: "My Profile",
            href: "profile",
            icon: UserRound,
          },
        {
            titile: "Users",
            href: "/users",
            icon: Users,
        },
        {
            title: "Branches",
            href: "/branches",
            icon: Building2,
        },
        {
            title: "Services",
            href: "/services",
            icon: Droplets,
        },
        {
            title: "My Profile",
            href: "/profile",
            icon: UserRound,
        }
    ],
    branchManager: [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Services",
            href: "/services",
            icon: Droplets,
        },
        {
            title: "My Bookings",
            href: "/bookings",
            icon: CalendarCheck,
        },
        {
            title: "Upcoming Bookings",
            href: "/bookings/upcoming",
            icon: CalendarDays,
        },
        {
            title: "My Profile",
            href: "/profile",
            icon: UserRound,
        }
    ]
}

const role = user?.role || "user";
const sidebarItems = roleBasedSidebarItems[role as keyof typeof roleBasedSidebarItems] ||[];


const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Bookings", url: "/dashboard/bookings", icon: CalendarDays },
  { title: "My Profile", url: "/profile", icon: UserRound },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut();
    router.push("/signin");
    router.refresh();
  };

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className="p-4">
        <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#1d376f] text-white">
            <CarFront className="size-5 text-[#ffb800]" />
          </span>
          <span className="truncate text-base font-bold tracking-tight text-sidebar-foreground">
            CarCare
          </span>
        </Link>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const active = pathname === item.url || pathname.startsWith(`${item.url}/`);
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      render={<Link href={item.url} />}
                      isActive={active}
                      tooltip={item.title}
                    >
                      <Icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        {session?.user && (
          <div className="mb-2 flex min-w-0 items-center gap-3 rounded-lg bg-sidebar-accent/60 p-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#1d376f] text-sm font-semibold text-white">
              {session.user.name?.charAt(0).toUpperCase() || "U"}
            </span>
            <span className="min-w-0 group-data-[collapsible=icon]:hidden">
              <span className="block truncate text-sm font-medium">{session.user.name}</span>
              <span className="block truncate text-xs text-muted-foreground">{session.user.email}</span>
            </span>
          </div>
        )}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleSignOut} tooltip="Sign out">
              <LogOut />
              <span>Sign out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;

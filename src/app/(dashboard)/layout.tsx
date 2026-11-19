import type { ReactNode } from "react";
import DashboardSidebar from "@/components/dashboard/shared/DashboardSidebar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <SidebarProvider>
            <DashboardSidebar />
            <SidebarInset>
                <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <div className="h-4 w-px bg-border" />
                    <span className="text-sm font-medium text-muted-foreground">Dashboard</span>
                </header>
                <div className="flex-1 p-4 md:p-6">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DashboardLayout;

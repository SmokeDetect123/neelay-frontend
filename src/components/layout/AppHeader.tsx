"use client";

import { Bell, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import ThemeToggle from "@/components/theme/ThemeToggle";

import { Button } from "@/components/ui/button";

import { useLayoutStore } from "@/store/layout.store";

interface PageInfo {
    title: string;
    description: string;
}

const PAGE_MAP: Record<string, PageInfo> = {
    "/dashboard": {
        title: "Dashboard",
        description: "Overview of the Neelay Service Report System.",
    },

    "/users": {
        title: "Users",
        description: "Manage administrators and engineers.",
    },

    "/service-reports": {
        title: "Service Reports",
        description: "Manage customer service reports.",
    },

    "/installation-reports": {
        title: "Installation Reports",
        description: "Manage installation reports.",
    },

    "/calibration-reports": {
        title: "Calibration Reports",
        description: "Manage calibration reports.",
    },
};

export default function AppHeader() {
    const pathname = usePathname();

    const toggleSidebar = useLayoutStore(
        (state) => state.toggleSidebar
    );

    const page =
        PAGE_MAP[pathname] ?? {
            title: "Neelay Service Report System",
            description: "Enterprise Management Platform.",
        };

    return (
        <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-border bg-background/95 px-8 backdrop-blur-md">

            {/* ---------------------------------------------------------------- */}
            {/* Left */}
            {/* ---------------------------------------------------------------- */}

            <div className="flex items-center gap-5">

                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleSidebar}
                    className="h-10 w-10 rounded-xl shadow-sm"
                >
                    <Menu className="h-5 w-5" />
                </Button>

                <div>

                    <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                        {page.title}
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        {page.description}
                    </p>

                </div>

            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Right */}
            {/* ---------------------------------------------------------------- */}

            <div className="flex items-center gap-3">

                <Button
                    variant="outline"
                    size="icon"
                    className="relative h-10 w-10 rounded-xl"
                >
                    <Bell className="h-5 w-5" />

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                </Button>

                <ThemeToggle />

                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-3 py-2 shadow-sm transition-colors hover:bg-accent">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        A
                    </div>

                    <div className="hidden lg:block">

                        <p className="text-sm font-semibold text-foreground">
                            Administrator
                        </p>

                        <p className="text-xs text-muted-foreground">
                            System Administrator
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}
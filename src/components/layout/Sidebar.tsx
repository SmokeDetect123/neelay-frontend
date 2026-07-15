"use client";

import AppLogo from "@/components/common/AppLogo";
import SidebarItem from "@/components/navigation/SidebarItem";

import { NAVIGATION } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { useLayoutStore } from "@/store/layout.store";

export default function Sidebar() {
    const collapsed = useLayoutStore(
        (state) => state.sidebarCollapsed
    );

    const navigation = NAVIGATION;

    return (
        <aside
                className={cn("fixed inset-y-0 left-0 z-50 flex h-screen flex-col border-r border-border bg-card text-card-foreground shadow-lg transition-all duration-300 lg:relative",collapsed
            ? "w-24"
            : "w-72"
                     )}
        >
            {/* Logo */}

            <div
                className={cn(
                    "border-b border-border transition-all duration-300",
                    collapsed ? "px-3 py-6" : "px-6 py-8"
                )}
            >
                <AppLogo
                    className={cn(
                        "transition-all duration-300",
                        collapsed && "scale-90"
                    )}
                />
            </div>

            {/* Navigation */}

            <nav className="flex-1 overflow-y-auto px-3 py-6">

                <div className="flex flex-col gap-2">

                    {navigation.map((item) => (
                        <SidebarItem
                            key={item.href}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))}

                </div>

            </nav>

            {/* Footer */}

            <footer
                className={cn(
                    "border-t border-border transition-all duration-300",
                    collapsed ? "px-2 py-5" : "px-6 py-5"
                )}
            >
                {collapsed ? (
                    <div className="text-center text-xs font-semibold text-primary">
                        v1
                    </div>
                ) : (
                    <div className="text-center text-xs text-muted-foreground">
                        Neelay Service Report System
                        <br />
                        Version 1.0.0
                    </div>
                )}
            </footer>
        </aside>
    );
}
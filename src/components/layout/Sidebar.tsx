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

    return (
        <aside
            className={cn(
                "sticky top-0 flex h-screen shrink-0 flex-col border-r border-border bg-card shadow-lg transition-all duration-300 ease-in-out",
                collapsed ? "w-24" : "w-72"
            )}
        >
            {/* ---------------------------------------------------------------- */}
            {/* Brand */}
            {/* ---------------------------------------------------------------- */}

            <div
                className={cn(
                    "border-b border-border bg-card transition-all duration-300",
                    collapsed ? "px-3 py-5" : "px-6 py-7"
                )}
            >
                <div className="flex flex-col items-center">

                    <AppLogo
                        className={cn(
                            "h-auto object-contain transition-all duration-300",
                            collapsed
                                ? "w-12"
                                : "w-44"
                        )}
                    />

                    {!collapsed && (
                        <>
                            <h2 className="mt-4 text-center text-lg font-semibold tracking-tight text-foreground">
                                Neelay
                            </h2>

                            <p className="mt-1 text-center text-xs text-muted-foreground">
                                Service Report System
                            </p>
                        </>
                    )}

                </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Navigation */}
            {/* ---------------------------------------------------------------- */}

            <nav className="flex-1 overflow-y-auto px-3 py-6">

                {!collapsed && (
                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Navigation
                    </p>
                )}

                <div className="space-y-2">

                    {NAVIGATION.map((item) => (
                        <SidebarItem
                            key={item.href}
                            item={item}
                            collapsed={collapsed}
                        />
                    ))}

                </div>

            </nav>

            {/* ---------------------------------------------------------------- */}
            {/* Footer */}
            {/* ---------------------------------------------------------------- */}

            <footer
                className={cn(
                    "border-t border-border bg-card transition-all duration-300",
                    collapsed
                        ? "px-2 py-5"
                        : "px-6 py-6"
                )}
            >
                {collapsed ? (
                    <div className="text-center text-xs font-semibold text-primary">
                        v1.0
                    </div>
                ) : (
                    <div className="space-y-1 text-center">

                        <p className="text-sm font-medium text-foreground">
                            Neelay Service Report System
                        </p>

                        <p className="text-xs text-muted-foreground">
                            Version 1.0.0
                        </p>

                        <p className="pt-1 text-[11px] text-muted-foreground">
                            © 2026 All Rights Reserved
                        </p>

                    </div>
                )}
            </footer>

        </aside>
    );
}
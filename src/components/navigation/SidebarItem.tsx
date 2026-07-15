"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavigationItem } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
    item: NavigationItem;
    collapsed?: boolean;
}

export default function SidebarItem({
    item,
    collapsed = false,
}: SidebarItemProps) {

    const pathname = usePathname();

    const active =
        pathname === item.href ||
        pathname.startsWith(`${item.href}/`);

    const Icon = item.icon;

    return (
        <Link
            href={item.href}
            title={collapsed ? item.title : undefined}
            className={cn(
                "group relative flex items-center rounded-2xl transition-all duration-300",

                collapsed
                    ? "justify-center px-0 py-3"
                    : "gap-4 px-4 py-3",

                active
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
            )}
        >
            {/* Active Indicator */}

            {active && (
                <div
                    className="
                        absolute
                        left-0
                        top-1/2
                        h-8
                        w-1
                        -translate-y-1/2
                        rounded-r-full
                        bg-white
                    "
                />
            )}

            <Icon
                className={cn(
                    "h-5 w-5 shrink-0 transition-all duration-300",

                    active
                        ? "text-white"
                        : "text-slate-600 dark:text-slate-300 group-hover:text-primary"
                )}
            />

            <span
                className={cn(
                    "overflow-hidden whitespace-nowrap font-medium transition-all duration-300",

                    collapsed
                        ? "w-0 opacity-0"
                        : "w-auto opacity-100"
                )}
            >
                {item.title}
            </span>
        </Link>
    );
}
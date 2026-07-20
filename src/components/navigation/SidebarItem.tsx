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
            aria-current={active ? "page" : undefined}
            className={cn(
                "group relative flex h-12 items-center overflow-hidden rounded-xl transition-all duration-200 ease-out",

                collapsed
                    ? "justify-center"
                    : "gap-3 px-4",

                active
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
        >
            {/* Active Indicator */}

            <span
                className={cn(
                    "absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-primary-foreground transition-all duration-200",

                    active
                        ? "opacity-100"
                        : "opacity-0"
                )}
            />

            {/* Icon */}

            <Icon
                className={cn(
                    "h-5 w-5 shrink-0 transition-all duration-200",

                    active
                        ? "scale-105 text-primary-foreground"
                        : "text-muted-foreground group-hover:scale-105 group-hover:text-foreground"
                )}
            />

            {/* Label */}

            {!collapsed && (
                <span
                    className={cn(
                        "truncate text-sm font-medium transition-colors duration-200",

                        active
                            ? "text-primary-foreground"
                            : "text-foreground group-hover:text-foreground"
                    )}
                >
                    {item.title}
                </span>
            )}
        </Link>
    );
}
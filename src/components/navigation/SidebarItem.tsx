"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NavigationItem } from "@/constants/navigation";

interface SidebarItemProps {
    item: NavigationItem;
}

export default function SidebarItem({
    item,
}: SidebarItemProps) {
    const pathname = usePathname();

    const isActive =
        pathname === item.href ||
        pathname.startsWith(`${item.href}/`);

    const Icon = item.icon;

    return (
        <Link
            href={item.href}
            className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            )}
        >
            <Icon className="h-5 w-5" />

            <span>{item.title}</span>
        </Link>
    );
}
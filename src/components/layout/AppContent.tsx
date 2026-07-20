"use client";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AppContentProps {
    children: ReactNode;
    className?: string;
}

export default function AppContent({
    children,
    className,
}: AppContentProps) {
    return (
        <main
            className={cn(
                "flex-1 overflow-y-auto bg-background transition-colors duration-300",
                className
            )}
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-6 lg:px-8 lg:py-8">
                {children}
            </div>
        </main>
    );
}
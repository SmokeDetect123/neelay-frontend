"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import AppShell from "./AppShell";
import ProtectedRoute from "./ProtectedRoute";

interface AppLayoutProps {
    children: ReactNode;
}

const PUBLIC_ROUTES = [
    "/login",
];

export default function AppLayout({
    children,
}: AppLayoutProps) {
    const pathname = usePathname();

    const isPublicRoute = PUBLIC_ROUTES.some(
        (route) =>
            pathname === route ||
            pathname.startsWith(`${route}/`)
    );

    if (isPublicRoute) {
        return <>{children}</>;
    }

    return (
        <ProtectedRoute>
            <AppShell>
                {children}
            </AppShell>
        </ProtectedRoute>
    );
}
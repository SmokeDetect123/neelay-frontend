"use client";

import { ReactNode } from "react";

import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";

interface AppShellProps {
    children: ReactNode;
}

export default function AppShell({
    children,
}: AppShellProps) {
    return (
        <div className="flex min-h-screen bg-background">

            <Sidebar />

            <div className="flex min-w-0 flex-1 flex-col">

                <AppHeader />

                <AppContent>

                    {children}

                </AppContent>

            </div>

        </div>
    );
}
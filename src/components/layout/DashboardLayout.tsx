"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background">

            <Sidebar />

            <div className="flex min-w-0 flex-1 flex-col">

                <AppHeader />

                <main
                    className="
                        flex-1
                        overflow-y-auto
                        bg-background
                        p-8
                    "
                >
                    {children}
                </main>

            </div>

        </div>
    );
}
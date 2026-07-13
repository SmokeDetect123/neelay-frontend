"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    return (
    <div className="flex min-h-screen bg-slate-100">

        <Sidebar />

        <div className="flex flex-1 flex-col">

            <AppHeader />

                <main
                    className="
                        flex-1
                        overflow-auto
                        p-8
                    "
                >
                    {children}
                </main>

            </div>

        </div>
    );
}
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
        <div className="flex h-screen bg-slate-100">

            <Sidebar />

            <div className="flex flex-1 flex-col overflow-hidden">

                <AppHeader />

                <main className="flex-1 overflow-y-auto">

                    {children}

                </main>

            </div>

        </div>
    );
}
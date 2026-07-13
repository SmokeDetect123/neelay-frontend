"use client";

import { CalendarDays } from "lucide-react";

import { useAuthStore } from "@/store/auth.store";

export default function AppHeader() {

    const user = useAuthStore(
        (state) => state.user
    );

    const today = new Date().toLocaleDateString(
        "en-IN",
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );

    return (
        <header
            className="
                flex
                h-20
                items-center
                justify-between
                border-b
                border-slate-200
                bg-white
                px-8
            "
        >
            <div>
                <h2 className="text-xl font-semibold text-slate-800">
                    Welcome, {user?.username}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    {user?.role}
                </p>
            </div>

            <div className="flex items-center gap-2 text-slate-500">
                <CalendarDays className="h-5 w-5" />

                <span className="text-sm">
                    {today}
                </span>
            </div>
        </header>
    );

}
"use client";

import Surface from "@/components/common/Surface";

import { useAuthStore } from "@/store/auth.store";

export default function DashboardWelcome() {

    const user = useAuthStore(
        (state) => state.user
    );

    return (

        <Surface className="p-8">

            <div className="space-y-3">

                <h1
                    className="
                        text-3xl
                        font-bold
                        text-slate-900
                    "
                >
                    Welcome Back
                    {user?.username
                        ? `, ${user.username}`
                        : ""}
                </h1>

                <p
                    className="
                        max-w-3xl
                        text-slate-600
                        leading-7
                    "
                >
                    Welcome to the Neelay Service Report System.

                    Manage service reports, calibration reports,
                    installation reports and users through one
                    centralized dashboard.
                </p>

            </div>

        </Surface>

    );

}
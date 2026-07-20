"use client";

import { ShieldCheck } from "lucide-react";

import { Surface } from "@/components/common/Surface";
import { useAuthStore } from "@/store/auth.store";

export default function DashboardWelcome() {
    const user = useAuthStore((state) => state.user);

    return (
        <Surface className="relative overflow-hidden rounded-3xl border border-border bg-card">
            {/* Brand Accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-blue-500 to-red-500" />

            {/* Background Decoration */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}
                <div className="max-w-3xl space-y-5">

                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">

                        <ShieldCheck className="h-4 w-4" />

                        Enterprise Dashboard

                    </div>

                    <div className="space-y-3">

                        <h1 className="text-4xl font-bold tracking-tight text-foreground">

                            Welcome Back
                            {user?.username ? `, ${user.username}` : ""}

                        </h1>

                        <p className="max-w-2xl text-base leading-8 text-muted-foreground">

                            Manage service reports, calibration reports,
                            installation reports and users through one secure,
                            centralized platform designed for Neelay
                            Medizintech.

                        </p>

                    </div>

                </div>

                {/* Right */}

                <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl border border-border bg-background p-5 text-center">

                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                            Status
                        </p>

                        <p className="mt-2 text-xl font-bold text-emerald-600 dark:text-emerald-400">
                            Operational
                        </p>

                    </div>

                    <div className="rounded-2xl border border-border bg-background p-5 text-center">

                        <p className="text-xs uppercase tracking-widest text-muted-foreground">
                            Version
                        </p>

                        <p className="mt-2 text-xl font-bold text-primary">
                            v1.0
                        </p>

                    </div>

                </div>

            </div>

        </Surface>
    );
}
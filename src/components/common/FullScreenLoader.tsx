"use client";

import { Loader2 } from "lucide-react";

export default function FullScreenLoader() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-blue-700" />

                <p className="text-sm text-slate-500">
                    Loading...
                </p>
            </div>
        </div>
    );
}
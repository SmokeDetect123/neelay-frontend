"use client";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface LoadingButtonProps {
    loading: boolean;
    text: string;
}

export default function LoadingButton({
    loading,
    text,
}: LoadingButtonProps) {
    return (
        <Button
            type="submit"
            disabled={loading}
            className="
                w-full
                h-11
                rounded-xl
                bg-blue-700
                hover:bg-blue-800
                text-white
                font-semibold
            "
        >
            {loading && (
                <Loader2
                    className="
                        mr-2
                        h-4
                        w-4
                        animate-spin
                    "
                />
            )}

            {loading ? "Signing In..." : text}
        </Button>
    );
}
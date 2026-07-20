"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function FormActions() {
    return (
        <div className="flex justify-end gap-3">

            <Button
                asChild
                variant="outline"
            >
                <Link href="/service-reports">
                    Cancel
                </Link>
            </Button>

            <Button type="submit">
                Save Report
            </Button>

        </div>
    );
}
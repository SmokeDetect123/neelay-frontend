"use client";

import Link from "next/link";

import { Loader2, Save, X } from "lucide-react";

import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";

import type { ServiceReportFormValues } from "../../types/serviceReportForm.types";

export default function FormActions() {
    const {
        formState: {
            isSubmitting,
        },
    } =
        useFormContext<ServiceReportFormValues>();

    return (
        <div className="flex items-center justify-end gap-3 border-t pt-6">
            <Button
                asChild
                type="button"
                variant="outline"
                disabled={isSubmitting}
            >
                <Link href="/service-reports">
                    <X className="mr-2 h-4 w-4" />
                    Cancel
                </Link>
            </Button>

            <Button
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                    </>
                ) : (
                    <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Service Report
                    </>
                )}
            </Button>
        </div>
    );
}
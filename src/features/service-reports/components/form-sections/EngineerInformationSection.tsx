"use client";

import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import { FormGrid } from "@/components/forms/FormGrid";
import { FormSection } from "@/components/forms/FormSection";

import { Input } from "@/components/ui/input";

import { useUsers } from "@/features/users/hooks/useUsers";

import type { ServiceReportFormValues } from "../../types/serviceReportForm.types";

import EngineerSelectField from "../fields/EngineerSelectField";

export default function EngineerInformationSection() {
    const form = useFormContext<ServiceReportFormValues>();

    const { users } = useUsers();

    const attendedBy = form.watch("attendedBy");

    const selectedEngineer = useMemo(() => {
        return users.find(
            (user) => user.id === attendedBy,
        );
    }, [users, attendedBy]);

    return (
        <FormSection
            title="Engineer Information"
            description="Select the engineer responsible for this service visit."
        >
            <FormGrid>

                <EngineerSelectField />

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Username
                    </label>

                    <Input
                        value={selectedEngineer?.username ?? ""}
                        readOnly
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Full Name
                    </label>

                    <Input
                        value={selectedEngineer?.fullName ?? ""}
                        readOnly
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Email
                    </label>

                    <Input
                        value={selectedEngineer?.email ?? ""}
                        readOnly
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Role
                    </label>

                    <Input
                        value={selectedEngineer?.role ?? ""}
                        readOnly
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Status
                    </label>

                    <Input
                        value={
                            selectedEngineer
                                ? selectedEngineer.active
                                    ? "Active"
                                    : "Inactive"
                                : ""
                        }
                        readOnly
                    />
                </div>

            </FormGrid>
        </FormSection>
    );
}
"use client";

import { FormGrid } from "@/components/forms/FormGrid";
import { FormSection } from "@/components/forms/FormSection";

import EngineerSelectField from "../fields/EngineerSelectField";

export default function EngineerInformationSection() {
    return (
        <FormSection
            title="Engineer Information"
            description="Select the engineer responsible for this service visit."
        >
            <FormGrid>
                <EngineerSelectField />
            </FormGrid>
        </FormSection>
    );
}
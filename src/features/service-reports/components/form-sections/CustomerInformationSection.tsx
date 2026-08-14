"use client";

import { FormGrid } from "@/components/forms/FormGrid";
import { FormSection } from "@/components/forms/FormSection";

import CustomerSelectField from "../fields/CustomerSelectField";

export default function CustomerInformationSection() {
    return (
        <FormSection
            title="Customer Information"
            description="Select the customer and provide the relevant service-visit information."
        >
            <FormGrid>
                <CustomerSelectField />
            </FormGrid>
        </FormSection>
    );
}
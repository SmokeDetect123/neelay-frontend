"use client";

import { FormGrid } from "@/components/forms/FormGrid";
import { FormSection } from "@/components/forms/FormSection";

import ReportDateField from "../fields/ReportDateField";
import EquipmentField from "../fields/EquipmentField";
import ModelField from "../fields/ModelField";
import SerialNumberField from "../fields/SerialNumberField";

export default function EquipmentInformationSection() {
    return (
        <FormSection
            title="Equipment Information"
            description="Provide the equipment details for this service report."
        >
            <FormGrid>
                <ReportDateField />

                <EquipmentField />

                <ModelField />

                <SerialNumberField />
            </FormGrid>
        </FormSection>
    );
}
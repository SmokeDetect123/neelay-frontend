"use client";

import { FormGrid } from "@/components/forms/FormGrid";
import { FormSection } from "@/components/forms/FormSection";

import ObservationsField from "../fields/ObservationsField";
import ActionTakenField from "../fields/ActionTakenField";
import RecommendationsField from "../fields/RecommendationsField";

export default function ServiceDetailsSection() {
    return (
        <FormSection
            title="Service Details"
            description="Record the work carried out during this service visit."
        >
            <FormGrid>

                <ObservationsField />

                <ActionTakenField />

                <RecommendationsField />

            </FormGrid>
        </FormSection>
    );
}
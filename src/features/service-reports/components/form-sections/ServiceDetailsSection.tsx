"use client";

import { FormGrid } from "@/components/forms/FormGrid";
import { FormSection } from "@/components/forms/FormSection";

import CallTypeField from "../fields/CallTypeField";
import LocationTypeField from "../fields/LocationTypeField";
import ObservationsField from "../fields/ObservationsField";
import ActionTakenField from "../fields/ActionTakenField";
import RecommendationsField from "../fields/RecommendationsField";

export default function ServiceDetailsSection() {
    return (
        <FormSection
            title="Service Details"
            description="Record the service work performed during this visit."
        >
            <FormGrid>
                <CallTypeField />

                <LocationTypeField />

                <ObservationsField />

                <ActionTakenField />

                <RecommendationsField />
            </FormGrid>
        </FormSection>
    );
}
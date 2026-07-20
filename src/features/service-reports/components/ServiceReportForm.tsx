"use client";

import CustomerInformationSection from "./form-sections/CustomerInformationSection";
import EngineerInformationSection from "./form-sections/EngineerInformationSection";
import EquipmentInformationSection from "./form-sections/EquipmentInformationSection";
import ServiceDetailsSection from "./form-sections/ServiceDetailsSection";
import RecommendationsSection from "./form-sections/RecommendationsSection";
import FormActions from "./form-sections/FormActions";

export default function ServiceReportForm() {
    return (
        <form className="space-y-6">

            <CustomerInformationSection />

            <EngineerInformationSection />

            <EquipmentInformationSection />

            <ServiceDetailsSection />

            <RecommendationsSection />

            <FormActions />

        </form>
    );
}
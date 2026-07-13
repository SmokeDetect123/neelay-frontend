import DashboardQuickActions from "@/components/dashboard/DashboardQuickActions";
import DashboardStatistics from "@/components/dashboard/DashboardStatistics";
import DashboardWelcome from "@/components/dashboard/DashboardWelcome";

import PageContainer from "@/components/common/PageContainer";
import PageHeader from "@/components/common/PageHeader";

export default function DashboardPage() {
    return (
        <PageContainer>

            <PageHeader
                title="Dashboard"
                description="Overview of the Neelay Service Report System."
            />

            <DashboardWelcome />

            <DashboardStatistics />

            <DashboardQuickActions />

        </PageContainer>
    );
}
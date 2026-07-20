"use client";

import {
    Building2,
    PlusCircle,
} from "lucide-react";

import StatisticCard from "@/components/dashboard/StatisticCard";

interface Props {
    totalCustomers: number;
}

export default function CustomerStatistics({
    totalCustomers,
}: Props) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            <StatisticCard
                title="Total Customers"
                value={totalCustomers}
                icon={Building2}
                description="Registered customers"
            />

            <StatisticCard
                title="Recently Added"
                value={totalCustomers}
                icon={PlusCircle}
                description="Added this month"
            />
        </div>
    );
}
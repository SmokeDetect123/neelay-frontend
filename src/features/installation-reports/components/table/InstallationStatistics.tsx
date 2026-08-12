"use client";

import {
  ClipboardList,
  Factory,
  Package,
  Users,
} from "lucide-react";

import StatisticCard from "@/components/dashboard/StatisticCard";

import {
  useInstallationStatistics,
} from "../../hooks";

export default function InstallationStatistics() {
  const statistics =
    useInstallationStatistics();

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatisticCard
        title="Total Reports"
        value={statistics.totalReports}
        icon={ClipboardList}
      />

      <StatisticCard
        title="Installed Units"
        value={statistics.totalLineItems}
        icon={Package}
      />

      <StatisticCard
        title="Customers"
        value={statistics.uniqueCustomers}
        icon={Users}
      />

      <StatisticCard
        title="This Month"
        value={statistics.reportsThisMonth}
        icon={Factory}
      />
    </div>
  );
}
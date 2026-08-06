"use client";

import { ContentCard } from "@/components/common/ContentCard";

import { CalibrationReport } from "../../types";

import { CalibrationRecordTable } from ".";

interface Props {
  report?: CalibrationReport;
}

export default function CalibrationTestRecordsCard({
  report,
}: Props) {
  if (!report) {
    return (
      <ContentCard className="p-6">
        <h2 className="mb-6 text-lg font-semibold">
          Calibration Test Records
        </h2>

        <p className="text-sm text-muted-foreground">
          No calibration test records available.
        </p>
      </ContentCard>
    );
  }

  const recordSet1 = [
    { setPoint: "0.00", value: report.test1Record000 },
    { setPoint: "1.00", value: report.test1Record100 },
    { setPoint: "2.00", value: report.test1Record200 },
    { setPoint: "3.00", value: report.test1Record300 },
    { setPoint: "4.00", value: report.test1Record400 },
    { setPoint: "5.00", value: report.test1Record500 },
    { setPoint: "6.00", value: report.test1Record600 },
    { setPoint: "7.00", value: report.test1Record700 },
    { setPoint: "8.00", value: report.test1Record800 },
  ];

  const recordSet2 = [
    { setPoint: "0.00", value: report.test2Record000 },
    { setPoint: "1.00", value: report.test2Record100 },
    { setPoint: "2.00", value: report.test2Record200 },
    { setPoint: "3.00", value: report.test2Record300 },
    { setPoint: "4.00", value: report.test2Record400 },
    { setPoint: "5.00", value: report.test2Record500 },
    { setPoint: "6.00", value: report.test2Record600 },
    { setPoint: "7.00", value: report.test2Record700 },
    { setPoint: "8.00", value: report.test2Record800 },
  ];

  return (
    <ContentCard className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Calibration Test Records
      </h2>

      <div className="space-y-8">
        <CalibrationRecordTable
          title="Calibration Test Record 1"
          readings={recordSet1}
        />

        <CalibrationRecordTable
          title="Calibration Test Record 2"
          readings={recordSet2}
        />
      </div>
    </ContentCard>
  );
}
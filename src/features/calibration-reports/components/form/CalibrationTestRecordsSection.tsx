"use client";

import { EditableCalibrationRecordTable } from ".";

export default function CalibrationTestRecordsSection() {
  return (
    <section className="rounded-lg border bg-card p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Calibration Test Records
      </h2>

      <div className="space-y-8">
        <EditableCalibrationRecordTable
          title="Calibration Test Record 1"
          fields={[
            { label: "0.00", name: "test1Record000" },
            { label: "1.00", name: "test1Record100" },
            { label: "2.00", name: "test1Record200" },
            { label: "3.00", name: "test1Record300" },
            { label: "4.00", name: "test1Record400" },
            { label: "5.00", name: "test1Record500" },
            { label: "6.00", name: "test1Record600" },
            { label: "7.00", name: "test1Record700" },
            { label: "8.00", name: "test1Record800" },
          ]}
        />

        <EditableCalibrationRecordTable
          title="Calibration Test Record 2"
          fields={[
            { label: "0.00", name: "test2Record000" },
            { label: "1.00", name: "test2Record100" },
            { label: "2.00", name: "test2Record200" },
            { label: "3.00", name: "test2Record300" },
            { label: "4.00", name: "test2Record400" },
            { label: "5.00", name: "test2Record500" },
            { label: "6.00", name: "test2Record600" },
            { label: "7.00", name: "test2Record700" },
            { label: "8.00", name: "test2Record800" },
          ]}
        />
      </div>
    </section>
  );
}
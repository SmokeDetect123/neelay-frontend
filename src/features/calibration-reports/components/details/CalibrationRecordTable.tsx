"use client";

interface CalibrationRecordTableProps {
    title: string;

    readings: {
        setPoint: string;
        value: number | null;
    }[];
}

export default function CalibrationRecordTable({
    title,
    readings,
}: CalibrationRecordTableProps) {
    return (
        <div className="space-y-3">
            <h3 className="text-base font-semibold">
                {title}
            </h3>

            <div className="overflow-x-auto rounded-md border">
                <table className="w-full border-collapse">
                    <thead className="bg-muted/50">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium">
                                Set Point
                            </th>

                            <th className="px-4 py-2 text-left text-sm font-medium">
                                Reading
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {readings.map((reading) => (
                            <tr
                                key={reading.setPoint}
                                className="border-t"
                            >
                                <td className="px-4 py-2 text-sm">
                                    {reading.setPoint}
                                </td>

                                <td className="px-4 py-2 text-sm">
                                    {reading.value === null
                                        ? "—"
                                        : reading.value.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
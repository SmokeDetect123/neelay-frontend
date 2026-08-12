"use client";

import { Wrench } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  InstallationReport,
} from "../../../types";

interface EquipmentCardProps {
  report: InstallationReport;
}

export default function EquipmentCard({
  report,
}: EquipmentCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wrench className="h-5 w-5" />

          Installation Equipment
        </CardTitle>
      </CardHeader>

      <CardContent>
        {report.lineItems.length === 0 ? (
          <div className="rounded-lg border border-dashed py-8 text-center">
            <p className="text-sm text-muted-foreground">
              No installation equipment found.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead>Make</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Fabrication No.</TableHead>
                  <TableHead>Fitting</TableHead>
                  <TableHead className="text-center">
                    Qty
                  </TableHead>
                  <TableHead>Agent</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {report.lineItems.map(
                  (item, index) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        {index + 1}
                      </TableCell>

                      <TableCell>
                        {item.make}
                      </TableCell>

                      <TableCell>
                        {item.model}
                      </TableCell>

                      <TableCell>
                        {item.fabricationNo}
                      </TableCell>

                      <TableCell>
                        {item.fitting}
                      </TableCell>

                      <TableCell className="text-center">
                        {item.qty}
                      </TableCell>

                      <TableCell>
                        {item.agent}
                      </TableCell>

                      <TableCell className="max-w-xs whitespace-pre-wrap">
                        {item.remarks || "-"}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
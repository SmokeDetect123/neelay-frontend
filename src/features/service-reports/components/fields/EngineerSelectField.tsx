"use client";

/**
 * Service Reports currently use the authenticated backend user
 * as createdBy.
 *
 * The current CreateServiceReportRequest does not contain an
 * attendedBy field, so there is no engineer-selection form field
 * to bind here.
 *
 * This component intentionally renders nothing until engineer
 * assignment is introduced into the Service Report API contract.
 */
export default function EngineerSelectField() {
    return null;
}
import { z } from "zod";

import {
  installationReportSchema,
} from "./installation-report.schema";

/**
 * Input values accepted by React Hook Form.
 *
 * Using z.input() is required because the schema
 * uses z.coerce.number(), whose input type is
 * unknown and output type is number.
 */
export type InstallationReportFormValues =
  z.input<typeof installationReportSchema>;
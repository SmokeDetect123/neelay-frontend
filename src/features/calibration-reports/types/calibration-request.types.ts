/**
 * ============================================================================
 * Base Calibration Report Request
 * ============================================================================
 *
 * Mirrors the backend CreateCalibrationReportRequest contract.
 *
 * These fields intentionally use strings for:
 * - agentType
 * - fillingSystem
 * - connectorSystem
 * - carriedGas
 *
 * The backend accepts these values as strings.
 */
export interface CalibrationReportRequest {
  reportDate: string;

  customerName: string;

  customerAddress?: string;

  agentType?: string;

  fillingSystem?: string;

  connectorSystem?: string;

  serialNo?: string;

  make?: string;

  type?: string;

  testSignatureUrl?: string;

  testSignatureDate?: string;

  carriedGas?: string;

  leakageTest?: string;

  // --------------------------------------------------------------------------
  // Calibration Test Record Set 1
  // --------------------------------------------------------------------------

  test1Record000?: number;

  test1Record060?: number;

  test1Record100?: number;

  test1Record200?: number;

  test1Record300?: number;

  test1Record400?: number;

  test1Record500?: number;

  test1Record600?: number;

  test1Record700?: number;

  test1Record800?: number;

  // --------------------------------------------------------------------------
  // Calibration Test Record Set 2
  // --------------------------------------------------------------------------

  test2Record000?: number;

  test2Record060?: number;

  test2Record100?: number;

  test2Record200?: number;

  test2Record300?: number;

  test2Record400?: number;

  test2Record500?: number;

  test2Record600?: number;

  test2Record700?: number;

  test2Record800?: number;

  // --------------------------------------------------------------------------
  // Results
  // --------------------------------------------------------------------------

  resistance4lmin?: number;

  leakTestPass?: boolean;

  driedOutPass?: boolean;

  finalLeakTestPass?: boolean;

  overallPass?: boolean;

  overallComment?: string;

  // --------------------------------------------------------------------------
  // Signatures
  // --------------------------------------------------------------------------

  biomedicalEngineerSignatureUrl?: string;

  serviceEngineerSignatureUrl?: string;

  signedDate?: string;
}

/**
 * ============================================================================
 * POST /api/calibration-reports
 * ============================================================================
 */
export interface CreateCalibrationReportRequest
  extends CalibrationReportRequest {}

/**
 * ============================================================================
 * PUT /api/calibration-reports/{id}
 * ============================================================================
 */
export interface UpdateCalibrationReportRequest
  extends Partial<CalibrationReportRequest> {}
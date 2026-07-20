export const CALL_TYPES = {
    BREAKDOWN: "BREAKDOWN",
    PREVENTIVE_MAINTENANCE: "PREVENTIVE_MAINTENANCE",
    INSTALLATION: "INSTALLATION",
    CALIBRATION: "CALIBRATION",
    DEMONSTRATION: "DEMONSTRATION",
    OTHER: "OTHER",
} as const;

export type CallType =
    (typeof CALL_TYPES)[keyof typeof CALL_TYPES];

export const LOCATION_TYPES = {
    CUSTOMER_SITE: "CUSTOMER_SITE",
    WORKSHOP: "WORKSHOP",
} as const;

export type LocationType =
    (typeof LOCATION_TYPES)[keyof typeof LOCATION_TYPES];
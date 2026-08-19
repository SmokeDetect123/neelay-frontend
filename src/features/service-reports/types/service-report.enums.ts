export const CALL_TYPES = {
    CALL_BASIS: "CALL_BASIS",
    AMC: "AMC",
    PREVENTIVE_MAINT: "PREVENTIVE_MAINT",
    OTHER: "OTHER",
} as const;

export type CallType =
    (typeof CALL_TYPES)[keyof typeof CALL_TYPES];

export const LOCATION_TYPES = {
    ON_SITE: "ON_SITE",
    DEPOT: "DEPOT",
} as const;

export type LocationType =
    (typeof LOCATION_TYPES)[keyof typeof LOCATION_TYPES];
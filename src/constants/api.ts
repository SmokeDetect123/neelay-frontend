export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL!;

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "/auth/login",
    },

    USERS: "/users",

    SERVICE_REPORTS: "/service-reports",
    SERVICE_REPORTS_COUNT: "/service-reports/count",

    CALIBRATION_REPORTS: "/calibration-reports",
    CALIBRATION_REPORTS_COUNT: "/calibration-reports/count",

    INSTALLATION_REPORTS: "/installation-reports",
    INSTALLATION_REPORTS_COUNT: "/installation-reports/count",
};
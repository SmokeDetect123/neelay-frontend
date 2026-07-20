/**
 * ============================================================
 * Users API
 * ------------------------------------------------------------
 * Backend endpoint definitions.
 * No HTTP implementation should live here.
 * ============================================================
 */

export const USERS_API = {
    LIST: "/users",

    DETAILS: (id: number) => `/users/${id}`,

    CREATE: "/users",

    UPDATE: (id: number) => `/users/${id}`,

    DELETE: (id: number) => `/users/${id}`,
} as const;
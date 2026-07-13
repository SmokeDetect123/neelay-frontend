export const ROLES = {
    ADMIN: "ADMIN",
    ENGINEER: "ENGINEER",
} as const;

export type Role =
    (typeof ROLES)[keyof typeof ROLES];

export const ROLE_OPTIONS = Object.values(
    ROLES
);
/**
 * ============================================================
 * Users Module Types
 * ------------------------------------------------------------
 * Mirrors the Spring Boot DTO layer.
 * DO NOT rename these interfaces without updating the backend.
 * ============================================================
 */

export type UserRole =
    | "ADMIN"
    | "ENGINEER";

export interface CreateUserRequest {
    username: string;

    fullName: string;

    email: string;

    password: string;

    role: UserRole;

    active: boolean;
}

export interface UpdateUserRequest {
    fullName: string;

    email: string;

    role: UserRole;

    active: boolean;
}

export interface UserResponse {
    id: number;

    username: string;

    fullName: string;

    email: string;

    role: UserRole;

    active: boolean;

    createdAt: string;

    updatedAt: string;
}

export interface UserSearchRequest {
    search?: string;

    role?: UserRole;

    active?: boolean;
}

export interface UserFilterState {
    search: string;

    role: "ALL" | UserRole;

    status: "ALL" | "ACTIVE" | "INACTIVE";
}

export type UserTableRow = UserResponse;
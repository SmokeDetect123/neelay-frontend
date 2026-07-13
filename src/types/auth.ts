import { Role } from "@/constants/roles";

export interface LoginRequest {

    username: string;

    password: string;

}

export interface LoginResponse {

    token: string;

    username: string;

    role: Role;

}

export interface AuthUser {

    username: string;

    role: Role;

}

export interface AuthState {

    user: AuthUser | null;

    token: string | null;

    isAuthenticated: boolean;

    login: (
        response: LoginResponse
    ) => void;

    logout: () => void;

}
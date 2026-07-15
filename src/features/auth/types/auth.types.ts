import { Role } from "@/constants/roles";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface AuthUser {
    id: number;
    username: string;
    role: Role;
}

export interface LoginResponse {
    accessToken: string;
    user: AuthUser;
}
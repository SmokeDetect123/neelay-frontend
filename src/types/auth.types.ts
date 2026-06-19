import { Role } from "@/constants";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;

  user: {
    id: number;
    username: string;
    role: Role;
  };
}
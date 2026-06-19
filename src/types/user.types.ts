import { Role } from "@/constants";

export interface UserResponse {
  id: number;
  username: string;
  role: Role;
  createdAt: string;
}

export interface CreateUserRequest {
  username: string;
  password: string;
  role: Role;
}
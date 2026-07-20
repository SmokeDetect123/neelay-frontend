import { mockUsers } from "../mock/users";

import type {
    CreateUserRequest,
    UpdateUserRequest,
    UserResponse,
} from "../types/user.types";

/**
 * ============================================================
 * Users Service
 * ------------------------------------------------------------
 * Mock implementation that mirrors the future Spring Boot API.
 * ============================================================
 */
class UsersService {
    async getUsers(): Promise<UserResponse[]> {
        return [...mockUsers];
    }

    async getUserById(
        id: number
    ): Promise<UserResponse | null> {
        return mockUsers.find((user) => user.id === id) ?? null;
    }

    async createUser(
        request: CreateUserRequest
    ): Promise<UserResponse> {
        const username = request.username.trim().toLowerCase();
        const email = request.email.trim().toLowerCase();

        const usernameExists = mockUsers.some(
            (user) =>
                user.username.trim().toLowerCase() === username
        );

        if (usernameExists) {
            throw new Error("Username already exists.");
        }

        const emailExists = mockUsers.some(
            (user) =>
                user.email.trim().toLowerCase() === email
        );

        if (emailExists) {
            throw new Error("Email address already exists.");
        }

        const nextId =
            mockUsers.length > 0
                ? Math.max(...mockUsers.map((user) => user.id)) + 1
                : 1;

        const now = new Date().toISOString();

        const newUser: UserResponse = {
            id: nextId,

            username: request.username.trim(),

            fullName: request.fullName.trim(),

            email: request.email.trim(),

            role: request.role,

            active: request.active,

            createdAt: now,

            updatedAt: now,
        };

        mockUsers.push(newUser);

        return newUser;
    }

    async updateUser(
        id: number,
        request: UpdateUserRequest
    ): Promise<UserResponse | null> {
        const index = mockUsers.findIndex(
            (user) => user.id === id
        );

        if (index === -1) {
            return null;
        }

        const email = request.email.trim().toLowerCase();

        const duplicateEmail = mockUsers.some(
            (user) =>
                user.id !== id &&
                user.email.trim().toLowerCase() === email
        );

        if (duplicateEmail) {
            throw new Error("Email address already exists.");
        }

        const updatedUser: UserResponse = {
            ...mockUsers[index],

            fullName: request.fullName.trim(),

            email: request.email.trim(),

            role: request.role,

            active: request.active,

            updatedAt: new Date().toISOString(),
        };

        mockUsers[index] = updatedUser;

        return updatedUser;
    }

    async deleteUser(
        id: number
    ): Promise<boolean> {
        const index = mockUsers.findIndex(
            (user) => user.id === id
        );

        if (index === -1) {
            return false;
        }

        mockUsers.splice(index, 1);

        return true;
    }
}

export const usersService = new UsersService();
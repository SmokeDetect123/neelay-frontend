import { useEffect, useState } from "react";

import { usersService } from "../services/users.service";

import type {
    CreateUserRequest,
    UpdateUserRequest,
    UserResponse,
} from "../types/user.types";

export function useUsers() {
    const [users, setUsers] = useState<UserResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    async function loadUsers(signal?: AbortSignal) {
        try {
            setIsLoading(true);
            setIsError(false);

            const response = await usersService.getUsers();

            if (signal?.aborted) {
                return;
            }

            setUsers(response);
        } catch (error) {
            if (signal?.aborted) {
                return;
            }

            console.error("Failed to load users", error);

            setIsError(true);
        } finally {
            if (!signal?.aborted) {
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            await loadUsers(controller.signal);
        })();

        return () => {
            controller.abort();
        };
    }, []);

    async function refresh() {
        await loadUsers();
    }

    async function getUserById(
        id: number
    ): Promise<UserResponse | null> {
        return await usersService.getUserById(id);
    }

    async function createUser(
        request: CreateUserRequest
    ) {
        const user = await usersService.createUser(request);

        await refresh();

        return user;
    }

    async function updateUser(
        id: number,
        request: UpdateUserRequest
    ) {
        const user = await usersService.updateUser(
            id,
            request
        );

        await refresh();

        return user;
    }

    async function deleteUser(id: number) {
        await usersService.deleteUser(id);

        await refresh();
    }

    return {
        users,

        isLoading,

        isError,

        refresh,

        getUserById,

        createUser,

        updateUser,

        deleteUser,
    };
}
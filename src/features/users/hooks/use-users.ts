import { User } from "../types/user.types";

export function useUsers() {

    const users: User[] = [];

    return {

        users,

        isLoading: false,

        isError: false,

    };

}
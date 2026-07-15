export interface User {

    id: number;

    username: string;

    fullName: string;

    email: string;

    role: "ADMIN" | "ENGINEER";

    active: boolean;

    createdAt: string;

    updatedAt: string;

}
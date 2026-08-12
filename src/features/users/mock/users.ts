import type {
    UserResponse,
} from "../types/user.types";

export const mockUsers: UserResponse[] = [
    {
        id: 1,
        username: "admin",
        fullName: "System Administrator",
        email: "admin@neelay.com",
        role: "ADMIN",
        active: true,
        createdAt: "2026-07-01T09:00:00Z",
        updatedAt: "2026-07-01T09:00:00Z",
    },

    {
        id: 2,
        username: "john.smith",
        fullName: "John Smith",
        email: "john.smith@company.com",
        role: "ENGINEER",
        active: true,
        createdAt: "2026-07-02T10:30:00Z",
        updatedAt: "2026-07-02T10:30:00Z",
    },

    {
        id: 3,
        username: "david.wilson",
        fullName: "David Wilson",
        email: "david.wilson@company.com",
        role: "ENGINEER",
        active: true,
        createdAt: "2026-07-03T08:45:00Z",
        updatedAt: "2026-07-03T08:45:00Z",
    },

    {
        id: 4,
        username: "amit.kulkarni",
        fullName: "Amit Kulkarni",
        email: "amit@neelay.com",
        role: "ENGINEER",
        active: false,
        createdAt: "2026-07-04T11:20:00Z",
        updatedAt: "2026-07-04T11:20:00Z",
    },

    {
        id: 5,
        username: "operations",
        fullName: "Operations Admin",
        email: "ops@neelay.com",
        role: "ADMIN",
        active: true,
        createdAt: "2026-07-05T09:15:00Z",
        updatedAt: "2026-07-05T09:15:00Z",
    },

    {
        id: 6,
        username: "priya.desai",
        fullName: "Priya Desai",
        email: "priya@neelay.com",
        role: "ENGINEER",
        active: true,
        createdAt: "2026-07-06T10:00:00Z",
        updatedAt: "2026-07-06T10:00:00Z",
    },
];
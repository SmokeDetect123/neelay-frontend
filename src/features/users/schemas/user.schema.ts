import { z } from "zod";

export const userRoles = [
    "ADMIN",
    "ENGINEER",
] as const;

export const createUserSchema = z.object({
    username: z
        .string()
        .trim()
        .min(3, "Username must contain at least 3 characters.")
        .max(50, "Username cannot exceed 50 characters."),

    fullName: z
        .string()
        .trim()
        .min(3, "Full name must contain at least 3 characters.")
        .max(100, "Full name cannot exceed 100 characters."),

    email: z
        .string()
        .trim()
        .email("Please enter a valid email address."),

    password: z
        .string()
        .min(8, "Password must contain at least 8 characters.")
        .max(100, "Password cannot exceed 100 characters."),

    role: z.enum(userRoles),

    active: z.boolean(),
});

export const updateUserSchema = z.object({
    username: z
        .string()
        .trim()
        .min(3, "Username must contain at least 3 characters.")
        .max(50, "Username cannot exceed 50 characters."),

    fullName: z
        .string()
        .trim()
        .min(3, "Full name must contain at least 3 characters.")
        .max(100, "Full name cannot exceed 100 characters."),

    email: z
        .string()
        .trim()
        .email("Please enter a valid email address."),

    role: z.enum(userRoles),

    active: z.boolean(),
});

export type CreateUserFormValues = z.infer<typeof createUserSchema>;

export type UpdateUserFormValues = z.infer<typeof updateUserSchema>;
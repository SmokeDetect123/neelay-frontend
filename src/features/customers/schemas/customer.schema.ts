import { z } from "zod";

/*
|--------------------------------------------------------------------------
| Shared Validators
|--------------------------------------------------------------------------
*/

const customerName = z
    .string()
    .trim()
    .min(2, "Customer name must be at least 2 characters.")
    .max(150, "Customer name cannot exceed 150 characters.");

const customerAddress = z
    .string()
    .trim()
    .min(5, "Address must be at least 5 characters.")
    .max(500, "Address cannot exceed 500 characters.");

const customerEmail = z
    .string()
    .trim()
    .email("Invalid email address.")
    .or(z.literal(""));

const customerPhone = z
    .string()
    .trim()
    .max(20, "Phone number cannot exceed 20 characters.")
    .or(z.literal(""));

/*
|--------------------------------------------------------------------------
| Create Schema
|--------------------------------------------------------------------------
*/

export const createCustomerSchema = z.object({
    name: customerName,
    address: customerAddress,
    email: customerEmail,
    phone: customerPhone,
});

/*
|--------------------------------------------------------------------------
| Update Schema
|--------------------------------------------------------------------------
*/

export const updateCustomerSchema = createCustomerSchema;

/*
|--------------------------------------------------------------------------
| Form Types
|--------------------------------------------------------------------------
*/

export type CreateCustomerFormValues =
    z.infer<typeof createCustomerSchema>;

export type UpdateCustomerFormValues =
    z.infer<typeof updateCustomerSchema>;
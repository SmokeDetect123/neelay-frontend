import { CustomerResponse } from "../types/customer.types";

export const mockCustomers: CustomerResponse[] = [
    {
        id: 1,
        name: "Naval Hospital Mumbai",
        address: "INS Ashwini, Colaba, Mumbai",
        phone: "+91 9876543210",
        email: "navalhospital@example.com",
        createdAt: "2026-07-01T09:15:00Z",
    },
    {
        id: 2,
        name: "KEM Hospital",
        address: "Parel, Mumbai",
        phone: "+91 9988776655",
        email: "kem@example.com",
        createdAt: "2026-07-02T11:30:00Z",
    },
    {
        id: 3,
        name: "AIIMS Delhi",
        address: "Ansari Nagar, New Delhi",
        phone: "+91 9123456789",
        email: "aiims@example.com",
        createdAt: "2026-07-05T14:10:00Z",
    },
];
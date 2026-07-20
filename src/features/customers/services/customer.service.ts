import { mockCustomers } from "../mock/customers.mock";

import type {
    CustomerResponse,
    CreateCustomerRequest,
    UpdateCustomerRequest,
} from "../types/customer.types";

class CustomerService {
    async getCustomers(): Promise<CustomerResponse[]> {
        return [...mockCustomers];
    }

    async getCustomerById(
        id: number
    ): Promise<CustomerResponse | undefined> {
        return mockCustomers.find(
            (customer) => customer.id === id
        );
    }

    async createCustomer(
        request: CreateCustomerRequest
    ): Promise<CustomerResponse> {
        const customer: CustomerResponse = {
            id:
                mockCustomers.length > 0
                    ? Math.max(
                          ...mockCustomers.map((c) => c.id)
                      ) + 1
                    : 1,

            ...request,

            createdAt: new Date().toISOString(),
        };

        mockCustomers.push(customer);

        return customer;
    }

    async updateCustomer(
        id: number,
        request: UpdateCustomerRequest
    ): Promise<CustomerResponse> {
        const customer = mockCustomers.find(
            (c) => c.id === id
        );

        if (!customer) {
            throw new Error("Customer not found.");
        }

        customer.name = request.name;
        customer.address = request.address;
        customer.phone = request.phone;
        customer.email = request.email;

        return customer;
    }

    async deleteCustomer(id: number): Promise<void> {
        const index = mockCustomers.findIndex(
            (customer) => customer.id === id
        );

        if (index === -1) {
            throw new Error("Customer not found.");
        }

        mockCustomers.splice(index, 1);
    }
}

export const customerService = new CustomerService();
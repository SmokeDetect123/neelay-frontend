"use client";

import { useCallback, useEffect, useState } from "react";

import { customerService } from "../services/customer.service";
import {
    CreateCustomerRequest,
    CustomerResponse,
    UpdateCustomerRequest,
} from "../types/customer.types";

export function useCustomers() {
    const [customers, setCustomers] = useState<CustomerResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();

    const loadCustomers = useCallback(
        async (signal?: AbortSignal): Promise<CustomerResponse[]> => {
            const data = await customerService.getCustomers();

            if (signal?.aborted) {
                return [];
            }

            return data;
        },
        [],
    );

    useEffect(() => {
        const controller = new AbortController();

        async function initialize() {
            try {
                const data = await loadCustomers(controller.signal);

                if (controller.signal.aborted) {
                    return;
                }

                setCustomers(data);
                setError(undefined);
            } catch (err) {
                if (controller.signal.aborted) {
                    return;
                }

                setError(
                    err instanceof Error
                        ? err.message
                        : "Failed to load customers.",
                );
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        void initialize();

        return () => {
            controller.abort();
        };
    }, [loadCustomers]);

    const refresh = useCallback(async () => {
        setLoading(true);

        try {
            const data = await loadCustomers();

            setCustomers(data);
            setError(undefined);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to load customers.",
            );
        } finally {
            setLoading(false);
        }
    }, [loadCustomers]);

    const getCustomerById = (id: number) =>
        customerService.getCustomerById(id);

    const createCustomer = async (
        request: CreateCustomerRequest,
    ): Promise<CustomerResponse> => {
        const customer =
            await customerService.createCustomer(request);

        await refresh();

        return customer;
    };

    const updateCustomer = async (
        id: number,
        request: UpdateCustomerRequest,
    ): Promise<CustomerResponse> => {
        const customer =
            await customerService.updateCustomer(id, request);

        await refresh();

        return customer;
    };

    const deleteCustomer = async (id: number): Promise<void> => {
        await customerService.deleteCustomer(id);

        await refresh();
    };

    return {
        customers,
        loading,
        error,
        refresh,
        getCustomerById,
        createCustomer,
        updateCustomer,
        deleteCustomer,
    };
}
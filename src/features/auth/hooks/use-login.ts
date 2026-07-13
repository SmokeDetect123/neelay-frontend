"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import authService from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { LoginRequest } from "@/types/auth";
import { ApiError } from "@/types/error";

export function useLogin() {

    const router = useRouter();

    const login = useAuthStore(
        (state) => state.login
    );

    const [loading, setLoading] =
        useState(false);

    const handleLogin = async (
        data: LoginRequest
    ) => {

        try {

            setLoading(true);

            const response =
                await authService.login(data);

            login(response);

            toast.success(
                "Login successful."
            );

            router.replace(
                "/dashboard"
            );

        }

        catch (error) {

            const apiError =
                error as ApiError;

            toast.error(
                apiError.message
            );

        }

        finally {

            setLoading(false);

        }

    };

    return {

        loading,

        handleLogin,

    };

}
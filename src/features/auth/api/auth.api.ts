import axiosInstance from "@/lib/axios";

import {
    LoginRequest,
    LoginResponse,
} from "../types";

export const authApi = {
    login: async (
        payload: LoginRequest
    ): Promise<LoginResponse> => {
        const response = await axiosInstance.post(
            "/auth/login",
            payload
        );

        return response.data;
    },
};
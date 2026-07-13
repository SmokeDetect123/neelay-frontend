import axios, { AxiosError } from "axios";

import { ApiError } from "@/types/error";

export function parseApiError(error: unknown): ApiError {

    if (axios.isAxiosError(error)) {

        const axiosError = error as AxiosError<ApiError>;

        if (axiosError.response?.data) {

            return {

                status:

                    axiosError.response.data.status,

                message:

                    axiosError.response.data.message,

                timestamp:

                    axiosError.response.data.timestamp,

            };

        }

        return {

            status:

                axiosError.response?.status ?? 500,

            message:

                "Something went wrong.",

        };

    }

    if (error instanceof Error) {

        return {

            status: 500,

            message: error.message,

        };

    }

    return {

        status: 500,

        message: "Unexpected error.",

    };

}
import { AxiosRequestConfig } from "axios";

import axiosInstance from "@/lib/axios";

import { parseApiError } from "@/utils/error";

class ApiClient {

    async get<T>(

        url: string,

        config?: AxiosRequestConfig

    ): Promise<T> {

        try {

            const response =

                await axiosInstance.get<T>(

                    url,

                    config

                );

            return response.data;

        }

        catch (error) {

            throw parseApiError(error);

        }

    }

    async post<T, B = unknown>(

        url: string,

        body?: B,

        config?: AxiosRequestConfig

    ): Promise<T> {

        try {

            const response =

                await axiosInstance.post<T>(

                    url,

                    body,

                    config

                );

            return response.data;

        }

        catch (error) {

            throw parseApiError(error);

        }

    }

    async put<T, B = unknown>(

        url: string,

        body?: B,

        config?: AxiosRequestConfig

    ): Promise<T> {

        try {

            const response =

                await axiosInstance.put<T>(

                    url,

                    body,

                    config

                );

            return response.data;

        }

        catch (error) {

            throw parseApiError(error);

        }

    }

    async patch<T, B = unknown>(

        url: string,

        body?: B,

        config?: AxiosRequestConfig

    ): Promise<T> {

        try {

            const response =

                await axiosInstance.patch<T>(

                    url,

                    body,

                    config

                );

            return response.data;

        }

        catch (error) {

            throw parseApiError(error);

        }

    }

    async delete<T>(

        url: string,

        config?: AxiosRequestConfig

    ): Promise<T> {

        try {

            const response =

                await axiosInstance.delete<T>(

                    url,

                    config

                );

            return response.data;

        }

        catch (error) {

            throw parseApiError(error);

        }

    }

}

export const apiClient =

    new ApiClient();
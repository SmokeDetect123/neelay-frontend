import axios from "axios";

import { API_BASE_URL } from "@/constants/api";

import { TokenStorage } from "@/utils/token";

const axiosInstance = axios.create({

    baseURL: API_BASE_URL,

    timeout: 30000,

    headers: {

        "Content-Type":

            "application/json",

    },

});

axiosInstance.interceptors.request.use(

    (config) => {

        const auth =

            TokenStorage.get();

        if (auth?.token) {

            config.headers.Authorization =

                `Bearer ${auth.token}`;

        }

        return config;

    }

);

axiosInstance.interceptors.response.use(

    (response) => response,

    (error) => {

        if (

            error.response?.status === 401

        ) {

            TokenStorage.clear();

            window.dispatchEvent(

                new Event(

                    "unauthorized"

                )

            );

        }

        return Promise.reject(error);

    }

);

export default axiosInstance;
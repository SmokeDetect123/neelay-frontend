import { API_ENDPOINTS } from "@/constants/api";

import {

    LoginRequest,

    LoginResponse,

} from "@/types/auth";

import { apiClient } from "./api-client";

class AuthService {

    login(

        request: LoginRequest

    ) {

        return apiClient.post<

            LoginResponse,

            LoginRequest

        >(

            API_ENDPOINTS.AUTH.LOGIN,

            request

        );

    }

}

export default new AuthService();
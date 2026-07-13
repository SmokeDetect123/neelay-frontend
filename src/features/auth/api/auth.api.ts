import { LoginRequest, LoginResponse } from "@/types";
import axiosInstance from "@/lib/axios";

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
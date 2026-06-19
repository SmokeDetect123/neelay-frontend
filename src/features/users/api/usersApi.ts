import axiosInstance from "@/lib/axios";
import {
  CreateUserRequest,
  UserResponse,
} from "@/types";

export const usersApi = {
  createUser: async (
    payload: CreateUserRequest
  ): Promise<UserResponse> => {
    const response = await axiosInstance.post(
      "/users",
      payload
    );

    return response.data;
  },

  getUsers: async (): Promise<UserResponse[]> => {
    const response = await axiosInstance.get(
      "/users"
    );

    return response.data;
  },
};
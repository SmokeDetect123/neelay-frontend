import { create } from "zustand";

import {

    AuthState,

    LoginResponse,

} from "@/types/auth";

import { TokenStorage } from "@/utils/token";

export const useAuthStore = create<AuthState>(

    (set) => ({

        user: null,

        token: null,

        isAuthenticated: false,

        login: (

            response: LoginResponse

        ) => {

            TokenStorage.save(response);

            set({

                token: response.token,

                isAuthenticated: true,

                user: {

                    username: response.username,

                    role: response.role,

                },

            });

        },

        logout: () => {

            TokenStorage.clear();

            set({

                token: null,

                user: null,

                isAuthenticated: false,

            });

        },

        

    })

);
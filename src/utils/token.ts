import { LoginResponse } from "@/types/auth";

const STORAGE_KEY = "auth";

export const TokenStorage = {

    get(): LoginResponse | null {

        if (typeof window === "undefined") {

            return null;

        }

        const auth = localStorage.getItem(STORAGE_KEY);

        return auth ? JSON.parse(auth) : null;

    },

    save(data: LoginResponse) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(data)

        );

    },

    clear() {

        localStorage.removeItem(STORAGE_KEY);

    },

};
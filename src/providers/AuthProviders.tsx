"use client";

import {

    ReactNode,

    useEffect,

} from "react";

import {

    useRouter,

} from "next/navigation";

import {

    TokenStorage,

} from "@/utils/token";

import {

    useAuthStore,

} from "@/store/auth.store";

interface Props {

    children: ReactNode;

}

export default function AuthProvider({

    children,

}: Props) {

    const router =

        useRouter();

    const login =

        useAuthStore(

            (state) => state.login

        );

    const logout =

        useAuthStore(

            (state) => state.logout

        );

    useEffect(() => {

        const auth =

            TokenStorage.get();

        if (auth) {

            login(auth);

        }

    }, [login]);

    useEffect(() => {

        const unauthorized = () => {

            logout();

            router.replace("/login");

        };

        window.addEventListener(

            "unauthorized",

            unauthorized

        );

        return () =>

            window.removeEventListener(

                "unauthorized",

                unauthorized

            );

    }, [

        logout,

        router,

    ]);

    return children;

}
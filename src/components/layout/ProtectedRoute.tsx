"use client";

import {
    ReactNode,
    useEffect,
    useState,
} from "react";

import { useRouter } from "next/navigation";

import FullScreenLoader from "@/components/common/FullScreenLoader";

import { ROUTES } from "@/constants/routes";
import { TokenStorage } from "@/utils/token";

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({
    children,
}: ProtectedRouteProps) {
    const router = useRouter();

    const [checkingAuth, setCheckingAuth] =
        useState(true);

    const [authenticated, setAuthenticated] =
        useState(false);

    useEffect(() => {
        const auth = TokenStorage.get();

        if (!auth?.token) {
            router.replace(ROUTES.LOGIN);
            return;
        }

        setAuthenticated(true);
        setCheckingAuth(false);
    }, [router]);

    if (checkingAuth) {
        return <FullScreenLoader />;
    }

    if (!authenticated) {
        return null;
    }

    return <>{children}</>;
}
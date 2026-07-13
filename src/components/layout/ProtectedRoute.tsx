"use client";

import { ReactNode, useEffect } from "react";
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

    const auth = TokenStorage.get();

    useEffect(() => {
        if (!auth) {
            router.replace(ROUTES.LOGIN);
        }
    }, [auth, router]);

    if (!auth) {
        return <FullScreenLoader />;
    }

    return <>{children}</>;
}
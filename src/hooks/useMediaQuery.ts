"use client";

import { useSyncExternalStore } from "react";

export default function useMediaQuery(query: string) {
    const subscribe = (callback: () => void) => {
        const media = window.matchMedia(query);

        media.addEventListener("change", callback);

        return () => media.removeEventListener("change", callback);
    };

    const getSnapshot = () => {
        if (typeof window === "undefined") {
            return false;
        }

        return window.matchMedia(query).matches;
    };

    return useSyncExternalStore(
        subscribe,
        getSnapshot,
        () => false,
    );
}
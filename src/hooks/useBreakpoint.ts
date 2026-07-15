"use client";

import { useEffect, useState } from "react";

export function useBreakpoint() {

    const [mobile, setMobile] = useState(false);

    useEffect(() => {

        const media = window.matchMedia("(max-width: 1024px)");

        const update = () => setMobile(media.matches);

        update();

        media.addEventListener("change", update);

        return () =>
            media.removeEventListener("change", update);

    }, []);

    return {
        mobile,
    };
}
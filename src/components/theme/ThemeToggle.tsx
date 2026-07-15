"use client";

import dynamic from "next/dynamic";

const ClientThemeToggle = dynamic(
    () => import("./ClientThemeToggle"),
    {
        ssr: false,
    }
);

export default function ThemeToggle() {
    return <ClientThemeToggle />;
}
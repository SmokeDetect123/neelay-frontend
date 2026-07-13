"use client";

import AppLogo from "@/components/common/AppLogo";

import SidebarItem from "@/components/navigation/SidebarItem";

import { NAVIGATION } from "@/constants/navigation";

import { useAuthStore } from "@/store/auth.store";

export default function Sidebar() {

    const role = useAuthStore(
        (state) => state.user?.role
    );

    const navigation =
        NAVIGATION.filter((item) =>
            role
                ? item.roles.includes(role)
                : false
        );

    return (
        <aside
            className="
                flex
                h-screen
                w-72
                flex-col
                border-r
                border-slate-200
                bg-white
                px-5
                py-6
            "
        >
            <AppLogo className="mb-10" />

            <nav className="flex flex-1 flex-col gap-2">

                {navigation.map((item) => (

                    <SidebarItem
                        key={item.href}
                        item={item}
                    />

                ))}

            </nav>

            <div
                className="
                    border-t
                    border-slate-200
                    pt-5
                    text-center
                    text-xs
                    text-slate-400
                "
            >
                Version 1.0.0
            </div>

        </aside>
    );

}
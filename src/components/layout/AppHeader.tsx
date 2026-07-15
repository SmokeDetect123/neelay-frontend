"use client";

import {
    Bell,
    Menu,
} from "lucide-react";

import ThemeToggle from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";

import { useLayoutStore } from "@/store/layout.store";

export default function AppHeader() {

    const toggleSidebar = useLayoutStore(
        (state) => state.toggleSidebar
    );

    return (
        <header
            className="
                sticky
                top-0
                z-40
                flex
                h-20
                items-center
                justify-between
                border-b
                border-border
                bg-background/80
                px-8
                backdrop-blur-xl
            "
        >
            {/* Left */}

            <div className="flex items-center gap-4">

                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleSidebar}
                >
                    <Menu className="h-5 w-5" />
                </Button>

                <div>

                    <h2
                        className="
                            text-xl
                            font-semibold
                            text-foreground
                        "
                    >
                        Dashboard
                    </h2>

                    <p
                        className="
                            text-sm
                            text-muted-foreground
                        "
                    >
                        Welcome back.
                    </p>

                </div>

            </div>

            {/* Right */}

            <div
                className="
                    flex
                    items-center
                    gap-3
                "
            >

                <Button
                    variant="outline"
                    size="icon"
                >
                    <Bell className="h-5 w-5" />
                </Button>

                <ThemeToggle />

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-border
                        bg-card
                        px-4
                        py-2
                    "
                >

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-primary
                            font-bold
                            text-primary-foreground
                        "
                    >
                        A
                    </div>

                    <div>

                        <p
                            className="
                                text-sm
                                font-semibold
                                text-foreground
                            "
                        >
                            Administrator
                        </p>

                        <p
                            className="
                                text-xs
                                text-muted-foreground
                            "
                        >
                            ADMIN
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}
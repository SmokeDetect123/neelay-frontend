import { ReactNode } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface AuthCardProps {
    title: string;
    description: string;
    children: ReactNode;
}

export default function AuthCard({
    title,
    description,
    children,
}: AuthCardProps) {
    return (
        <Card
            className="
                border-0
                rounded-3xl
                shadow-2xl
                bg-white/95
                backdrop-blur-md
            "
        >
            <CardHeader className="pb-2">
                <CardTitle
                    className="
                        text-center
                        text-3xl
                        font-bold
                        text-slate-800
                    "
                >
                    {title}
                </CardTitle>

                <CardDescription
                    className="
                        text-center
                        text-slate-500
                    "
                >
                    {description}
                </CardDescription>
            </CardHeader>

            <CardContent className="pt-4">
                {children}
            </CardContent>
        </Card>
    );
}
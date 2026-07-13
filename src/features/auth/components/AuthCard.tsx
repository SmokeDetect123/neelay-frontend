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

    description?: string;

    children: ReactNode;

}

export default function AuthCard({

    title,

    description,

    children,

}: AuthCardProps) {

    return (

        <Card className="w-full max-w-md rounded-xl shadow-lg border-slate-200">

            <CardHeader className="space-y-2">

                <CardTitle className="text-2xl font-bold text-center">

                    {title}

                </CardTitle>

                {description && (

                    <CardDescription className="text-center">

                        {description}

                    </CardDescription>

                )}

            </CardHeader>

            <CardContent>

                {children}

            </CardContent>

        </Card>

    );

}
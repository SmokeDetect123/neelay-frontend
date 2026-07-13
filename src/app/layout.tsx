import "./globals.css";

import type { Metadata } from "next";

import { Toaster } from "sonner";

import QueryProviders from "@/providers/QueryProviders";
import AuthProviders from "@/providers/AuthProviders";

export const metadata: Metadata = {

    title: "Neelay Service Report System",

    description: "Service Report Management",

};

export default function RootLayout({

    children,

}: Readonly<{

    children: React.ReactNode;

}>) {

    return (

        <html lang="en">

            <body>

                <QueryProviders>

                    <AuthProviders>

                        {children}

                        <Toaster

                            richColors

                            position="top-right"

                        />

                    </AuthProviders>

                </QueryProviders>

            </body>

        </html>

    );

}
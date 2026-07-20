import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

import AppLayout from "@/components/layout/AppLayout";

import AuthProviders from "@/providers/AuthProviders";
import QueryProviders from "@/providers/QueryProviders";
import ThemeProvider from "@/providers/ThemeProviders";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Neelay Service Report System",
    description: "Enterprise Service Report Management System",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({
    children,
}: RootLayoutProps) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body
                className={`${inter.className} antialiased`}
            >
                <ThemeProvider>
                    <QueryProviders>
                        <AuthProviders>
                            <AppLayout>
                                {children}
                            </AppLayout>

                            <Toaster
                                richColors
                                position="top-right"
                                closeButton
                            />
                        </AuthProviders>
                    </QueryProviders>
                </ThemeProvider>
            </body>
        </html>
    );
}
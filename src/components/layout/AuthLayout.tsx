import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({
    children,
}: AuthLayoutProps) {
    return (
        <main
            className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-[#0A4DA3]
                via-[#2E7BEF]
                to-[#D62828]
                px-6
                py-10
            "
        >
            <div className="w-full max-w-md">
                {children}
            </div>
        </main>
    );
}
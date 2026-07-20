interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({
    children,
}: AuthLayoutProps) {
    return (
        <main className="relative min-h-screen overflow-hidden bg-slate-50">

            {/* Background */}
            <div className="absolute inset-0">

                {/* Main Blue Gradient */}
                <div
                    className="absolute inset-0 bg-gradient-to-br  from-sky-100  via-blue-50  to-slate-50               "
                 />

                {/* Blue Glow */}
                <div
                    className="
                        absolute
                        -top-44
                        -left-44
                        h-[700px]
                        w-[700px]
                        rounded-full
                        bg-sky-300/35
                        blur-3xl
                    "
                />

                {/* Secondary Blue Glow */}
                <div
                    className="
                        absolute
                        bottom-[-220px]
                        right-[-220px]
                        h-[650px]
                        w-[650px]
                        rounded-full
                        bg-blue-200/35
                        blur-3xl
                    "
                />

                {/* Soft Red Accent */}
                <div
                    className="
                        absolute
                        top-0
                        right-0
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-red-200/20
                        blur-3xl
                    "
                />

                {/* White Highlight */}
                <div
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[650px]
                        w-[650px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-white/55
                        blur-3xl
                    "
                />
            </div>

            {/* Content */}
            <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </div>

        </main>
    );
}
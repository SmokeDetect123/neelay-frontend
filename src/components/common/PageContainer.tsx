import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageContainerProps {
    children: ReactNode;
    className?: string;
}

export default function PageContainer({
    children,
    className,
}: PageContainerProps) {
    return (
        <main
            className={cn(
                "mx-auto w-full max-w-[1600px] space-y-8 px-6 py-8 sm:px-8 lg:px-10 xl:px-12",
                className
            )}
        >
            {children}
        </main>
    );
}
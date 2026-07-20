import Image from "next/image";

import { cn } from "@/lib/utils";

interface AppLogoProps {
    className?: string;
}

export default function AppLogo({
    className,
}: AppLogoProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center gap-4",
                className
            )}
        >
            <Image
                src="/images/neelay-logo.png"
                alt="Neelay Medizintech"
                width={170}
                height={70}
                priority
                className="h-auto w-auto object-contain"
            />

            <div className="text-center">

                <h1 className="text-lg font-bold tracking-tight text-foreground">
                    Neelay
                </h1>

                <p className="text-sm text-muted-foreground">
                    Service Report System
                </p>

            </div>

        </div>
    );
}
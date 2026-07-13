import Image from "next/image";

interface AppLogoProps {
    className?: string;
}

export default function AppLogo({
    className = "",
}: AppLogoProps) {
    return (
        <div
            className={`flex flex-col items-center space-y-4 ${className}`}
        >
            <Image
                src="/images/neelay-logo.png"
                alt="Neelay Medizintech"
                width={220}
                height={90}
                priority
                className="object-contain"
            />

            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                    Service Report System
                </h1>

                <p className="mt-2 text-blue-100">
                    Secure Service & Calibration Management
                </p>
            </div>
        </div>
    );
}
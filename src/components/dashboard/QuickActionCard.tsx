import Link from "next/link";

import { ArrowRight, LucideIcon } from "lucide-react";

import Surface from "@/components/common/Surface";

interface QuickActionCardProps {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

export default function QuickActionCard({
    title,
    description,
    href,
    icon: Icon,
}: QuickActionCardProps) {
    return (
        <Link href={href} className="group">

            <Surface
                className="
                    h-full
                    cursor-pointer
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-500
                    hover:shadow-lg
                "
            >
                <div className="flex h-full flex-col">

                    <div
                        className="
                            mb-5
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-blue-100
                        "
                    >
                        <Icon className="h-6 w-6 text-blue-700" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                        {title}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
                        {description}
                    </p>

                    <div
                        className="
                            mt-6
                            flex
                            items-center
                            gap-2
                            font-medium
                            text-blue-700
                        "
                    >
                        Open

                        <ArrowRight
                            className="
                                h-4
                                w-4
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </div>

                </div>

            </Surface>

        </Link>
    );
}
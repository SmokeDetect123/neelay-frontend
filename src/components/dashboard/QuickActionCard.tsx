import Link from "next/link";

import { ArrowRight, LucideIcon } from "lucide-react";

import { Surface } from "@/components/common/Surface";

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
        <Link href={href} className="group block h-full">

            <Surface
                className="
                    relative
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    border-border
                    bg-card
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/30
                    hover:shadow-xl
                "
            >

                {/* Brand Accent */}

                <div
                    className="
                        absolute
                        left-0
                        top-0
                        h-1
                        w-full
                        bg-gradient-to-r
                        from-blue-700
                        via-blue-500
                        to-red-500
                    "
                />

                {/* Icon */}

                <div
                    className="
                        mb-6
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-primary/10
                        text-primary
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:bg-primary
                        group-hover:text-white
                    "
                >
                    <Icon className="h-8 w-8" />
                </div>

                {/* Title */}

                <h3
                    className="
                        text-xl
                        font-semibold
                        tracking-tight
                        text-foreground
                    "
                >
                    {title}
                </h3>

                {/* Description */}

                <p
                    className="
                        mt-3
                        flex-1
                        text-sm
                        leading-7
                        text-muted-foreground
                    "
                >
                    {description}
                </p>

                {/* Footer */}

                <div
                    className="
                        mt-8
                        flex
                        items-center
                        justify-between
                        border-t
                        border-border
                        pt-4
                    "
                >

                    <span
                        className="
                            text-sm
                            font-semibold
                            text-primary
                        "
                    >
                        Open Module
                    </span>

                    <ArrowRight
                        className="
                            h-5
                            w-5
                            text-primary
                            transition-transform
                            duration-300
                            group-hover:translate-x-2
                        "
                    />

                </div>

            </Surface>

        </Link>
    );
}
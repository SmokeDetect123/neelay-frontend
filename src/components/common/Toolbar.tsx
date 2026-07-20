import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ToolbarProps {
    title?: string;
    description?: string;
    actions?: ReactNode;
    className?: string;
}

export default function Toolbar({
    title,
    description,
    actions,
    className,
}: ToolbarProps) {
    return (
        <section
            className={cn(
                "flex flex-col gap-6 rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 lg:flex-row lg:items-center lg:justify-between",
                className
            )}
        >
            <div className="space-y-1">

                {title && (
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                        {title}
                    </h2>
                )}

                {description && (
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                )}

            </div>

            {actions && (
                <div className="flex flex-wrap items-center gap-3">
                    {actions}
                </div>
            )}
        </section>
    );
}

//just type inside <Toolbar></Toolbar>
    /* <Toolbar
        title="Users"
        description="Manage application users."
        actions={<Button>Add User</Button>}
    />
Example use case for toolbar, can be used in any page where there is a need for a toolbar. Just pass the title, description and actions as props.
*/
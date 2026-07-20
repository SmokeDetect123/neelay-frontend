import { LucideIcon, Inbox } from "lucide-react";

import Surface from "./Surface";

interface EmptyStateProps {
    title: string;
    description: string;
    icon?: LucideIcon;
}

export default function EmptyState({
    title,
    description,
    icon: Icon = Inbox,
}: EmptyStateProps) {
    return (
        <Surface className="p-12">

            <div className=" flex flex-col items-center justify-center text-center">
                <div className=" mb-5 rounded-full bg-slate-100 p-5">
                    <Icon className="h-10 w-10 text-slate-400" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                    {title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                    {description}
                </p>

            </div>

        </Surface>
    );
}

/*        <EmptyState
            title="No Users Found"
            description="Create your first user to get started."
        />
Sample use case for empty state, can be used in any page where there is no data to show. Just pass the title and description as props.
*/
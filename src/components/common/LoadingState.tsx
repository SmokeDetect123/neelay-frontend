import { AlertCircle } from "lucide-react";

import {Surface} from "./Surface";

interface ErrorStateProps {
    title?: string;
    description?: string;
}

export default function ErrorState({
    title = "Something went wrong",
    description = "We were unable to load the requested information. Please try again.",
}: ErrorStateProps) {
    return (
        <Surface className="p-12">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-5 rounded-full bg-destructive/10 p-5">
                    <AlertCircle className="h-10 w-10 text-destructive" />
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                    {title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                    {description}
                </p>
            </div>
        </Surface>
    );
}
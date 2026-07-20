import ContentCard from "./ContentCard";

interface ErrorStateProps {
    title?: string;
}

export default function ErrorState({
    title = "Something went wrong.",
}: ErrorStateProps) {
    return (
        <ContentCard className="flex h-72 items-center justify-center">
            <p className="text-sm text-destructive">
                {title}
            </p>
        </ContentCard>
    );
}
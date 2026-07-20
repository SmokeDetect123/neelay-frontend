import ContentCard from "./ContentCard";

interface LoadingStateProps {
    title?: string;
}

export default function LoadingState({
    title = "Loading...",
}: LoadingStateProps) {
    return (
        <ContentCard className="flex h-72 items-center justify-center">
            <p className="text-sm text-muted-foreground">
                {title}
            </p>
        </ContentCard>
    );
}
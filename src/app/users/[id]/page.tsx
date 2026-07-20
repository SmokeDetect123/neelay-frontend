import UserDetailsPage from "@/features/users/pages/UserDetailsPage";

interface UserDetailsRouteProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function Page({
    params,
}: UserDetailsRouteProps) {
    const { id } = await params;

    return (
        <UserDetailsPage
            userId={id}
        />
    );
}
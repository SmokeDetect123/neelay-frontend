import UserDetailsWorkspace from "../components/UserDetailsWorkspace";

interface UserDetailsPageProps {
    userId: string;
}

export default function UserDetailsPage({
    userId,
}: UserDetailsPageProps) {
    return (
        <UserDetailsWorkspace
            userId={userId}
        />
    );
}
"use client";

import { PageContainer } from "@/components/common/PageContainer";
import DetailsHeader from "@/components/common/DetailsHeader";
import { ContentCard } from "@/components/common/ContentCard";
import Badge from "@/components/common/Badge";
import InfoField from "@/components/common/InfoField";

import { useUsers } from "../hooks/useUsers";

interface UserDetailsWorkspaceProps {
    userId: string;
}

export default function UserDetailsWorkspace({
    userId,
}: UserDetailsWorkspaceProps) {

    const {
        users,
        isLoading,
        isError,
    } = useUsers();

    if (isLoading) {
        return (
            <PageContainer>

                <DetailsHeader
                    title="Loading..."
                    backHref="/users"
                />

                <ContentCard className="p-6">
                    Loading user...
                </ContentCard>

            </PageContainer>
        );
    }

    if (isError) {
        return (
            <PageContainer>

                <DetailsHeader
                    title="Error"
                    backHref="/users"
                />

                <ContentCard className="p-6">
                    Unable to load user.
                </ContentCard>

            </PageContainer>
        );
    }

    const user = users.find(
        (item) => item.id === Number(userId)
    );

    if (!user) {
        return (
            <PageContainer>

                <DetailsHeader
                    title="User Not Found"
                    backHref="/users"
                />

                <ContentCard className="p-6">
                    The requested user does not exist.
                </ContentCard>

            </PageContainer>
        );
    }

    return (
    <PageContainer>

        <DetailsHeader
            title={user.fullName}
            description={user.email}
            backHref="/users"
            backLabel="Back to Users"
        />

        <div className="grid gap-6 lg:grid-cols-3">

            <div className="space-y-6 lg:col-span-2">

                <ContentCard className="p-6">

                    <h2 className="mb-6 text-lg font-semibold">
                        Basic Information
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">

                        <InfoField
                            label="Username"
                            value={user.username}
                        />

                        <InfoField
                            label="Full Name"
                            value={user.fullName}
                        />

                        <InfoField
                            label="Email"
                            value={user.email}
                        />

                        <InfoField
                            label="Role"
                            value={
                                <Badge variant="info">
                                    {user.role}
                                </Badge>
                            }
                        />

                        <InfoField
                            label="Status"
                            value={
                                <Badge
                                    variant={
                                        user.active
                                            ? "success"
                                            : "danger"
                                    }
                                >
                                    {user.active
                                        ? "Active"
                                        : "Inactive"}
                                </Badge>
                            }
                        />

                    </div>

                </ContentCard>

                <ContentCard className="p-6">

                    <h2 className="mb-6 text-lg font-semibold">
                        Account Information
                    </h2>

                    <div className="grid gap-6 md:grid-cols-2">

                        <InfoField
                            label="Created"
                            value={user.createdAt}
                        />

                        <InfoField
                            label="Updated"
                            value={user.updatedAt}
                        />

                    </div>

                </ContentCard>

            </div>

            <ContentCard className="h-fit p-6">

                <h2 className="mb-6 text-lg font-semibold">
                    Quick Actions
                </h2>

                <div className="space-y-3">

                    <button className="w-full rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-accent">
                        Edit User
                    </button>

                    <button className="w-full rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-accent">
                        {user.active
                            ? "Deactivate User"
                            : "Activate User"}
                    </button>

                    <button className="w-full rounded-lg border border-destructive text-destructive px-4 py-2 text-sm font-medium transition hover:bg-destructive hover:text-destructive-foreground">
                        Delete User
                    </button>

                </div>

            </ContentCard>

        </div>

    </PageContainer>
);
    
}
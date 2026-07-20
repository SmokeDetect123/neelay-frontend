"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";

import { UserForm } from "./UserForm";

import { useUsers } from "../hooks/useUsers";

import type {
    UserResponse,
    UpdateUserRequest,
} from "../types/user.types";

export default function EditUserWorkspace() {
    const router = useRouter();
    const params = useParams();

    const {
        getUserById,
        updateUser,
    } = useUsers();

    const [user, setUser] = useState<UserResponse | null>(null);

    const [isLoading, setIsLoading] = useState(true);

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        async function loadUser() {
            try {
                setIsLoading(true);

                const id = Number(params.id);

                if (Number.isNaN(id)) {
                    setUser(null);
                    return;
                }

                const response = await getUserById(id);

                setUser(response);
            } catch (error) {
                console.error(error);

                toast.error("Failed to load user.");

                setUser(null);
            } finally {
                setIsLoading(false);
            }
        }

        loadUser();
    }, [params.id, getUserById]);

    async function handleSubmit(
        values: UpdateUserRequest
    ) {
        if (!user || isSubmitting) {
            return;
        }

        try {
            setIsSubmitting(true);

            await updateUser(user.id, values);

            toast.success("User updated successfully.");

            router.push("/users");
        } catch (error) {
            console.error(error);

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to update user."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    function handleCancel() {
        if (isSubmitting) {
            return;
        }

        router.push("/users");
    }

    if (isLoading) {
        return (
            <PageContainer>
                <PageHeader
                    title="Edit User"
                    description="Loading user..."
                />
            </PageContainer>
        );
    }

    if (!user) {
        return (
            <PageContainer>
                <PageHeader
                    title="User Not Found"
                    description="The requested user could not be found."
                />

                <Button
                    onClick={() => router.push("/users")}
                >
                    Back to Users
                </Button>
            </PageContainer>
        );
    }

    return (
        <PageContainer>
            <PageHeader
                title="Edit User"
                description={`Editing ${user.fullName}`}
            />

            <UserForm
                mode="edit"
                initialValues={user}
                loading={isSubmitting}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
        </PageContainer>
    );
}
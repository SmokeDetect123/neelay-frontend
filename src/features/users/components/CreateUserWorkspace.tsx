"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

import { UserForm } from "./UserForm";

import { useUsers } from "../hooks/useUsers";

import type { CreateUserRequest } from "../types/user.types";

export default function CreateUserWorkspace() {
    const router = useRouter();

    const { createUser } = useUsers();

    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(values: CreateUserRequest) {
        if (isSubmitting) {
            return;
        }

        try {
            setIsSubmitting(true);

            await createUser(values);

            toast.success("User created successfully.");

            router.push("/users");
        } catch (error) {
            console.error(error);

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to create user."
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

    return (
        <PageContainer>
            <PageHeader
                title="Create User"
                description="Create a new user account."
            />

            <UserForm
                mode="create"
                loading={isSubmitting}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
        </PageContainer>
    );
}
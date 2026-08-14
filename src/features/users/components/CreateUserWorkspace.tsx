"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

import { UserForm } from "./UserForm";

import { useUsers } from "../hooks/useUsers";

import type {
    CreateUserRequest,
    UpdateUserRequest,
} from "../types/user.types";

export default function CreateUserWorkspace() {
    const router = useRouter();

    const { createUser } = useUsers();

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    async function handleSubmit(
        values: CreateUserRequest | UpdateUserRequest
    ) {
        if (isSubmitting) {
            return;
        }

        try {
            setIsSubmitting(true);

            /*
             * This workspace is permanently in "create" mode,
             * so UserForm will provide a CreateUserRequest here.
             *
             * The union is required because UserForm is shared
             * between create and edit modes.
             */
            await createUser(
                values as CreateUserRequest
            );

            toast.success(
                "User created successfully."
            );

            router.push("/users");
        } catch (error) {
            console.error(
                "Failed to create user",
                error
            );

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
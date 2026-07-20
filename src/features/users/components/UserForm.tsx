"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    createUserSchema,
    updateUserSchema,
    type CreateUserFormValues,
    type UpdateUserFormValues,
} from "../schemas/user.schema";

import type {
    CreateUserRequest,
    UpdateUserRequest,
    UserResponse,
} from "../types/user.types";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";

import { FormSection } from "@/components/forms/FormSection";
import { FormGrid } from "@/components/forms/FormGrid";
import { FormActions } from "@/components/forms/FormActions";
import { RequiredLabel } from "@/components/forms/RequiredLabel";

interface UserFormProps {
    mode: "create" | "edit";

    initialValues?: Partial<UserResponse>;

    loading?: boolean;

    onSubmit: (
        values: CreateUserRequest | UpdateUserRequest
    ) => void | Promise<void>;

    onCancel: () => void;
}

export function UserForm({
    mode,
    initialValues,
    loading = false,
    onSubmit,
    onCancel,
}: UserFormProps) {
    const isCreate = mode === "create";

    const form = useForm<
        CreateUserFormValues | UpdateUserFormValues
    >({
        resolver: zodResolver(
            isCreate
                ? createUserSchema
                : updateUserSchema
        ),

        defaultValues: isCreate
            ? {
                  username: "",
                  fullName: "",
                  email: "",
                  password: "",
                  role: "ENGINEER",
                  active: true,
              }
            : {
                  username: "",
                  fullName: "",
                  email: "",
                  role: "ENGINEER",
                  active: true,
              },
    });

    useEffect(() => {
        if (!initialValues) {
            return;
        }

        if (isCreate) {
            form.reset({
                username: initialValues.username ?? "",
                fullName: initialValues.fullName ?? "",
                email: initialValues.email ?? "",
                password: "",
                role: initialValues.role ?? "ENGINEER",
                active: initialValues.active ?? true,
            });

            return;
        }

        form.reset({
            username: initialValues.username ?? "",
            fullName: initialValues.fullName ?? "",
            email: initialValues.email ?? "",
            role: initialValues.role ?? "ENGINEER",
            active: initialValues.active ?? true,
        });
    }, [
        form,
        initialValues,
        isCreate,
    ]);

    async function handleSubmit(
        values:
            | CreateUserFormValues
            | UpdateUserFormValues
    ) {
        if (isCreate) {
            await onSubmit(values as CreateUserRequest);
            return;
        }

        const {
            username,
            ...updateRequest
        } = values as UpdateUserFormValues;

        void username;

        await onSubmit(updateRequest);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-8"
            >
                <FormSection title="Basic Information">
                    <FormGrid>

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>

                                    <FormLabel>
                                        <RequiredLabel>
                                            Username
                                        </RequiredLabel>
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter username"
                                            readOnly={!isCreate}
                                            disabled={!isCreate}
                                        />
                                    </FormControl>

                                    <FormMessage />

                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>

                                    <FormLabel>
                                        <RequiredLabel>
                                            Full Name
                                        </RequiredLabel>
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter full name"
                                        />
                                    </FormControl>

                                    <FormMessage />

                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>

                                    <FormLabel>
                                        <RequiredLabel>
                                            Email
                                        </RequiredLabel>
                                    </FormLabel>

                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="name@example.com"
                                        />
                                    </FormControl>

                                    <FormMessage />

                                </FormItem>
                            )}
                        />

                        {isCreate && (
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel>
                                            <RequiredLabel>
                                                Password
                                            </RequiredLabel>
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="password"
                                                placeholder="Enter password"
                                            />
                                        </FormControl>

                                        <FormMessage />

                                    </FormItem>
                                )}
                            />
                        )}

                    </FormGrid>
                </FormSection>
                                                <FormSection title="Account Settings">
                    <FormGrid>
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        <RequiredLabel>
                                            Role
                                        </RequiredLabel>
                                    </FormLabel>

                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select role" />
                                            </SelectTrigger>
                                        </FormControl>

                                        <SelectContent>
                                            <SelectItem value="ADMIN">
                                                Administrator
                                            </SelectItem>

                                            <SelectItem value="ENGINEER">
                                                Engineer
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="active"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center gap-3 rounded-lg border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={(checked) =>
                                                field.onChange(Boolean(checked))
                                            }
                                        />
                                    </FormControl>

                                    <div className="space-y-1">
                                        <FormLabel>
                                            Active Account
                                        </FormLabel>

                                        <p className="text-sm text-muted-foreground">
                                            User can log into the system.
                                        </p>
                                    </div>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </FormGrid>
                </FormSection>

                <FormActions>
                    <Button
                        type="button"
                        variant="outline"
                        disabled={loading}
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? "Saving..."
                            : isCreate
                                ? "Create User"
                                : "Save Changes"}
                    </Button>
                </FormActions>
            </form>
        </Form>
    );
}
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import AppFormField from "./AppFormField";
import LoadingButton from "./LoadingButton";

import {
    LoginFormData,
    loginSchema,
} from "../schemas/login.schema";

import { useLogin } from "../hooks/use-login";

export default function LoginForm() {
    const { loading, handleLogin } = useLogin();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    return (
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
            <AppFormField
                control={control}
                errors={errors}
                name="username"
                label="Username"
                placeholder="Enter username"
            />

            <AppFormField
                control={control}
                errors={errors}
                name="password"
                label="Password"
                placeholder="Enter password"
                type="password"
            />

            <LoadingButton
                loading={loading}
                text="Login"
            />
        </form>
    );
}
"use client";

import {
    Control,
    FieldErrors,
    FieldPath,
    FieldValues,
    useController,
} from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AppFormFieldProps<T extends FieldValues> {

    control: Control<T>;

    errors: FieldErrors<T>;

    name: FieldPath<T>;

    label: string;

    placeholder: string;

    type?: string;

}

export default function AppFormField<T extends FieldValues>({
    control,
    errors,
    name,
    label,
    placeholder,
    type = "text",
}: AppFormFieldProps<T>) {

    const {

        field,

    } = useController({

        control,

        name,

    });

    return (

        <div className="space-y-2">

            <Label htmlFor={name}>

                {label}

            </Label>

            <Input
    {...field}
    id={name}
    type={type}
    placeholder={placeholder}
    autoComplete={
        type === "password"
            ? "current-password"
            : "username"
    }
    className="h-11 rounded-xl  border-slate-300  focus:border-blue-600  focus:ring-blue-600"/>

            {errors[name] && (

                <p className="text-sm text-red-500">

                    {String(errors[name]?.message)}

                </p>

            )}

        </div>

    );

}
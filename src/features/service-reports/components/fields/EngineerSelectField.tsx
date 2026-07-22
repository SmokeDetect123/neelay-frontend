"use client";

import { useFormContext } from "react-hook-form";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { RequiredLabel } from "@/components/forms/RequiredLabel";

// Adjust this import to match your Users module
import { useUsers } from "@/features/users/hooks/useUsers";

import type { ServiceReportFormValues } from "../../types/serviceReportForm.types";

export default function EngineerSelectField() {
    const form = useFormContext<ServiceReportFormValues>();

    const { users } = useUsers();

    return (
        <FormField
            control={form.control}
            name="attendedBy"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        <RequiredLabel>
                            Engineer
                        </RequiredLabel>
                    </FormLabel>

                    <Select
                        value={
                            field.value
                                ? field.value.toString()
                                : ""
                        }
                        onValueChange={(value) =>
                            field.onChange(Number(value))
                        }
                    >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select engineer" />
                            </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                            {users.map((user) => (
                                <SelectItem
                                    key={user.id}
                                    value={user.id.toString()}
                                >
                                    {user.fullName}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
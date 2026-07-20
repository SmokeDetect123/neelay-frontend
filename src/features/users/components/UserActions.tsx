"use client";

import {
    Eye,
    Pencil,
    Power,
    Trash2,
    MoreHorizontal,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

interface UserActionsProps {
    active: boolean;
}

export default function UserActions({
    active,
}: UserActionsProps) {
    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>

                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                >
                    <MoreHorizontal className="h-4 w-4" />
                </Button>

            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                side="bottom"
                sideOffset={10}
                collisionPadding={24}
                avoidCollisions
                className="z-50 w-56 rounded-xl border border-border bg-popover p-2 shadow-2xl"
            >

                <DropdownMenuItem className="cursor-pointer gap-3 rounded-md">
                    <Eye className="h-4 w-4" />
                    View Details
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer gap-3 rounded-md">
                    <Pencil className="h-4 w-4" />
                    Edit User
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="cursor-pointer gap-3 rounded-md">
                    <Power className="h-4 w-4" />
                    {active
                        ? "Deactivate User"
                        : "Activate User"}
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    disabled
                    className="gap-3 rounded-md text-destructive"
                >
                    <Trash2 className="h-4 w-4" />
                    Delete User
                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>
    );
}
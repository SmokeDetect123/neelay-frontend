"use client";

import { useState } from "react";

import UsersFilters from "./UsersFilters";
import UsersSearch from "./UsersSearch";
import UsersTable from "./UsersTable";
import UsersToolbar from "./UsersToolbar";

export default function UsersWorkspace() {

    const [search, setSearch] = useState("");

    const [role, setRole] = useState("ALL");

    const [status, setStatus] = useState("ALL");

    return (

        <div className="space-y-6">

            <UsersToolbar />

            <div
                className="
                    flex
                    flex-col
                    gap-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >
                

            </div>

            <UsersTable />

        </div>

    );

}
"use client";

import { Plus } from "lucide-react";

import Toolbar from "@/components/common/Toolbar";
import { Button } from "@/components/ui/button";

export default function ServiceReportsToolbar() {
    return (
        <Toolbar
            title="Service Reports"
            description="Manage all customer service reports."
            actions={
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Service Report
                </Button>
            }
        />
    );
}
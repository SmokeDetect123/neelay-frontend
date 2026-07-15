import { Plus } from "lucide-react";

import Toolbar from "@/components/common/Toolbar";
import { Button } from "@/components/ui/button";

export default function UsersToolbar() {
    return (
        <Toolbar
            title="Users"
            description="Manage administrators and engineers."
            actions={
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New User
                </Button>
            }
        />
    );
}
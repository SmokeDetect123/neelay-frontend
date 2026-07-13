import {
    CalendarDays,
    ClipboardCheck,
    FileText,
    LayoutDashboard,
    Users,
    Wrench,
} from "lucide-react";

import { Role, ROLES } from "./roles";

export interface NavigationItem {

    title: string;

    href: string;

    icon: React.ComponentType<{
        className?: string;
    }>;

    roles: Role[];

}

export const NAVIGATION: NavigationItem[] = [

    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        roles: [
            ROLES.ADMIN,
            ROLES.ENGINEER,
        ],
    },

    {
        title: "Users",
        href: "/users",
        icon: Users,
        roles: [
            ROLES.ADMIN,
        ],
    },

    {
        title: "Service Reports",
        href: "/service-reports",
        icon: FileText,
        roles: [
            ROLES.ADMIN,
            ROLES.ENGINEER,
        ],
    },

    {
        title: "Calibration Reports",
        href: "/calibration-reports",
        icon: ClipboardCheck,
        roles: [
            ROLES.ADMIN,
            ROLES.ENGINEER,
        ],
    },

    {
        title: "Installation Reports",
        href: "/installation-reports",
        icon: Wrench,
        roles: [
            ROLES.ADMIN,
            ROLES.ENGINEER,
        ],
    },

];
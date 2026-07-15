import { Badge } from "@/components/ui/badge";

type StatusVariant =
    | "ACTIVE"
    | "INACTIVE"
    | "PENDING"
    | "COMPLETED"
    | "FAILED";

interface StatusBadgeProps {
    status: StatusVariant | string;
}

export default function StatusBadge({
    status,
}: StatusBadgeProps) {

    const getClasses = () => {

        switch (status) {

            case "ACTIVE":
            case "COMPLETED":

                return "bg-green-100 text-green-700 hover:bg-green-100";

            case "INACTIVE":

                return "bg-slate-100 text-slate-700 hover:bg-slate-100";

            case "PENDING":

                return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";

            case "FAILED":

                return "bg-red-100 text-red-700 hover:bg-red-100";

            default:

                return "bg-blue-100 text-blue-700 hover:bg-blue-100";

        }

    };

    return (

        <Badge
            variant="secondary"
            className={getClasses()}
        >
            {status}
        </Badge>

    );

}
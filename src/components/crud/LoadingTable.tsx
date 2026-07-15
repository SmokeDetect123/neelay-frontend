import ContentCard from "@/components/common/ContentCard";

export default function LoadingTable() {
    return (
        <ContentCard className="overflow-hidden">

            <div className="animate-pulse">

                <div className="border-b bg-slate-50 px-6 py-4">

                    <div className="h-5 w-40 rounded bg-slate-200" />

                </div>

                {Array.from({ length: 8 }).map((_, index) => (

                    <div
                        key={index}
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            px-6
                            py-5
                        "
                    >

                        <div className="h-4 w-36 rounded bg-slate-200" />

                        <div className="h-4 w-28 rounded bg-slate-200" />

                        <div className="h-4 w-24 rounded bg-slate-200" />

                        <div className="h-4 w-24 rounded bg-slate-200" />

                    </div>

                ))}

            </div>

        </ContentCard>
    );
}
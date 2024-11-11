import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className=" relative">
            <Skeleton className="h-48 w-full rounded-lg" />


            <div className="absolute bottom-0 left-0 bg-background p-2 h-8 w-40 rounded-tr-lg ">
            </div>
        </div>
    )
}

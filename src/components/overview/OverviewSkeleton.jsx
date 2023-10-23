import { Skeleton } from "@mui/material"

const OverviewSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
            <div className="rounded-xl shadow-md p-4 bg-white">
                <Skeleton height={50} width={50} className=" rounded-full self-center mb-4" variant="" />
                <Skeleton height={15} width="75%" className="rounded-md" />
                <Skeleton height={15} width="50%" className="rounded-md" sx={{ my: 1 }} />
                <Skeleton height={15} width="100%" className="rounded-md" />
            </div>
            <div className="rounded-xl shadow-md p-4 bg-white">
                <Skeleton height={50} width={50} className=" rounded-full self-center mb-4" variant="" />
                <Skeleton height={15} width="75%" className="rounded-md" />
                <Skeleton height={15} width="50%" className="rounded-md" sx={{ my: 1 }} />
                <Skeleton height={15} width="100%" className="rounded-md" />
            </div>
            <div className="rounded-xl shadow-md p-4 bg-white">
                <Skeleton height={50} width={50} className=" rounded-full self-center mb-4" variant="" />
                <Skeleton height={15} width="75%" className="rounded-md" />
                <Skeleton height={15} width="50%" className="rounded-md" sx={{ my: 1 }} />
                <Skeleton height={15} width="100%" className="rounded-md" />
            </div>
            <div className="rounded-xl shadow-md p-4 bg-white">
                <Skeleton height={50} width={50} className=" rounded-full self-center mb-4" variant="" />
                <Skeleton height={15} width="75%" className="rounded-md" />
                <Skeleton height={15} width="50%" className="rounded-md" sx={{ my: 1 }} />
                <Skeleton height={15} width="100%" className="rounded-md" />
            </div>
            <div className="rounded-xl shadow-md p-4 bg-white">
                <Skeleton height={50} width={50} className=" rounded-full self-center mb-4" variant="" />
                <Skeleton height={15} width="75%" className="rounded-md" />
                <Skeleton height={15} width="50%" className="rounded-md" sx={{ my: 1 }} />
                <Skeleton height={15} width="100%" className="rounded-md" />
            </div>
            <div className="rounded-xl shadow-md p-4 bg-white">
                <Skeleton height={50} width={50} className=" rounded-full self-center mb-4" variant="" />
                <Skeleton height={15} width="75%" className="rounded-md" />
                <Skeleton height={15} width="50%" className="rounded-md" sx={{ my: 1 }} />
                <Skeleton height={15} width="100%" className="rounded-md" />
            </div>
            <div className="rounded-xl shadow-md p-4 bg-white">
                <Skeleton height={50} width={50} className=" rounded-full self-center mb-4" variant="" />
                <Skeleton height={15} width="75%" className="rounded-md" />
                <Skeleton height={15} width="50%" className="rounded-md" sx={{ my: 1 }} />
                <Skeleton height={15} width="100%" className="rounded-md" />
            </div>
            <div className="rounded-xl shadow-md p-4 bg-white">
                <Skeleton height={50} width={50} className=" rounded-full self-center mb-4" variant="" />
                <Skeleton height={15} width="75%" className="rounded-md" />
                <Skeleton height={15} width="50%" className="rounded-md" sx={{ my: 1 }} />
                <Skeleton height={15} width="100%" className="rounded-md" />
            </div>

        </div>
    )
}

export default OverviewSkeleton;
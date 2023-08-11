import Link from "next/link"
function Guide() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                <div className="bg-gray-100 rounded-md shadow-md p-2 text-center">
                    <Link href={"/menu"}>Menu</Link>
                </div>
                <div className="bg-gray-100 rounded-md shadow-md p-2 text-center">
                    <Link href={"/categories"}>Categories</Link>
                </div>
                <div className="bg-gray-100 rounded-md shadow-md p-2 text-center">
                    <Link href={"discount"}>Discount</Link>
                </div>
            </div>
        </>
    )
}

export default Guide

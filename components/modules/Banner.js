
import Link from "next/link"
function Banner() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left">
                    <h2 className="my-3 font-bold text-xl">BOTOFOOD</h2>
                    <p className="my-3">
                        Food Delivery & Take Out !!
                    </p>
                    <p className="text-gray-400 my-2">
                        BOTOFOOD is an online food ordering and delivery platform launched by Uber in 2014.<br/>Meals are delivered by couriers using cars, scooters, bikes or on foot
                    </p>
                    <Link className="bg-green-400 text-white rounded-md shadow-md px-2 py-1 md:text-xl" href="/menu">See All</Link>

                </div>
                <div>
                    <img src="/images/banner.png" className="overflow-hidden object-cover w-auto"/>

                </div>
            </div>
        </>
    )
}

export default Banner

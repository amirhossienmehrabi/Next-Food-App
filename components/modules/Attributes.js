import Fast from "../icons/Fast"
import Food from "../icons/Food"
import Choice from "../icons/Choice"
import Clock from "../icons/Clock"

function Attributes() {
    return (
        <>
        <div>
            <h3 className="text-center md:text-left my-4 font-bold text-xl md:text-2xl text-green-400">Why Us?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4">
                <div className="flex flex-col items-center bg-gray-100 rounded-md shadow-md text-sm md:text-base p-1">
                    <Fast/>
                    <p className="my-1">Fast</p>
                </div>
                <div className="flex flex-col items-center bg-gray-100 rounded-md shadow-md text-sm md:text-base p-1">
                    <Food/>
                    <p className="my-1">Best Restaurants</p>
                </div>
                <div className="flex flex-col items-center bg-gray-100 rounded-md shadow-md text-sm md:text-base p-1">
                    <Choice/>
                    <p className="my-1">
                        Your Choice
                    </p>
                </div>
                <div className="flex flex-col items-center bg-gray-100 rounded-md shadow-md text-sm md:text-base p-1">
                    <Clock/>
                    <p className="my-1">24-7</p>

                </div>
            </div>
        </div>

        </>
    )
}

export default Attributes

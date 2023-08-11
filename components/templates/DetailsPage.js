import Location from "../icons/Location"
import Dollar from "../icons/Dollar"

function DetailsPage(props) {
    const {id,name,price,discount,introduction,details,ingredients,recipe} = props

    return (
        <>
            <div>
                <div>
                    <h3 className="text-center md:text-left my-4 font-bold text-xl md:text-2xl text-green-400">Details</h3>
                </div>
                <div className="flex flex-col justify-center md:justify-start md:flex-row md:items-center">
                    <img src={`/images/${id}.jpeg`} alt='/' className="overflow-hidden object-cover w-60 rounded-md mr-4 "/>
                    <div>
                        <h3 className="mt-4 font-bold text-xl md:text-2xl text-green-400">{name}</h3>
                        <div className=" flex items-center my-3">
                            <Location/>
                            <span>
                                {details.map((loc) => <span key={loc.Cuisine}>{loc.Cuisine}</span>)}
                            </span>
                        </div>
                        <div className="flex items-center my-3" >
                                <Dollar/>
                                {
                                    discount ? (
                                    <span className="text-red-600">
                                        {(price * (100 - discount))/100 } $
                                    </span>
                                ) : <span>{price} $</span>
                                }
                        </div>
                        <div className="bg-red-600 text-white p-2 rounded-md shadow-md text-center">
                            {discount && <span>{discount} % OFF</span> }
                        </div>

                    </div>
                </div>
                <div className="my-3 leading-8">{introduction}</div>
                <div>
                    <h3 className="text-xl font-bold">Details</h3>
                    <ul>
                        {
                            details.map((items,index) => (
                                <li key={index} className="flex items-center leading-8 ">
                                    <p>{Object.keys(items)[0]} : </p>
                                    <span className="ml-3">{Object.values(items)[0]}</span>
                                </li>
                            )
                                
                            )
                        }
                    </ul>
                </div>
                <div className="my-3">
                    <h3 className="text-xl font-bold">ingredients</h3>
                    <ul>
                        {
                            ingredients.map((items,index) => (
                                <li key={index} className="flex items-center leading-8 w-full my-4">
                                    <span className="mr-3 text-md md:text-2xl">{index + 1}.</span>
                                    <p className="text-md md:text-xl">{items}</p>
                                    
                                </li>
                            )
                                
                            )
                        }
                    </ul>

                </div>
                <div className="my-3">
                <h3 className="text-xl font-bold">recipe</h3>
                <ul>
                        {
                            recipe.map((items,index) => (
                                <li key={index} className = {`${index % 2 == 0 ? "bg-green-200 flex " : "bg-green-600" } "flex w-full rounded-md items-center px-3 py-2 my-2 " `}  >
                                    <div className="flex items-center  ">
                                        <span className="mr-3 text-md md:text-2xl">{index + 1}.</span>
                                        <p>{items}</p>
                                    </div>
                                    
                                </li>
                            )
                                
                            )
                        }
                    </ul>
                


                </div>


            </div>
           
        </>
    )
}

export default DetailsPage

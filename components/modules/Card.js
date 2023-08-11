import Location from "../icons/Location"
import Dollar from "../icons/Dollar"
import Link from "next/link"


function Card(props) {
    const {id,discount,name,price,details} = props
    return (
        <>
            <div className='flex flex-col justify-center p-2 rounded-md shadow-md'>
                <div className="relative">
                    <img src={`/images/${id}.jpeg`} alt='/' className="overflow-hidden object-cover w-full rounded-md "/>
                    <div className="bg-red-600 text-white absolute left-0 top-0 z-30 rounded-sm">
                        {discount ? <span>{discount} % </span> : null}
                    </div>
                    
                </div>
                
                
                <div className="flex items-center justify-between my-3">
                    <h4>{name}</h4>
                    <div className="flex items-center">
                        <Location className="mr-3"/>
                        <span>
                            {details.map((loc) => <span key={loc.Cuisine}>{loc.Cuisine}</span>)}
                        </span> 
                    </div>
                </div>
                <div className="flex items-center  my-3">
                    <Dollar/>
                    {
                        discount ? (
                            <span className="text-red-600">
                                {(price * (100 - discount))/100 } $
                            </span>
                        ) : <span>{price} $</span>
                    }
                    

                </div>
                <div>
                    <Link href={`/menu/${id}`}>
                        <button className="bg-green-400 text-white p-2 rounded-md shadow-md w-full">
                            See ALL Details
                        </button>
                    </Link>
                </div>
                
            </div>
        </>
    )
}

export default Card

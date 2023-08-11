import { useRouter } from "next/router"
import { useState } from "react"
import Card from "../modules/Card"


function CategoriesPage({data}) {
    const router = useRouter()
    const [query,setQuery] = useState({difficulty:"",time:""})
    const changeHandler = e => {
        setQuery({...query,[e.target.name] : e.target.value})
    }
   
    const searchHandler = () => {
        router.push({
            pathname : `/categories`,
            query,
        })
    }
    return (
        <>
            <div>
                <h1 className="text-center md:text-left my-4 font-bold text-xl md:text-2xl text-green-400">Categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 mx-auto">
                    <div className="text-center md:text-left">
                        <select value={query.difficulty} name="difficulty" onChange={changeHandler} className="border-2 border-blue-500  rounded-md shadow-md hover:bg-green-200">
                            <option value="">Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                    <div className="text-center md:text-left">
                        <select value={query.time} name="time" onChange={changeHandler} className="border-2 border-blue-400  rounded-md shadow-md hover:bg-green-200">
                                <option value="">Cooking Time</option>
                                <option value="more">More than 30 minutes</option>
                                <option value="less">Less than 30 minutes</option>
                                
                        </select>
                    </div>
                    <button onClick={searchHandler} className="bg-green-400 rounded-md shadow-md">Search</button>
                </div>
                <div className="flex items-center justify-center my-9">
                        {!data.length && <img src="/images/search.png"/>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 my-4">
                    
                    {
                        data.map((food) => <Card key={food.key} {...food} />)
                    }
                </div>
            </div>
        </>
    )
}

export default CategoriesPage

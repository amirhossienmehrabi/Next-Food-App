
import Card from "../modules/Card"
function MenuPage({info}) {
    
    
    return (
        <>
            <div>
                <h1 className="text-center md:text-left my-4 font-bold text-xl md:text-2xl text-green-400">Menu</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                   {info.map((food) => (
                    <Card key = {food.id} {...food}/>
                   ))}
                    
                </div>
            </div>

        </>
    )
}

export default MenuPage

import Binance from "../icons/Binance"
import SpaceX from "../icons/SpaceX"
import Tesla from "../icons/Tesla"
import Apple from "../icons/Apple"

function Companies() {
    return (
        <>
            <div className="flex items-center justify-between gap-x-4">
                <Binance/>
                <Apple/>
                <SpaceX/>
                <Tesla/>

            </div>
        </>
    )
}

export default Companies

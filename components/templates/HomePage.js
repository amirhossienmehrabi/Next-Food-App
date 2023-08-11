import Attributes from "../modules/Attributes"
import Banner from "../modules/Banner"
import Companies from "../modules/Companies"
import Defenition from "../modules/Defenition"
import Guide from "../modules/Guide"
import Instruction from "../modules/Instruction"
import Restriction from "../modules/Restriction"


function HomePage() {
    return (
        <>
            <section className="w-full px-5 py-2">
                <div className="max-w-screen-md md:max-w-screen-xl  mx-auto p-2">
                    <Banner/>
                    <Attributes/>
                    <Defenition/>
                    <Companies/>
                    <Instruction/>
                    <Guide/>
                    <Restriction/>

                </div>

            </section>

        </>
    )
}

export default HomePage

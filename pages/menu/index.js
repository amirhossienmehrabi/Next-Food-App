

import MenuPage from "../../components/templates/MenuPage"


function Menu({info}) {
    return (
        <>
            <section className="w-full px-5 py-2">
                <div className="max-w-screen-md md:max-w-screen-xl mx-auto p-2">
                    <MenuPage info = {info}/>

                </div>
            </section>
        </>
    )
}

export default Menu;

export async function getStaticProps() {
    const res = await fetch(`http://localhost:4000/data`);
    const info = await res.json();
    console.log(info)


    return{
        props:{
            info
        },
        revalidate:1 * 60 * 60 
    }
}

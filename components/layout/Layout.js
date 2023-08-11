import Link from "next/link"

const menu = [{name:"Menu",href:"/menu"},{name:"Categories",href:"/categories"}]
function Layout({children}) {
    return (
        <>
            <header className="w-full px-5 py-2">
                <div className="max-w-screen-md md:max-w-screen-xl  mx-auto flex justify-between items-center p-2">
                    <div>
                        <Link href={"/"} className="text-green-500 font-bold text-sm md:text-xl">BOTOFOOD</Link>

                    </div>
                    <div className="flex items-center">
                        <ul className="flex items-center justify-between">
                            {menu.map((item)=><li className="mx-3 text-sm md:text-xl" key={item.name}>
                                <Link href={`/${item.href}`}>{item.name}</Link>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </header>
            <div>
                {children}
            </div>
            <footer className="w-full px-5 py-2 bg-green-400 text-white">
                <div className="max-w-screen-xl mx-auto flex items-center justify-center p-2">
                    <a href="https://botostart.ir" target="_blank" rel="noreferrer" className="text-xs mr-2 md:text-xl font-bold">Botostart</a>
                    <h3 className="text-xs md:text-xl"> Next.js course | BOTOFOOD Project &copy; </h3>

                </div>
                
                
            </footer>
        </>
    )
}

export default Layout

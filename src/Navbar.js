import ProImg from "./images/ProImg.svg"
const Navbar = () => {
    return ( 
        <>
            <nav className="bg-white w-full h-16 flex border-b-2 px-6">
                <div>
                   <div className="border-2 p-1 border-gray-100 rounded-md px-2 my-3 w-96  flex">
                    <i className="fa fa-search  text-gray-500 mr-2 mt-1"></i>
                    <input type="text" placeholder="Search" className="outline-none w-full "/>                 
                      </div>
                </div>
                <div className="ml-auto flex  py-4">
                        <div className="mr-4">
                            <i className="fa fa-bell text-black"></i>
                        </div>
                        <img src={ProImg} className="fa fa-bell text-black mr-4"/>
                        <p className="mr-2">Nebuchi Nwadiogbu</p>
                </div>
            </nav>
        </>
     );
}

export default Navbar;
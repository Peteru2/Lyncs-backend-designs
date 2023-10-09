import loggo from  "./images/logo.png"
import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
    const navSideList = [
        {
            title: "Dashboard",
            url: "/"
        },
        {
            title: "Pending Orders",
            url: ""

        },
        {
            title: "Pending Deliveries",
            url: ""
        },
        {
            title: "Closed Deliveries",
            url: ""
        },



    ]
    const location = useLocation()
    return ( 
        <>
            <aside className="bg-white sideBar border-r-2 w-48">
                    <div className="p-4  border-b-2 flex h-16 justify-center">
                        <img src={loggo} alt="logo" />
                    </div>

            <div>
                <div className=" text-gray-500 mt-12">
                    {navSideList.map((item,index) =>{
                        return(
                    <div key={index} className={`flex text-sm my-8 cursor-pointer ${location.pathname === item.url ? "border-r-2 border-yellow-200" :""} `}>
                      <Link to={item.url} className="flex">  <i className="fa fa-dashbord mr-5 ">d</i><p>{item.title}</p></Link>
                    </div>

                    )
                })
                }
                </div>
            </div>
            <div className="text-center text-gray-500 mb-auto">

             <button>
               <i className="fa fa-logout"></i> Logout
             </button>
            </div>
            </aside>
        </>
     );
}
 
export default SideBar;
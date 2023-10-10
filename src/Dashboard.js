import SideBar from "./SideBar";
import Navbar from "./Navbar"

import Frame1 from  "./images/Frame1.svg"
import Vector1 from "./images/Vector1.svg"
import smallVect from "./images/diagram.svg"
import Funnel from "./images/FunnelSimple.svg"
import Loader from "./Loader";
import { useState, useEffect} from 'react'

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate loading for 3 seconds (adjust as needed)
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
  
      // Clear the timeout if the component unmounts
      return () => clearTimeout(loadingTimeout);
    }, []);
    const overview = [
        {
            title: "Pending Orders",
            topImg: Frame1,
        },
        {
            title: "Pending Deliveries",
            topImg: Frame1,
        },
        {
            title: "Pushed Items",
            topImg: Frame1,
        },
        {
            title: "Pending Deliveries",
            topImg: Frame1,
        },
        {
            title: "Pushed Items",
            topImg: Frame1,
        }
    ]
    
    return ( 
        <>
            <section>
                <div className="flex cont ">
                <SideBar />
                <section className="w-full">
                <Navbar />
            {isLoading ? (<Loader />) :  (
                    <div className="mx-6 my-4">
                        <div className="flex w-full">
                        <h4 className="text-2xl my-2 font-bold">Overview</h4>
                        <div className="ml-auto">
                            <img src={Funnel} alt="funnel"/>
                        </div>
                        </div>
                        <div className="flex  mt-7 w-full flex-wrap">
                    
                        {overview.map((item,index)=>{
                            return(

                                <div className=" mr-2 my-2 bg-white p-6 w-72 flex-wrap rounded-md">                               
                             <div className="flex ">
                                  <div className="">
                                    <div>
                                        <img src={item.topImg} alt="" />
                                    </div>
                                    <h2 className="text-gray-600">
                                        {item.title}
                                    </h2>
                                    <h4 className="text-black text-2xl mt-2 font-bold">
                                        20
                                    </h4>
                                  </div>
                                  <div className="ml-auto">
                                    <img src={Vector1} alt="vect" />
                                  </div>
                                </div>

                                <div className="flex mt-3 items-center w-full">
                                    <div className="flex">
                                    <div className="mt-1 mr-2">
                                        <img src= {smallVect} alt="" />
                                    </div>
                                    <p className="text-gray-400"><span className="text-green-400 mr-2">3.70%</span> Last month</p>
                                    </div>
                                    <div className="ml-auto bg_color rounded-md py-2 px-4 text-white">
                                        <p>View</p>
                                    </div>
                                </div>
                                </div>

                            )
                        })}
                       
                  
                    </div>
                    
                    </div>
            )}
                    </section>
            </div>
            
            </section>
        </>
     );
}
 
export default Dashboard;
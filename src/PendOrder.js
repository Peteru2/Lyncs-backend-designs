import SideBar from "./SideBar";
import Navbar from "./Navbar";
import AirPod from "./images/airpod.png"

const PendOrder = () => {
    const pendOrderList = [
        {
            sn: 1,
            Source: "Konga",
            OrderId: "#783r",
            CreatedAt: "20/6/2023",
            NumberOfItem: 2,
            OrderCateg: "Fashion And Electronics",
            View: "View",
            Action: "Push"

        }
    ]
    return ( 
        <>
        <section>
                <div className="flex cont ">
                <SideBar />
                    <section className="w-full mainPage">
                    <Navbar />
                    <div className="mx-6 my-4 ">
                        <h3 className="text-2xl mt-2">Overview</h3>
                        <h2 className="my-3">Pending Orders</h2>
                        <div className="bg-white pendingOrder ">
                        <div className="pendingList">                       
                             <div className="grid grid-cols-8 text-white gap-4 bg_color h-10 px-2 text-sm rounded-t-md items-center">
                        <p>S/N</p>
                        <p>Source</p>
                        <p>Order Id</p>
                        <p>Created on</p>
                        <p>Number of Item</p>
                        <p>Order Category</p>
                        <p>View</p>
                        <p>Action</p>
                        </div>

                        {pendOrderList.map((item, index) => {
                        return (
                            <div key={index} className="grid grid-cols-8  gap-4 border-b-2 h-14 px-2 text-sm items-center">
                            <p>{item.sn}</p>
                            <p>{item.Source}</p>
                            <p>{item.OrderId}</p>
                            <p>{item.CreatedAt}</p>
                            <p>{item.NumberOfItem}</p>
                            <p>{item.OrderCateg}</p>
                            <p>{item.View}</p>
                            <p className="p-2 px-3 bg_color rounded-md text-white w-20 text-center">{item.Action}</p>
                            </div>
                        );
                        })}
                        </div>
                    </div>            
                    </div>
                        <div>
                            <div className="modal">
                                <div className="flex w-full">
                                    <h3>Pending Details</h3>
                                    <p className="ml-auto"><i>i</i></p>
                                </div>
                                <h2 className="text-sm text-gray-400">See product information</h2>
                                <div className="grid grid-cols-2 gap-10 mt-4 ">
                                    <div className="flex-container">
                                        <img src={AirPod} alt="airpod" />
                                    </div>
                                    <div className="flex-container">
                                        <h5 className="text-sm text-gray-400">Product Name</h5>
                                        <h5 className=" text-black font-bold mt-2">Apple Airpod 2</h5>
                                        <h5 className="text-sm text-gray-400 mt-4">Price</h5>
                                        <h5 className=" text-black font-bold mt-2">N140,000.00</h5>
                                        <h5 className="text-sm text-gray-400 mt-4">Description</h5>
                                        <p className="text-sm">
                                            The Apple AirPods 2nd Generation redefine the way you experience audio, setting new standards for wireless earbuds. With their iconic design, seamless connectivity, and unmatched sound quality, these earbuds are a true testament to Apple's commitment to innovation and user-centric technology.<br/>Key Features:
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button className="bg_color w-full text-center text-white p-2 rounded-md">Push</button>
                                </div>
                            </div>
                            <div className="overlay"></div>
                        </div>
                    </section>
                </div>

                        
                </section>
        </>
     );
}
 
export default PendOrder;
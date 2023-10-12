import SideBar from "./SideBar";
import Navbar from "./Navbar";

import Pod from "./images/airpod.png"
import closeButton from "./images/forbidden-2.svg"
import { useState } from "react";
import clanMarchant from "./images/lyncsMarch.png"
import kongaMarchant from "./images/konga.png"

const PendOrder = () => {
    const pendOrderList = [
        {
            sn: 1,
            Source: "Konga",
            OrderId: "#783r",
            CreatedAt: "20/6/2023",
            NumberOfItem: 2,
            OrderCateg: "Fashion And Electronics",
            prodName:"Apple Airpod 2",
            Price:"N140,000.00",
            proImg: Pod,
            Description:"The Apple AirPods 2nd Generation redefine the way you experience audio, setting new standards for wireless earbuds. With their iconic design, seamless connectivity, and unmatched sound quality, these earbuds are a true testament to Apple's commitment to innovation and user-centric technology.<br/>Key Features:",
            View: "View",
            Action: "Push"

        },
        {
            sn: 2,
            Source: "Jumia",
            OrderId: "#4567",
            CreatedAt: "20/6/2023",
            NumberOfItem: 2,
            OrderCateg: "Fashion And Electronics",
            prodName:"Apple Airpod 45",
            Price:"N50,000.00",
            // proImg: Airpod,
            Description:"The Apple AirPods 2nd Generation redefine the way you experience audio, setting new standards for wireless earbuds. With their iconic design, seamless connectivity, and unmatched sound quality, these earbuds are a true testament to Apple's commitment to innovation and user-centric technology.<br/>Key Features:",
            View: "View",
            Action: "Push"

        }
    ]
    const [preview, setPreview] = useState(false)
    const [push, setPush] = useState(false)
    const [div, setDiv] = useState(false)

    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

    const handlePreview = (itemIndex) =>{
        
        setSelectedItemIndex(itemIndex);
        setPreview(true);
        // setPreview(prev => !prev)
    }
    const handlePreviewClose = () =>{
        setPreview(false);
    }
    const handlePush = () =>{
                setPush(true)
    }
    const handleDivClick = () =>{
                    setDiv(
                        (change) => !change
                    )
    } 
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
                            {/* <img src={AirPod} alt="air" /> */}
                        <div className="pendingList">                       
                             <div className="grid grid-cols-8 text-white gap-3 bg_color h-10 px-2 text-xs rounded-t-md items-center">
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
                            
                            <div key={index}>
                            <div  className="grid grid-cols-8  gap-3 border-b-2 h-14 px-2 text-xs items-center">
                            <p>{item.sn}</p>
                            <p>{item.Source}</p>
                            <p>{item.OrderId}</p>
                            <p>{item.CreatedAt}</p>
                            <p>{item.NumberOfItem}</p>
                            <p>{item.OrderCateg}</p>
                            <p onClick={()=>handlePreview(index)} className="text_color cursor-pointer">{item.View}</p>
                            <p className="p-2 px-3 bg_color rounded-md text-white w-20 text-center">{item.Action}</p>
                            </div>
                            </div>
                            )})}


                            <div className={`modal ${preview ? "modal-show":""}`}>                            
                                {selectedItemIndex !== null && (
                                    <div  key={selectedItemIndex} >
                                    <div  className={push ? "hidden" : "block"}>
                                    <div className="flex w-full">
                                        <h3>Pending Details</h3>
                                        <div className="ml-auto cursor-pointer" onClick={handlePreviewClose}><img src={closeButton} alt="closebutton" /></div>
                                    </div>
                                    <h2 className="text-sm text-gray-400">See product information</h2>
                                    <div className="flex justify-between gap-10 mt-4 ">
                                        <div className="prodImg  w-full">
                                            <img src={pendOrderList[selectedItemIndex].proImg} alt="airpod" />
                                        </div>
                                        <div className="flex-col flex-container">
                                            <h5 className="text-sm text-gray-400">Product Name</h5>
                                            <h5 className=" text-black font-bold mt-2">{pendOrderList[selectedItemIndex].prodName}</h5>
                                            <h5 className="text-sm text-gray-400 mt-3">Price</h5>
                                            <h5 className=" text-black font-bold mt-1">{pendOrderList[selectedItemIndex].Price}</h5>
                                            <h5 className="text-sm text-gray-400 mt-3">Description</h5>
                                            <p className="text-xs mt-2">
                                            {pendOrderList[selectedItemIndex].Description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <button className="bg_color w-full text-center text-white p-2 rounded-md outline-none" onClick={handlePush}>Push</button>
                                    </div>
                                    </div>

                                        <div className={push? "block" :"hidden"}>
                                        <div className="flex w-full">
                                        <h3>Select where to push products</h3>
                                        <div className="ml-auto cursor-pointer" onClick={handlePreviewClose}><img src={closeButton} alt="closebutton" /></div>
                                        </div>
                                        <h2 className="text-sm text-gray-400">You can select multiple market place</h2>

                                    <div className="marchant  w-full mt-4 " >
                                            <div className={ div ?" rounded-full lyncsImage" : "rounded-md lyncsImage "}>
                                                <h3>Clan Marchant</h3>
                                                <div className="mt-3 w-full justify-center ">
                                                    <img src={clanMarchant} alt="clanMarchant" onClick={handleDivClick} className={div ? "border-2 border-yellow-300":""} />
                                                </div>
                                            </div>
                                            <div className=" KongaImage">
                                                <h3>Other Market</h3>
                                                <div className="img mt-3">
                                                <div className=" w-full flex justify-center ">
                                                    <img src={kongaMarchant} alt="KongaMarchant" className="" />
                                                </div>
                                                </div>
                                            </div>

                                           
                                            <div>
                                            </div>
                                           
                                    </div>
                                    <div className="mt-12">
                                                <button className="bg_color text-white p-2 rounded-md w-full">
                                                        Push
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                     )}
                                </div>


                      
                        </div>
                    </div>            
                    </div>
                            <div className={preview?"overlay":""}></div>
                    </section>
                </div>

                        
                </section>
        </>
     );
}
 
export default PendOrder;
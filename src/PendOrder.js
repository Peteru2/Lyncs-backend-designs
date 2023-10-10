import SideBar from "./SideBar";
import Navbar from "./Navbar";

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
                    <section className="w-full">
                    <Navbar />
                    <div className="mx-6 my-4 ">
                        <h3 className="text-2xl mt-2">Overview</h3>
                        <h2 className="my-3">Pending Orders</h2>
                        <div className="bg-white pendingOrder ">
                        <div className="grid grid-cols-8 text-white bg_color h-10 px-2 text-sm rounded-t-md items-center">
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
                            <div key={index} className="grid grid-cols-8   border-b-2 h-14 px-2 text-sm items-center">
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

                    </section>
                </div>


                </section>
        </>
     );
}
 
export default PendOrder;
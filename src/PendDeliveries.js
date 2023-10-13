import SideBar from "./SideBar";
import Navbar from "./Navbar";

const PendDeliveries = () => {
    const pendDeliveriesList = [
        {
            sn: 1,
            Marchants: "Adeyemi Oshuporu",
            DeliveryId: "#76883r",
            CreatedAt: "20/6/2023",
            DeliveredProduct: "Samsung, Iphone, Nokia, Brush & Bar Soap",
            ProductAvailableOn:"Jumia",
          

        },
        {
            sn: 2,
            Marchants: "Adeyemi Oshuporu",
            DeliveryId: "#76883r",
            CreatedAt: "20/6/2023",
            DeliveredProduct: "Samsung, Iphone, Nokia, Brush & Bar Soap",
            ProductAvailableOn:"Jumia"

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
                        <h2 className="my-3">Pending Deliveries</h2>
                        <div className="bg-white pendingOrder ">
                            {/* <img src={AirPod} alt="air" /> */}
                        <div className="pendingList">                       
                             <div className="grid grid-cols-6 text-white gap-3 bg_color h-10 px-2 text-xs rounded-t-md items-center">
                        <p>S/N</p>
                        <p>Marchants</p>
                        <p>Delivery Id</p>
                        <p className="col-span-2">Delivered Product</p>
                        <p>Product Available On</p>
                        
                        </div>

                        {pendDeliveriesList.map((item, index) => {
                        return (
                            
                            <div key={index}>
                            <div  className="grid grid-cols-6  gap-3 border-b-2 h-14 px-2 text-xs items-center">
                            <p>{item.sn}</p>
                            <p>{item.Marchants}</p>
                            <p>{item.DeliveryId}</p>
                            <p className="col-span-2">{item.DeliveredProduct}</p>
                            <p>{item.ProductAvailableOn}</p>
                           
                            </div>
                            </div>
                            )})}

</div>
</div>
                            </div>
                            </section>
                    </div>
            </section>
        </>
     );
}
 
export default PendDeliveries;
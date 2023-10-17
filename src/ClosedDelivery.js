import SideBar from "./SideBar";
import Navbar from "./Navbar";
import axios from 'axios'
import { useEffect, useState } from "react";

// import { useSearch } from './SearchContext';
const ClosedDelivery = () => {
  
    useEffect(() => {
        // Make a GET request to the API
        axios.get('https://api.lyncs.africa/staff/closed-deliveries')
      
        .then((response) => {

            // Handle the successful response
            setData(response.data.data);
            console.log(response.data.data)
           
                    })
        .catch((error) => {
            // Handle errors
            console.error('Error fetching data:', error);
        });
    }, []);
      const [data, setData] = useState([]);

      const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data && data.data ? Object.values(data.data).slice(startIndex, endIndex) : [];

  const totalPages = data && data.data ? Math.ceil(Object.values(data.data).length / itemsPerPage) : 0;
  const currentSerialNumber = (currentPage - 1) * itemsPerPage + 1
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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
                        <h2 className="my-3">Closed Deliveries</h2>
                        <div className="bg-white pendingOrder ">
                            {/* <img src={AirPod} alt="air" /> */}
                        <div className="pendingList">                       
                             <div className="grid grid-cols-6 text-white gap-3 bg_color h-10 px-2 text-xs rounded-t-md items-center">
                        <p>S/N</p>
                        <p>Marchants</p>
                        <p>Order Id</p>
                        <p className="">Customer Name</p>
                        <p>Customer Phone num</p>
                        <p>Delivery Time</p>

                        
                        </div>

                        {paginatedData.map((item, index) => {
                                    const products = item.products[0]

                             const serialNumber = currentSerialNumber + index; 
                        return (
                            
                            <div key={index}>
                            <div  className="grid grid-cols-6  gap-3 border-b-2 h-14 px-2 text-xs items-center">
                            <p>{serialNumber}</p>
                            <p>{item.marchant.name}</p>
                            <p>{products.order_id}</p>
                            <p className="">{item.customer.name}</p>
                            <p>{item.ProductAvailableOn}</p>
                            <p>{item.delivered_at}</p>

                            
                            </div>
                            </div>
                            )})}

</div>
</div>
                    {totalPages > 1 && (
                    <div className="pagination flex my-4 justify-center">
                        <button className="w-8 h-8 rounded-full border-2" onClick={handlePrevPage} disabled={currentPage === 1}>
                                <i className="fa fa-arrow-left"></i>
                        </button>
                        <div className="page-numbers px-2    mx-3">
                        {Array.from({ length: totalPages }, (_,i) => i + 1).map((pageNumber) => (
                            <button
                            key={pageNumber}
                            onClick={() => setCurrentPage(pageNumber)}
                            className={`${currentPage === pageNumber ?"text_color": ""} px-2 `}
                            >
                            {pageNumber}
                            </button>
                        ))}
                        </div>
                        <button className="w-8 h-8  rounded-full border-2" onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <i className="fa fa-arrow-right "></i>
                        </button>
                    </div>
                    )}      
                            </div>
                            </section>
                    </div>
            </section>
        </>
     );
}
 
export default ClosedDelivery;
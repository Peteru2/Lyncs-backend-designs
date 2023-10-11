import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';

  import {  Doughnut } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
const Pied = () => {
        const data = {
            labels: ["Completed Deliveries", "Pending Deliveries", "Pushed Items", "Closed Orders", ],
            datasets: [
              {
                label: [],
                data: [10, 20, 15, 25,],
                backgroundColor: ["rgb(241, 135, 1)","#44CF6C","#F24236","#470FF4"],
                barThickness: 30
              },
             
            ],
          };
          
          const options = {
            responsive: true,
            plugins: {
              legend: {
                display:false,
                position: "right",
              },
              title: {
                display: true,
              },
            },
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: "X-Axis Label",
                },
                 grid:{
                  display: false
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "Y-Axis Label",
                },
                grid:{
                  display: false
                },
                min: 0,
                max: 50,
                ticks: {
                  stepSize: 5,  
                },
              },
            },
            elements: {
              bar: {
                barPercentage: 0.1, // Adjust the width of each bar (0.6 means 60% of the available space)
                categoryPercentage: 0.2, // Adjust the space between bars (0.8 means 80% of the available space)
              },
            },
          };
    return ( 
        <>
                <section>                
                                    <div className="Pie bg-white flex items-center">

                                    <Doughnut style={{width: "300px", height: "300px"}} options={options} data={data} />
                                    <div >
                                     <div className='flex'>
                                          <div className='w-4 h-4 bg-red-400 mx-2'></div>
                                          <p className='mx-2'>Pending Deliveries</p>
                                     </div>
                                    </div>
                                    </div>
                </section>
        </>
     );
}
 
export default Pied;
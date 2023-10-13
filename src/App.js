
import Dashboard from './Dashboard';
// import Login from './Login'; 
import PendOrder from './PendOrder';
import PendDeliveries from './PendDeliveries';
import { Route, Routes,  } from 'react-router-dom';
import "./style.css"

function App() {
  // const navigate = useNavigate();
  return (
    < >
    <Routes>
      
        {/* <Route path={'/'} element={<Login />} /> */}
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/Pending'} element={<PendOrder />} />
        <Route path={'/Pend-Deliveries'} element={<PendDeliveries />} />

        {/* <Route path="/" element={navigate("/login")} /> */}
       
    </Routes>      
      </>
  );
}

export default App;

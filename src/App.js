
import Dashboard from './Dashboard';
import Login from './Login'; 
import PendOrder from './PendOrder';
import PendDeliveries from './PendDeliveries';
import { Route, Routes } from 'react-router-dom';
import { SearchProvider } from './SearchContext'; 
// import MyTableComponent from './PendTable';

import "./style.css"
import AwaitingFeed from './AwaitingFeed';
// import { AuthProvider } from './AuthContext';

function App() {
  // const navigate = useNavigate();
  return (
    < >

<SearchProvider>
   {/* <AuthProvider> */}
   
     
       <Routes>
        
        <Route path={'/Login'} element={<Login />} />
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/Pending'} element={<PendOrder />} />

        <Route path={'/Pend-Deliveries'} element={<PendDeliveries />} />
        <Route path={'/Awaiting-Feedback'} element={<AwaitingFeed />} />


        {/* <Route path="/" element={navigate("/login")} /> */}
        
        </Routes>
       
   
     {/* </AuthProvider>  */}
    </SearchProvider>

      </>
  );
}

export default App;

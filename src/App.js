
import Dashboard from './Dashboard';
import Login from './Login'; 
import PendOrder from './PendOrder';
import PendDeliveries from './PendDeliveries';
import { Route, Routes } from 'react-router-dom';
import { SearchProvider } from './SearchContext'; 
// import MyTableComponent from './PendTable';

import "./style.css"
import AwaitingFeed from './AwaitingFeed';
// import { Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

function App() {
  // const navigate = useNavigate();
  return (
    < >


   <AuthProvider>
    <SearchProvider>
       <Routes>
       {/* <Route element={<Navigate to="/Login" />} path="/" /> */}
        <Route path={'/*'} element={<Login />} />
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/Pending'} element={<PendOrder />} />

        <Route path={'/Pend-Deliveries'} element={<PendDeliveries />} />
        <Route path={'/Awaiting-Feedback'} element={<AwaitingFeed />} />


        {/* <Route path="/" element={navigate("/login")} /> */}
        
        </Routes>
        </SearchProvider>
     </AuthProvider> 
    

      </>
  );
}

export default App;

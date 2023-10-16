
import Dashboard from './Dashboard';
import Login from './Login'; 
import PendOrder from './PendOrder';
import PendDeliveries from './PendDeliveries';
import { Route, Routes,  } from 'react-router-dom';
import { SearchProvider } from './SearchContext'; 
// import MyTableComponent from './PendTable';

import "./style.css"
import AwaitingFeed from './AwaitingFeed';

function App() {
  // const navigate = useNavigate();
  return (
    < >

<SearchProvider>
    <Routes>
      
        <Route path={'/Login'} element={<Login />} />
        <Route path={'/'} element={<Dashboard />} />Awaiting-Feedback
        <Route path={'/Pending'} element={<PendOrder />} />

        <Route path={'/Pend-Deliveries'} element={<PendDeliveries />} />
        <Route path={'/Awaiting-Feedback'} element={<AwaitingFeed />} />


        {/* <Route path="/" element={navigate("/login")} /> */}
    </Routes>      
    </SearchProvider>

      </>
  );
}

export default App;

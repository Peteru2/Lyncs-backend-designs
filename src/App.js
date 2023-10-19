import Dashboard from './Dashboard';
import Login from './Login';
import PendOrder from './PendOrder';
import PendDeliveries from './PendDeliveries';
import { Route, Routes } from 'react-router-dom';
import { SearchProvider } from './SearchContext';
// import MyTableComponent from './PendTable';
import AwaitingFeed from './AwaitingFeed';
import { AuthProvider } from './AuthContext';
import ClosedDelivery from './ClosedDelivery';
import "./style.css"

function App() {
  return (
    < >
      <AuthProvider>
        <SearchProvider>
          <Routes>
            {/* <Route element={<Navigate to="/Login" />} path="/" /> */}
            <Route path={'/login'} element={<Login />} />
            <Route path={'/'} element={<Dashboard />} />
            <Route path={'/pending'} element={<PendOrder />} />
            <Route path={'/pend-deliveries'} element={<PendDeliveries />} />
            <Route path={'/awaiting-feedback'} element={<AwaitingFeed />} />
            <Route path={'/closed-deliveries'} element={<ClosedDelivery />} />
            {/* <Route path="/" element={navigate("/login")} /> */}
          </Routes>
        </SearchProvider>
      </AuthProvider>


    </>
  );
}

export default App;

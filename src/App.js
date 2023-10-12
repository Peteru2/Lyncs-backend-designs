
import Dashboard from './Dashboard';
// import Login from './Login'; 
import PendOrder from './PendOrder';
import { Route, Routes,  } from 'react-router-dom';
import "./style.css"

function App() {
  // const navigate = useNavigate();
  return (
    < >
    <Routes>
      
        {/* <Route path={'/'} element={<Login />} /> */}
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/pending'} element={<PendOrder />} />
        {/* <Route path="/" element={navigate("/login")} /> */}
       
    </Routes>      
      </>
  );
}

export default App;


import Dashboard from './Dashboard';
import Login from './Login';
import PendOrder from './PendOrder';
import { Route, Routes } from 'react-router-dom';
import "./style.css"

function App() {
  return (
    < >
    <Routes>
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/ee'} element={<Login />} />
        <Route path={'/pending'} element={<PendOrder />} />
    </Routes>      
      </>
  );
}

export default App;


import Dashboard from './Dashboard';
import PendOrder from './PendOrder';


import { Route, Routes } from 'react-router-dom';
import "./style.css"

function App() {
  return (
    < >
    <Routes>
        {/* <Route path={'/'} element={<OverView />} /> */}
        <Route path={'/'} element={<Dashboard />} />
        <Route path={'/pending'} element={<PendOrder />} />
    </Routes>      
      </>
  );
}

export default App;

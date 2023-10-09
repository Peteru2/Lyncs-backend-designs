
import Dashboard from './Dashboard';

import { Route, Routes } from 'react-router-dom';
import "./style.css"

function App() {
  return (
    < >
    <Routes>
        {/* <Route path={'/'} element={<OverView />} /> */}
        <Route path={'/'} element={<Dashboard />} />
    </Routes>
    </>
  );
}

export default App;

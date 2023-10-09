
import OverView from './Overview';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    < >
    <Routes>
        <Route path={'/'} element={<OverView />} />
    </Routes>
    </>
  );
}

export default App;

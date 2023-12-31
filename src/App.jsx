import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/globals/Dashboard'
// import Overview from './views/Overview'
import Login from './views/Login'
import Overview from './views/Overview'
import './App.css'
import PendingOrders from './views/PendingOrder'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='overview' element={<Overview />} />
          <Route path='pending-overview' element={<PendingOrders />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App


import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import Dashboard from './pages/Dashboardashboard';
import Arcomponent from './components/Arcomponent';

function App() {
 

  return (
    <>

     <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/xr" element={<Arcomponent/>} />
      </Routes>
      </>
  )
}

export default App

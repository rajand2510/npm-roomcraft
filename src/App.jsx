
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';


import Arcomponent from './components/Arcomponent';
import Dashboard from './components/Dashboard';


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


import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { XrHitModelContainer } from 'room-craft';


import Dashboard from './components/Dashboard';
// import ARViewer from './components/ARViewer';



function App() {
 

  return (
    <>

     <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/xr" element={<XrHitModelContainer/>} />
      </Routes>
      </>
  )
}

export default App

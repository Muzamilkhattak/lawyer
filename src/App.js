import React from 'react'
import './App.css'

// bootstrap link
import 'bootstrap/dist/css/bootstrap.min.css';

// Rounting 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Landingpage from './Components/Landingpage/Landingpage';

export default function App() {
  return (
    <div className='main'>

<Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/landingpage' element={<Landingpage/>} />
      </Routes>
    </Router>

    </div>
  )
}

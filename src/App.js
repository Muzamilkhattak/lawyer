import React from 'react'
import './App.css'

// bootstrap link
import 'bootstrap/dist/css/bootstrap.min.css';

// Rounting 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Landingpage from './Components/Landingpage/Landingpage';
import Register from './Components/Register/Register';
import Wakeelr from './Components/Wakeelregistration/Wakeelr';
import Contact from './Components/Contactus/Contact';
import Media from './Components/Media/Media';
import About from './Components/Aboutus/About';
import Blog from './Components/Blog/Blog';

export default function App() {
  return (
    <div className='main'>

<Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/landingpage' element={<Landingpage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/register-wa' element={<Wakeelr/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/media' element={<Media/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </Router>

    </div>
  )
}

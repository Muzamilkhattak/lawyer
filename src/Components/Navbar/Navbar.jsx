import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/Img/log.png'
import { useNavigate } from 'react-router-dom';

function Navbar() {
const navigate = useNavigate();

  const [toogle, setToogle] = useState(false);

  const showtoogle = () => {
    setToogle(!toogle);
  }

  const gotologin = ()=>{
    navigate('/');
  }

  return (
    <>
      <div className="navmain">

        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className={toogle ? "listitems2" : "listitems"}>
          <li>Home</li>
          <li>Draft Documents</li>
          <li>Start a Busniness</li>
          <li>Media</li>
          <li>Services</li>
          <li>Blog</li>
        </div>

        <div className="logoutbut" onClick={gotologin}>
          Login
        </div>

        <div className="tooglebut" onClick={showtoogle}>
          |||
        </div>

      </div>

    </>
  )
}

export default Navbar;
import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/Img/log.png'

function Navbar() {
const [toogle , setToogle] = useState(false);

const showtoogle = ()=>{
    setToogle(!toogle);
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

<div className="logoutbut">
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
import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Contact.css'
import logo from '../../Assets/Img/login.svg'
import MapComponent from './Mapcom';
import Footer from '../Footer/Footer';

function Contact() {
  return (
    <>
    <Navbar/>
    <div className="conntactmain">

<div className="conttop">

<div className="topleft">
<div className="contform">

<div>Contact Us</div>

<label >Name</label><br />
<input type="text" placeholder='Enter Name'/><br />

<label >Email</label><br />
<input type="email" placeholder='Enter Email'/><br />

<label >Message</label><br />
<textarea name="" id="" cols="30" rows="5" placeholder='Enter Message'></textarea><br />

</div>
</div>

<div className="topright">
<img src={logo} alt="" />
</div>

</div>
<div className='contbutton'>Submit</div>

<div className='maproute'>
<MapComponent/>
</div>
    </div>
<Footer/>

    </>
  )
}

export default Contact;
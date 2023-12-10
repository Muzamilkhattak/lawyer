import React from 'react'
import './Wakeelr.css'
import Navbar from '../Navbar/Navbar';
import logo from '../../Assets/Img/wakeelr.png'

function Wakeelr() {
  return (
  <>
  <Navbar/>
<div className="wakeelrmain">

<div className="wakeelrleft">
<img src={logo} alt="" />
</div>

<div className="wakeelrright">

<div className="wakelrform">

this iss the right

</div>

</div>

</div>

  </>
  )
}

export default Wakeelr;
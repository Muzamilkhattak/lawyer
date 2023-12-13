import React from 'react'
import './Wakeelr.css'
import Navbar from '../Navbar/Navbar';
import logo from '../../Assets/Img/wakeelr.png'
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Wakeelr() {
   return (
      <>
         <Navbar />
         <div className="wakeelrmain">

            <div className="wakeelrleft">
               <img src={logo} alt="" />
            </div>

            <div className="wakeelrright">

               <div className="wakelrform">

                  <div className='layerr'>LAWYER REGISTRATION</div>

                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">Name</label><br />
                        <input type="text" placeholder='Enter name' /><br />
                     </div>

                     <div>
                        <label htmlFor="">Email Address</label><br />
                        <input type="email" placeholder='Enter Email' /><br />
                     </div>
                  </div>

                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">CNIC NO.</label><br />
                        <input type="text" placeholder='Enter CNIC Number' /><br />
                     </div>

                     <div>
                        <label htmlFor="">Phone Number</label><br />
                        <input type="text" placeholder='03249518191' /><br />
                     </div>
                  </div>


                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">State</label><br />
                        <input type="text" placeholder='Enter State' /><br />
                     </div>

                     <div>
                        <label htmlFor="">City</label><br />
                        <input type="text" placeholder='Enter City' /><br />
                     </div>
                  </div>


                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">Password</label><br />
                        <input type="text" placeholder='Enter Passward' /><br />
                     </div>

                     <div>
                        <label htmlFor="">Experience</label><br />
                        <input type="text" placeholder='Enter your Experience' /><br />
                     </div>
                  </div>

                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">Experience in years</label><br />
                        <input type="text" placeholder='4 Years' /><br />
                     </div>

                     <div>
                        <label htmlFor="">Qualifications</label><br />
                        <input type="text" placeholder='Qualifications' /><br />
                     </div>
                  </div>


                  <div className='fordis2'>
                     <div>
                        <label htmlFor="">Area of Expertise</label><br />
                        <input type="text" placeholder='Area of Expertise' /><br />
                     </div>

                     <div>
                        <label htmlFor="">Skype Id</label><br />
                        <input type="text" placeholder='Enter Skype Id' /><br />
                     </div>
                  </div>

                  <div className='fordis2file'>
                     <div>
                        <label htmlFor="">Profile Picture</label><br />
                        <input type="file" placeholder='03249518191' /><br />
                     </div>

                     <div>
                        <label htmlFor="">ID Card Back Side</label><br />
                        <input type="file" placeholder='Select State' /><br />
                     </div>
                  </div>

                  <div className='fordis2file'>
                     <div>
                        <label htmlFor="">Bar License Reg License</label><br />
                        <input type="file" placeholder='03249518191' /><br />
                     </div>

                     <div>
                        <label htmlFor="">Resume</label><br />
                        <input type="file" placeholder='Select State' /><br />
                     </div>
                  </div>



                  <div className='privacypolicy paddpr'><input type="checkbox" name="" id="" /> I agree to Apnawakeel.pk Privacy Policy & Terms.</div>

                  <div className='button'><button>Create Account</button></div>
                  <div className='already paddal'> Already have an account? <span><NavLink to='/'>Login</NavLink></span></div>


               </div>

            </div>

         </div>
         <Footer />
      </>
   )
}

export default Wakeelr;
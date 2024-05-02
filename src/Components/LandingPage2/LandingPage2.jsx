
import './Landingpage2.css'
import Navbar from '../Navbar/Navbar'

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



// import required modules
import { Pagination } from 'swiper/modules';

import howpic1 from '../../Assets/Img/howdoes1.svg'
import howpic2 from '../../Assets/Img/howdoes2.svg'
import howpic3 from '../../Assets/Img/howdoes3.svg'

import cartoonpic from '../../Assets/Img/cartoonpic.svg'
import workpic from '../../Assets/Img/work2.svg'
import workpic2 from '../../Assets/Img/work3.svg'
import workpic3 from '../../Assets/Img/work4.svg'
import workpic4 from '../../Assets/Img/work5.svg'
import workpic5 from '../../Assets/Img/work6.svg'
import man1 from '../../Assets/Img/man1.svg'
import man2 from '../../Assets/Img/man2.svg'
import man3 from '../../Assets/Img/man3.svg'
import videopic from '../../Assets/Img/video.svg'
import textpic from '../../Assets/Img/text.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Footer/Footer';

export default function LandingPage2() {


    const [swiperRef, setSwiperRef] = useState(null);
    console.log(swiperRef);


    return (
        <div>

            <Navbar />


            <div className='landingpage2div'>
            

                <div className='landingpage2content'>

                    <h1>MAKING LEGAL SIMPLE</h1>
                    <p>EASY-QUICK-AFFAFFORDABLE</p>

                     <button  id="clickbtn">click me </button>
                    <div className="landingpagepopup">
                        <h4>Apka lawyer Now</h4>

                        <textarea placeholder='Write Your Question Here..' name="" id="" cols="30" rows="4"></textarea>
                        <select name="" id="">
                            <option value="">Select Categories</option>
                            <option value="">Crime</option>
                            <option value="">Civil</option>
                        </select>

                        <p id='spanlandingpage2'>Lawyer’s reply will be send through email and sms to you</p>

                        <div className='checkboxandinput'>
                            <input type="checkbox" />
                            <span>As a taken of repect, you agree to pay PKR 1000 as consultation fee after
                                receiving satisfactory consultation from assigned experts..</span>
                        </div>

                        <button id='landingpage2btn'>Create Account</button>
                    </div>



                </div>


            </div>


            {/* how does it works */}

            <div className="howdoesitworkdiv">
                <h2>How does it work?</h2>
                <p>Are you looking to post your Legal Question? Now it’s very simple, just post
                    your question and get immediate advice from experienced and
                    best Askwakeel Lawyers in your area</p>
            </div>


            <Container fluid>
                <Row>

                    <div className='howdoesmaindiv'>
                        <Col lg={4} md={6} xs={12}>
                            <img id='howdoespic' src={howpic1} alt="" />
                        </Col>

                        <Col lg={4} md={6} xs={12}>
                            <img id='howdoespic' src={howpic2} alt="" />
                        </Col>

                        <Col lg={4} md={6} xs={12}>
                            <img id='howdoespic' src={howpic3} alt="" />

                        </Col>

                    </div>

                </Row>

            </Container>

            <Container fluid>
                <Row>

                    <div className='howdoesmaindiv'>
                        <Col lg={5} md={6} xs={12}>
                            <img id='cartoonpic' src={cartoonpic} alt="" />
                        </Col>


                        <Col lg={7} md={6} xs={12}>
                            <div className='cardivmain'>
                                <h2>Askwakeel Legal Aid</h2>
                                <p>Askwakeel.pk is now launching new program of  legal aid
                                    where you can..</p>
                                <button>Apply for Legal Aid</button>
                            </div>
                        </Col>

                    </div>

                </Row>

            </Container>


            <div className='servicesmaindiv'>
                <h2>Services that you want</h2>
                <p>Are you looking to post your Legal Question? Now it’s very simple, just post
                    your question and get immediate advice from experienced and
                    best Askwakeel Lawyers in your area</p>
            </div>


            <Container fluid>
                <Row>

                    <div className='howdoesmaindiv'>
                        <Col lg={4} md={6} xs={12}>
                            <div className='workpicmaindivishere'>
                                <img src={workpic} alt="" />
                                <h6>Legal Natice</h6>
                            </div>
                        </Col>


                        <Col lg={4} md={6} xs={12}>
                            <div className='workpicmaindivishere'>
                                <img src={workpic2} alt="" />
                                <h6>Criminal Matter</h6>
                            </div>
                        </Col>

                        <Col lg={4} md={6} xs={12}>
                            <div className='workpicmaindivishere'>
                                <img src={workpic3} alt="" />
                                <h6>Family Matter</h6>
                            </div>
                        </Col>

                    </div>

                </Row>

            </Container>

            <br /><br />
            <Container fluid>
                <Row>

                    <div className='howdoesmaindiv'>
                        <Col lg={4} md={6} xs={12}>
                            <div className='workpicmaindivishere'>
                                <img src={workpic3} alt="" />
                                <h6>Legal Natice</h6>
                            </div>
                        </Col>


                        <Col lg={4} md={6} xs={12}>
                            <div className='workpicmaindivishere'>
                                <img src={workpic4} alt="" />
                                <h6>Criminal Matter</h6>
                            </div>
                        </Col>

                        <Col lg={4} md={6} xs={12}>
                            <div className='workpicmaindivishere'>
                                <img src={workpic5} alt="" />
                                <h6>Family Matter</h6>
                            </div>
                        </Col>

                    </div>

                </Row>

            </Container>

            <div className="wakeelsmaindiv">
                <h2>Askwakeel Lawyers</h2>
                <p>Askwakeel Experts adhere to high standards of professtionalism and
                    conduct. Each of our Expert is a lawyer verified by Bar
                    council and expert in his/her field..</p>
            </div>


            {/* aaaaaaaaaaaaaaa */}






            <div data-aos="zoom-in" data-aos-duration="1000" className="maindivoftalentswiper">
                <Swiper
                    onSwiper={setSwiperRef}
                    spaceBetween={30}
                    loop={true} // Enable looping
                    pagination={{
                        type: 'fraction',
                    }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        500: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    slideActiveClass="swiper-slide-active-custom"
                    slideNextClass="swiper-slide-next-custom"
                    slidePrevClass="swiper-slide-prev-custom"
                >
                    <SwiperSlide>
                        <Link to='/muneeblawyer'>
                            <div className="swiperimage">
                                <img src={man1} alt="" />
                                <div className="imagebelow">
                                    <div>Faizan Khan</div>
                                    <div>Full Stack / MERN Stack Developer</div>
                                    <div>6 Years</div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to='/muzamillawyer2'>
                            <div className="swiperimage">
                                <img src={man2} alt="" />
                                <div className="imagebelow">
                                    <div>Junaid Durrani</div>
                                    <div>Application Developer</div>
                                    <div>5 Years</div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to='/rauflawyer3'>
                            <div className="swiperimage">
                                <img src={man3} alt="" />
                                <div className="imagebelow">
                                    <div>Ahmed Hamza</div>
                                    <div>Creative UI/UX Designer</div>
                                    <div>6 Years</div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>



                 

                    <SwiperSlide>
                        <Link to='/muzamillawyer2'>
                            <div className="swiperimage">
                                <img src={man2} alt="" />
                                <div className="imagebelow">
                                    <div>Fazal Rehman</div>
                                    <div>UX UI designer</div>
                                    <div>5 Years</div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>






                </Swiper>
            </div>






            {/* aaaaaaaaaaaa */}


            <div className='videodiv'>
                <img src={videopic} alt="" />
            </div>

            <div className='textpic'>
                <img className='textpic' src={textpic} alt="" />
            </div>

            <br />

            <Footer />

        </div>
    )
}

import Carousel from 'react-bootstrap/Carousel';
import law1 from '../../Assets/Img/law1.png';
import law2 from '../../Assets/Img/law2.png';
import law3 from '../../Assets/Img/law3.png';
import './Landingpage.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import legalpic from '../../Assets/Img/legalpic.png'
import pooplepic from '../../Assets/Img/peoplepic.png'
import sucesspic from '../../Assets/Img/sucesspic.png'
import supportpic from '../../Assets/Img/supportpic.png'

// about us pic
import aboutpic from '../../Assets/Img/about.svg'
// import aboutlinepic from '../../Assets/Img/aboutusline.svg'
import aboutline from '../../Assets/Img/line.png'

// practice area pic

import line2 from '../../Assets/Img/line2.png'
import home1 from '../../Assets/Img/home.svg'
import home2 from '../../Assets/Img/home2.svg'
import home3 from '../../Assets/Img/home3.svg'
import home4 from '../../Assets/Img/home4.svg'
import home5 from '../../Assets/Img/home5.svg'
import home6 from '../../Assets/Img/home6.svg'

// why choose us pic is here

import chooseline from '../../Assets/Img/line3.png'
import tolpic from '../../Assets/Img/tolmanpic.svg'

// meet our team
import meetline from '../../Assets/Img/meetline.png'
import man1from from '../../Assets/Img/man1.svg'
import man2from from '../../Assets/Img/man2.svg'
// import man3from from '../../Assets/Img/man3.svg'
// import man4from from '../../Assets/Img/man4.svg'

import facebook from '../../Assets/Img/facebook.svg'
import camera from '../../Assets/Img/camera.svg'
import twitter from '../../Assets/Img/twitter.svg'

// have a question line
import havealine from '../../Assets/Img/haveaquestionline.png'
import tolpic2 from '../../Assets/Img/tolman2.svg'

// react bootstrap according
import Accordion from 'react-bootstrap/Accordion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function LandingPage() {
  return (
    <>
{/* <<<<<<< HEAD */}
{/* <<<<<<< HEAD */}
{/* ======= */}
{/* >>>>>>> 4a3ba68f2329513b2dbb6256d0a425c3b3878489 */}
    <Navbar/>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={law1} alt="First slide" className='law1 img-fluid' />
          <Carousel.Caption>
            <h3>We prepared to oppose for you</h3>
            <p>Lorep ipsum dolor sit amet elit. Mauris adio mauris..</p>
            <button>GET FREE CONSULTATION</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={law2} alt="Second slide" className='law2  img-fluid' />
          <Carousel.Caption>
            <h3>We prepared to oppose for you</h3>
            <p>Lorep ipsum dolor sit amet elit. Mauris adio mauris..</p>
            <button>GET FREE CONSULTATION</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={law3} alt="Third slide" className='law3  img-fluid' />
          <Carousel.Caption>
            <h3>We prepared to oppose for you</h3>
            <p>Lorep ipsum dolor sit amet elit. Mauris adio mauris..</p>
            <button>GET FREE CONSULTATION</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className='landingpagesecsection'>
        <Container fluid>
          <Row>
            <Col md={3} xs={12}>
              <div className='legalpicdiv'>
                <img src={legalpic} alt="" />
                <h3>Legal</h3>
                <p>Govt Approved</p>
              </div>

            </Col>
            <Col md={3} xs={12}>
              <div className='peoplepicdiv'>
                <img src={pooplepic} alt="" />
                <h3>Attorneys</h3>
                <p>Expert Attorneys</p>
              </div>
            </Col>
            <Col md={3} xs={12}>
              <div className='sucesspicdiv'>
                <img src={sucesspic} alt="" />
                <h3>Success</h3>
                <p>99.99% Case Won</p>
              </div>
            </Col>
            <Col md={3} xs={12}>
              <div className='supportpicdiv'>
                <img src={supportpic} alt="" />
                <h3>Support</h3>
                <p>Quick Support</p>
              </div>
            </Col>

          </Row>

        </Container>
      </div>

      {/* fst section is End */}

      {/* About section is start */}

      <div>
        <Container fluid>
          <Row>

            <Col lg={4} md={6} xs={12}>
              <div className='aboutpicdiv'>
                <img src={aboutpic} alt="about" />
              </div>
            </Col>

            <Col lg={8} md={6} xs={12}>
              <div className='aboutlinepic'>
                <img src={aboutline} alt="" />

                <p>
                  Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Phasellus nec pretium mi curabitur
                  facillsis ornare velit nan vulputate. Aliquam metus tortor, auctor id gravida condimentum
                  viverra quis sem.
                  Lorem ipsum dolor sit amet, Consectetur adipiscing elit, Phasellus nec pretium mi curabitur
                  <br />
                  facillsis ornare velit nan vulputate. Aliquam metus tortor, auctor id gravida condimentum
                  viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur
                  convallis porttitor Aliquam interdum at lacus non blandit.
                </p>

                <button>LEARN MORE</button>

              </div>
            </Col>


          </Row>

        </Container>
      </div>



      {/* About section is End */}


      {/* OuR Practices Area is start */}

      <div className='line2div'>
        <img src={line2} alt="line2" />
      </div>

      <Container fluid  >
        <Row>

          <Col lg={4} md={6} xs={12}>

            <div>
              <div className='practiceareadiv'>
                <img className='home3' src={home1} alt="home1" />

                <div className='practicetext'>
                  <h1>Civil Law</h1>
                  <p>Lorem ipsum dolor sit amet elit.
                    Phasellus nec pretium mi. Curabitur
                    facilisis ornare velit non</p>

                  <button>LEARN MORE</button>

                </div>

              </div>
            </div>

          </Col>


          {/* this is two div  */}

          <Col lg={4} md={6} xs={12}>
            <div>
              <div className='practiceareadiv'>
                <img className='home3' src={home2} alt="home2" />

                <div className='practicetext'>
                  <h1>Family Law</h1>
                  <p>Lorem ipsum dolor sit amet elit.
                    Phasellus nec pretium mi. Curabitur
                    facilisis ornare velit non</p>

                  <button>LEARN MORE</button>

                </div>

              </div>
            </div>
          </Col>

          {/* this is three div */}

          <Col lg={4} md={6} xs={12}>
            <div>
              <div className='practiceareadiv'>
                <img className='home3' src={home3} alt="home3" />

                <div className='practicetext'>
                  <h1>Civil Law</h1>
                  <p>Lorem ipsum dolor sit amet elit.
                    Phasellus nec pretium mi. Curabitur
                    facilisis ornare velit non</p>

                  <button>LEARN MORE</button>

                </div>

              </div>
            </div>
          </Col>


        </Row>

      </Container>


      {/* other three of this practice area */}


      <Container fluid  >
        <Row>

          <Col lg={4} md={6} xs={12}>

            <div>
              <div className='practiceareadiv'>
                <img className='home3' src={home4} alt="home4" />

                <div className='practicetext'>
                  <h1>Education Law</h1>
                  <p>Lorem ipsum dolor sit amet elit.
                    Phasellus nec pretium mi. Curabitur
                    facilisis ornare velit non</p>

                  <button>LEARN MORE</button>

                </div>

              </div>
            </div>

          </Col>


          {/* this is two div  */}

          <Col lg={4} md={6} xs={12}>
            <div>
              <div className='practiceareadiv'>
                <img className='home3' src={home5} alt="home5" />

                <div className='practicetext'>
                  <h1>Criminal Law</h1>
                  <p>Lorem ipsum dolor sit amet elit.
                    Phasellus nec pretium mi. Curabitur
                    facilisis ornare velit non</p>

                  <button>LEARN MORE</button>

                </div>

              </div>
            </div>
          </Col>

          {/* this is three div */}

          <Col lg={4} md={6} xs={12}>
            <div>
              <div className='practiceareadiv'>
                <img className='home3' src={home6} alt="home6" />

                <div className='practicetext'>
                  <h1>Cyber Law</h1>
                  <p>Lorem ipsum dolor sit amet elit.
                    Phasellus nec pretium mi. Curabitur
                    facilisis ornare velit non</p>

                  <button>LEARN MORE</button>

                </div>

              </div>
            </div>
          </Col>


        </Row>

      </Container>

      {/* OuR Practices Area is End */}


      {/* Why choose us is start */}

      <div className='line3div'>
        <img src={chooseline} alt="" />
      </div>



      <Container  >
        <Row>

          <Col lg={8} md={6} xs={12}>

            <div className='choosediv'>

              <div className='bgchoose'>
                <div className='chooseimgdiv'>
                  <img src={home5} alt="" />
                </div>
              </div>

              <div className='choosetext'>
                <h1>Best Law Practices</h1>
                <p>Lorem ipsum dolor sit amet elit. Phasellus nec
                  pretium <br />
                  mi. Curabitur facilisis ornare velit non
                  vulputate.</p>
              </div>

            </div>


            <div className='choosediv'>

              <div className='bgchoose'>
                <div className='chooseimgdiv'>
                  <img className='home3' src={home1} alt="" />
                </div>
              </div>

              <div className='choosetext'>
                <h1>Efficiency & Trust</h1>
                <p>Lorem ipsum dolor sit amet elit. Phasellus nec
                  pretium <br />
                  mi. Curabitur facilisis ornare velit non
                  vulputate.</p>
              </div>

            </div>

            <div className='choosediv'>

              <div className='bgchoose'>
                <div className='chooseimgdiv'>
                  <img className='home3' src={home1} alt="" />
                </div>
              </div>

              <div className='choosetext'>
                <h1>Results you deserve</h1>
                <p>Lorem ipsum dolor sit amet elit. Phasellus nec
                  pretium <br />
                  mi. Curabitur facilisis ornare velit non
                  vulputate.</p>
              </div>

            </div>

          </Col>




          <Col lg={4} md={6} xs={12}>
            <div className='tolpic'>
              <img src={tolpic} alt="tolpic" />
            </div>
          </Col>


        </Row>

      </Container>

      {/* Why choose us is End */}

      {/* meet our team is start */}

      <div className='line3div'>
        <img src={meetline} alt="" />
      </div>



      <Container  >
        <Row>

          <Col lg={3} md={6} xs={12}>

            <div className='mandiv'>
              <img src={man1from} alt="" />

              <div className='iconandbg'>
                <div className='iconsdivmeet'>
                  <img src={camera} alt="" />
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                </div>

                <h3>Adam Phillips</h3>
                <p>Business Consultant</p>

              </div>
            </div>

          </Col>

          <Col lg={3} md={6} xs={12}>
            <div className='mandiv'>
              <img src={man2from} alt="" />

              <div className='iconandbg'>
                <div className='iconsdivmeet'>
                  <img src={camera} alt="" />
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                </div>

                <h3>Adam Phillips</h3>
                <p>Business Consultant</p>

              </div>


            </div>

          </Col>

          <Col lg={3} md={6} xs={12}>
            <div className='mandiv'>
              <img src={man1from} alt="" />

              <div className='iconandbg'>
                <div className='iconsdivmeet'>
                  <img src={camera} alt="" />
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                </div>

                <h3>Adam Phillips</h3>
                <p>Business Consultant</p>

              </div>

            </div>

          </Col>

          <Col lg={3} md={6} xs={12}>
            <div className='mandiv'>
              <img src={man2from} alt="" />

              <div className='iconandbg'>
                <div className='iconsdivmeet'>
                  <img src={camera} alt="" />
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                </div>

                <h3>Adam Phillips</h3>
                <p>Business Consultant</p>

              </div>

            </div>

          </Col>



        </Row>

      </Container>

      {/* meet our team is End */}


      {/* have a question is start */}


      <div className='line3div'>
        <img src={havealine} alt="" />
      </div>


      <Container  >
        <Row>

          <Col lg={6} md={6} xs={12}>
            <div className='tolpic2'>
              <img src={tolpic2} alt="tolpic2" />
            </div>

          </Col>


          <Col lg={6} md={6} xs={12}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                
                <Accordion.Header>
                <div className='accordinddivheading'>1</div>
                  Lorme Ipsum dolor sit amet?</Accordion.Header>
                <Accordion.Body>

                  Lorem ipsum dolor sit, consectetur adipscing elit, phasellus nec pretium mi,
                  Curabitur facillisis ornare velit non.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
  
                <Accordion.Header>Lorme Ipsum dolor sit amet?</Accordion.Header>
                <Accordion.Body>

                  Lorem ipsum dolor sit, consectetur adipscing elit, phasellus nec pretium mi,
                  Curabitur facillisis ornare velit non.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Lorme Ipsum dolor sit amet?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit, consectetur adipscing elit, phasellus nec pretium mi,
                  Curabitur facillisis ornare velit non.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Lorme Ipsum dolor sit amet?</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit, consectetur adipscing elit, phasellus nec pretium mi,
                  Curabitur facillisis ornare velit non.
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item eventKey="4">
                <Accordion.Header>Lorme Ipsum dolor sit amet?</Accordion.Header>
                <Accordion.Body>

                  Lorem ipsum dolor sit, consectetur adipscing elit, phasellus nec pretium mi,
                  Curabitur facillisis ornare velit non.
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item eventKey="5">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>

                  Lorem ipsum dolor sit, consectetur adipscing elit, phasellus nec pretium mi,
                  Curabitur facillisis ornare velit non.
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </Col>







        </Row>

      </Container>


      <Footer/>



      {/* have a question is End */}


    </>
  );
}

export default LandingPage;

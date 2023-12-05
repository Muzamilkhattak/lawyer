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
import Navbar from '../Navbar/Navbar';


function IndividualIntervalsExample() {
  return (
    <>
    <Navbar/>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={law1} alt="First slide"   className='law1 img-fluid' />
        <Carousel.Caption>
          <h3>We prepared to oppose for you</h3>
          <p>Lorep ipsum dolor sit amet elit. Mauris adio mauris..</p>
          <button>GET FREE CONSULTATION</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={law2} alt="Second slide" className='law2  img-fluid'   />
        <Carousel.Caption>
          <h3>We prepared to oppose for you</h3>
          <p>Lorep ipsum dolor sit amet elit. Mauris adio mauris..</p>
          <button>GET FREE CONSULTATION</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={law3} alt="Third slide"  className='law3  img-fluid' />
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
          <img src={legalpic} alt="" />
          <h3>Legal</h3>
          <p>Govt Approved</p>
        </Col>
        <Col md={3} xs={12}>
        <img src={pooplepic} alt="" />
        <h3>Attorneys</h3>
        <p>Expert Attorneys</p>
        </Col>
        <Col md={3} xs={12}>
        <img src={sucesspic} alt="" />
        <h3>Success</h3>
        <p>99.99% Case Won</p>
        </Col>
        <Col md={3} xs={12}>
        <img src={supportpic} alt="" />
        <h3>Support</h3>
        <p>Quick Support</p>
        </Col>
      
      </Row>
     
    </Container>
    </div>

      
    </>
  );
}

export default IndividualIntervalsExample;

import './HeadBar.css';
import logo from '../img/Logo.png';
import { Col, Row, Container, Nav, Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'


function HeadBar() {
  return (
    <Container >
    <Row>
      <Col lg={4} sm={6}className="logoBrand">
        <img src={logo} alt="logo"></img>
        <p>dskjdlaksdjaldjlksadjaldasjkldjlk</p>
      </Col>
      <Col lg={8} sm={6}className="navBar">
        <Nav className="justify-content-end" activeKey="#">
          <Nav.Item>
            <Nav.Link href="#"><h4 className="textColor"> Start</h4></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"><h4 className="textColor">Ober arbotena</h4></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><h4 className="textColor">Shop</h4></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3"><h4 className="textColor">Blog</h4></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Video
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="radiusFAQ" eventKey="link-4"><h4 className="textColor">FAQ</h4></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5"><h4 className="textColor">Einloggon</h4></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="colorRegister" eventKey="link-6"><h4 className="textColor">Registrieren</h4></Nav.Link>
          </Nav.Item>
        </Nav>
     </Col>
      <Col sm={6} className="iconTablet" >
      <Button className="bt" variant="outline-light"><FontAwesomeIcon icon={faBars} /></Button>
      </Col>
    </Row>
    <Row>
      <Col lg={5} sm={6}>
        <Row className="text1">
        Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical. 
        </Row>
        <Row className="text2">
        It is a long established fact that a reader will be distracted.
         The point of using Lorem Ipsum is that it has a more-or-less normal, 
         as opposed to using making it look like readable English. 
        </Row>
      </Col>
      <Col lg={6}>
      </Col>
    </Row>
    <Row>
      <Col lg={4}sm={6}><Button className="button1"  variant="dark" > <h5>Fur Quick Check registriren</h5></Button></Col>
      <Col lg={4}sm={6}><Button className="button2"  variant="outline-light"><h5><FontAwesomeIcon icon={faPlayCircle} /> Arbotena Video-Anleitung</h5> </Button></Col>
    </Row>
  </Container>    
          
  );
}

export default HeadBar;

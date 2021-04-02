import './footer.css';
import 'react-slideshow-image/dist/styles.css'
import logo from '../img/Logo.png';
import { Col, Row, Container, Card, Button, Carousel, Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import {faInstagram } from "@fortawesome/free-brands-svg-icons"
import {faYoutube } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    
  return (
    <Container className="container" >
        <Row className="logoFooter">
            <Col></Col>
            <Col><img src={logo} alt="logoFooter"></img></Col>
            <Col></Col>
        </Row>
        <Row>
        <Col lg={2}></Col>
            <Col lg={8} className="footerLabel"><h3>Aboniere unsere Newsletter<br/>fur wochentliche Gesunheitstipps</h3></Col>
            <Col lg={2}></Col>
        </Row>
        <Row className="email">
        <Col lg={3} sm={2}></Col>
        <Col lg={6} sm={6}>
            <Form>
                <input type="text" id="resizedTextbox " name="fname" placeholder="Deine E-mail-Adresse"></input>    
            </Form>
        </Col>
        <Col lg={3} sm={3}>
        <Button className="butEmail"variant="dark" type="submit">
                ABONNIEREN
        </Button> 
        </Col>
        </Row>
        <Row>
            <Col sm={6}><p className="hide2">Impressun</p></Col>
            <Col sm={6}><p className="hide3">DathutzDatens</p></Col>
        </Row>
        <Row>
            <Col sm={6}><p className="hide2">Konformitatserklrung</p></Col>
            <Col sm={2}><p className="hide3">Feedback</p></Col>
            <Col sm={4}><p className="hide3">Kontakt</p></Col>
        </Row>
        <Row className="footbar">
            <Col></Col>
            <Col ><p className="hide1">Impressun</p></Col>
            <Col ><p className="hide1">DathutzDatens</p></Col>
            <Col ><p className="hide1">Konformitatserklrung</p></Col>
            <Col ><p className="hide1">Feedback</p></Col>
            <Col ><p className="hide1">Kontakt</p></Col>
            <Col ><p className="footerBrand">© 2020 Arbotena GmbH. All Rights REverved.</p></Col>
            <Col ><p className="hide1">Kontakt</p></Col>
            <Col ><FontAwesomeIcon className="hide1" icon={faFacebookSquare } /></Col>
            <Col ><FontAwesomeIcon className="hide1" icon={faInstagram } /></Col>
            <Col ><FontAwesomeIcon className="hide1" icon={faYoutube } /></Col>
        </Row>
  </Container>      
  );
}

export default Footer;



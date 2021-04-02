import './Elip.css';
import elipPic from '../img/Ellipse103.png';
import paper1 from '../img/paper1.png';
import paper2 from '../img/paper2.png';
import paper3 from '../img/paper3.png';
import { Col, Row, Container, Nav, Button} from "react-bootstrap";
import { LoremIpsum } from 'react-lorem-ipsum';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'



function Elip() {
  return (
    <Container className="container" fluid >
    <Row >
      <Col lg={4}  className="elipPro1">
        <img src={elipPic} alt="logo"></img>
      </Col>
      <Col lg={8}  className="elipDetail">
        <h1>Gesundhelit ganzheittlich betrachten</h1>
        <h3>Dr. med. Hans-Joachim Petershon</h3>
        <br/>
        <LoremIpsum/>
        <p className='textCon'><a href="#" className="linktext">Weiche dass sind lest ihr interview </a> <FontAwesomeIcon className="iconNext" icon={faChevronRight} /></p>
      </Col>
    </Row>
    <Row >
      <h1 className="elipText"> Individuelle Ernahrungsemfrhlunggen</h1>
      <h6 className="elipText">Spare dir teure wie zeitaufwendige Bluttests. In nur funf Minten zum Ergebnis. Einmalig 49,99€ inkl. MwSt statt virsertelliger Kosen fur den herkonmlichen Test.</h6>
    </Row>
    <Row >
      <Col sm={4} >
        <img className="elipBlock" src={paper1} alt="picture"></img>
      </Col>
      <Col sm={4}>
      <img className="elipBlock" src={paper1} alt="picture"></img>
      </Col>
      <Col sm={4}>
      <img className="elipBlock" src={paper1} alt="picture"></img>
      </Col>
    </Row>
    <Row>
      <Col sm={4} className="elipBlock">
        <h3>Liste der unvertraglichen </h3>
        <h6>Wir helfen dir herauszufinden,auf welche Nahrungsmittel du verzichten solltest, um diine Symptome zu linern.</h6>
      </Col>
      <Col sm={4} className="elipBlock">
       <h3>schneele<br/>Testergebnisse</h3>
        <h6>Sofort nach dem Ausfullen des Quick Checks stehen dir die testergebisse zur Verfugung. Das spart enorm viel Zeit.</h6>
      </Col>
      <Col sm={4} className="elipBlock">
      <h3>Sehr gutes<br/> Preisleistungsv</h3>
        <h6>86,01 Prozent Ergebnisgenauigkeit fur einen Bruchteil des Preises.</h6>
      </Col>
    </Row>
  </Container>    
          
  );
}

export default Elip;

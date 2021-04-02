import './Der.css';
import pic3 from '../img/pic3.png';
import G1 from '../img/G1.png';
import G2 from '../img/G2.png';
import G3 from '../img/G3.png';
import G4 from '../img/G4.png';
import { Col, Row, Container, Card, Button, CardColumns} from "react-bootstrap";
import { LoremIpsum } from 'react-lorem-ipsum';




function Der() {
  return (
    <Container className="container" fluid>
        <Row className="Der">
            <Col lg={6}>
                <img className="picDetail1"src={pic3}></img> 
            </Col>
            <Col lg={6}>
                <Row >
                    <p className="text5">Der arbotena Test - so funktioniert's</p>
                </Row>
                <Row className="alltext">
                    <Col sm={2}>
                        <div className="num">1</div>
                    </Col>
                    <Col>
                        <p className="text6">Registriere dich auf arbotena.de</p>
                    </Col>
                </Row>
                <Row className="alltext">
                    <Col sm={2}>
                        <div className="num">2</div>
                    </Col>
                    <Col>
                        <p className="text6">Logge dich ein</p>
                    </Col>
                </Row>
                <Row className="alltext">
                    <Col sm={2}>
                        <div className="num">3</div>
                    </Col>
                    <Col>
                        <p className="text6">State jetzt deinen arnotena Test</p>
                    </Col>
                </Row>
                <Row className="alltext">
                    <Col sm={2}>
                        <div className="num">4</div>
                    </Col>
                    <Col>
                        <p className="text6">Bezahi enimige 49.99€ inkl. MwSt uner PayPal, Se</p>
                    </Col>
                </Row>
                <Row className="alltext">
                    <Col sm={2}>
                        <div className="num">5</div>
                    </Col>
                    <Col>
                        <p className="text6">Erhalte derire personaliche Auswertung</p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col sm={7}>
             <img src={G1} className="hide"></img>
            </Col>
            <Col sm={5}>
                <h6 className="text8">Schritt 1</h6>
                <h3 className="text9">Regisreiere dich<br/>kostenfrei</h3>
                <p className="text10">A cuse right perspective. It's an undeniable fact, really; lf as a it feected bronze. The literature would.</p>
            </Col>
        </Row>
        <Row>
            <Col sm={7}>
            </Col>
            <Col sm={5}>
                <h6 className="text8">Schritt 2</h6>
                <h3 className="text9">Logge dich ein</h3>
                <p className="text10">A cuse right perspective. It's an undeniable fact, really; lf as a it feected bronze. The literature would.</p>
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
            <h6 className="text8">Schritt 3</h6>
                <h3 className="text9">Starte jetzt deinen<br/>arbotena Test</h3>
                <p className="text10">A cuse right perspective. It's an undeniable fact, really; lf as a it feected bronze. The literature would.</p>
             
            </Col>
            <Col sm={6}>
            <img src={G2} className="hide"></img>
            </Col>
        </Row>
        <Row>
            <Col sm={6}>
            <h6 className="text8">Schritt 4</h6>
                <h3 className="text9">Zahlung leicht<br/> durchgefuhrt</h3>
                <p className="text10">A cuse right perspective. It's an undeniable fact, really; lf as a it feected bronze. The literature would.</p>
             
            </Col>
            <Col sm={6}>
            </Col>
        </Row>
        <Row>
            <Col sm={7}>
             <img src={G3} className="hide"></img>
            </Col>
            <Col sm={5}>
                <h6 className="text8">Schritt 5</h6>
                <h3 className="text9">Deine Auswertung<br/>dann sofort vor</h3>
                <p className="text10">A cuse right perspective. It's an undeniable fact, really; lf as a it feected bronze. The literature would.</p>
            </Col>
        </Row>
  </Container>    
          
  );
}

export default Der;



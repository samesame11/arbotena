import './Unsere.css';
import card1 from '../img/card2.png';
import card2 from '../img/card1.png';
import iphone from '../img/iphone.png'
import { Col, Row, Container, Card, Button, CardColumns} from "react-bootstrap";
import { LoremIpsum } from 'react-lorem-ipsum';



function Unsere() {
  return (
    <Container className="container" fluid>
        <h1 className="headUnsere">Unsere Losungen fur dein Wohlbefinden</h1>
        <Row>
            <Col className="shadow" lg={6} >
                <Row>
                <Col className="bgColor"sm={6}>
                    <img className="img" src={card1}></img>
                </Col>
                <Col className="detils" sm={6}>    
                    <small className="text">
                        Someone famous in Source Title
                    </small>
                    <small className="text">
                        Someone famous in Source Title
                    </small>
                    <p  className="textPara2">
                        arnotena Test
                    </p>
                    <p className="textPara1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere ipsum dolor sit amet
                        erat a ante.
                    </p>
                </Col>
                </Row>
            </Col>
            <Col className="shadow" lg={6} >
                <Row>
                <Col className="bgColor"sm={6}>
                    <img className="img" src={card2}></img>
                </Col>
                <Col className="detils" sm={6}>    
                <small className="text">
                        Someone famous in Source Title
                    </small>
                    <small className="text">
                        Someone famous in Source Title
                    </small>
                    <p  className="textPara2">
                        arnotena Test
                    </p>
                    <p className="textPara1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere ipsum dolor sit amet
                        erat a ante.
                    </p>
                    <Button className="button3"  variant="outline-warning"> Arbotena Video-Anleitung </Button>
                </Col>
                </Row>
                
            </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col className="IPhone"><img src={iphone} ></img></Col>
            <Col></Col>
        </Row>
  </Container>    
          
  );
}

export default Unsere;



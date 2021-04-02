import './Habe.css';
import pic from '../img/pic.png';
import { Col, Row, Container, Card, Button, CardColumns} from "react-bootstrap";
import { LoremIpsum } from 'react-lorem-ipsum';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { TableRow } from '@material-ui/core';



function Habe() {
  return (
    <Container className="container">
        <Row>
            <Col sm={5} lg={5}>
                <Row className="text3">
                    <h1> Habe ich eine<br/>Nahruttertran?</h1>
                    
                </Row>
                <h3>Was kann ich dagegen tun?</h3>
                <Row className="text4">
                    <LoremIpsum sentenceLowerBound="30"/>
                </Row>
            </Col>
            <Col sm={7} lg={7}>
                <img className="picDetail"src={pic}></img> 
            </Col>
        </Row>
  </Container>    
          
  );
}

export default Habe;



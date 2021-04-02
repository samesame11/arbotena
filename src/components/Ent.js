import './Ent.css';
import 'react-slideshow-image/dist/styles.css'
import pic3 from '../img/slide.PNG';
import { Col, Row, Container, Card, Button, Carousel} from "react-bootstrap";
import { LoremIpsum } from 'react-lorem-ipsum';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';




function Ent() {
  return (
    <Container className="container" fluid>
        <p className="text7">❝</p>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={pic3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={pic3}
              alt="Second slide"
            />
          
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
            />    
          </Carousel.Item>
        </Carousel>
        <Row className="textRegis">
          <Col></Col>
          <Col><h1>
            Entdecke jetzt deine <br/>nahrungsmittelunvertraglichkeiten!
          </h1></Col>
          <Col></Col>
        </Row>
        <Row className="posi">
        <Col></Col>
        <Col><h4 className="text11">In nur 5 Minuten zu deinem individuellen Ergebnis</h4></Col>
          <Col></Col>
        </Row>
        <Row className="posi">
          <Col></Col>
          <Col><Button className="button4"  variant="dark" ><h5>Fur Quick Check registriren</h5></Button></Col>
          <Col></Col>
        </Row>
  </Container>    
          
  );
}

export default Ent;




import './App.css';
import { Col, Row, Container, Button, CardColumns} from "react-bootstrap";
import HeadBar from '../src/components/HeadBar.js';
import Elip from '../src/components/Elip.js';
import Unsere from './components/Unsere';
import Habe from './components/Habe';
import Der from "./components/Der"
import Ent from "./components/Ent"
import Footer from "./components/footer"
function App() {
  return (
    <Container fluid>
        <Row className="Top">
          <HeadBar/>
        </Row>
        <Row className="elip">
          <Elip/>
        </Row>
        <Row className="Unsere">
        <Unsere/>
        </Row>
        <Row className="Habe">
        <Habe/>
        </Row>
        <Row className="Der">
        <Der/>
        </Row>
        <Row className="Ent">
        <Ent/>
        </Row>
        <Row className="Footer">
          <Footer/>
        </Row>
    </Container>
    
  );
}

export default App;

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';
import { Draft } from './draft/Draft';

function App() {
  return (
    <Container>
      <Row>
        <Col>Drafter</Col>
      </Row>
      <Row>
        <Col>
          <Draft></Draft>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

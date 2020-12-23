import { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

export class PickedChampion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champion: props.champion
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <img
              src={'assets/10.25.1/img/sprite/' + this.state.champion.image.sprite}
              alt={this.state.champion.name}
              height={this.state.champion.image.h}
              width={this.state.champion.image.w}
              style={{ objectPosition: '-' + this.state.champion.image.x + 'px -' + this.state.champion.image.y + 'px' }}></img>
          </Col>
          <Col>
            {this.state.champion.name}
          </Col>
        </Row>
      </Container>
    )
  }
}
import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ChampionList } from '../champions/list/ChampionList';

export class Draft extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>Let's start a draft</Col>
        </Row>
        <Row>
          <Col>PickBan team1</Col>
          <Col>
            <ChampionList></ChampionList>
          </Col>
          <Col>
            PickBan team2
            </Col>
        </Row>
      </Container>
    )
  }

}
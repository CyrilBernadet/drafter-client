import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ChampionList } from '../champions/list/ChampionList';
import { PickedChampion } from '../pickban/pick/PickedChampion';
import { DraftModel } from './DraftModel';

export class Draft extends Component {

  pickTurn = ['blueTeam', 'redTeam', 'redTeam', 'blueTeam', 'blueTeam', 'redTeam', 'redTeam', 'blueTeam', 'blueTeam', 'redTeam'];

  constructor() {
    super();
    this.state = {
      draft : new DraftModel()
    }

    this.onSelectChampion = this.onSelectChampion.bind(this);
  }

  onSelectChampion(champion) {
    const draft = this.state.draft;

    if (draft.selectingTeam < this.pickTurn.length) {
      const selectingTeam = this.pickTurn[draft.selectingTeam];

      draft[selectingTeam].pickedChampions.push(champion);

      draft.selectingTeam++;

      this.setState({draft: draft})
    }

  }

  render() {
    return (
      <Container>
        <Row>
          <Col>Let's start a draft</Col>
        </Row>
        <Row>
          <Col>
            {this.state.draft.blueTeam.pickedChampions.map((champion) =>
              <PickedChampion champion={champion}></PickedChampion>
            )}
          </Col>
          <Col>
            <ChampionList onSelectChampion={this.onSelectChampion}></ChampionList>
          </Col>
          <Col>
            {this.state.draft.redTeam.pickedChampions.map((champion) =>
              <PickedChampion champion={champion}></PickedChampion>
            )}
          </Col>
        </Row>
      </Container>
    )
  }

}
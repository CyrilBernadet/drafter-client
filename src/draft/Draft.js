import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ChampionList } from '../champions/list/ChampionList';
import { PickedChampion } from '../pickban/pick/PickedChampion';
import { BannedChampion } from '../pickban/ban/BannedChampion';
import { DraftModel } from './DraftModel';

export class Draft extends Component {

  pickbanTurn = [
    'blueTeam.ban',
    'redTeam.ban',
    'blueTeam.ban',
    'redTeam.ban',
    'blueTeam.ban',
    'redTeam.ban',
    'blueTeam.pick',
    'redTeam.pick',
    'redTeam.pick',
    'blueTeam.pick',
    'blueTeam.pick',
    'redTeam.pick',
    'blueTeam.ban',
    'redTeam.ban',
    'blueTeam.ban',
    'redTeam.ban',
    'redTeam.pick',
    'blueTeam.pick',
    'blueTeam.pick',
    'redTeam.pick'];

  constructor() {
    super();
    this.state = {
      draft: new DraftModel()
    }

    this.onSelectChampion = this.onSelectChampion.bind(this);
  }

  onSelectChampion(champion) {
    const draft = this.state.draft;

    if (draft.selectingTeam < this.pickbanTurn.length) {
      const pickban = this.pickbanTurn[draft.selectingTeam];
      const pickbanTeam = pickban.split('.')[0];
      const pickbanType = pickban.split('.')[1];

      draft[pickbanTeam][pickbanType].push(champion);

      draft.selectingTeam++;

      this.setState({ draft: draft })
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
            {this.state.draft.blueTeam.ban.map((champion) =>
              <BannedChampion champion={champion}></BannedChampion>
            )}
            {this.state.draft.blueTeam.pick.map((champion) =>
              <PickedChampion champion={champion}></PickedChampion>
            )}
          </Col>
          <Col>
            <ChampionList onSelectChampion={this.onSelectChampion}></ChampionList>
          </Col>
          <Col>
            {this.state.draft.redTeam.ban.map((champion) =>
              <BannedChampion champion={champion}></BannedChampion>
            )}
            {this.state.draft.redTeam.pick.map((champion) =>
              <PickedChampion champion={champion}></PickedChampion>
            )}
          </Col>
        </Row>
      </Container>
    )
  }

}
import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ChampionList } from '../champions/list/ChampionList';
import { PickedChampion } from '../pickban/pick/PickedChampion';

export class Draft extends Component {

  constructor() {
    super();
    this.state = {
      selectingTeam: 'blueTeam',
      blueTeam: {
        bannedChampions: [],
        pickedChampions: []
      },
      redTeam: {
        bannedChampions: [],
        pickedChampions: []
      }
    }

    this.onSelectChampion = this.onSelectChampion.bind(this);
  }

  onSelectChampion(champion) {
    const selectingTeam = this.state.selectingTeam;
    var pickedChampions = this.state[selectingTeam].pickedChampions;

    pickedChampions.push(champion);

    if (selectingTeam === 'blueTeam') {
      this.setState(
        {
          selectingTeam: 'redTeam',
          blueTeam: {
            bannedChampions: this.state.blueTeam.bannedChampions,
            pickedChampions: pickedChampions
          }
        }
      );
    } else {
      this.setState(
        {
          selectingTeam: 'blueTeam',
          redTeam: {
            bannedChampions: this.state.redTeam.bannedChampions,
            pickedChampions: pickedChampions
          }
        }
      );

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
            {this.state.blueTeam.pickedChampions.map((champion) =>
              <PickedChampion champion={champion}></PickedChampion>
            )}
          </Col>
          <Col>
            <ChampionList onSelectChampion={this.onSelectChampion}></ChampionList>
          </Col>
          <Col>
            {this.state.redTeam.pickedChampions.map((champion) =>
              <PickedChampion champion={champion}></PickedChampion>
            )}
          </Col>
        </Row>
      </Container>
    )
  }

}
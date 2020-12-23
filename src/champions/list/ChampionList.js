import { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ChampionSelector } from '../selector/ChampionSelector';
import './ChampionList.css';

export class ChampionList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      championList: []
    };

    this.onSelectChampion = props.onSelectChampion;

    this.onSelectChampion = this.onSelectChampion.bind(this);
  }

  componentDidMount() {
    fetch('assets/10.25.1/data/fr_FR/champion.json')
      .then((res) => res.json()).then((champList) => {
        this.setState({ championList: Object.values(champList.data).sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0) });
      });
  }

  onSelectChampion(champion) {
    alert(champion.name);
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.championList.map((champion) => <Col>
            <ChampionSelector clickCallback={this.onSelectChampion} champion={champion}></ChampionSelector>
          </Col>)}
        </Row>
      </Container>
    )
  }
}
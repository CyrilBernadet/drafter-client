import { Component } from 'react';

export class BannedChampion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champion: props.champion
    };
  }

  render() {
    return (
      <img
        src={'assets/10.25.1/img/sprite/' + this.state.champion.image.sprite}
        alt={this.state.champion.name}
        height={this.state.champion.image.h}
        width={this.state.champion.image.w}
        style={{ objectPosition: '-' + this.state.champion.image.x + 'px -' + this.state.champion.image.y + 'px' }}></img>
    )
  }
}
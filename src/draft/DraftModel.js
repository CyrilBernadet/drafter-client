export class DraftModel {
  constructor() {
    this.selectingTeam = 0;
    
    this.blueTeam = {
      ban: [],
      pick: []
    };

    this.redTeam = {
      ban: [],
      pick: []
    };
  }
}
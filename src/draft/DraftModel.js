export class DraftModel {
  constructor() {
    this.selectingTeam = 0;
    
    this.blueTeam = {
      bannedChampions: [],
      pickedChampions: []
    };

    this.redTeam = {
      bannedChampions: [],
      pickedChampions: []
    };
  }
}
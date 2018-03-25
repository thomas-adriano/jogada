import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from '@app/core/model/team';

@Component({
  selector: 'scoreboard',
  templateUrl: 'scoreboard.html'
})
export class ScoreboardComponent implements OnChanges {

  @Input()
  public teamA = Team.nullInstance();
  @Input()
  public teamB = Team.nullInstance();

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    let currentTeamA = changes.teamA.currentValue;
    let currentTeamB = changes.teamB.currentValue;
    if (Team.isNull(currentTeamA) || Team.isNull(currentTeamB)) {
      this.teamA = Team.nullInstance();
      this.teamB = Team.nullInstance();
    }
  }

}

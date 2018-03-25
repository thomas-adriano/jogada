import { Component } from '@angular/core';

@Component({
  selector: 'scoreboard',
  templateUrl: 'scoreboard.html'
})
export class ScoreboardComponent {

  text: string;

  constructor() {
    console.log('Hello ScoreboardComponent Component');
    this.text = 'Hello World';
  }

}

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Team } from '@app/core/model/team';
import { ChatMessage } from '@app/core/model/chat-message';
import { TimelineItem } from '@app/shared/timeline/timeline';

@IonicPage()
@Component({
  selector: 'page-playroom',
  templateUrl: 'playroom.html',
})
export class PlayroomPage implements OnInit {

  public teamA: Team;
  public teamB: Team;
  public gameHistoryItems: TimelineItem[];
  public chatMessages: ChatMessage[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.teamA = new Team('Team A', 1);
    this.teamB = new Team('Team B', 0);

    this.gameHistoryItems = [
      new TimelineItem('occurrence 1', new Date()),
      new TimelineItem('occurrence 2', new Date()),
      new TimelineItem('occurrence 3', new Date())
    ]

    this.chatMessages = [
      new ChatMessage('nice game!', 'Thomas Adriano', new Date()),
      new ChatMessage('very nice game!', 'Rick', new Date()),
      new ChatMessage('very, very nice game!', 'Morty', new Date()),
    ];
  }

}

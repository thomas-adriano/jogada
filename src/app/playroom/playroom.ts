import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Team } from '@app/core/model/team';
import { ChatMessage } from '@app/core/model/chat-message';
import { TimelineItem } from '@app/shared/timeline/timeline';
import moment from 'moment';

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
    this.teamA = new Team('Team A', 2);
    this.teamB = new Team('Team B', 0);

    this.gameHistoryItems = [
      new TimelineItem('Team A scores', moment().toDate()),
      new TimelineItem('Team B player banned', moment().add(5, 'minutes').toDate()),
      new TimelineItem('Team A scores again ', moment().add(12, 'minutes').toDate())
    ]

    this.chatMessages = [
      new ChatMessage('Nice game!', 'Thomas Adriano', moment().add(0, 'minutes').toDate()),
      new ChatMessage('Very nice game!', 'Rick', moment().add(5, 'minutes').toDate()),
      new ChatMessage('Very, very nice game!', 'Morty', moment().add(12, 'minutes').toDate()),
      new ChatMessage('Rick, how about Team B?', 'Morty', moment().add(13, 'minutes').toDate()),
      new ChatMessage('Wait for it, Morty... wait for it.', 'Rick', moment().add(14, 'minutes').toDate()),
      new ChatMessage('...remember last season? Something like this happened too and we still win! :D', 'Rick', moment().add(15, 'minutes').toDate()),
      new ChatMessage('Take it easy', 'Morty', moment().add(17, 'minutes').toDate()),
      new ChatMessage('I\'m just messing with you, partner. :D', 'Morty', moment().add(17, 'minutes').toDate()),
    ];
  }

}

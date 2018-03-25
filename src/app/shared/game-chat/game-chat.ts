import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '@app/core/model/chat-message';

@Component({
  selector: 'game-chat',
  templateUrl: 'game-chat.html'
})
export class GameChatComponent implements OnInit {

  @Input()
  public messages: ChatMessage[];

  constructor() {

  }

  ngOnInit() {

  }

}

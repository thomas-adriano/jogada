import { Component, AfterViewInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { ChatMessage } from '@app/core/model/chat-message';
import { Content } from 'ionic-angular';


@Component({
  selector: 'game-chat',
  templateUrl: 'game-chat.html'
})
export class GameChatComponent implements AfterViewInit, OnChanges {

  @Input()
  public messages: ChatMessage[];
  @ViewChild(Content) content: Content;
  constructor() {

  }

  ngAfterViewInit() {
    setTimeout(() => this.content.scrollToBottom());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes || !changes.messages.currentValue) {
      return;
    }
    const currMsgs: ChatMessage[] = changes.messages.currentValue;
    this.messages = currMsgs.sort((a, b) => this.dateComparator(a.timestamp, b.timestamp));
    console.log(changes.messages.currentValue.length, this.messages.length);
  }

  private dateComparator(a: Date, b: Date): number {
    const yearDiff = a.getFullYear() - b.getFullYear();
    const monthDiff = a.getMonth() - b.getMonth();
    const dayDiff = a.getDate() - b.getDate();
    const hoursDiff = a.getHours() - b.getHours();
    const minDiff = a.getMinutes() - b.getMinutes();
    const secDiff = a.getSeconds() - b.getSeconds();

    return yearDiff + monthDiff + dayDiff + hoursDiff + minDiff + secDiff;
  }

  public fetchMessages(infiniteScroll) {
    setTimeout(() => {
      console.log('completed');
      infiniteScroll.complete();
      // simulating this as a final fetch
      infiniteScroll.enable(false);
    }, 500);
  }

}

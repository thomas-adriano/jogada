import { Component, OnInit, Input } from '@angular/core';
import { TimelineItem } from '@app/shared/timeline/timeline';

@Component({
  selector: 'game-history',
  templateUrl: 'game-history.html'
})
export class GameHistoryComponent implements OnInit {

  @Input()
  public timelineItems: TimelineItem[];

  constructor() {
  }

  ngOnInit() {
  }

}

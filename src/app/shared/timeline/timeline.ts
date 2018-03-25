import { Component, Input } from '@angular/core';

export class TimelineItem {
  constructor(private _description: string, private _occurrenceDate: Date) { }

  public set description(name: string) {
    this._description = name;
  }

  public get description() {
    return this._description;
  }

  public set occurrenceDate(occurrenceDate: Date) {
    this._occurrenceDate = occurrenceDate;
  }

  public get occurrenceDate() {
    return this._occurrenceDate;
  }
}

@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html'
})
export class TimelineComponent {

  @Input()
  public items: TimelineItem[]

  constructor() {

  }

}

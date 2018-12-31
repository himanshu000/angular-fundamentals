import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css']
})

export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  // @Output() eventClick = new EventEmitter();
  // someProperty: any = 'some value';

  constructor() { }

  ngOnInit() { }

  // logFoo() {
  //   console.log('foo');
  // }

  // handleClickMe() {
  //   this.eventClick.emit(this.event.name);
  // }

  getStartTimeClass() {
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return {green: isEarlyStart, bold: isEarlyStart};
    // if (this.event && this.event.time === '8:00 am') {
    //   return 'green bold';
    // }
    // return '';
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }
}

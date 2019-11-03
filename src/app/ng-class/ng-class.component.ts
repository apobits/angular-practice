import {Component, OnInit} from '@angular/core';
import {EventState} from './event-state';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  public cssClass;

  public text: string;

  public rule: string;

  public eventState: EventState;

  constructor() {
  }

  ngOnInit() {
    this.eventState = new EventState(false);
    this.text = 'Hello there, press button to see changes in color and size. ';
    this.rule = 'keep in mind using these technique other css classes are not overridden';
    // tslint:disable-next-line:max-line-length
    this.cssClass = {large: this.eventState.largeFont, small: !this.eventState.largeFont, 'color-large': this.eventState.largeFont, 'color-small': !this.eventState.largeFont};
  }

  changeLook() {
    console.log('Entered changeLook method');
    this.eventState.largeFont = !this.eventState.largeFont;
  }

}

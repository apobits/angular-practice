import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  public cssStyle;

  public changeFlag: boolean;

  constructor() {
  }

  ngOnInit() {
    this.cssStyle = {'font-size': this.changeFlag ? 'large' : 'small'};
  }

  updateFlag() {
    this.changeFlag = !this.changeFlag;
  }

}

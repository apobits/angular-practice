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
    this.updateFlag();
  }

  updateFlag() {
    this.changeFlag = !this.changeFlag;
    this.cssStyle = {'font-size': this.changeFlag ? 'large' : 'small'};
  }

}

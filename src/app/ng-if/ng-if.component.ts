import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  public flag: boolean;

  constructor() {
  }

  ngOnInit() {
    this.flag = true;
  }

  changeFlag() {
    this.flag = !this.flag;
  }
}

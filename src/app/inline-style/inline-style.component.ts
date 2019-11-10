import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inline-style',
  templateUrl: './inline-style.component.html',
  styles: [`.div-border {
      color: blue
  }`, `.age {
      font-size: large
  }`]
})
export class InlineStyleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

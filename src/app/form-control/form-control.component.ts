import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  public name: FormControl;

  constructor() {
    this.name = new FormControl();
  }

  ngOnInit() {
  }

  writeName() {
    console.log(this.name.value);
  }

}

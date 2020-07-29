import {Component, OnInit} from '@angular/core';
import {Person} from './person';


@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {

  public person: Person;

  public consent: boolean;

  public idTypes = ['CC', 'NIT'];

  public idError: string;

  constructor() {
    this.person = new Person('a', 'a', 1, 'cc');
  }

  ngOnInit() {
  }

  updateError(model) {
    if (model.errors.required) {
      this.idError = 'Id is mandatory';
    }
  }

  createPersonLog() {
    console.log('Person ' + this.person.name + ' created');
  }
}

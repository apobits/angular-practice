import {Component, OnInit} from '@angular/core';
import {Person} from '../ng-model/person';

@Component({
  selector: 'app-ng-model-group',
  templateUrl: './ng-model-group.component.html',
  styleUrls: ['./ng-model-group.component.css']
})
export class NgModelGroupComponent implements OnInit {

  public person: Person;

  constructor() {
  }

  ngOnInit() {
  }

  createPerson(personForm) {
    this.person = personForm.value.person;
    console.log(this.person.name + this.person.lastName);
  }

}

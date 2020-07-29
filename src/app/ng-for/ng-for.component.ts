import {Component, OnInit} from '@angular/core';
import {Person} from './person';
import {log} from 'util';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  public persons: Array<Person>;

  constructor() {
  }

  ngOnInit() {
    console.log('testing');
    this.persons = [new Person(1, 'Albin', 'Perez'),
      new Person(2, 'Danna', 'Perez'),
      new Person(3, 'Marcela', 'Castro')];
  }

  personIdentity(person: Person) {
    console.log(person.id);
    return person.id;
  }

  reload() {
    this.persons.concat(new Person(4, 'Nidia', 'Ortiz'));
  }

}

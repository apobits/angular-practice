import {Component, OnInit} from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  public person: Person;

  constructor() {
  }

  ngOnInit() {
    this.person = new Person('Albin', 'Perez', 'Ortiz', 37, '', true);
  }

  testClick() {
    console.log('Entered testClick method');
    this.person.clickEvent = 'Testing';
    this.person.showButton = !this.person.showButton;
  }

}

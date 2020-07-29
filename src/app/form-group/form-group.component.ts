import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from './person';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {

  public personForm: FormGroup;

  public person: Person;


  constructor() {
    this.personForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      id: new FormControl(null, Validators.required)
    });
  }

  submit() {
    this.person = this.personForm.value;
    console.log(this.person);
  }

}

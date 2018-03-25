import { Component, OnInit } from '@angular/core';
import {Ad} from '../ad.service';
import {Person} from '../person.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  submitted = false;


  constructor(public ad: Ad , public person: Person) {
  }
  ngOnInit() {

}
    onSubmit(form: NgForm, e: Event) {
    console.log(form);
    console.log(form.valid);
    console.log(form.value);
    const myFormJson = JSON.stringify(form.value);
    localStorage.setItem('myJsonString', myFormJson);
      alert('your Form was Submitted');
      this.submitted = true;
    }
}

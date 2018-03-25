import { Component, OnInit} from '@angular/core';
import {Ad} from '../ad.service';
import {Person} from '../person.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],

})
export class DisplayComponent implements OnInit {

  constructor(public ad: Ad , public person: Person) {

   }

  ngOnInit() {

  }

  }


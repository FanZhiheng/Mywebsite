import { Component, OnInit } from '@angular/core';
import { slider } from 'src/app/route-animations';

@Component({
  selector: 'app-seniordesign-page',
  templateUrl: './seniordesign-page.component.html',
  styleUrls: ['./seniordesign-page.component.css'],
  animations: [
    slider,
  ]
})
export class SeniordesignPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

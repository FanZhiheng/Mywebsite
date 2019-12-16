import { Component, OnInit } from '@angular/core';
import { slider } from 'src/app/route-animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    slider,
  ]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

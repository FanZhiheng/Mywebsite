import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-seniordesign-page',
  templateUrl: './seniordesign-page.component.html',
  styleUrls: ['./seniordesign-page.component.css'],

})
export class SeniordesignPageComponent implements OnInit {

  private projectIntro : string;
  constructor() { 

  }

  
  ngOnInit() {
    this.projectIntro = "https://www.cse.msu.edu/~cse498/2019-08/projects/volkswagen/";
  }


  intro() {
    window.location.href = this.projectIntro;
  }
}

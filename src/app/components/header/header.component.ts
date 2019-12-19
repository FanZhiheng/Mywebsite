import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private resumelink: string;
  constructor() { }

  ngOnInit() {
    this.resumelink = 'https://drive.google.com/open?id=18HjpTUV2HIhX2mB9cuO_8HvvZ0a1aU83';

  }
  goResume (){
    window.location.href = this.resumelink;
  }

}

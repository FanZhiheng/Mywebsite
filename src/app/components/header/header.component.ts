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
    this.resumelink = 'https://drive.google.com/open?id=11Um93SkBGIwWtcfiIr1GMbcsnYCpVA_B';

  }
  goResume (){
    window.location.href = this.resumelink;
  }

}

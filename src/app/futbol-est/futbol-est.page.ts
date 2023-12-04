import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-futbol-est',
  templateUrl: './futbol-est.page.html',
  styleUrls: ['./futbol-est.page.scss'],
})
export class FutbolEstPage implements OnInit {

  isButton1Disabled: boolean = false;
  isButton2Disabled: boolean = true;
  isButton3Disabled: boolean = true;
  state: string = "";
  constructor() { }

  ngOnInit() {
  }
  onButtonClick() {
    if (this.state="") {
      this.isButton1Disabled = true; 
    } else {
      this.isButton1Disabled = false; 
    }
    }
}

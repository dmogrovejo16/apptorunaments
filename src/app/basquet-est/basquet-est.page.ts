import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basquet-est',
  templateUrl: './basquet-est.page.html',
  styleUrls: ['./basquet-est.page.scss'],
})
export class BasquetEstPage implements OnInit {
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

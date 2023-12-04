import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volley-est',
  templateUrl: './volley-est.page.html',
  styleUrls: ['./volley-est.page.scss'],
})
export class VolleyEstPage implements OnInit {
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

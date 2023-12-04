import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-futbol-adm',
  templateUrl: './futbol-adm.page.html',
  styleUrls: ['./futbol-adm.page.scss'],
})
export class FutbolAdmPage implements OnInit {

  isButton1Disabled: boolean = false;
  isButton2Disabled: boolean = true;
  isButton3Disabled: boolean = true;

  isButton11Disabled: boolean=false;
  isButton21Disabled: boolean=false;
  isButton31Disabled: boolean=false;
  state: string = "";
  constructor() { }

  ngOnInit() {   
    this.isButton11Disabled=!this.isButton1Disabled;
    this.isButton21Disabled=!this.isButton2Disabled;
    this.isButton31Disabled=!this.isButton3Disabled;
  }

  onButtonClick() {
  if (this.state="") {
    this.isButton1Disabled = true; 
  } else {
    this.isButton1Disabled = false; 
  }
  }


}

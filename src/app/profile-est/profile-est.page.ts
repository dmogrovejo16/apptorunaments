import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-est',
  templateUrl: './profile-est.page.html',
  styleUrls: ['./profile-est.page.scss'],
})
export class ProfileEstPage implements OnInit {
  nombre: string = localStorage.getItem("Name")!;
  nombreCapitalizado: string = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
  apellido: string = localStorage.getItem("Last Name")!;
  apellidoCapitalizado: string = this.apellido.charAt(0).toUpperCase() + this.apellido.slice(1);


  constructor() { }

  ngOnInit() {
  }

}

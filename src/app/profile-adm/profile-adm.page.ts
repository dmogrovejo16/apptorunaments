import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-profile-adm',
  templateUrl: './profile-adm.page.html',
  styleUrls: ['./profile-adm.page.scss'],
})
export class ProfileAdmPage implements OnInit {
  nombre: string = localStorage.getItem("Name")!;
  nombreCapitalizado: string = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
  apellido: string = localStorage.getItem("Last Name")!;
  apellidoCapitalizado: string = this.apellido.charAt(0).toUpperCase() + this.apellido.slice(1);


  constructor(public _apiService: ApiService) {}

  ngOnInit() {
  }

  

}

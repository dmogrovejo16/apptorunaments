import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
=======
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

@Component({
  selector: 'app-volley-adm',
  templateUrl: './volley-adm.page.html',
  styleUrls: ['./volley-adm.page.scss'],
})
export class VolleyAdmPage implements OnInit {
<<<<<<< HEAD
  torneos: any[] = [];
  isButton1Disabled: boolean = false;
  isButton2Disabled: boolean = true;
  isButton3Disabled: boolean = true;
  nombreTorneo: any ;
=======
  isButton1Disabled: boolean = false;
  isButton2Disabled: boolean = true;
  isButton3Disabled: boolean = true;

>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
  isButton11Disabled: boolean=false;
  isButton21Disabled: boolean=false;
  isButton31Disabled: boolean=false;
  state: string = "";
<<<<<<< HEAD
  constructor(private http: HttpClient, public _apiService: ApiService) { }

  ngOnInit() {   
    this.isButton11Disabled=!this.isButton1Disabled;
    this.isButton21Disabled=!this.isButton2Disabled;
    this.isButton31Disabled=!this.isButton3Disabled;

    this._apiService.getTournaments().subscribe((res:any)=>{
console.log(res);
this.torneos=res;
  },(error: any)=>{ 
      alert('ERROR');
      console.log("ERROR ===", error);
    })
  
  }

  handleRefresh(event:any) {
    this.ngOnInit();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1500);
  }

  obtenerNombre(nombreT:any){
    this.nombreTorneo=nombreT;
    localStorage.setItem("NombreTorneo", this.nombreTorneo);

  }
  

  onButtonClick() {
  if (this.state="") {
    this.isButton1Disabled = true; 
  } else {
    this.isButton1Disabled = false; 
  }
  }




}

=======
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
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

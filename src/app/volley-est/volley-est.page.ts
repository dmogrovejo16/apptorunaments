<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

@Component({
  selector: 'app-volley-est',
  templateUrl: './volley-est.page.html',
  styleUrls: ['./volley-est.page.scss'],
})
export class VolleyEstPage implements OnInit {
<<<<<<< HEAD
  torneos: any[] = [];
  nombreTorneo: any ;

  isButton1Disabled: boolean = false;
  isButton2Disabled: boolean = true;
  isButton3Disabled: boolean = true;
  state: string = "";
  constructor(private http: HttpClient, public _apiService: ApiService) { }

  ngOnInit() {

    this._apiService.getTournaments().subscribe((res:any)=>{
      console.log(res);
      this.torneos=res;
        },(error: any)=>{ 
            alert('ERROR');
            console.log("ERROR ===", error);
          })
=======
  isButton1Disabled: boolean = false;
  isButton2Disabled: boolean = true;
  isButton3Disabled: boolean = true;  
  state: string = "";
  constructor() { }

  ngOnInit() {
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
  }
  onButtonClick() {
    if (this.state="") {
      this.isButton1Disabled = true; 
    } else {
      this.isButton1Disabled = false; 
    }
<<<<<<< HEAD


    this.nombreTorneo = document.getElementById("nombreTor");

    if (this.nombreTorneo  !== null) {
     var texto = this.nombreTorneo.innerText;
       
       localStorage.setItem("NombreTorneo", texto);
       console.log(texto);
 
   } else {
       console.log("El elemento no fue encontrado.");
   }
    }

    handleRefresh(event:any) {
      this.ngOnInit();
      setTimeout(() => {
        // Any calls to load data go here
        event.target.complete();
      }, 1500);
=======
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
    }
}

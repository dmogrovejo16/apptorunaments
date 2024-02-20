<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

@Component({
  selector: 'app-basquet-adm',
  templateUrl: './basquet-adm.page.html',
  styleUrls: ['./basquet-adm.page.scss'],
})
export class BasquetAdmPage implements OnInit {
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
=======
  constructor() { }
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

  ngOnInit() {
    this.isButton11Disabled=!this.isButton1Disabled;
    this.isButton21Disabled=!this.isButton2Disabled;
    this.isButton31Disabled=!this.isButton3Disabled;
<<<<<<< HEAD
  
  this._apiService.getTournaments().subscribe((res:any)=>{
    console.log(res);
    this.torneos=res;
      },(error: any)=>{ 
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
      

=======
  }
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
  onButtonClick() {
    if (this.state="") {
      this.isButton1Disabled = true; 
    } else {
      this.isButton1Disabled = false; 
    }
    }
<<<<<<< HEAD
  }
=======

}
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

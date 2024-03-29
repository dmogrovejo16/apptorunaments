import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-input-results-matches-fut-adm',
  templateUrl: './input-results-matches-fut-adm.page.html',
  styleUrls: ['./input-results-matches-fut-adm.page.scss'],
})
export class InputResultsMatchesFutAdmPage implements OnInit {

  id: any;
  Eq1:any;
  Eq2:any;
  resEq1:any;
  resEq2:any;
  
  constructor(private router: Router,public _apiService: ApiService,private http: HttpClient,private toastController: ToastController, private route: ActivatedRoute) {
    this.id=localStorage.getItem("idPartido");
    this.Eq1=localStorage.getItem("Equipo1");
    this.Eq2=localStorage.getItem("Equipo2");
   }

  ngOnInit() {
    this.id=localStorage.getItem("idPartido");
    this.Eq1=localStorage.getItem("Equipo1");
    this.Eq2=localStorage.getItem("Equipo2");
  }

resultMatch(){

  this.id=localStorage.getItem("idPartido");
  this.Eq1=localStorage.getItem("Equipo1");
  this.Eq2=localStorage.getItem("Equipo2");
<<<<<<< HEAD
  if(this.resEq1>=0&&this.resEq2>=0){
=======
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

  let data = {
    resEq1: this.resEq1,
    resEq2: this.resEq2,
   id: this.id
  }

  this._apiService.resultMatch(data).subscribe((res:any)=>{

    console.log("SUCCESS ===", res);
<<<<<<< HEAD
=======
    alert('SUCCESS');
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
    this.router.navigate(['/futbol-matches-adm']);
    this.presentToastGood('Resultado ingresado con éxito');

  },(error: any)=>{ 
<<<<<<< HEAD
=======
    alert(error);
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
    console.log("ERROR ===", error);
    this.presentToastBad('El resultado no pudo ser ingresado');
  })

<<<<<<< HEAD
}else{
  this.presentToastBad("Los valores no pueden ser negativos");
}
=======
  
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
}

async presentToastGood(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000, 
    position: 'bottom', 
    color: 'success', 
  });
  toast.present();
}

async presentToastBad(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000, 
    position: 'bottom', 
    color: 'danger', 
  });
  toast.present();
}

}

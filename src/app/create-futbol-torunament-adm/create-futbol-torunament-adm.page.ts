import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-futbol-torunament-adm',
  templateUrl: './create-futbol-torunament-adm.page.html',
  styleUrls: ['./create-futbol-torunament-adm.page.scss'],
})
export class CreateFutbolTorunamentAdmPage implements OnInit {

<<<<<<< HEAD
  name: any;
  fechIni: any;
  fechFin: any;
  idAdmCreator: any;
=======
  name: string = '';
  fechIni: string = '';
  fechFin: string = '';
  idAdmCreator: string = '40';
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
  id: string = localStorage.getItem("id")!;

  constructor(private router: Router,public _apiService: ApiService,private toastController: ToastController, private route: ActivatedRoute) { }

  ngOnInit() {
  }



  addTournament(){

<<<<<<< HEAD
if(this.name!=""&&this.fechIni!=""&&this.fechFin!=""){
=======
if(this.name!=''||this.fechIni!=''||this.fechFin!=''){
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d



    var fechaInicio = new Date(this.fechIni);
    var fechaFin = new Date(this.fechFin);
    console.log(fechaInicio,' ' ,fechaFin);

<<<<<<< HEAD
    this._apiService.getTournaments().subscribe((res:any)=>{
      if(res.some((item: { nombreTorneo: any; }) => item.nombreTorneo == this.name)){
this.presentToastBad("Ya existe un torneo con ese nombre");
      }else{
=======
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

if(fechaInicio < fechaFin){

    let data = {
      name: this.name,
      fechIni: this.fechIni,
      fechFin: this.fechFin,
      idAdmCreator: this.id,
    }

    this._apiService.addTournament(data).subscribe((res:any)=>{

      this.route.params.subscribe((param:any) =>{
        this.name = param.name;
        console.log(this.name);
        
            }) 
            
        console.log("SUCCESS ===", res);
      this.name='';
      this.fechIni='';
      this.fechFin='';
      this.idAdmCreator='';
<<<<<<< HEAD
      this.router.navigate(['/futbol-adm']);
      this.presentToast('Torneo creado exitosamente');
  },(error: any)=>{ 
=======
      alert('SUCCESS');
      this.router.navigate(['/futbol-adm']);
      this.presentToast('Torneo creado exitosamente');
  },(error: any)=>{ 
    alert('ERROR');
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
    console.log("ERROR ===", error);
  })
  
}else{
  this.presentToastBad('La fecha de inicio debe ser anterior a la fecha de finalización');

}
<<<<<<< HEAD
}
},(error: any)=>{ 
  console.log("ERROR ===", error);
})
=======
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

}else{
  this.presentToastBad('Porfavor complete todos los campos');

}
}

async presentToast(message: string) {
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

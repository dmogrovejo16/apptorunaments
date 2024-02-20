import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile-est',
  templateUrl: './profile-est.page.html',
  styleUrls: ['./profile-est.page.scss'],
})
export class ProfileEstPage implements OnInit {
<<<<<<< HEAD
  curso:any;

  esp: string = " ";
  nombreCapitalizado: string = localStorage.getItem("Name")! + " " +localStorage.getItem("Last Name")!;
  email: string| null = localStorage.getItem("Email");
  nombreCompleto:any;
  apellido: string = localStorage.getItem("Last Name")!;
  apellidoCapitalizado: string = this.apellido.charAt(0).toUpperCase()  + this.apellido.slice(0, -1);
=======
  esp: string = " ";
  nombreCapitalizado: string = localStorage.getItem("Name")! + " " +localStorage.getItem("Last Name")!;
  email: string| null = localStorage.getItem("Email");
  
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
  constructor(private router: Router, private alertController: AlertController,public _apiService: ApiService, private toastController: ToastController) { }

 



  ngOnInit() {
<<<<<<< HEAD
    this.nombreCompleto=this.nombreCapitalizado+" "+this.apellidoCapitalizado
    this.curso=localStorage.getItem("curso");
=======
   
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

}

async presentToastGood(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 1500, 
    position: 'bottom', 
    color: 'success', 
  });
  toast.present();
}

async presentAlert() {
  const alert = await this.alertController.create({
    header: '¿Está seguro que desea eliminar su cuenta?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: ()=>{
      console.log(this.email);
        }
      },
      {
        text: 'Eliminar',
        handler: () => {
          this.router.navigate(['/signup']);
          this.presentToastGood('Cuenta eliminada con éxito');
          
          this._apiService.delete(this.email).subscribe((res:any)=>{
           

          },(error: any)=>{ 
      console.log("ERROR ===", error);
    })

         
        }
      }
    ]
  });

  await alert.present();
}
}

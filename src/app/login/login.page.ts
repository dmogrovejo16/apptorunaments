import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  inputValue: string = '';
  password: string = '';
  constructor(private router: Router,private toastController: ToastController) { }

  ngOnInit() {
  }

  
  iniciarSesion(){
   
        if (localStorage.getItem("Username") !== null && localStorage.getItem("Password")!== null   ) {
          const username: string = localStorage.getItem("Username")!; // Using ! to assert non-null
          if (username.includes('est@') && this.password==localStorage.getItem("Password")&& username==localStorage.getItem("Username")) {
            console.log(username);
            this.presentToast('Inicio de Sesion exitoso');
            this.router.navigate(['/home-est']);
          } else if (!username.includes('est@') && this.password==localStorage.getItem("Password")&& username==localStorage.getItem("Username")) {
            console.log(username);
            this.presentToast('Inicio de Sesion exitoso');
            this.router.navigate(['/home-adm']);
            
          }else{
            console.log("mal");
            this.presentToast('Credenciales incorrectas o inexistentes');
          }
        } else {
          console.warn('Es null.');
        }


        
  
  
    }

    async presentToast(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 2000, 
        position: 'bottom', 
        color: 'danger', 
      });
      toast.present();
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

}

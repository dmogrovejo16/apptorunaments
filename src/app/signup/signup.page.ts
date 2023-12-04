import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string = '';
  newPassword: string = '';
  lastName: string = '';
 Username: string = '';
 rol: string = '';
  constructor(private router: Router,private toastController: ToastController) { }

  ngOnInit() {
  }


  register(){
    localStorage.setItem("Username", this.Username);
    localStorage.setItem("Password", this.newPassword);
    localStorage.setItem("name", this.name);
    localStorage.setItem("lastName", this.lastName);
    localStorage.setItem("rol", this.rol);
    const username: string = localStorage.getItem("Username")!; // Using ! to assert non-null
    if (username.includes('est@') ) {
 
      this.router.navigate(['/home-est']);
    this.presentToastGood('Resgistro exitoso');
  }

  if (!username.includes('est@') ) {
 
    this.router.navigate(['/home-adm']);
  this.presentToastGood('Resgistro exitoso');
}
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


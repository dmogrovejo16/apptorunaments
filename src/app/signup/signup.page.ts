import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string = '';
  password: string = '';
  lastName: string = '';
  email: string = '';
 
  constructor(private router: Router,public _apiService: ApiService,private toastController: ToastController) { }

  ngOnInit() {
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

  addStudent(){
 
if (this.email.includes('uets.edu.ec')&&this.email.includes('.')){

    let data = {
      name: this.name,
      lastName: this.lastName,
      password: this.password,
      email: this.email,
    }
  
  this._apiService.addStudent(data).subscribe((res:any)=>{
    console.log("SUCCESS ===", res);
    this.name='';
    this.lastName='';
    this.password='';
    this.email='';
    alert('SUCCESS');
  },(error: any)=>{ 
    alert('ERROR');
    console.log("ERROR ===", error);
  })
  
  if (!this.email.includes('est@') ) {
 
    this.router.navigate(['/home-adm']);
  this.presentToastGood('Resgistro exitoso');
}

if (this.email.includes('est@') ) {
 
  this.router.navigate(['/home-est']);
this.presentToastGood('Resgistro exitoso');
}

    }else{
      this.presentToastBad('El correo debe ser del dominio UETS');

    }
  }
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  titulo="Login";


  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async login(form){

    console.log(form.value)

    var username = form.value["username"];
    var password = form.value["password"];
    
    if(username == "admin" && password =="123"){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Bienvenido',
        message: 'Sesion ingresada con exito ' + username,
        buttons: ['Continuar']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      
      localStorage.setItem("datosUsuario", username);

      this.router.navigate(['/pproductos'])
    } 
  }
}

import { Component, OnInit } from '@angular/core';
import {ProductosService} from './productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pproductos',
  templateUrl: './pproductos.page.html',
  styleUrls: ['./pproductos.page.scss'],
})
export class PproductosPage implements OnInit {

  pproductos: any  = []
  usuario = localStorage.getItem("datosUsuario")

  titulos="MAN finflas GYM |";


//el constructor usa el servicio 
  constructor(private servicioPproductos: ProductosService,private router:Router) { }

  ngOnInit() {
     this.servicioPproductos.getPproductos().subscribe(
       (respuesta : any)=> {
        this.pproductos=respuesta
        console.log(respuesta)
       },
       (error) =>{
         console.log(error)
       }
     )
  } 

  ionViewWillEnter(){
    this.servicioPproductos.getPproductos().subscribe(
      (respuesta: any)=> {
        this.pproductos=respuesta
       console.log(respuesta)
      },
      (error) =>{
        console.log(error)
      }
    )
  }

  rediccionagregar(){

    this.router.navigate(['/agregar-producto']);
  }
}

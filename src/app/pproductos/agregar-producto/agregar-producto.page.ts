import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { AlertController } from '@ionic/angular'
import { producto } from '../detalle-producto/producto.model';
import { TipoProductoService } from 'src/app/tipoProducto/tipo-producto.service';
declare var require: any
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  private listado: any=[];

  private archivo: File = null

  constructor(private productoServicio: ProductosService, private router: Router, private alertController: AlertController,
    private TipoProductoServicio:TipoProductoService) { }

  ngOnInit() {

    //llamar al servicio para obtener los datos de la API
    this.TipoProductoServicio.getTipoProducto().subscribe(
      (respuesta)=>{
        this.listado=respuesta  //guardamos todos los tipo de producto
      },
      (error)=>{
        console.log("error al cargar el listado de tipo Productos")
      }
    )

  }

  capturarImagen(event){
    this.archivo =  <File>event.target.files[0]
  }


  async agregarProducto(Titulo,Comentarios,Precio){

    const axios = require('axios')

    const STRAPI_BASE_URL = 'http://localhost:1337'

    const datos = new FormData()
    datos.append('files',this.archivo)
    datos.append('ref', 'pproducto')
    datos.append('refId', '17') 
    datos.append('field', 'imagen')
//modificar para que en la linea 50 se muestre el ultimo id del producto agregado
    axios.post(`${STRAPI_BASE_URL}/upload`, datos)

    var lista = [];

    if(Comentarios.value, Titulo.value, Precio.value !== ""){
      lista.push(Comentarios.value)


      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: '¡¡Producto agregado con exito!!',
        message: 'Producto ingresado con exito  ' + Titulo.value,
        buttons: ['Aceptar']
      });
      
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      

      this.productoServicio.addPproductos(Titulo.value,lista,Precio.value).subscribe(
        (respuesta)=>{
          console.log(respuesta)
          this.router.navigate(['/pproductos']);
        },
        (error)=>{
          console.log(error)
        }

      )
     
      lista.push(Comentarios.value)
    }else{
      lista = null;
    }
    

    
  }

}

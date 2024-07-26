import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from'@angular/router'
import {ProductosService} from'../productos.service'
@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.page.html',
  styleUrls: ['./actualizar-producto.page.scss'],
})
export class ActualizarProductoPage implements OnInit {
//en el actualizar tenemos una variable producto los routing para capturar el id opr url y redireccionar
//tenemos el servicio para llamar al metodo buscar por el id
  private producto: any =[];
  private idproducto;
  constructor(private activatedRouter: ActivatedRoute, private router:Router,private productoServicio:ProductosService) { }

  ngOnInit() {

        //vamos a buscar el prodcuto por el id que viene la url 
        //con ese id se puede cargar los datos del producto

        this.activatedRouter.paramMap.subscribe( paramMap => { 

          //capturamos la id que viene en la url
          const valor = paramMap.get('proID')

          this.idproducto=valor; //guardamos el id para luego modificarlo
         
    
          //LLAMAMOS al servicio y le pasamos  el id 
           this.productoServicio.getPproductosById(valor).subscribe(
            (respuesta : any)=> {
              this.producto=respuesta
             console.log(respuesta)
            },
            (error) =>{
              console.log(error)
            }
          )
          
        } )
  }

  //metodo para actualizar un producto
  actualizarProducto(Titulo,ImagenURL,Comentario){
    //se llama al servicio y enviar los datos capturados
    this.productoServicio.updatePproductos(this.idproducto,Titulo.value,ImagenURL.value,Comentario.value).subscribe(
      (respuesta)=> {
        //accion en caso de actualizar,redireccionar
        this.producto = respuesta
        this.router.navigate(['../pproductos'])
      },
      (error) =>{
        console.log(error)
      }
    )


  }
}

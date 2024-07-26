import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { producto } from './producto.model';
import { AlertController } from '@ionic/angular';
import { TipoProductoService } from 'src/app/tipoProducto/tipo-producto.service';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  //esta clase la agregué recien igual que en el constructor
  private listado: any=[];
  private producto: any=[];
  private idproducto;
  

  constructor(private activatedRoute: ActivatedRoute, private productoServicio: ProductosService,
            private router: Router, private alertController: AlertController,private TipoProductoServicio:TipoProductoService) { }

  ngOnInit() {
    //esto lo agregué recien
    this.TipoProductoServicio.getTipoProducto().subscribe(
      (respuesta)=>{
        this.listado=respuesta  //guardamos todos los tipo de producto
      },
      (error)=>{
        console.log("error al cargar el listado de tipo Productos")
      }
    )





    //vamos a buscar el prodcuto por el id que viene la url 

    this.activatedRoute.paramMap.subscribe( paramMap => { 

      //capturamos la id que viene en la url
      const valor = paramMap.get('proID')
      this.idproducto= valor;
      console.log("Id del producto : " + valor)

      //LLAMAMOS al servicio y le pasamos  el id 
       this.productoServicio.getPproductosById(valor).subscribe(
        (respuesta : any)=> {
          this.producto=respuesta
       

        },
        (error) =>{
          console.log(error)
        }
      )
      
    } )
  }
  //metodo para eliminar un producto por id

  async  eliminar(){
    if(this.producto.id !== ""){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Desea eliminar?',
        message: 'Esta seguro que desea <strong>eliminar</strong>?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Produto cancelado');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log("Super confirmado eliminado")
              this.productoServicio.deletePproductos(this.producto.id).subscribe(
                (respuesta : any)=> {
                  this.producto=respuesta
                 console.log(respuesta)
                 this.router.navigate(['/pproductos'])
                },
                (error) =>{
                  console.log(error)
                }
              )
            }
          }
        ]
      });
  
      await alert.present();
      const { role } = await alert.onDidDismiss();
    }
      
      
    }
  //metodo para editar producto
    editarProducto(){
      this.router.navigate(['actualizar-producto/'+this.idproducto])
    }
    
  }


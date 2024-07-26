import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
//esta se importa
export class ProductosService {

  constructor(private http:HttpClient) { }
//BUSCAR TODOS LOS PRODUCTOS, RETORNAMOS UNA LISTA DE PRODUCTO FORZADA CON EL [...]
  getPproductos(){
    return this.http.get('http://localhost:1337/Productos')
  }
//se busca un elemento por id y se retorna un objeto 
  getPproductosById(pproductoId : string ){
    return this.http.get('http://localhost:1337/Productos/'+pproductoId)
  }

  addPproductos(Titulo: string,   Comentarios:string[], Precio : BigInteger){

    var datos ={
      "Titulo" :Titulo,
      "Comentarios" :Comentarios[0],
      "Precio" : Precio
    }

    return this.http.post ('http://localhost:1337/Productos/',datos)
  }

  deletePproductos(pproductoId: string){
    return this.http.delete('http://localhost:1337/Productos/'+pproductoId)
  }

  //actualizar producto
  updatePproductos(pproductoId:string,Titulo:string,ImagenURL:string,Comentarios:string){


    var datos ={
      "Titulo" :Titulo,
      "ImagenURL" :ImagenURL,
      "Comentarios" :Comentarios
    }
    return this.http.put('http://localhost:1337/Productos/'+pproductoId,datos)

  }


}

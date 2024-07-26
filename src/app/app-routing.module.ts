import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'pproductos',
    children:[
      {
        path:"",
        loadChildren: () => import('./pproductos/pproductos.module').then( m => m.PproductosPageModule)
      },
      {
        path:":proID",
        loadChildren: () => import('./pproductos/detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
      }

    ]
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./pproductos/agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'actualizar-producto/:proID',
    loadChildren: () => import('./pproductos/actualizar-producto/actualizar-producto.module').then( m => m.ActualizarProductoPageModule)


  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

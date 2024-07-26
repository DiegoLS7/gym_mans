import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PproductosPage } from './pproductos.page';

const routes: Routes = [
  {
    path: '',
    component: PproductosPage
  },
  {
    path: 'detalle-producto',
    loadChildren: () => import('./detalle-producto/detalle-producto.module').then( m => m.DetalleProductoPageModule)
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'actualizar-producto',
    loadChildren: () => import('./actualizar-producto/actualizar-producto.module').then( m => m.ActualizarProductoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PproductosPageRoutingModule {}

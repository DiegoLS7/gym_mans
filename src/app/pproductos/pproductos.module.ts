import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PproductosPageRoutingModule } from './pproductos-routing.module';

import { PproductosPage } from './pproductos.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PproductosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PproductosPage]
})
export class PproductosPageModule {}

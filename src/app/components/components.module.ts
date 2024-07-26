import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
HeaderComponent


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports :[HeaderComponent]
})
export class ComponentsModule { }

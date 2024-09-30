// import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewOrderComponentRoutingModule } from './new-order.routing.module';
import { NewOrderComponent } from './new-order.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewOrderComponentRoutingModule,
    // ComponentsModule
  ],
  declarations: [NewOrderComponent]
})
export class NewOrderModule {}

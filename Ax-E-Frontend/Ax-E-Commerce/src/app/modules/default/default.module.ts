import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule
  ]
})
export class DefaultModule { }

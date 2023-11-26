import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { loaderComponent } from '../services/loader';



@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    loaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }

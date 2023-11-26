import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LocationsComponent }
]


@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule

  ]
})
export class LocationsModule { }

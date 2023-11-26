import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoComponent } from './profile-info.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonpagesModule } from '../commonpages/commonpages.module';

const routes: Routes = [{ path: '', component: ProfileInfoComponent }]

@NgModule({
  declarations: [
    ProfileInfoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonpagesModule
  ],
})
export class ProfileInfoModule { }

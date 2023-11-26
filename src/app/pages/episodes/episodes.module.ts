import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './episodes.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: EpisodesComponent }]

@NgModule({
  declarations: [EpisodesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class EpisodesModule { }

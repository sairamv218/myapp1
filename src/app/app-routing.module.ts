import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './layout/body/body.component';

const routes: Routes = [

  // Module Routing For Lazy Loading

  {
    path: '',
    component: BodyComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'profileinfo',
        loadChildren: () => import('./pages/profile-info/profile-info.module').then(m => m.ProfileInfoModule)
      },
      {
        path: 'locations',
        loadChildren: () => import('./pages/locations/locations.module').then(m => m.LocationsModule)
      }
      ,
      {
        path: 'episodes',
        loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesModule)
      }


    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/component/master/master.component';
import { AuthGuard } from './core/services/auth/auth.guard';
import { HomeContainerComponent } from './home-container/home-container.component';

const routes: Routes = [
  {
    path: '', component: MasterComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home', component: HomeContainerComponent
      },
      { path: 'artist', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule) },
      { path: 'studio', loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule) }
    ]
  },


  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'ragistration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

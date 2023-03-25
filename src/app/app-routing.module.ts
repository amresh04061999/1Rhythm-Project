import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/component/master/master.component';
// import { AuthGuard } from './core/services/auth/auth.guard';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ManageProfileContainerComponent } from './manage-profile-container/manage-profile-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookingHistoryComponent } from './shared/booking-history/booking-history.component';

const routes: Routes = [
  {
    path: '', component: MasterComponent,
    // canActivate:[AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home', component: HomeContainerComponent
      },
      {
        path: 'manage-profile', component: ManageProfileContainerComponent
      },
      {
        path: 'booking-history', component: BookingHistoryComponent
      },
      { path: 'artist', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule) },
      { path: 'studio', loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule) }
    ]
  },


  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'ragistration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },

  {
    path: '**', component: PageNotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

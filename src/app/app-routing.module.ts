import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'ragistration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }, { path: 'artist', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule) }, { path: 'studio', loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

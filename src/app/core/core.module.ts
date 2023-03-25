import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './component/master/master.component';
import { HeaderComponent } from './component/header/header.component';
import { LoaderComponent } from './component/loader/loader.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { LoaderService } from './services/loader/loader.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { ProfileMenuComponent } from './component/profile-menu/profile-menu.component';
import { OverlayService } from './services/overlay/overlay.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthInterceptor } from './services/interceptor/auth.interceptor';
@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
    LoaderComponent,
    ProfileMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OverlayModule,
    HttpClientModule
  ],
  exports: [LoaderComponent,],
  providers: [AuthService, LoaderService, OverlayService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }

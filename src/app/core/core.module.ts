import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './component/master/master.component';
import { HeaderComponent } from './component/header/header.component';
import { LoaderComponent } from './component/loader/loader.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { LoaderService } from './services/loader/loader.service';
import {OverlayModule} from '@angular/cdk/overlay';
import { ProfileMenuComponent } from './component/profile-menu/profile-menu.component';
import { OverlayService } from './services/overlay/overlay.service';
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
    OverlayModule
  ],
  exports: [LoaderComponent,],
  providers: [AuthGuard, AuthService, LoaderService,OverlayService]
})
export class CoreModule { }

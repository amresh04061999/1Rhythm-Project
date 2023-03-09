import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './component/master/master.component';
import { HeaderComponent } from './component/header/header.component';
import { LoaderComponent } from './component/loader/loader.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { LoaderService } from './services/loader/loader.service';

@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LoaderComponent,],
  providers: [AuthGuard, AuthService, LoaderService,]
})
export class CoreModule { }

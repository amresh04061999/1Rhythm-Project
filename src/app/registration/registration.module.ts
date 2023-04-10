import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[UserService,]
})
export class RegistrationModule { }

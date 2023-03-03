import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './component/master/master.component';
import { HeaderComponent } from './component/header/header.component';
import { LoaderComponent } from './component/loader/loader.component';



@NgModule({
  declarations: [
    MasterComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

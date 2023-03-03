import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomePresentationComponent } from './home-container/home-presentation/home-presentation.component';
import { ManageProfileContainerComponent } from './manage-profile-container/manage-profile-container.component';
import { ManageProfilePresentationComponent } from './manage-profile-container/manage-profile-presentation/manage-profile-presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    HomePresentationComponent,
    ManageProfileContainerComponent,
    ManageProfilePresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

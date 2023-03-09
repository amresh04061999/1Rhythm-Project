import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
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
    CoreModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

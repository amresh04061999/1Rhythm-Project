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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    HomePresentationComponent,
    ManageProfileContainerComponent,
    ManageProfilePresentationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    CoreModule,
    SharedModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

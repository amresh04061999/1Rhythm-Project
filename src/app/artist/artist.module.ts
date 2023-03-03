import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { ArtistBookingFormContainerComponent } from './artist-booking-form-container/artist-booking-form-container.component';
import { ArtistBookingFormPresentationComponent } from './artist-booking-form-container/artist-booking-form-presentation/artist-booking-form-presentation.component';
import { ArtistDescriptionContainerComponent } from './artist-description-container/artist-description-container.component';
import { ArtistDescriptionPresentationComponent } from './artist-description-container/artist-description-presentation/artist-description-presentation.component';
import { ArtistListContainerComponent } from './artist-list-container/artist-list-container.component';
import { ArtistListPresentationComponent } from './artist-list-container/artist-list-presentation/artist-list-presentation.component';
import { BookingDetailsContainerComponent } from './booking-details-container/booking-details-container.component';
import { BookingDetailsPresentationComponent } from './booking-details-container/booking-details-presentation/booking-details-presentation.component';
import { ManageArtistProfileContainerComponent } from './manage-artist-profile-container/manage-artist-profile-container.component';
import { ManageArtistProfilePresentationComponent } from './manage-artist-profile-container/manage-artist-profile-presentation/manage-artist-profile-presentation.component';
import { ViewMoreInformationPopupComponent } from './view-more-information-popup/view-more-information-popup.component';


@NgModule({
  declarations: [
    ArtistComponent,
    ArtistBookingFormContainerComponent,
    ArtistBookingFormPresentationComponent,
    ArtistDescriptionContainerComponent,
    ArtistDescriptionPresentationComponent,
    ArtistListContainerComponent,
    ArtistListPresentationComponent,
    BookingDetailsContainerComponent,
    BookingDetailsPresentationComponent,
    ManageArtistProfileContainerComponent,
    ManageArtistProfilePresentationComponent,
    ViewMoreInformationPopupComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ]
})
export class ArtistModule { }

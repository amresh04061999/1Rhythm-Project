import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { StudioBookingFormContainerComponent } from './studio-booking-form-container/studio-booking-form-container.component';
import { StudioBookingFormPresentationComponent } from './studio-booking-form-container/studio-booking-form-presentation/studio-booking-form-presentation.component';
import { StudioDescriptionContainerComponent } from './studio-description-container/studio-description-container.component';
import { StudioDescriptionPresentationComponent } from './studio-description-container/studio-description-presentation/studio-description-presentation.component';
import { StudioListContainerComponent } from './studio-list-container/studio-list-container.component';
import { StudioListPresentationComponent } from './studio-list-container/studio-list-presentation/studio-list-presentation.component';
import { BookingDetailsContainerComponent } from './booking-details-container/booking-details-container.component';
import { BookingDetailsPresentationComponent } from './booking-details-container/booking-details-presentation/booking-details-presentation.component';
import { ManageStudioProfileContainerComponent } from './manage-studio-profile-container/manage-studio-profile-container.component';
import { ManageStudioProfilePresentationComponent } from './manage-studio-profile-container/manage-studio-profile-presentation/manage-studio-profile-presentation.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    StudioComponent,
    StudioBookingFormContainerComponent,
    StudioBookingFormPresentationComponent,
    StudioDescriptionContainerComponent,
    StudioDescriptionPresentationComponent,
    StudioListContainerComponent,
    StudioListPresentationComponent,
    BookingDetailsContainerComponent,
    BookingDetailsPresentationComponent,
    ManageStudioProfileContainerComponent,
    ManageStudioProfilePresentationComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule,
    NgSelectModule,
    SharedModule,
    NgxDropzoneModule
  ]
})
export class StudioModule { }

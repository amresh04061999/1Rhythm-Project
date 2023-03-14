import { Component } from '@angular/core';
import { OverlayService } from 'src/app/core/services/overlay/overlay.service';
import { StudioBookingFormContainerComponent } from '../../studio-booking-form-container/studio-booking-form-container.component';

@Component({
  selector: 'app-studio-description-presentation',
  templateUrl: './studio-description-presentation.component.html',
  styleUrls: ['./studio-description-presentation.component.scss']
})
export class StudioDescriptionPresentationComponent {
  constructor(private _overlaySevices:OverlayService){
  }
   public bookStudio(){
    this._overlaySevices.open(StudioBookingFormContainerComponent,true)

   }

}

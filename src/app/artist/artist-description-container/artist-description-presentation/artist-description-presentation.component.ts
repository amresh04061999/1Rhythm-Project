import { Component } from '@angular/core';
import { OverlayService } from 'src/app/core/services/overlay/overlay.service';
import { ArtistBookingFormContainerComponent } from '../../artist-booking-form-container/artist-booking-form-container.component';

@Component({
  selector: 'app-artist-description-presentation',
  templateUrl: './artist-description-presentation.component.html',
  styleUrls: ['./artist-description-presentation.component.scss']
})
export class ArtistDescriptionPresentationComponent {
 constructor(private _overlayService:OverlayService){

 }
  public bookArtist():void{
       this._overlayService.open(ArtistBookingFormContainerComponent,true)
 }
}

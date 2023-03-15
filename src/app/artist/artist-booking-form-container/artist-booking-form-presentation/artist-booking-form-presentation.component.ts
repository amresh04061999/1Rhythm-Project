import { Component } from '@angular/core';
import { OverlayService } from 'src/app/core/services/overlay/overlay.service';

@Component({
  selector: 'app-artist-booking-form-presentation',
  templateUrl: './artist-booking-form-presentation.component.html',
  styleUrls: ['./artist-booking-form-presentation.component.scss']
})
export class ArtistBookingFormPresentationComponent {
  public userTypes=[
    { id:1,name:'General User'},
    { id:2,name:'Studio Owner'},
    { id:3,name:'Artist'}
    ]
    constructor(private _overlayService:OverlayService){

    }
    public closeForm():void{
            this._overlayService.close()
    }
}

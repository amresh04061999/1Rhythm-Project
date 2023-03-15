import { Component } from '@angular/core';
import { OverlayService } from 'src/app/core/services/overlay/overlay.service';

@Component({
  selector: 'app-artist-booking-form-presentation',
  templateUrl: './artist-booking-form-presentation.component.html',
  styleUrls: ['./artist-booking-form-presentation.component.scss']
})
export class ArtistBookingFormPresentationComponent {
  public userTypes=[
    { id:1,name:'Event'},
    { id:2,name:'Class'},
    ]
    public  showInputBox:string;
    constructor(private _overlayService:OverlayService){
     this.showInputBox='';
    }
    public closeForm():void{
            this._overlayService.close()
    }
    public selectBookArtistFor(event:any):void{
      this.showInputBox=event;
    }
}

import { Component } from '@angular/core';
import { OverlayService } from 'src/app/core/services/overlay/overlay.service';

@Component({
  selector: 'app-studio-booking-form-presentation',
  templateUrl: './studio-booking-form-presentation.component.html',
  styleUrls: ['./studio-booking-form-presentation.component.scss']
})
export class StudioBookingFormPresentationComponent {
  public userTypes=[
    { id:1,name:'General User'},
    { id:2,name:'Studio Owner'},
    { id:3,name:'Artist'}
    ]
constructor(private _overlayService:OverlayService){

}
public closeForm(){
this._overlayService.close()
}
}

import { Component } from '@angular/core';
import { OverlayService } from '../../services/overlay/overlay.service';
import { ProfileMenuComponent } from '../profile-menu/profile-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isOpen: boolean;
  constructor(private _overlaySevices:OverlayService) {
    this.isOpen = true;
  }
  public open(): void {
      this.isOpen = !this.isOpen;
  }
// Open Profile menu
  public OpenProfileMenu():void{
   this._overlaySevices.open(ProfileMenuComponent);
   
  }
 
}

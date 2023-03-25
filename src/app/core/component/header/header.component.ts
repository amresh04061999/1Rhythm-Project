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
  public isDown: boolean;
  constructor(private _overlaySevices: OverlayService) {
    this.isDown = false;
    this.isOpen = true;
  }
  public open(): void {
    this.isOpen = !this.isOpen;
  }
  public opendown(): void {
    this.isDown = !this.isDown;
  }
  // Open Profile menu
  public OpenProfileMenu(): void {
    this._overlaySevices.open(ProfileMenuComponent, false);
  }

}

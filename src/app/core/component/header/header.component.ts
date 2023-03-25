import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
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
  constructor(private _overlaySevices: OverlayService, private _userService: AuthService, private router: Router) {
    this.isDown = false;
    this.isOpen = true;
  }
  /**
   * 
   */
  public open(): void {
    this.isOpen = !this.isOpen;
  }
  /**
   * Open Dropdown in Mobile header
   */
  public opendown(): void {
    this.isDown = !this.isDown;
  }
  /**
   * Open Profile Menu
   */
  public OpenProfileMenu(): void {
    this._overlaySevices.open(ProfileMenuComponent, false);
  }
  /**
   * logout 
   */
  public logOut() {
    this._userService.logout();
    this.router.navigateByUrl('/login')
  }

}

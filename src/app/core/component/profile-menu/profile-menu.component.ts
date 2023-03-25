import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { OverlayService } from '../../services/overlay/overlay.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent {
  constructor(private _userService: AuthService, private overlayServec: OverlayService, private router: Router) {

  }
  public logOut() {
    this._userService.logout();
    this.overlayServec.close();
    this.router.navigateByUrl('/login')
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { OverlayService } from '../../services/overlay/overlay.service';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {
  public getUser: any;
  constructor(private _userService: AuthService, private overlayService: OverlayService, private router: Router) {

  }
  ngOnInit(): void {
    this.getSingleUsers()
  }
  /**
   * logOut user and redirect login
   */
  public logOut() {
    this._userService.logout();
    this.overlayService.close();
    this.router.navigateByUrl('/login')
  }
  /**
 *  get user Details in  AuthService  or set roll
 * 
 */
  public getSingleUsers() {
    this.getUser = this._userService.getLoginData();
    this.getUser = JSON.parse(this.getUser)
  }

}

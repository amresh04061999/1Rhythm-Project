import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { OverlayService } from '../../services/overlay/overlay.service';
import { ProfileMenuComponent } from '../profile-menu/profile-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isOpen: boolean;
  public isDown: boolean;
  public getUser: any;
  constructor(private _overlayService: OverlayService, private _userService: AuthService, private router: Router) {
    this.isDown = false;
    this.isOpen = true;
  }
  ngOnInit(): void {
    this.getSingleUsers();
  }
  /**
   * menu icon change open and close
   */
  public open(): void {
    this.isOpen = !this.isOpen;
  }
  /**
   * show and hide  details in mobile header section
   */
  public upDowArrow(): void {
    this.isDown = !this.isDown;
  }
  /**
   * Open Profile Menu
   */
  public OpenProfileMenu(): void {
    this._overlayService.open(ProfileMenuComponent, false);
  }
  /**
   * logout user and redirect login
   */
  public logOut() {
    this._userService.logout();
    this.router.navigateByUrl('/login')
  }

  /**
 *  get user Details in  AuthService 
 * 
 */
  public getSingleUsers() {
    this.getUser = this._userService.getLoginData();
    this.getUser = JSON.parse(this.getUser)


  }
}

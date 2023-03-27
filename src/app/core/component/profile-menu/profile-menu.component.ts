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
  public getSingleUser: any;
  constructor(private _userService: AuthService, private overlayServec: OverlayService, private router: Router) {

  }
  ngOnInit(): void {
    this.getSingleusers()
  }
  public logOut() {
    this._userService.logout();
    this.overlayServec.close();
    this.router.navigateByUrl('/login')
  }
  public getSingleusers() {
    this.getSingleUser = this._userService.userget();
    this.getSingleUser = JSON.parse(this.getSingleUser)
  }

}

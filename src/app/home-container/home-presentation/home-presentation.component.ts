import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent implements OnInit {
  public getUser: any;
  constructor(private _userService: AuthService,) {
  }
  ngOnInit(): void {
    this.getSingleUsers()
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

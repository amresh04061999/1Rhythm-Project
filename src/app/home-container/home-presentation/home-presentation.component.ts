import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent implements OnInit {
  public getSingleUser: any;
  constructor(private _userService: AuthService,) {
  }
  ngOnInit(): void {
    this.getSingleusers()
  }

  public getSingleusers() {
    this.getSingleUser = this._userService.userget();
    this.getSingleUser = JSON.parse(this.getSingleUser)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from 'src/app/login/model/userLogin.model';
import { Users } from 'src/app/registration/model/Registration.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private baseUrl: string;
  constructor(private _httpServices: HttpClient) {
    this.baseUrl = environment.baseURL;
  }
  /**
   * Get User Details
   * @returns 
   */
  getUserDeatils(): Observable<Users[]> {
    return this._httpServices.get<Users[]>(`${this.baseUrl}users`)
  }
  /**
   * Get-user-details
   * @returns 
   */
  userget() {
    return localStorage.getItem('authentication')
  }
  /**
   * user Logout
   * @returns
   */
  logout() {
    return localStorage.clear();
  }
}

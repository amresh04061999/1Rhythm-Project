import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/registration/model/Registration.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private baseUrl: string;
  constructor(private _httpServices: HttpClient) {
    this.baseUrl = environment.baseURL;
  }
  /**
   * Get User Details in database
   * @returns 
   */
  fetchUserDetails(): Observable<Users[]> {
    return this._httpServices.get<Users[]>(`${this.baseUrl}users`)
  }
  /**
   * Get-user-details in localStorage
   * @returns 
   */
  getLoginData() {
    return localStorage.getItem('authentication')
  }
  /**
   * Clear user details in localStorage
   * @returns
   */
  logout() {
    return localStorage.clear();
  }
}

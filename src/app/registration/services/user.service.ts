import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../model/Registration.model';
import { UserType } from '../model/UserType.model';

@Injectable()
export class UserService {
  public baseUrl:string;
  constructor(private _httpClient:HttpClient) { 
    this.baseUrl=environment.baseURL;
  }
  /**
   * getUserType
   * @returns 
   */
  getUserType():Observable<UserType[]>{
    return this._httpClient.get<UserType[]>(`${this.baseUrl}userType`)
  }
  adduser(user:Users):Observable<Users>{
    return this._httpClient.post<Users>(`${this.baseUrl}users`,user);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City, Country, State } from 'src/app/shared/model/location.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class LocationService {
  public baseUrl:string
  constructor(private _httpService:HttpClient) { 
    this.baseUrl=environment.baseURL;
  }
/**
 * getCountry
 * @returns 
 */
  getcountry():Observable<Country[]>{
   return this._httpService.get<Country[]>(`${this.baseUrl}country`)
  }
  /**
   * get State
   * @returns 
   */
  getState():Observable<State[]>{
   return this._httpService.get<State[]>(`${this.baseUrl}state`)
  }
  /**
   * getCity
   * @returns 
   */
  getCity():Observable<City[]>{
   return this._httpService.get<City[]>(`${this.baseUrl}city`)
  }
}

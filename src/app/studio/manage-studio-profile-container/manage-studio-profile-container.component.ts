import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City, Country, State } from 'src/app/shared/model/location.model';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-manage-studio-profile-container',
  templateUrl: './manage-studio-profile-container.component.html',
  styleUrls: ['./manage-studio-profile-container.component.scss']
})
export class ManageStudioProfileContainerComponent implements OnInit {
  

  public getCountry$:Observable<Country[]>
  public getState$:Observable<State[]>
  public getCity$:Observable<City[]>
  public address:any
 constructor (private _locationServices:LocationService){
 this.getCountry$=new Observable();
 this.getState$=new Observable();
 this.getCity$=new Observable();


 }
  ngOnInit(): void {
    this.getCountry$=this._locationServices.getCountry();
    this.getState$=this._locationServices.getState();
    this.getCity$=this._locationServices.getCity();
  }


}

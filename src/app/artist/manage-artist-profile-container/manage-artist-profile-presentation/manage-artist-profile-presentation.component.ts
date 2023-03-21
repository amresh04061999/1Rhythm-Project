import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-artist-profile-presentation',
  templateUrl: './manage-artist-profile-presentation.component.html',
  styleUrls: ['./manage-artist-profile-presentation.component.scss']
})
export class ManageArtistProfilePresentationComponent {
  public userTypes = [
    { id: 1, name: 'General User' },
    { id: 2, name: 'Studio Owner' },
    { id: 3, name: 'Artist' },
  ];
  public checkValue: boolean;
  public checkValue1: boolean;
  public checkValue2: boolean;
  public checkValue3: boolean;
  constructor(){
    this.checkValue = false;
    this.checkValue1 = false;
    this.checkValue2 = false;
    this.checkValue3 = false;
  }
  public checkBox( value: any): void {
    if (value === 'Guitar') {
      this.checkValue = !this.checkValue;
    } else if (value === 'Piano') {
      this.checkValue1 = !this.checkValue1;
    } else if (value === 'DrumSet') {
      this.checkValue2 = !this.checkValue2;
    } else if (value === 'Tabla') {
      this.checkValue3 = !this.checkValue3;
    } 
  }
}

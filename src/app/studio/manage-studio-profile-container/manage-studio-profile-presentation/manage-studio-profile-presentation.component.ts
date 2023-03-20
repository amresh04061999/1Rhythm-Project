import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-studio-profile-presentation',
  templateUrl: './manage-studio-profile-presentation.component.html',
  styleUrls: ['./manage-studio-profile-presentation.component.scss'],
})
export class ManageStudioProfilePresentationComponent {
  public userTypes = [
    { id: 1, name: 'General User' },
    { id: 2, name: 'Studio Owner' },
    { id: 3, name: 'Artist' },
  ];
  public checkValue: boolean;
  public checkValue1: boolean;
  public checkValue2: boolean;

  constructor() {
    this.checkValue = false;
    this.checkValue1 = false;
    this.checkValue2 = false;
  }
  public checkBox( value: any): void {
    if (value === 'RecordingRoom') {
      this.checkValue = !this.checkValue;
    } else if (value === 'JammingRoom') {
      this.checkValue1 = !this.checkValue1;
    } else if (value === 'Mixing') {
      this.checkValue2 = !this.checkValue2;
    } 
  }
}

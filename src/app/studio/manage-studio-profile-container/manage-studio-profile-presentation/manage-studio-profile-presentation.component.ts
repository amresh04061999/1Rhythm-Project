import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-studio-profile-presentation',
  templateUrl: './manage-studio-profile-presentation.component.html',
  styleUrls: ['./manage-studio-profile-presentation.component.scss']
})
export class ManageStudioProfilePresentationComponent {
  public userTypes = [
    { id: 1, name: 'General User' },
    { id: 2, name: 'Studio Owner' },
    { id: 3, name: 'Artist' }
  ]
  public checkValue: string;
  public checkValue1: boolean;

  constructor() {
    this.checkValue = '';
    this.checkValue1 = true;

  }
  public checkBox(event: any): void {
    this.checkValue = event.target.id;
    this.checkValue1 = event.target.checked;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-profile-presentation',
  templateUrl: './manage-profile-presentation.component.html',
  styleUrls: ['./manage-profile-presentation.component.scss']
})
export class ManageProfilePresentationComponent {
  public userTypes=[
    { id:1,name:'General User'},
    { id:2,name:'Studio Owner'},
    { id:3,name:'Artist'}
    ]
}

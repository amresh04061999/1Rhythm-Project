import { Component } from '@angular/core';

@Component({
  selector: 'app-studio-list-presentation',
  templateUrl: './studio-list-presentation.component.html',
  styleUrls: ['./studio-list-presentation.component.scss']
})
export class StudioListPresentationComponent {
  public userTypes=[
    { id:1,name:'General User'},
    { id:2,name:'Studio Owner'},
    { id:3,name:'Artist'}
    ]
}

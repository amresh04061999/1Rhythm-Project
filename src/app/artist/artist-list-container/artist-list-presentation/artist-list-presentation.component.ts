import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list-presentation',
  templateUrl: './artist-list-presentation.component.html',
  styleUrls: ['./artist-list-presentation.component.scss']
})
export class ArtistListPresentationComponent {
  public userTypes=[
    { id:1,name:'General User'},
    { id:2,name:'Studio Owner'},
    { id:3,name:'Artist'}
    ]
}

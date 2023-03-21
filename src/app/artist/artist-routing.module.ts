import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDescriptionContainerComponent } from './artist-description-container/artist-description-container.component';
import { ArtistListContainerComponent } from './artist-list-container/artist-list-container.component';
import { ArtistComponent } from './artist.component';
import { ManageArtistProfileContainerComponent } from './manage-artist-profile-container/manage-artist-profile-container.component';

const routes: Routes = [{ path: '', component: ArtistComponent,
  children:[
    {
      path:'artist-description',component:ArtistDescriptionContainerComponent
    },
    {
      path:'artist-list',component:ArtistListContainerComponent
    },
    {
      path:'manage-artist',component:ManageArtistProfileContainerComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }

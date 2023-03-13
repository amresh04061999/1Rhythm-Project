import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDescriptionContainerComponent } from './artist-description-container/artist-description-container.component';
import { ArtistComponent } from './artist.component';

const routes: Routes = [{ path: '', component: ArtistComponent,
  children:[
    {
      path:'artist-description',component:ArtistDescriptionContainerComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }

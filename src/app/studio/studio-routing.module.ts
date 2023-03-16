import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageStudioProfileContainerComponent } from './manage-studio-profile-container/manage-studio-profile-container.component';
import { StudioDescriptionContainerComponent } from './studio-description-container/studio-description-container.component';
import { StudioListContainerComponent } from './studio-list-container/studio-list-container.component';
import { StudioComponent } from './studio.component';

const routes: Routes = [{ path: '', component: StudioComponent,
   children:[
    {
      path:'studio-description',component:StudioDescriptionContainerComponent
    },
    {
      path:'studio-list',component:StudioListContainerComponent
    },
    {
      path:'manage-studio',component:ManageStudioProfileContainerComponent
    }
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }

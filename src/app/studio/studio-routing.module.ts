import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudioDescriptionContainerComponent } from './studio-description-container/studio-description-container.component';
import { StudioComponent } from './studio.component';

const routes: Routes = [{ path: '', component: StudioComponent,
   children:[
    {
      path:'studio-description',component:StudioDescriptionContainerComponent
    }
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }

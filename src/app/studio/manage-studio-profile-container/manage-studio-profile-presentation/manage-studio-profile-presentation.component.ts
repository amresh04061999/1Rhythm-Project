import { Component, OnInit } from '@angular/core';
import { ManageStudioProfilePresenterService } from '../manage-Studio-profile-presenter/manage-studio-profile-presenter.service';

@Component({
  selector: 'app-manage-studio-profile-presentation',
  templateUrl: './manage-studio-profile-presentation.component.html',
  styleUrls: ['./manage-studio-profile-presentation.component.scss'],
  viewProviders:[ManageStudioProfilePresenterService]
})
export class ManageStudioProfilePresentationComponent implements OnInit {
  public userTypes = [
    { id: 1, name: 'General User' },
    { id: 2, name: 'Studio Owner' },
    { id: 3, name: 'Artist' },
  ];

  public imageArray:any;
  public base64:any;
  public checkValueArray=[]
  constructor(private ManageStudioProfilePresenterService:ManageStudioProfilePresenterService) {

    this.imageArray=[];
  }
  ngOnInit(): void {
    /**
     * get multiple image and Store imageArray variable  
     */
    this.ManageStudioProfilePresenterService.multipleImage$.subscribe((res)=>{
          this.imageArray=res            
    })
    this.ManageStudioProfilePresenterService.checkValueArray.subscribe((res)=>{
       this.checkValueArray=res     
    })
  }
  public checkBox( value: any): void {
    this.ManageStudioProfilePresenterService.selectCheckBox(value); 
  }
    /**
     * Select Multiple file using presenter logic 
     * Add store in one array
     * @param event 
     */ 
  public selectImage(event:any){
     this.ManageStudioProfilePresenterService.selectMultipleImage(event);
  }
   public removeImage(id:number) {
    this.ManageStudioProfilePresenterService.removeImageById(id);
   }
}

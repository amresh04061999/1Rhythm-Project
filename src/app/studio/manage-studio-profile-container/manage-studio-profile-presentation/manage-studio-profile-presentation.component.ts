import { Component, Input, OnInit } from '@angular/core';
import { ManageStudioProfilePresenterService } from '../manage-Studio-profile-presenter/manage-studio-profile-presenter.service';
import { FormGroup } from '@angular/forms';
import { City, Country, State } from 'src/app/shared/model/location.model';

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
  @Input() set getCountry(Response: Country[]| null) {
    if (Response) {
      this._getCountry=Response
    }
  }
  @Input() set getState(Response: State[] | null) {
    if (Response) {
    this._getState=Response
    }
  }
  @Input() set getCity(Response: City[] | null) {
    if (Response) {
     this._getCity=Response
    }
  }
  public imageArray:any;
  public base64:any;
  public checkValueArray=[];
  public studioForm:FormGroup;
  private _getCountry!:Country[];
  private _getState!:State[];
  private _getCity!:City[];
  constructor(private manageStudioProfilePresenterService:ManageStudioProfilePresenterService) {
    this.imageArray=[];

    this.studioForm=this.manageStudioProfilePresenterService.buildForm()
  }

  ngOnInit(): void {
    /**
     * get multiple image and Store imageArray variable  
     */
    this.manageStudioProfilePresenterService.multipleImage$.subscribe((res)=>{
          this.imageArray=res            
    })
    this.manageStudioProfilePresenterService.checkValueArray.subscribe((res)=>{
       this.checkValueArray=res     
    })
  }
  public checkBox( value: any): void {
    this.manageStudioProfilePresenterService.selectCheckBox(value); 
  }
    /**
     * Select Multiple file using presenter logic 
     * Add store in one array
     * @param event 
     */ 
  public selectImage(event:any):void{
     this.manageStudioProfilePresenterService.selectMultipleImage(event);
  }
  /**
   * 
   * @param id 
   */
   public removeImage(id:number):void {
    this.manageStudioProfilePresenterService.removeImageById(id);
   }
   public saveStudio():void{
     this.manageStudioProfilePresenterService.saveStudioDetails()
   }
   
}

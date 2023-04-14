import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ManageStudioProfilePresenterService } from '../manage-Studio-profile-presenter/manage-studio-profile-presenter.service';
import { FormGroup } from '@angular/forms';
import { City, Country, State } from 'src/app/shared/model/location.model';
import { retry } from 'rxjs';

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
  
  @Input() set getCountry(Response: Country[] | null) {
   if(Response){
     this._getCountry=Response    
  
   }
  }
  public get getCountry(){
    return this._getCountry
  }
  @Input() set getState(Response: State[] | null) {
    if (Response) {
    this._getState=Response
    }
  }
  public get getState(){
    return this._getState
  }
  @Input() set getCity(Response: City[] | null) {
    if (Response) {
     this._getCity=Response
    }
  }
  public get getCity(){
    return this._getCity
  }
  public imageArray:any;
  public base64:any;
  public checkValueArray=[];
  public studioForm:FormGroup;
  public _getCountry!:Country[];
  private _getState!:State[];
  public   getStates!:any;
  public   getCities!:City[];
  private _getCity!:City[];
  public addStudioDetails:EventEmitter<any>;

   public days= [
    { id: 1, day: 'Monday' },
    { id: 2, day: 'Tuesday' },
    { id: 3, day: 'Wednesday' },
    { id: 4, day: 'Thursday' },
    { id: 5, day: 'Friday' },
    { id: 6, day: 'Saturday' },
    { id: 7, day: 'Sunday' },
  ];
  public hours= [
    { id: 1, hour: '12Am' },
    { id: 2, hour: '1Am' },
    { id: 3, hour: '2Am' },
    { id: 4, hour: '3Am' },
    { id: 5, hour: '4Am' },
    { id: 6, hour: '5Am' },
    { id: 7, hour: '6Am' },
    { id: 9, hour: '7Am' },
    { id: 10, hour: '8Am' },
    { id: 11, hour: '9Am' },
    { id: 12, hour: '10Am' },
    { id: 13, hour: '11Am' },
    { id: 14, hour: '1Ppm' },
    { id: 15, hour: '2Pm' },
    { id: 16, hour: '3Pm' },
    { id: 17, hour: '4Pm' },
    { id: 18, hour: '5Pm' },
    { id: 19, hour: '6Pm' },
    { id: 20, hour: '7Pm' },
    { id: 21, hour: '9Pm' },
    { id: 22, hour: '10Pm' },
    { id: 23, hour: '11Pm' },
  ]
  constructor(private manageStudioProfilePresenterService:ManageStudioProfilePresenterService) {
    this.imageArray=[];
    this.studioForm=this.manageStudioProfilePresenterService.buildForm(); 
    this.addStudioDetails=new EventEmitter()   
  }

  ngOnInit(): void {
    /**
     * get multiple image and Store imageArray variable  
     */
    this.manageStudioProfilePresenterService.multipleImage$.subscribe((res)=>{
          this.imageArray=res            
    })
    /**
     * get array of checkbox
     */
    this.manageStudioProfilePresenterService.checkValueArray.subscribe((res)=>{
       this.checkValueArray=res     
    })
    /**
     * get filter state
     */
    this.manageStudioProfilePresenterService.filterState$.subscribe((res)=>{
      this.getStates=res     
   })
     /**
     * get filter city
     */
     this.manageStudioProfilePresenterService.filterCity$.subscribe((res)=>{
      this.getCities=res     
   })
    /**
     * Send studio details in container using Emitter
     */
this.manageStudioProfilePresenterService.StudioDetails$.subscribe((res)=>{
       console.log(res);
       this.addStudioDetails=res
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

   public setFavImage(index:number){
    this.manageStudioProfilePresenterService.setFavImage(index)
   }
   /**
    * 
    */
   public saveStudio():void{
     this.manageStudioProfilePresenterService.saveStudioDetails(this.studioForm)
   }
   /**
    * 
    * @param event 
    */
   public changeState(event:number){
      this.studioForm.get('location')?.get('stateId',)?.reset();
      const a = this.studioForm.get('location')?.get('cityId')?.reset()
      this.manageStudioProfilePresenterService.changeState(this.getState,event)
    }
    /**
     * 
     * @param event 
    */
   public changeCity(event:number){
     const a = this.studioForm.get('location')?.get('cityId')?.reset()
    this.manageStudioProfilePresenterService.changeCity(this.getCity,event)
   }
public weekChange(id:number){
  this.manageStudioProfilePresenterService.weekChange(id)
}
}

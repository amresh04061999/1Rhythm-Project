import { NgSwitch } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { City, Country, State } from 'src/app/shared/model/location.model';
import { Studio } from '../../model/studio';

@Injectable()
export class ManageStudioProfilePresenterService {
  public imageArray: any;
  public imageFile!: File;
  public base64: any;
  public checkValue: boolean;
  public checkValue1: boolean;
  public checkValue2: boolean;
  private multipleImage: Subject<any>;
  public checkValueArray: Subject<any>;
  public multipleImage$: Observable<any>;
  public filterState: Subject<State[]>;
  public filterState$: Observable<State[]>;
  public filterCity: Subject<City[]>;
  public filterCity$: Observable<City[]>;
  public StudioDetails: Subject<any>;
  public StudioDetails$: Observable<any>;
  constructor(private fb: FormBuilder) {
    this.imageArray = [];
    this.multipleImage = new Subject();
    this.checkValueArray = new Subject();
    this.multipleImage$ = this.multipleImage.asObservable();
    this.checkValue = false;
    this.checkValue1 = false;
    this.checkValue2 = false;
    this.filterState = new Subject();
    this.filterState$ = this.filterState.asObservable();
    this.filterCity = new Subject();
    this.filterCity$ = this.filterCity.asObservable();
    this.StudioDetails = new Subject();
    this.StudioDetails$ = this.StudioDetails.asObservable();
  }
  /**
   * form builder create and return all data
   * @returns
   */
  public buildForm(): FormGroup {
    return this.fb.group({
         id: [''],
      personalDetails: this.fb.group({
        studioName: [''],
        address: [''],
        studioDescription: [''],
        hardwareEquipments: [''],
      }),
      location: this.fb.group({
        countryId: [''],
        stateId: [''],
        cityId: [''],
      }),

      days: this.fb.group({
        fromDay: [''],
        toDay: [''],
      }),
      hours: this.fb.group({
        fromHour: [''],
        toHour: [''],
      }),
      studioServices: this.fb.group({
        serviceTitle:[''],
        recordingAmount:[''],
        jammingAmount:[''],
        MasteringAmount:[]

      }),

      studioImages: this.fb.array([])
    });
  }

  /**
   * select multiple Image logic and push array Image in array image
   * and also convert base64
   * @param event
   */
  public selectMultipleImage(event: any) {
    event.addedFiles.forEach((item: any) => {
      this.imageFile = item;
      const render = new FileReader();
      render.readAsDataURL(this.imageFile);
      render.onload = () => {
        this.base64 = render.result;
        this.imageArray.push({  isLike:false, image: this.base64 });
      };
    });
    this.multipleImage.next(this.imageArray);
  }
  /**
   *
   * @param id
   */
  public selectCheckBox(id: any) {
    if (id === 'RecordingRoom') {
      this.checkValue = !this.checkValue;
    } else if (id === 'JammingRoom') {
      this.checkValue1 = !this.checkValue1;
    } else if (id === 'Mixing') {
      this.checkValue2 = !this.checkValue2;
    }
    this.checkValueArray.next([
      this.checkValue,
      this.checkValue1,
      this.checkValue2,
    ]);
  }

  /**
   * remove image using index
   * @param id
   */
  public removeImageById(id: number) {
    const b = this.imageArray.splice(id, 1);
  }


public setFavImage(selectedIndex:number){
  this.imageArray.find((image:any)=>image.isLike=true);
  this.imageArray=this.imageArray.map((item:any,index:number)=>{
    if(index === selectedIndex){
      item.isLike=true
    }else{
      item.isLike=false
    }
    return item
  })  
}

/**
 * 
 * @param studioDetails 
 * @returns 
 */
  public saveStudioDetails(studioDetails: FormGroup) {
    const image= studioDetails.controls['studioImages'] as FormArray
    image.push(this.fb.group(this.imageArray))
    if (!studioDetails.valid) {
      return;
    }
    this.StudioDetails.next(studioDetails.value);
  }
  /**
   * Filter state Depend  of country
   * @param item
   * @param currentId
   */
  public changeState(state: any, currentId: number) {
    const countryId = currentId;
    const filterState = state.filter(
      (item: State) => item.countryId == countryId
    );
    this.filterState.next(filterState);
  }

  /**
   * Filter city Depend of State
   * @param item
   * @param currentId
   */
  public changeCity(city: any, currentId: number) {
    const stateId = currentId;
    const filterCity = city.filter((item: City) => item.stateId == stateId);
    this.filterCity.next(filterCity);
  }
  public weekChange(id:number){

  }
}

import { NgSwitch } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
  public id:number;
  constructor() {
    this.imageArray = [];
    this.multipleImage = new Subject();
    this.checkValueArray = new Subject();
    this.multipleImage$ = this.multipleImage.asObservable();
    this.checkValue = false;
    this.checkValue1 = false;
    this.checkValue2 = false;
    this.id=1;
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
        this.id++
        this.imageArray.push({id:this.id,image: this.base64 });
        console.log(this.imageArray);
        
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
      this.checkValue = !this.checkValue
    } else if (id === 'JammingRoom') {
      this.checkValue1 = !this.checkValue1;
    } else if (id === 'Mixing') {
      this.checkValue2 = !this.checkValue2;
    }
    this.checkValueArray.next([this.checkValue,this.checkValue1,this.checkValue2])
  } 

/**
 * remove image using index
 * @param id 
 */
  public removeImageById(id:number){
    const b = this.imageArray.splice(id,1)
  }

}

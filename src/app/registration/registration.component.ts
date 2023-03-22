import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City, Country, State } from '../shared/model/location.model';
import { Users } from './model/Registration.model';
import { UserType } from './model/UserType.model';
import { LocationService } from './services/location.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  
  public users: FormGroup;
  public isSubmited: boolean;
  public imageFile!: File;
  public base64String: any;
  public imageValidationMessage: string;
  public userTypeList: UserType[];
  public countryList: Country[];
  public stateList: State[];
  public stateLists: State[];
  public cityLists: City[];
  public cityList: City[];
  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _httpLocationService: LocationService
  ) {
    this.isSubmited = false;
    this.imageValidationMessage = '';
    this.userTypeList = [];
    this.countryList = [];
    this.stateList = [];
    this.stateLists = [];
    this.cityLists = [];
    this.cityList = [];
    this.users = this._fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      countryId: ['', [Validators.required]],
      stateId: ['', [Validators.required]],
      cityId: ['', [Validators.required]],
      userRoll: ['General User', [Validators.required]],
      profilePicture: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    // getuserType
    this.getUserType();
    // GetCountry
    this.getcountry();
    // getState
    this.getState();
    // getcity
    this.getCity();
  }
  /**
   * GetUserType
   */
  public getUserType(): void {
    this._userService.getUserType().subscribe((res: UserType[]) => {
      if (res) {
        this.userTypeList = res;
        console.log(res);
      }
    });
  }
  /**
   * GetCountry
   */
  public getcountry(): void {
    this._httpLocationService.getcountry().subscribe((res: Country[]) => {
      if (res) {
        this.countryList = res;
      }
    });
  }
  /**
   * GetState
   */
  public getState(): void {
    this._httpLocationService.getState().subscribe((res: State[]) => {
      if (res) {
        this.stateLists = res;
      }
    });
  }
  /**
   * GetCity
   */
  public getCity(): void {
    this._httpLocationService.getCity().subscribe((res: City[]) => {
      if (res) {
        this.cityLists = res;
      }
    });
  }
  /**
   * Select UserType depend show message
   * @param usertype
   */
  public changeUserType(usertype: UserType[]): void {}
  // Dependency
  /**
   *
   * @param countryId
   */
  public changeCountry(countryId: any): void {
       const SelectedId=countryId
      this.stateList= this.stateLists.filter((item)=> SelectedId == item.countryId)
       
  }
  /**
   *  
   * @param cityId
   */
  public changeState(cityId: any): void {
    const SelectedId=cityId
    this.cityList= this.cityLists.filter((item)=> SelectedId == item.stateId)
     
  }
  /**
   *
   */
  public registration(): void {}

  /**
   * Profile Image Select With Validation
   * @param event
   * @returns
   */
  public selectImage(event: any) {
    /**
     *show message validation
     */
    let imageType = event.target.files[0];
    console.log(imageType);
    if (!imageType.name.match('.(jpg|jpeg|png|heif)$')) {
      this.imageValidationMessage =
        'Please upload a valid file format (Supported file  formats: .jpg, .png, .jpeg, .heif).';
      this.base64String = '';
      return;
    }
    // load image and preview
    if (event) {
      this.imageFile = event.target.files[0];
    }
    let reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
      this.base64String = String(reader.result);
      this.imageValidationMessage = '';
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  public noteMessage:string;
  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _httpLocationService: LocationService,
    private router:Router,
  ) {
    this.isSubmited = false;
    this.imageValidationMessage = '';
    this.userTypeList = [];
    this.countryList = [];
    this.stateList = [];
    this.stateLists = [];
    this.cityLists = [];
    this.cityList = [];
    this.noteMessage='General User';
    this.users = this._fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.maxLength(25), Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required,, Validators.maxLength(50), Validators.pattern(/^[A-Za-z0-9]([A-Za-z0-9\_\.]*)+@(([A-Za-z0-9-]{2,})+\.)+[A-Za-z\-]{2,4}$/)]],
      password: ['', [Validators.required,, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$%*?&/\\\[\],'`~(\)^=+{\}?|;"\-:#_])[A-Za-z\d@$%*?&/\\\[\],'`~(\)^=+{\}?|;"\-:#_]{0,}$/), Validators.minLength(8), Validators.maxLength(30)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]],
      countryId: ['', [Validators.required]],
      stateId: ['', [Validators.required]],
      cityId: ['', [Validators.required]],
      userRoll: ['General User', [Validators.required]],
      profilePicture: [''],
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
  public changeUserType(usertype:any): void {
    if(usertype==1){
      this.noteMessage='General User'
    }else if(usertype==2){
      this.noteMessage='Studio Owene'
    }else if(usertype==3){
      this.noteMessage='artist'
    }
    
  }
  // Dependency
  /**
   * state Change depend of select country
   * @param countryId
   */
  public changeCountry(countryId: any): void {
       const SelectedId=countryId
      this.stateList= this.stateLists.filter((item)=> SelectedId == item.countryId)
       
  }
  /**
   *  city Change Depend of select state
   * @param cityId
   */
  public changeState(cityId: any): void {
    const SelectedId=cityId
    this.cityList= this.cityLists.filter((item)=> SelectedId == item.stateId)
     
  }
  /**
   *
   */
  public registration(): void {
    this.isSubmited=true
    if(this.users.valid){
      this.users.controls['profilePicture'].setValue(this.base64String);
      this._userService.adduser(this.users.value).subscribe((res:Users)=>{
        if(res){
          this.router.navigateByUrl('/login')
          this.isSubmited=false
          this.base64String='';
        }
       
      })
      
    }
  }

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
  /**
   * short message
   */
   get validator():{[key:string]:AbstractControl<Users[]>}{
       return this.users.controls
   }
}

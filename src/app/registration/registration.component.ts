import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  public userTypes=[
    { id:1,name:'General User'},
    { id:2,name:'Studio Owner'},
    { id:3,name:'Artist'}
    ]
  constructor(){

  }

 
}

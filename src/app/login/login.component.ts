import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth/auth.service';
import { Users } from '../registration/model/Registration.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userLogin: FormGroup;
  public isSubmited: boolean;
  public registrationList: any[]
  constructor(private fb: FormBuilder, private _userloginService: AuthService, private router: Router) {
    this.isSubmited = false;
    this.registrationList = []
    this.userLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^(?=.*?[_.]).*([a-z0-9])+@([a-z\-]{2,}\.)+[a-z\-]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$%*?&/\\\[\],'`~(\)^=+{\}?|;"\-:#_])[A-Za-z\d@$%*?&/\\\[\],'`~(\)^=+{\}?|;"\-:#_]{0,}$/
      )]]

    })
  }
  ngOnInit(): void {
    this.getUserDeatils()
  }

  public getUserDeatils() {
    this._userloginService.getUserDeatils().subscribe((res) => {
      this.registrationList = res;

    })
  }
  public login() {
    this.isSubmited=true;
    if(this.userLogin.valid){
      this.registrationList.find((item) => {
        if (item.email == this.userLogin.value.email && item.password == this.userLogin.value.password) {
          localStorage.setItem('authentication',JSON.stringify(item));
          this.router.navigateByUrl('/home')
        }
      })
    }
  
    // if(this.userLogin.value.email == this.registrationList[0].email && this.userLogin.value.password == this.registrationList[0].password){
    // // localStorage.setItem('authentication','hello');
    // // this.router.navigateByUrl('/home')
    // // console.log('true');

    // }


  }
  /**
 * short message
 */
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.userLogin.controls
  }
}

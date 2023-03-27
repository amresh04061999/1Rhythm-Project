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
  public isSubmitted: boolean;
  public registrationList: any[]
  constructor(private fb: FormBuilder, private _userLoginService: AuthService, private router: Router) {
    this.isSubmitted = false;
    this.registrationList = []
    this.userLogin = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^(?=.*?[_.]).*([a-z0-9])+@([a-z\-]{2,}\.)+[a-z\-]{2,4}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$%*?&/\\\[\],'`~(\)^=+{\}?|;"\-:#_])[A-Za-z\d@$%*?&/\\\[\],'`~(\)^=+{\}?|;"\-:#_]{0,}$/
      )]]

    })
  }
  ngOnInit(): void {
    this.getUserDetails()
  }
/**
 * Get userDetails using AuthService
 */
  public getUserDetails() {
    this._userLoginService.fetchUserDetails().subscribe((res) => {
      this.registrationList = res;

    })
  }
  /**
   * manually login a
   * Set userDetails in localStorage
   * and Redirect home
   */
  public login() {
    this.isSubmitted = true;
    if (this.userLogin.valid) {
      this.registrationList.find((item) => {
        if (item.email == this.userLogin.value.email && item.password == this.userLogin.value.password) {
          localStorage.setItem('authentication', JSON.stringify(item));
          this.router.navigateByUrl('/home')
        }
      })
    }
  }
  /**
 * short Variable
 */
  get validator(): { [key: string]: AbstractControl<any> } {
    return this.userLogin.controls
  }
}

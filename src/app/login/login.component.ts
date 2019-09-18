import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isDisable = false;
  passwordType: string = 'password';
  passwordIcon: string = 'ios-eye-off';
  data;
  inputtext ;
  

  constructor(public router: Router, public _userService: UserService,
    public _toastService: ToastService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

    if (this._userService.currentUserValue) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {
    
   }

  /**
   * Hide and show password
   */
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'ios-eye-off' ? 'ios-eye' : 'ios-eye-off';
  }
  

  /**
   * Login User
   * @param {Object}  data 
   */
  loginUser(data) {
    console.log('data============>', data);
    if (this.loginForm.invalid) {
      return;
    }
    this.isDisable = true;
    this._userService.loginUser(data).subscribe((res: any) => {
      console.log('res of login============>', res);
      this._toastService.presentToast(res.message);
      this.isDisable = false;
      setTimeout(() => {
        
        this.router.navigate(['home']);
      }, 300);
    }, err => {
      console.log('err in login ============>', err);
      this._toastService.presentToast(err.error.message);
      this.isDisable = false;
    })
  }

}

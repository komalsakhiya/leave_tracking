import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

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
  inputtext;
  currentUser: any;

  constructor(public router: Router, public _userService: UserService,
    public _toastService: ToastService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm: FCM, private localNotifications: LocalNotifications) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

    if (this._userService.currentUserValue) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {
    this.initializeApp();
  }

  /**
   * Hide and show password
   */
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'ios-eye-off' ? 'ios-eye' : 'ios-eye-off';
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#000000');
      this.splashScreen.hide();
      if (this.currentUser) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['login']);
      }

      // Notification
      this.fcm.getToken().then(token => {
        console.log('token======>', token);
        localStorage.setItem('deviceToken', token);
        console.log("in storage", localStorage.getItem('deviceToken'));
      });

      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });

      // this.fcm.onNotification().subscribe((data: any) => {
      //   console.log('data=====>', data);
      //   if (data.wasTapped) {
      //     console.log('Received in background');

      //   } else {
      //     console.log('Received in foreground');
      //     this._toastService.presentToast(data.body)
      //     this.localNotifications.schedule({
      //       id: 1,
      //       title: 'Leave Application',
      //       text: data.body,
      //       foreground: true // Show the notification while app is open
      //     });
      //   }
      // });

      // this.fcm.subscribeToTopic('people');

      // this.fcm.unsubscribeFromTopic('marketing');
    });
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
      // setTimeout(() => {
      this.router.navigate(['home']);
      // }, 300);
    }, err => {
      console.log('err in login ============>', err);
      this._toastService.presentToast(err.error.message);
      this.isDisable = false;
    })
  }

}

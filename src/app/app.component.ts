import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './services/user.service';
import { Router, Event, NavigationStart } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  currentUser: any;
  currentUserRole = JSON.parse(localStorage.getItem('designation'));
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public _userService: UserService,
    private router: Router,
    private fcm: FCM,
    public _toastService: ToastService,
    private localNotifications: LocalNotifications,
    public navCtrl: NavController,
  ) {
    this._userService.currentUser.subscribe(x => this.currentUser = x);
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  ngOnInit() {
    this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/login', true) && this.router.url === '/login') {
        navigator['app'].exitApp();
      }
    });
    this.platform.ready().then(() => {
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          this.router.navigate(['/home/leave-application'])
          console.log('in background', data)
        } else {
          console.log("Received in foreground");
        }
      })
      this.initializeApp()
    })


    console.log("admin user role", this.currentUserRole);
  }


  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      if (this.currentUser && routerEvent.url == '/login') {
        this.router.navigate(['home']);
      }
    }
  }

  // callMyCustomJsLibrary() {
  //   googleSdk.getLocations(location => this.ngZone.run(() => this.initializeApp()));
  // }

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
      if (this.currentUserRole == 'Admin') {
        this.fcm.onNotification().subscribe((data: any) => {
          this.router.navigate(['/home/leave-application'])
          console.log("sauthi important time che taro bhura=====>", data);
          if (data.wasTapped) {
            console.log('Received in background', data.wasTapped);
          } else {
            // this.router.navigate(['/home/leave-application'])
            console.log('Received in foreground');
            this._toastService.presentToast(data.body)
            this.localNotifications.schedule({
              id: 1,
              title: 'Leave Application',
              text: data.body,
              foreground: true // Show the notification while app is open
            });
          }
        });

        //   // this.fcm.subscribeToTopic('people');
      }

      // this.fcm.unsubscribeFromTopic('marketing');
    });
  }


}

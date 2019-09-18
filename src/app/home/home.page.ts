import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router, Event, NavigationStart, RouterEvent } from '@angular/router';
import { UserService } from '../services/user.service';
import { config } from '../config';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentUser: any;
  currentUserRole = localStorage.getItem('designation');
  // console.log("this.curruntUserRole====>",this.currentUserRole);
  selectedPath = '';
  developerPages: any = [];
  adminpages: any = [];
  UserDetail: any;
  path = config.baseMediaUrl;

  constructor(
    public router: Router,
    public _userService: UserService,
    private menu: MenuController,
    public plt: Platform
  ) {
    this._userService.currentUser.subscribe(x => this.currentUser = x);
    console.log("this.curruntUserRole====>", this.currentUserRole);
    this.getUserDetail();
    this.developerPages = [
      // {
      //   title: 'profile',
      //   url: '/home/profile'
      // },
      {
        title: 'Leave Form',
        url: '/home/leave-form'
      },
      {
        title: 'History',
        url: '/home/leave-history'
      },
    ]
    this.adminpages = [
      // {
      //   title: 'profile',
      //   url: '/home/profile'
      // },
      {
        title: 'Dashboard',
        url: '/home/dashboard'
      },
      {
        title: 'Report',
        url: '/home/report'
      },
      {
        title: 'Leave Application',
        url: '/home/leave-application'
      }
    ];
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
    
  }

  
  /**
   * Logout user
   */
  logOut() {
    console.log("log out");
    this._userService.logOut();
    this.router.navigate(['/login']);
  }

  closeMenu(){
    this.menu.close()
  }
  /**
   * git user detail
   */
  getUserDetail() {
    this._userService.getUserDetail().subscribe((res: any) => {
      this.UserDetail = res.data[0];
      console.log("===", this.UserDetail)

    }, err => {
      console.log(err);
    })
  }
}

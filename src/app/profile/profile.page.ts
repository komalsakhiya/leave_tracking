import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import {config} from '../config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userDetail;
  path = config.baseMediaUrl;
  currentUserRole = localStorage.getItem('designation');
  token = JSON.parse(localStorage.getItem('accessToken'));

  constructor(public modalController: ModalController, public _userService: UserService) { }

  ngOnInit() {
    this.getUserDetail();
  console.log("current user role login", this.token);
  }

  getUserDetail() {
    this._userService.getUserDetail().subscribe((res: any) => {
      // this.UserDetail = res.data[0];
      console.log("login user details===",res)
      this.userDetail = res.data;
      console.log("this.userDetails login", this.userDetail);
      // this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
    }, err => {
      console.log(err);
    })
  }
  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ResetPasswordComponent
  //   });
  //   return await modal.present();
  // }

}

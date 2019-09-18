import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { LeaveService } from '../../services/leave.service';
import { config } from '../../config';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-single-usre',
  templateUrl: './single-usre.component.html',
  styleUrls: ['./single-usre.component.scss'],
})
export class SingleUsreComponent implements OnInit {
  userId;
  singleUser;
  userLeaves:any = [];
  path = config.baseMediaUrl;
  constructor(private route: ActivatedRoute,
    public _userService: UserService,
    public _leaveService: LeaveService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.userId = param.userId;
      console.log("userId==========>", this.userId)
      this.getUserById(this.userId);
      this.getLeaveByUserId(this.userId);
    });
  }

  /**
   * Get user by Userid
   * @param {String} userId 
   */
  getUserById(userId) {
    console.log("userId===========>", userId);
    this._userService.getUserById(userId).subscribe((res: any) => {
      this.singleUser = res.data[0];
      this.singleUser.dob = this.singleUser.dob.split("T")[0];
      console.log("res of single user=========>", res, this.singleUser);
    }, err => {
      console.log(err);
    })
  }

  /**
   * Get leave By userId
   * @param {String} userId 
   */
  getLeaveByUserId(userId) {
    console.log('userid=======>', userId);
    this._leaveService.getLeaveByUserId(userId).subscribe((res: any) => {
      this.userLeaves = res.data;
      console.log("res of leave by userid====>", res);
    }, err => {
      console.log(err);
    })
  }

   /**
   * Display leave Reason
   */
  async presentAlert(data) {
    console.log(data);
    const alert = await this.alertController.create({
      header: 'Reason',
      message: 'Due to ' + data.reason,
      buttons: ['OK']
    });

    await alert.present();
  }

}

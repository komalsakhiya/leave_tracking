import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LeaveService } from '../../services/leave.service';
import { config } from '../../config';
import { AlertController } from '@ionic/angular';
// import { $ } from 'protractor';
declare var $: any;



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  UserDetail;
  path = config.baseMediaUrl;
  todaysLeave: any = [];
  todayLeavesCount;
  approvedLeaves: any = [];
  approvedLeavesCount;
  pendingLeaves: any = [];
  pendingLeavesCount;
  isReasonVisible: boolean = false;
  leaveReason;
  constructor(public _userService: UserService,
    public _leaveService: LeaveService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.getUserDetail()
  }

  /**
   * Get Single user details
   */
  getUserDetail() {
    this._userService.getUserDetail().subscribe((res: any) => {
      console.log("user details==========>", res.data);
      this.UserDetail = res.data[0];
      console.log("data=======>", this.UserDetail);
      // this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
    }, err => {
      console.log(err);
    })
  }

  /**
   * Get user whose not present today
   */
  todayNotPresentUser() {
    console.log("today not present user")
    this._leaveService.todayNotPresentUser().subscribe((res: any) => {
      console.log("not present user", res)
      $('.step_one').css({ 'display': 'block' });
      $('.step_two').css({'display': 'none'})
      $('.step_three').css({'display': 'none'})
      this.todaysLeave = res.data;
      this.todayLeavesCount = res.data.length;
      console.log("not present user=======>", res, this.todaysLeave, this.todayLeavesCount);
    }, err => {
      console.log(err);
    })
  }

  /**
   * Get Approved Leaves
   */
  getApprovedLeaves() {
    console.log("approved leaves");
    this._leaveService.getApprovedLeaves().subscribe((res: any) => {
      this.approvedLeaves = res.data;
      this.approvedLeavesCount = res.data.length;
      $('.step_two').css({ 'display': 'block' });
      $('.step_one').css({'display': 'none'});
      $('.step_three').css({'display': 'none'})
      // $('.step_one').css({ 'display': 'none' });
      console.log("approved leaves", res, this.approvedLeaves, this.approvedLeavesCount);
    }, err => {
      console.log("err");
    })
  }

  /**
   * Get Pending Leaves
   */
  getPendingLeaves() {
    console.log("Pending leaves");
    this._leaveService.getPendingLeaves().subscribe((res: any) => {

      $('.step_two').css({ 'display': 'none' });
      $('.step_one').css({'display': 'none'});
      $('.step_three').css({'display': 'block'})
      this.pendingLeaves = res.data;
      this.pendingLeavesCount = res.data.length;
      console.log("Pending leaves", res, this.pendingLeaves, this.pendingLeavesCount);
    }, err => {
      console.log("err");
    })
  }
  /**
   * Display leave Reason
   */
  async presentAlert(data) {
    console.log(data);
   let date = data.date
   let finalDate = date.year+'/' + date.month +'/' + date.date;
    const alert = await this.alertController.create({
      header: 'Reason',
      message: 'Due to ' + data.reason,
      buttons: ['OK']
    });

    await alert.present();
  }


  getNoOfDays(days) {
    // console.log(days);
    if (days < 0) {
      return 'You have no leaves..'
    } else {
      const noOfDays = Math.floor(days / 8)
      // console.log("Days", noOfDays);
      const noOfhours = days % 8;
      // console.log("noOfhours", noOfhours);
      if (!noOfDays && noOfhours) {
        if (noOfhours > 1) {
          return noOfhours + ' hours'
        } else {
          return noOfhours + ' hour'
        }
      } else if (noOfDays && !noOfhours) {
        if (noOfDays > 1) {
          return noOfDays + ' Days'
        } else {
          return noOfDays + ' Day'
        }
      } else {
        if (noOfDays > 1 && noOfhours > 1) {
          return noOfDays + ' Days ' + noOfhours + ' hours';
        } else if (noOfDays == 1 && noOfhours == 1) {
          return noOfDays + ' Day ' + noOfhours + ' hour';
        } else if (noOfDays > 1 && noOfhours == 1) {
          return noOfDays + ' Days ' + noOfhours + ' hour';
        } else {
          return noOfDays + ' Day ' + noOfhours + ' hours';
        }
      }
    }
  }

}

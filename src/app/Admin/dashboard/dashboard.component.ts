import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LeaveService } from '../../services/leave.service';
import { config } from '../../config';
import { AlertController } from '@ionic/angular';


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
      console.log("user details==========>", res.data[0]);
      this.UserDetail = res.data[0];
      console.log("data=======>", this.UserDetail);
      this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
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
    const alert = await this.alertController.create({
      header: 'Reason',
      message: 'Due to ' + data.reason,
      buttons: ['OK']
    });

    await alert.present();
  }

}

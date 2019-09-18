import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { ToastService } from '../../services/toast.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss'],
})
export class LeaveApplicationComponent implements OnInit {
  PendingLeaves: any = [];
  pendingLeavesCount;
  constructor(public _leavService: LeaveService,
    public alertController: AlertController,
    public _toastService: ToastService) { }

  ngOnInit() {
    this.getPendingLeaves();
  }

  /**
   * Get Pending Leave Application
   */
  getPendingLeaves() {
    this._leavService.getPendingLeaves().subscribe((res: any) => {
      this.PendingLeaves = res.data;
      this.pendingLeavesCount = res.data.length;
      console.log("pending leaves=======>", this.PendingLeaves);
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

  /**
   * Leave Approval
   * @param {String} id 
   */
  leaveApproval(id,status) {
    console.log(id,status);
    const obj = {
      leaveId: id,
      status: status
    }
    this._leavService.leaveApproval(obj).subscribe((res: any) => {
      this.getPendingLeaves();
      if(status == 'Approved'){
        this._toastService.presentToast('Leave Approved');
      } else{
        this._toastService.presentToast('Leave Rejected')
      }
     
      console.log("res========>", res);
    }, err => {
      console.log(err);
    })
  }

}

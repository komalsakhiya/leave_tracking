import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss'],
})
export class LeaveHistoryComponent implements OnInit {
  monthLeaveForm: FormGroup;
  yearLeaveForm: FormGroup;
  isMonthLeave = 0;
  isYearLeave = 0;
  monthlyLeaveOfUser: any = [];
  yearlyLeaveOfUser:any = [];
  constructor(public _leaveService: LeaveService) {
    this.monthLeaveForm = new FormGroup({
      month: new FormControl('', [Validators.required]),
    });

    this.yearLeaveForm = new FormGroup({
      year: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {

  }
  /**
   * Get monthly leave history of user
   * @param {object} data 
   */
  getMounthlyLeaveByUser(data) {
    console.log("data==========>", data);
    this._leaveService.getMounthlyLeaveByUser(data).subscribe((res: any) => {
      console.log("data===========>", res);
      this.monthlyLeaveOfUser = res.data;
      if(res.data.length > 0){
        this.isMonthLeave = 2;
      }else{
        this.isMonthLeave = 1;
      }
    }, err => {
      console.log(err);
    })
  }
  /**
   *  Get yearly leave history of user
   * @param {Object} data 
   */
  getYearlyLeaveByUser(data){
    console.log("data==========>", data);
    this._leaveService.getYearlyLeaveByUser(data).subscribe((res: any) => {
      console.log("data===========>", res);
      this.yearlyLeaveOfUser = res.data;
      if(res.data.length >0){
        this.isYearLeave = 2;
      }else{
        this.isYearLeave = 1;
      }
    }, err => {
      console.log(err);
    })
  }

}

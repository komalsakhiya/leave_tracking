import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  monthLeaveForm: FormGroup;
  yearLeaveForm: FormGroup;
  monthLeaveCount;
  yearLeaveCount;
  monthLeaveReport: any = [];
  yearLeaveReport: any = [];
  constructor(public _leaveService: LeaveService) { 
    this.monthLeaveForm = new FormGroup({
      month: new FormControl('', [Validators.required]),
    });

    this.yearLeaveForm = new FormGroup({
      year: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() { }
  
  /**
   * Get month leave report
   * @param {object} data 
   */
  getMonthLeaveReport(data){
    console.log(data);
    this._leaveService.getMonthLeaveReport(data).subscribe((res:any)=>{
      this.monthLeaveReport = res.data;
      this.monthLeaveCount = res.data.length;
      console.log("month report=======>",res);
    },err=>{
      console.log(err);
    })
  }

  /**
   * Get year leave report
   * @param {Object} data 
   */
  getYearLeaveReport(data){
    console.log(data);
    this._leaveService.getYearLeaveReport(data).subscribe((res:any)=>{
      this.yearLeaveReport = res.data;
      this.yearLeaveCount = res.data.length;
      console.log("year report=======>", this.yearLeaveReport);
    },err=>{
      console.log(err);
    })
  }

}

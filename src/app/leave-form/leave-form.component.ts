import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveService } from '../services/leave.service';
import { ToastService } from '../services/toast.service';
@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss'],
})
export class LeaveFormComponent implements OnInit {
  leaveForm: FormGroup;
  isDisable: Boolean = false;
  public curruntDate: string = new Date().toISOString();

  constructor(public _leaveService: LeaveService, public _toastService: ToastService) {

    this.leaveForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      noOfDay: new FormControl(''),
      reason: new FormControl('', [Validators.required]),
      extraHours: new FormControl(''),
      shortLeave: new FormControl('')
    });
  }

  ngOnInit() {
    console.log("date", this.curruntDate);
    var inp1 = document.getElementById("input1");
    var inp2 = document.getElementById("input2");
    inp1.onkeyup = function () { inputValidation(this, inp2); }
    inp2.onkeyup = function () { inputValidation(this, inp1); }

    function inputValidation(origin, lock) {
      var response = hasValue(origin.value);
      lock.disabled = response;
    }

    function hasValue(value) {
      return value != "" && value.length > 0;
    }
  }

  applyLeave(data) {
    console.log('data===========>', data);
    console.log('data============>', data);
    if (this.leaveForm.invalid) {
      return;
    }
    this.isDisable = true;
    this._leaveService.applyLeave(data).subscribe((res: any) => {
      console.log("res of leave==========>", res);
      this._toastService.presentToast(res.message);
      this.leaveForm.reset();
      this.isDisable = false;
    }, err => {
      console.log("==========>", err);
      this.isDisable = false;
    })
  }
}

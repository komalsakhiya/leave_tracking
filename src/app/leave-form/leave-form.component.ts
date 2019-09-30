import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LeaveService } from '../services/leave.service';
import { ToastService } from '../services/toast.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { element } from 'protractor';
// let format = require("date-fns/format");

@Component({
  selector: 'app-leave-form',
  templateUrl: './leave-form.component.html',
  styleUrls: ['./leave-form.component.scss'],
})
export class LeaveFormComponent implements OnInit {
  leaveForm: FormGroup;
  isDisable: Boolean = false;
  curruntDate: string = new Date().toISOString();
  // dates: new Date();
  constructor(public _leaveService: LeaveService, private elementRef: ElementRef, public _toastService: ToastService, private localNotifications: LocalNotifications) {

    this.leaveForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      noOfDays: new FormControl(''),
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
    this.isDisable = false
    console.log("leave application details", this.leaveForm.value)
    console.log('data===========>', data);
    console.log('data============>', data);
    if (this.leaveForm.invalid) {
      return;
    }
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
  updateList(e) {
    console.log(e);
    
    if (e > 3) {
      // console.log("first ==========", e)
      alert("please enter value less than three")
      const element = this.elementRef.nativeElement.querySelector('#input2');
      console.log("element -----------", element);
      element.value = 3
    }
    else if (e < 3 && e>1) {
      const element = this.elementRef.nativeElement.querySelector('#input2');
      element.value = e
    }
    else if (e == ""){
      const element = this.elementRef.nativeElement.querySelector('#input2');
      element.value = ''
    }
    else if (e < 1) {
      alert("value must be positive ")
      const element = this.elementRef.nativeElement.querySelector('#input2');
      element.value = 1
    }
  }
}

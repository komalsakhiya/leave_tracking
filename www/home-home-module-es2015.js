(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/all-user/all-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/all-user/all-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>All Users</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size='6' align-self-center *ngFor=\"let user of allUser\">\n      <div routerLink=\"/home/single-user/{{user._id}}\" style=\"cursor: pointer\">\n        <div class=\"profile_img\" *ngIf=\"!user.profilePhoto\">\n          <ion-img src=\"../../assets/images/profile.jpg\"></ion-img>\n        </div>\n        <div class=\"profile_img\" *ngIf=\"user.profilePhoto\">\n          <ion-img src=\"{{path}}{{user.profilePhoto}}\"></ion-img>\n        </div>\n        <ion-text class=\"text-center\">{{user.name}}</ion-text>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div>\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-avatar class=\"profile_img\" *ngIf=\"!UserDetail\">\n          <ion-img src=\"../../assets/images/profile.jpg\"></ion-img>\n        </ion-avatar>\n        <ion-avatar class=\"profile_img\" *ngIf=\"UserDetail\">\n          <ion-img *ngIf=\"UserDetail.profilePhoto\" src=\"{{path}}{{UserDetail.profilePhoto}}\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n      <ion-col>\n        <span>Leave Tracking</span>\n      </ion-col>\n      <ion-col>\n        <span class=\"topMenu\" routerLink=\"/home/all-user\">\n          <ion-icon name=\"contact\"></ion-icon>\n        </span>\n        <span class=\"topMenu\" routerLink=\"/home/notification\">\n          <ion-icon name=\"notifications\"></ion-icon>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div>\n    <ion-row style=\"text-align:center\">\n      <ion-col size=\"3\">\n        <ion-button (click)=\"todayNotPresentUser()\">Today</ion-button>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-button  (click)=\"getApprovedLeaves()\">Approval</ion-button>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-button (click)=\"getPendingLeaves()\">Pending</ion-button>\n      </ion-col>\n    </ion-row>\n    <div style=\"display:none\" class=\"step_one\">\n      <div *ngIf=\"todaysLeave.length\">\n        <ion-row>\n          <ion-col offset=\"3\" size=\"6\">\n            <ion-text style=\"font-size:20px\">Absent Developer Name</ion-text>\n            <div >\n              <button *ngFor=\"let user of todaysLeave\" class=\"absentUserName\" (click)=\"presentAlert(user)\">{{user.userId.name}}</button>\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </div>\n      <div *ngIf=\"todayLeavesCount == 0\">\n        <span>Sorry no developer absent today</span>\n      </div>\n    </div>\n\n    <div class=\"step_two\" style=\"display:none\">\n      <div *ngIf=\"approvedLeaves.length\">\n        <div class=\"row header\">\n          <div class=\"col\">Name</div>\n          <div class=\"col\">No.Of Days</div>\n          <div class=\"col\">Date</div>\n        </div>\n        <div class=\"row\" *ngFor=\"let leave of approvedLeaves\">\n          <div class=\"col\">{{leave.userId.name}}</div>\n          <div class=\"col text-center\">{{getNoOfDays(leave.noOfDays)}}</div>\n          <div class=\"col text-center\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"approvedLeavesCount == 0\">\n      <span>No Approved Leaves Yet</span>\n    </div>\n    <div class=\"step_three\" style=\"display:none\">\n      <div *ngIf=\"pendingLeaves.length\">\n        <div class=\"row header\">\n          <div class=\"col\">Name</div>\n          <div class=\"col\">No. Of Days</div>\n          <div class=\"col\">Date</div>\n        </div>\n        <div class=\"row approved\" *ngFor=\"let leave of pendingLeaves\">\n          <div class=\"col\">{{leave.userId.name}}</div>\n          <div class=\"col text-center\" (click)='presentAlert(leave)' style=\"cursor: pointer\">\n            {{getNoOfDays(leave.noOfDays)}}</div>\n          <div class=\"col text-center\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</div>\n        </div>\n      </div>\n      <div *ngIf=\"pendingLeavesCount == 0\">\n        <span>No Pending Leaves Yet</span>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/leave-application/leave-application.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/leave-application/leave-application.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Leave Applications</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"PendingLeaves.length\">\n    <ion-list *ngFor=\"let leave of PendingLeaves\">\n      <ion-item class=\"leaveApp\">\n        <ion-label style=\"white-space: unset !important\">{{leave.userId.name}}</ion-label>\n        <ion-label (click)=\"presentAlert(leave)\">{{getNoOfDays(leave.noOfDays)}}</ion-label>\n        <ion-icon ios=\"ios-checkmark\" md=\"md-checkmark\" style=\"cursor: pointer\" (click)=\"leaveApproval(leave._id,'Approved')\"></ion-icon>\n        <ion-icon ios=\"ios-close\" md=\"md-close\"  style=\"cursor: pointer\" (click)=\"leaveApproval(leave._id,'Rejected')\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div *ngIf=\"pendingLeavesCount == 0\">\n    <p>There are no leaves...</p>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/notification/notification.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/notification/notification.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-card class=\"card\" *ngFor=\"let item of notificationDetails\">\n  <ion-card-content >\n    {{item.body}}\n    {{item.createdAt | date}}\n    {{item.createdTime}}\n  </ion-card-content>\n</ion-card>\n<div *ngIf=\"!notificationDetails\">\n<p>Sorry You have no new notifications</p>\n</div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/reports/reports.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/reports/reports.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div>\n    <p>Monthly Leave</p>\n    <form [formGroup]='monthLeaveForm'>\n      <ion-item>\n        <ion-label style=\"color: gray\">Select Month</ion-label>\n        <ion-datetime displayFormat=\"MMMM YYYY\" formControlName=\"month\"\n          (ionChange)=getMonthLeaveReport(monthLeaveForm.value)>\n        </ion-datetime>\n      </ion-item>\n    </form>\n    <div *ngIf=\"monthLeaveReport.length\">\n      <div class=\"row header\">\n        <div class=\"col\">Date</div>\n        <div class=\"col\">Name</div>\n        <div class=\"col\">Status</div>\n      </div>\n      <div class=\"row\" *ngFor=\"let leave of monthLeaveReport\">\n        <div class=\"col text-center\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</div>\n        <div class=\"col text-center\">{{leave.userId.name}}</div>\n        <div class=\"col\">{{leave.status}}</div>\n      </div>\n    </div>\n    <div *ngIf=\"monthLeaveCount == 0\">\n      <p class=\"text-center\">There are No leaves</p>\n    </div>\n  </div>\n  <div>\n    <span>Yearly Leave</span>\n    <form [formGroup]='yearLeaveForm'>\n      <ion-item>\n        <ion-label style=\"color: gray\">Select Year</ion-label>\n        <ion-datetime displayFormat=\" YYYY\" formControlName=\"year\"\n          (ionChange)=getYearLeaveReport(yearLeaveForm.value)>\n        </ion-datetime>\n      </ion-item>\n    </form>\n    <div *ngIf=\"yearLeaveReport.length\">\n      <div class=\"row header\">\n        <div class=\"col\">Date</div>\n        <div class=\"col\">Name</div>\n        <div class=\"col\">Status</div>\n      </div>\n      <div class=\"row\" *ngFor=\"let leave of yearLeaveReport\">\n        <div class=\"col text-center\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</div>\n        <div class=\"col text-center\">{{leave.userId.name}}</div>\n        <div class=\"col\">{{leave.status}}</div>\n      </div>\n    </div>\n    <div *ngIf=\"yearLeaveCount == 0\">\n      <p class=\"text-center\">There are No leaves</p>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Admin/single-usre/single-usre.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Admin/single-usre/single-usre.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>User</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"singleUser\">\n    <ion-avatar class=\"profile_img\" *ngIf=\"!singleUser.profilePhoto\">\n      <ion-img src=\"../../assets/images/profile.jpg\"></ion-img>\n    </ion-avatar>\n    <ion-avatar class=\"profile_img\" *ngIf=\"singleUser.profilePhoto\">\n      <ion-img src=\"{{path}}{{singleUser.profilePhoto}}\"></ion-img>\n    </ion-avatar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Name:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{singleUser.name}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Email:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{singleUser.email}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">DOB:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{singleUser.dob}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Phone:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{singleUser.phone}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Location:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{singleUser.location}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Designation:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{singleUser.designation}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Salary:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{singleUser.salary}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div>\n    <h3 style=\"text-align:center;\">Leave Report</h3>\n    <div *ngIf=\"!userLeaves.length\">\n      <p style=\"text-align:center;\">No leaves yet...</p>\n    </div>\n    <div *ngIf=\"userLeaves.length\">\n      <div class=\"row header\">\n        <div class=\"col\">Date</div>\n        <div class=\"col\">No. Of Days</div>\n        <div class=\"col\">Status</div>\n      </div>\n      <div class=\"row\" *ngFor=\"let leave of userLeaves\">\n        <div class=\"col text-center\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</div>\n        <div class=\"col text-center\" (click)='presentAlert(leave)' style=\"cursor: pointer\">{{getNoOfDays(leave.noOfDays)}}</div>\n        <div class=\"col\">{{leave.status}}</div>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!-- <ion-split-pane> -->\n<ion-menu contentId=\"content\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <div *ngIf=\"UserDetail\">\n        <ion-row>\n          <ion-avatar class=\"profile_img\" *ngIf=\"!UserDetail.profilePhoto\">\n            <ion-img src=\"../../assets/images/profile.jpg\" (click)=\"closeMenu()\" routerLink='/home/profile' style=\"cursor: pointer\"></ion-img>\n          </ion-avatar>\n          <ion-avatar class=\"profile_img\" *ngIf=\"UserDetail.profilePhoto\">\n            <ion-img *ngIf=\"UserDetail.profilePhoto\" src=\"{{path}}{{UserDetail.profilePhoto}}\" routerLink=\"/home/profile\" (click)=\"closeMenu()\" style=\"cursor: pointer\"></ion-img>\n          </ion-avatar>\n          <ion-text style=\"margin:auto\">{{UserDetail.name}}</ion-text>\n        </ion-row>\n      </div>\n      <!-- <ion-title>Menu</ion-title> -->\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list *ngIf=\"currentUserRole == 'Admin'\">\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of adminpages\">\n        <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath.startsWith(p.url)\">\n          <ion-label>\n            {{ p.title }}\n          </ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-item (click)=\"logOut()\" style=\"cursor: pointer\">\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n        Logout\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\"currentUserRole == 'Developer'\">\n      <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of developerPages\">\n        <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath.startsWith(p.url)\">\n          <ion-label>\n            {{ p.title }}\n          </ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-item (click)=\"logOut()\" style=\"cursor: pointer\">\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n        Logout\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-router-outlet id=\"content\" main></ion-router-outlet>\n\n<!-- </ion-split-pane> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leave-form/leave-form.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leave-form/leave-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Add Leave</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]='leaveForm'>\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div>\n            <ion-item>\n              <!-- <ion-label style=\"color: gray\">Select Date</ion-label> -->\n              <ion-datetime formControlName=\"date\" placeholder=\"Select Date\" min={{curruntDate}}></ion-datetime>\n            </ion-item>\n            <ion-item>\n              <ion-input type=\"number\" id=\"field1\"  formControlName=\"noOfDays\" placeholder=\"Enter Number of days\" step=\"0.5\"\n                min=\"0.5\" id=\"input1\" >\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-textarea rows=\"1\" formControlName=\"reason\" placeholder=\"Enter your reason here...\"></ion-textarea>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName=\"extraHours\"  placeholder=\"Enter your compensate...\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input  formControlName=\"shortLeave\"  type=\"number\" (keyup)=\"updateList($event.target.value)\" placeholder=\"Enter your Leave hours...\"  id=\"input2\" min=\"0\" ></ion-input>\n            </ion-item>\n          </div>\n          <div>\n            <ion-button type=\"submit\" expand=\"block\" (click)=\"applyLeave(leaveForm.value)\"\n              [disabled]=\"this.leaveForm.invalid || isDisable\">Add Leave</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/leave-history/leave-history.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/leave-history/leave-history.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Leave History</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div>\n    <p>Monthly Leave</p>\n    <form [formGroup]='monthLeaveForm'>\n      <ion-item>\n        <ion-label style=\"color: gray\">Select Month</ion-label>\n        <ion-datetime displayFormat=\"MMMM YYYY\" formControlName=\"month\"\n          (ionChange)=getMounthlyLeaveByUser(monthLeaveForm.value)>\n        </ion-datetime>\n      </ion-item>\n    </form>\n    <div *ngIf=\"isMonthLeave == 2\">\n      <div class=\"row header\">\n        <div class=\"col\">Date</div>\n        <div class=\"col\">No. Of Days</div>\n        <div class=\"col\">Status</div>\n      </div>\n      <div class=\"row\" *ngFor=\"let leave of monthlyLeaveOfUser\">\n        <div class=\"col text-center\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</div>\n        <div class=\"col text-center\">{{getNoOfDays(leave.noOfDays)}}</div>\n        <div class=\"col\">{{leave.status}}</div>\n      </div>\n    </div>\n    <div *ngIf=\"isMonthLeave == 1\"><p class=\"text-center\">There are No leaves</p></div>\n  </div>\n  <div>\n    <span>Yearly Leave</span>\n    <form [formGroup]='yearLeaveForm'>\n      <ion-item>\n        <ion-label style=\"color: gray\">Select Year</ion-label>\n        <ion-datetime displayFormat=\" YYYY\" formControlName=\"year\"\n          (ionChange)=getYearlyLeaveByUser(yearLeaveForm.value)>\n        </ion-datetime>\n      </ion-item>\n    </form>\n    <div *ngIf=\"isYearLeave == 2\">\n      <div class=\"row header\">\n        <div class=\"col\">Date</div>\n        <div class=\"col\">No. Of Days</div>\n        <div class=\"col\">Status</div>\n      </div>\n      <div class=\"row\" *ngFor=\"let leave of yearlyLeaveOfUser\">\n        <div class=\"col text-center\">{{leave.date.date}}/{{leave.date.month}}/{{leave.date.year}}</div>\n        <div class=\"col text-center\">{{leave.noOfDays}}</div>\n        <div class=\"col\">{{leave.status}}</div>\n      </div>\n    </div>\n    <div *ngIf=\"isYearLeave == 1\"><p class=\"text-center\">There are No leaves</p></div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"userDetail\">\n    <ion-avatar class=\"profile_img\" *ngIf=\"!userDetail.profilePhoto\">\n      <ion-img  src=\"../../assets/images/profile.jpg\"></ion-img>\n    </ion-avatar>\n    <ion-avatar class=\"profile_img\"  *ngIf=\"userDetail.profilePhoto\">\n      <ion-img *ngIf=\"userDetail.profilePhoto\" src=\"{{path}}{{userDetail.profilePhoto}}\"></ion-img>\n    </ion-avatar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Name:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{userDetail.name}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Email:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{userDetail.email}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">DOB:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{userDetail.dob | date}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Phone:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{userDetail.phone}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Location:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{userDetail.location}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"1\">\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-text color=\"black\">Designation:</ion-text>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-text color=\"black\">{{userDetail.designation}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/Admin/all-user/all-user.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Admin/all-user/all-user.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_img {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n}\n\n.profile_img ion-img {\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 100%;\n  min-height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvTGVhdmVfdHJhY2tpbmdfaW9uaWMvc3JjL2FwcC9BZG1pbi9hbGwtdXNlci9hbGwtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWRtaW4vYWxsLXVzZXIvYWxsLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9hbGwtdXNlci9hbGwtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlX2ltZyB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICAucHJvZmlsZV9pbWcgaW9uLWltZ3tcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfSIsIi5wcm9maWxlX2ltZyB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucHJvZmlsZV9pbWcgaW9uLWltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Admin/all-user/all-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Admin/all-user/all-user.component.ts ***!
  \******************************************************/
/*! exports provided: AllUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUserComponent", function() { return AllUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");




let AllUserComponent = class AllUserComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.path = _config__WEBPACK_IMPORTED_MODULE_3__["config"].baseMediaUrl;
    }
    ngOnInit() {
        this.getAllUser();
    }
    /**
     * get all user
     */
    getAllUser() {
        this._userService.getAllUser().subscribe((res) => {
            console.log("all user=>", res);
            this.allUser = res.data;
        }, err => {
            console.log(err);
        });
    }
};
AllUserComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AllUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-user',
        template: __webpack_require__(/*! raw-loader!./all-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/all-user/all-user.component.html"),
        styles: [__webpack_require__(/*! ./all-user.component.scss */ "./src/app/Admin/all-user/all-user.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], AllUserComponent);



/***/ }),

/***/ "./src/app/Admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/Admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_img {\n  height: 30px;\n  width: 30px;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n\n.topMenu ion-icon {\n  font-size: 30px;\n  cursor: pointer;\n  padding: 0px;\n  margin: 0px 10px 0px 10px;\n}\n\n.buttonOfMenu ion-button {\n  margin: auto;\n}\n\n.absentUserName {\n  margin: 10px;\n  font-size: 20px;\n  background-color: #5a96d6;\n  text-align: center;\n  border-radius: 20px;\n  height: 30px;\n  color: white;\n}\n\n.approved {\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n.step_two {\n  text-align: center;\n  padding: 10px 20px;\n}\n\n.step_three {\n  text-align: center;\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvTGVhdmVfdHJhY2tpbmdfaW9uaWMvc3JjL2FwcC9BZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ0VKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURDQTtFQUNJLDZCQUFBO0FDRUo7O0FEQUE7RUFDSSwyQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNJSjs7QUREQTtFQUNJLFlBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZV9pbWd7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xufVxuLmNvbCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG4ucm93Omxhc3QtY2hpbGQgLmNvbCB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XG59XG4uaGVhZGVyIC5jb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xufVxuLnRvcE1lbnUgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcbn1cblxuLmJ1dHRvbk9mTWVudSBpb24tYnV0dG9ue1xuICAgIG1hcmdpbjogYXV0b1xufVxuLmFic2VudFVzZXJOYW1le1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhOTZkNjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmFwcHJvdmVke1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG4uc3RlcF90d297XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLnN0ZXBfdGhyZWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbn0iLCIucHJvZmlsZV9pbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uY29sIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG4ucm93Omxhc3QtY2hpbGQgLmNvbCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xufVxuXG4uaGVhZGVyIC5jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi50b3BNZW51IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDtcbn1cblxuLmJ1dHRvbk9mTWVudSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYWJzZW50VXNlck5hbWUge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhOTZkNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFwcHJvdmVkIHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zdGVwX3R3byB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4uc3RlcF90aHJlZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let DashboardComponent = class DashboardComponent {
    constructor(_userService, _leaveService, alertController) {
        this._userService = _userService;
        this._leaveService = _leaveService;
        this.alertController = alertController;
        this.path = _config__WEBPACK_IMPORTED_MODULE_4__["config"].baseMediaUrl;
        this.todaysLeave = [];
        this.approvedLeaves = [];
        this.pendingLeaves = [];
        this.isReasonVisible = false;
    }
    ngOnInit() {
        this.getUserDetail();
    }
    /**
     * Get Single user details
     */
    getUserDetail() {
        this._userService.getUserDetail().subscribe((res) => {
            console.log("user details==========>", res.data);
            this.UserDetail = res.data[0];
            console.log("data=======>", this.UserDetail);
            // this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
        }, err => {
            console.log(err);
        });
    }
    /**
     * Get user whose not present today
     */
    todayNotPresentUser() {
        console.log("today not present user");
        this._leaveService.todayNotPresentUser().subscribe((res) => {
            console.log("not present user", res);
            $('.step_one').css({ 'display': 'block' });
            $('.step_two').css({ 'display': 'none' });
            $('.step_three').css({ 'display': 'none' });
            this.todaysLeave = res.data;
            this.todayLeavesCount = res.data.length;
            console.log("not present user=======>", res, this.todaysLeave, this.todayLeavesCount);
        }, err => {
            console.log(err);
        });
    }
    /**
     * Get Approved Leaves
     */
    getApprovedLeaves() {
        console.log("approved leaves");
        this._leaveService.getApprovedLeaves().subscribe((res) => {
            this.approvedLeaves = res.data;
            this.approvedLeavesCount = res.data.length;
            $('.step_two').css({ 'display': 'block' });
            $('.step_one').css({ 'display': 'none' });
            $('.step_three').css({ 'display': 'none' });
            // $('.step_one').css({ 'display': 'none' });
            console.log("approved leaves", res, this.approvedLeaves, this.approvedLeavesCount);
        }, err => {
            console.log("err");
        });
    }
    /**
     * Get Pending Leaves
     */
    getPendingLeaves() {
        console.log("Pending leaves");
        this._leaveService.getPendingLeaves().subscribe((res) => {
            $('.step_two').css({ 'display': 'none' });
            $('.step_one').css({ 'display': 'none' });
            $('.step_three').css({ 'display': 'block' });
            this.pendingLeaves = res.data;
            this.pendingLeavesCount = res.data.length;
            console.log("Pending leaves", res, this.pendingLeaves, this.pendingLeavesCount);
        }, err => {
            console.log("err");
        });
    }
    /**
     * Display leave Reason
     */
    presentAlert(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data);
            let date = data.date;
            let finalDate = date.year + '/' + date.month + '/' + date.date;
            const alert = yield this.alertController.create({
                header: 'Reason',
                message: 'Due to ' + data.reason,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    getNoOfDays(days) {
        // console.log(days);
        if (days < 0) {
            return 'You have no leaves..';
        }
        else {
            const noOfDays = Math.floor(days / 8);
            // console.log("Days", noOfDays);
            const noOfhours = days % 8;
            // console.log("noOfhours", noOfhours);
            if (!noOfDays && noOfhours) {
                if (noOfhours > 1) {
                    return noOfhours + ' hours';
                }
                else {
                    return noOfhours + ' hour';
                }
            }
            else if (noOfDays && !noOfhours) {
                if (noOfDays > 1) {
                    return noOfDays + ' Days';
                }
                else {
                    return noOfDays + ' Day';
                }
            }
            else {
                if (noOfDays > 1 && noOfhours > 1) {
                    return noOfDays + ' Days ' + noOfhours + ' hours';
                }
                else if (noOfDays == 1 && noOfhours == 1) {
                    return noOfDays + ' Day ' + noOfhours + ' hour';
                }
                else if (noOfDays > 1 && noOfhours == 1) {
                    return noOfDays + ' Days ' + noOfhours + ' hour';
                }
                else {
                    return noOfDays + ' Day ' + noOfhours + ' hours';
                }
            }
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/Admin/dashboard/dashboard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/Admin/leave-application/leave-application.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Admin/leave-application/leave-application.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leaveApp {\n  max-height: 200px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvTGVhdmVfdHJhY2tpbmdfaW9uaWMvc3JjL2FwcC9BZG1pbi9sZWF2ZS1hcHBsaWNhdGlvbi9sZWF2ZS1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWRtaW4vbGVhdmUtYXBwbGljYXRpb24vbGVhdmUtYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9sZWF2ZS1hcHBsaWNhdGlvbi9sZWF2ZS1hcHBsaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWF2ZUFwcHtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufSIsIi5sZWF2ZUFwcCB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Admin/leave-application/leave-application.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Admin/leave-application/leave-application.component.ts ***!
  \************************************************************************/
/*! exports provided: LeaveApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveApplicationComponent", function() { return LeaveApplicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let LeaveApplicationComponent = class LeaveApplicationComponent {
    constructor(_leavService, alertController, _toastService, localNotifications) {
        this._leavService = _leavService;
        this.alertController = alertController;
        this._toastService = _toastService;
        this.localNotifications = localNotifications;
        this.PendingLeaves = [];
    }
    ngOnInit() {
        this.getPendingLeaves();
    }
    /**
     * Get Pending Leave Application
     */
    getPendingLeaves() {
        this._leavService.getPendingLeaves().subscribe((res) => {
            this.PendingLeaves = res.data;
            this.pendingLeavesCount = res.data.length;
            console.log("pending leaves=======>", this.PendingLeaves);
        }, err => {
            console.log(err);
        });
    }
    /**
    * Display leave Reason
    */
    presentAlert(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data);
            let date = data.date;
            let extrahours = data.extraHours;
            console.log(extrahours);
            let finalDate = date.date + '/' + date.month + '/' + date.year;
            console.log(finalDate);
            console.log(date);
            const alert = yield this.alertController.create({
                message: '<b>' + 'Reason :' + '</b>' + ' ' + data.reason + '<br>' + '<b>' + 'Date :' + '</b>' + ' ' + finalDate + '<br>',
                buttons: ['OK'],
                cssClass: 'alertCustomCss'
            });
            yield alert.present();
        });
    }
    /**
     * Leave Approval
     * @param {String} id
     */
    leaveApproval(id, status) {
        console.log(id, status);
        const obj = {
            leaveId: id,
            status: status
        };
        this._leavService.leaveApproval(obj).subscribe((res) => {
            console.log("res========>", res);
            if (status == 'Approved') {
                this._toastService.presentToast('Leave Approved');
            }
            else {
                this._toastService.presentToast('Leave Rejected');
            }
            this.getPendingLeaves();
        }, err => {
            console.log(err);
        });
    }
    getNoOfDays(days) {
        // console.log(days);
        if (days < 0) {
            return 'You have no leaves..';
        }
        else {
            const noOfDays = Math.floor(days / 8);
            // console.log("Days", noOfDays);
            const noOfhours = days % 8;
            // console.log("noOfhours", noOfhours);
            if (!noOfDays && noOfhours) {
                if (noOfhours > 1) {
                    return noOfhours + ' hours';
                }
                else {
                    return noOfhours + ' hour';
                }
            }
            else if (noOfDays && !noOfhours) {
                if (noOfDays > 1) {
                    return noOfDays + ' Days';
                }
                else {
                    return noOfDays + ' Day';
                }
            }
            else {
                if (noOfDays > 1 && noOfhours > 1) {
                    return noOfDays + ' Days ' + noOfhours + ' hours';
                }
                else if (noOfDays == 1 && noOfhours == 1) {
                    return noOfDays + ' Day ' + noOfhours + ' hour';
                }
                else if (noOfDays > 1 && noOfhours == 1) {
                    return noOfDays + ' Days ' + noOfhours + ' hour';
                }
                else {
                    return noOfDays + ' Day ' + noOfhours + ' hours';
                }
            }
        }
    }
};
LeaveApplicationComponent.ctorParameters = () => [
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"] }
];
LeaveApplicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave-application',
        template: __webpack_require__(/*! raw-loader!./leave-application.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/leave-application/leave-application.component.html"),
        styles: [__webpack_require__(/*! ./leave-application.component.scss */ "./src/app/Admin/leave-application/leave-application.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"]])
], LeaveApplicationComponent);



/***/ }),

/***/ "./src/app/Admin/notification/notification.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/Admin/notification/notification.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-content {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvTGVhdmVfdHJhY2tpbmdfaW9uaWMvc3JjL2FwcC9BZG1pbi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9BZG1pbi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufSIsIi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Admin/notification/notification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Admin/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");




let NotificationComponent = class NotificationComponent {
    constructor(_userService, localNotifications) {
        this._userService = _userService;
        this.localNotifications = localNotifications;
    }
    ngOnInit() {
        this.getNotification();
    }
    getNotification() {
        this._userService.getNotification().subscribe((data) => {
            this.notificationDetails = data.data;
            this.notificationDetailsCount = data.data.length;
            console.log("notification data", this.notificationDetails);
            // this.scheduleNotification(this.notificationDetails)
        }, err => {
            console.log(err);
        });
    }
};
NotificationComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"] }
];
NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/notification/notification.component.html"),
        styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/Admin/notification/notification.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__["LocalNotifications"]])
], NotificationComponent);



/***/ }),

/***/ "./src/app/Admin/reports/reports.component.scss":
/*!******************************************************!*\
  !*** ./src/app/Admin/reports/reports.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvTGVhdmVfdHJhY2tpbmdfaW9uaWMvc3JjL2FwcC9BZG1pbi9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0FkbWluL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvQWRtaW4vcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG4ucm93Omxhc3QtY2hpbGQgLmNvbCB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XG59XG4uaGVhZGVyIC5jb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xufVxuIiwiLmNvbCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLnJvdzpsYXN0LWNoaWxkIC5jb2wge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLmhlYWRlciAuY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Admin/reports/reports.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Admin/reports/reports.component.ts ***!
  \****************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ReportsComponent = class ReportsComponent {
    constructor(_leaveService) {
        this._leaveService = _leaveService;
        this.monthLeaveReport = [];
        this.yearLeaveReport = [];
        this.monthLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.yearLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    }
    ngOnInit() { }
    /**
     * Get month leave report
     * @param {object} data
     */
    getMonthLeaveReport(data) {
        console.log(data);
        this._leaveService.getMonthLeaveReport(data).subscribe((res) => {
            this.monthLeaveReport = res.data;
            this.monthLeaveCount = res.data.length;
            console.log("month report=======>", res);
        }, err => {
            console.log(err);
        });
    }
    /**
     * Get year leave report
     * @param {Object} data
     */
    getYearLeaveReport(data) {
        console.log(data);
        this._leaveService.getYearLeaveReport(data).subscribe((res) => {
            this.yearLeaveReport = res.data;
            this.yearLeaveCount = res.data.length;
            console.log("year report=======>", this.yearLeaveReport);
        }, err => {
            console.log(err);
        });
    }
};
ReportsComponent.ctorParameters = () => [
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"] }
];
ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/reports/reports.component.html"),
        styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/Admin/reports/reports.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_2__["LeaveService"]])
], ReportsComponent);



/***/ }),

/***/ "./src/app/Admin/single-usre/single-usre.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Admin/single-usre/single-usre.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_img {\n  margin: 10px auto;\n}\n\n.col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvTGVhdmVfdHJhY2tpbmdfaW9uaWMvc3JjL2FwcC9BZG1pbi9zaW5nbGUtdXNyZS9zaW5nbGUtdXNyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQWRtaW4vc2luZ2xlLXVzcmUvc2luZ2xlLXVzcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FDRUo7O0FEQUM7RUFDRyw0QkFBQTtBQ0dKOztBREFBO0VBQ0ksNkJBQUE7QUNHSjs7QUREQTtFQUNJLDJCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9zaW5nbGUtdXNyZS9zaW5nbGUtdXNyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlX2ltZ3tcbiAgICBtYXJnaW46IDEwcHggYXV0b1xuICAgIH1cbi5jb2wge1xuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gfVxuIC5jb2w6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbiB9XG4gICAgXG4ucm93Omxhc3QtY2hpbGQgLmNvbCB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XG59XG4uaGVhZGVyIC5jb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xuIH0iLCIucHJvZmlsZV9pbWcge1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmNvbCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLnJvdzpsYXN0LWNoaWxkIC5jb2wge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLmhlYWRlciAuY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Admin/single-usre/single-usre.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Admin/single-usre/single-usre.component.ts ***!
  \************************************************************/
/*! exports provided: SingleUsreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUsreComponent", function() { return SingleUsreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let SingleUsreComponent = class SingleUsreComponent {
    constructor(route, _userService, _leaveService, alertController) {
        this.route = route;
        this._userService = _userService;
        this._leaveService = _leaveService;
        this.alertController = alertController;
        this.userLeaves = [];
        this.path = _config__WEBPACK_IMPORTED_MODULE_5__["config"].baseMediaUrl;
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.userId = param.userId;
            console.log("userId==========>", this.userId);
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
        this._userService.getUserById(userId).subscribe((res) => {
            this.singleUser = res.data;
            this.singleUser.dob = this.singleUser.dob.split("T")[0];
            console.log("res of single user=========>", res, this.singleUser);
        }, err => {
            console.log(err);
        });
    }
    /**
     * Get leave By userId
     * @param {String} userId
     */
    getLeaveByUserId(userId) {
        console.log('userid=======>', userId);
        this._leaveService.getLeaveByUserId(userId).subscribe((res) => {
            this.userLeaves = res.data;
            console.log("res of leave by userid====>", res);
        }, err => {
            console.log(err);
        });
    }
    /**
    * Display leave Reason
    */
    presentAlert(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(data);
            let date = data.date;
            let finalDate = date.date + '/' + date.month + '/' + date.year;
            const alert = yield this.alertController.create({
                message: '<b>' + 'Reason :' + '</b>' + ' ' + data.reason + '<br>' + '<b>' + 'Date :' + '</b>' + ' ' + finalDate + '<br>',
                buttons: ['OK'],
                cssClass: 'alertCustomCss'
            });
            yield alert.present();
        });
    }
    getNoOfDays(days) {
        // console.log(days);
        if (days < 0) {
            return 'You have no leaves..';
        }
        else {
            const noOfDays = Math.floor(days / 8);
            // console.log("Days", noOfDays);
            const noOfhours = days % 8;
            // console.log("noOfhours", noOfhours);
            if (!noOfDays && noOfhours) {
                if (noOfhours > 1) {
                    return noOfhours + ' hours';
                }
                else {
                    return noOfhours + ' hour';
                }
            }
            else if (noOfDays && !noOfhours) {
                if (noOfDays > 1) {
                    return noOfDays + ' Days';
                }
                else {
                    return noOfDays + ' Day';
                }
            }
            else {
                if (noOfDays > 1 && noOfhours > 1) {
                    return noOfDays + ' Days ' + noOfhours + ' hours';
                }
                else if (noOfDays == 1 && noOfhours == 1) {
                    return noOfDays + ' Day ' + noOfhours + ' hour';
                }
                else if (noOfDays > 1 && noOfhours == 1) {
                    return noOfDays + ' Days ' + noOfhours + ' hour';
                }
                else {
                    return noOfDays + ' Day ' + noOfhours + ' hours';
                }
            }
        }
    }
};
SingleUsreComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
SingleUsreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-usre',
        template: __webpack_require__(/*! raw-loader!./single-usre.component.html */ "./node_modules/raw-loader/index.js!./src/app/Admin/single-usre/single-usre.component.html"),
        styles: [__webpack_require__(/*! ./single-usre.component.scss */ "./src/app/Admin/single-usre/single-usre.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], SingleUsreComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _leave_form_leave_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../leave-form/leave-form.component */ "./src/app/leave-form/leave-form.component.ts");
/* harmony import */ var _leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../leave-history/leave-history.component */ "./src/app/leave-history/leave-history.component.ts");
/* harmony import */ var _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Admin/dashboard/dashboard.component */ "./src/app/Admin/dashboard/dashboard.component.ts");
/* harmony import */ var _Admin_all_user_all_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Admin/all-user/all-user.component */ "./src/app/Admin/all-user/all-user.component.ts");
/* harmony import */ var _Admin_single_usre_single_usre_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Admin/single-usre/single-usre.component */ "./src/app/Admin/single-usre/single-usre.component.ts");
/* harmony import */ var _Admin_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Admin/reports/reports.component */ "./src/app/Admin/reports/reports.component.ts");
/* harmony import */ var _Admin_leave_application_leave_application_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Admin/leave-application/leave-application.component */ "./src/app/Admin/leave-application/leave-application.component.ts");
/* harmony import */ var _Admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Admin/notification/notification.component */ "./src/app/Admin/notification/notification.component.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");

















let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                    children: [
                        {
                            path: '',
                            redirectTo: 'profile',
                            pathMatch: 'full'
                        },
                        {
                            path: 'profile',
                            component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]
                        },
                        {
                            path: 'leave-form',
                            component: _leave_form_leave_form_component__WEBPACK_IMPORTED_MODULE_8__["LeaveFormComponent"]
                        },
                        {
                            path: 'leave-history',
                            component: _leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_9__["LeaveHistoryComponent"]
                        },
                        {
                            path: 'dashboard',
                            component: _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]
                        },
                        {
                            path: 'all-user',
                            component: _Admin_all_user_all_user_component__WEBPACK_IMPORTED_MODULE_11__["AllUserComponent"]
                        },
                        {
                            path: 'single-user/:userId',
                            component: _Admin_single_usre_single_usre_component__WEBPACK_IMPORTED_MODULE_12__["SingleUsreComponent"]
                        },
                        {
                            path: 'report',
                            component: _Admin_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__["ReportsComponent"]
                        },
                        {
                            path: 'leave-application',
                            component: _Admin_leave_application_leave_application_component__WEBPACK_IMPORTED_MODULE_14__["LeaveApplicationComponent"]
                        },
                        {
                            path: 'notification',
                            component: _Admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"]
                        }
                    ]
                }
            ])
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
            _profile_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"],
            _leave_form_leave_form_component__WEBPACK_IMPORTED_MODULE_8__["LeaveFormComponent"],
            _leave_history_leave_history_component__WEBPACK_IMPORTED_MODULE_9__["LeaveHistoryComponent"],
            _Admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _Admin_all_user_all_user_component__WEBPACK_IMPORTED_MODULE_11__["AllUserComponent"],
            _Admin_single_usre_single_usre_component__WEBPACK_IMPORTED_MODULE_12__["SingleUsreComponent"],
            _Admin_reports_reports_component__WEBPACK_IMPORTED_MODULE_13__["ReportsComponent"],
            _Admin_leave_application_leave_application_component__WEBPACK_IMPORTED_MODULE_14__["LeaveApplicationComponent"],
            _Admin_notification_notification_component__WEBPACK_IMPORTED_MODULE_15__["NotificationComponent"]
        ],
        providers: [
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_16__["LocalNotifications"]
        ]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvTGVhdmVfdHJhY2tpbmdfaW9uaWMvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");









let HomePage = class HomePage {
    constructor(router, _userService, menu, plt, fcm, _toastService, localNotifications) {
        this.router = router;
        this._userService = _userService;
        this.menu = menu;
        this.plt = plt;
        this.fcm = fcm;
        this._toastService = _toastService;
        this.localNotifications = localNotifications;
        this.currentUserRole = JSON.parse(localStorage.getItem('designation'));
        this.selectedPath = '';
        this.developerPages = [];
        this.adminpages = [];
        this.path = _config__WEBPACK_IMPORTED_MODULE_5__["config"].baseMediaUrl;
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
        ];
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
        this.router.events.subscribe((event) => {
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }
    // ionViewWillEnter() {
    //   if(this.currentUserRole == 'Admin'){
    //     this.fcm.onNotification().subscribe(data => {
    //       this.router.navigate(['/home/leave-application'])
    //       if (data.wasTapped) {
    //         console.log(data);
    //       } else {
    //       }
    //     });
    //   }
    // }
    /**
     * Logout user
     */
    logOut() {
        console.log("log out");
        this._userService.logOut().subscribe((res) => {
            console.log("data of login yser ", res);
            localStorage.clear();
            this.router.navigate(['/login']);
        }, err => {
            console.log(err);
        });
    }
    closeMenu() {
        this.menu.close();
    }
    /**
     * git user detail
     */
    getUserDetail() {
        this._userService.getUserDetail().subscribe((res) => {
            this.UserDetail = res.data;
            console.log("===", this.UserDetail);
        }, err => {
            console.log(err);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_7__["LocalNotifications"]])
], HomePage);



/***/ }),

/***/ "./src/app/leave-form/leave-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/leave-form/leave-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXZlLWZvcm0vbGVhdmUtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/leave-form/leave-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/leave-form/leave-form.component.ts ***!
  \****************************************************/
/*! exports provided: LeaveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveFormComponent", function() { return LeaveFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");






// let format = require("date-fns/format");
let LeaveFormComponent = class LeaveFormComponent {
    // dates: new Date();
    constructor(_leaveService, elementRef, _toastService, localNotifications) {
        this._leaveService = _leaveService;
        this.elementRef = elementRef;
        this._toastService = _toastService;
        this.localNotifications = localNotifications;
        this.isDisable = false;
        this.curruntDate = new Date().toISOString();
        this.leaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            noOfDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            extraHours: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            shortLeave: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ngOnInit() {
        console.log("date", this.curruntDate);
        var inp1 = document.getElementById("input1");
        var inp2 = document.getElementById("input2");
        inp1.onkeyup = function () { inputValidation(this, inp2); };
        inp2.onkeyup = function () { inputValidation(this, inp1); };
        function inputValidation(origin, lock) {
            var response = hasValue(origin.value);
            lock.disabled = response;
        }
        function hasValue(value) {
            return value != "" && value.length > 0;
        }
    }
    applyLeave(data) {
        this.isDisable = false;
        console.log("leave application details", this.leaveForm.value);
        console.log('data===========>', data);
        console.log('data============>', data);
        if (this.leaveForm.invalid) {
            return;
        }
        this._leaveService.applyLeave(data).subscribe((res) => {
            console.log("res of leave==========>", res);
            this._toastService.presentToast(res.message);
            this.leaveForm.reset();
            this.isDisable = false;
        }, err => {
            console.log("==========>", err);
            this.isDisable = false;
        });
    }
    updateList(e) {
        console.log(e);
        if (e > 3) {
            // console.log("first ==========", e)
            alert("please enter value less than three");
            const element = this.elementRef.nativeElement.querySelector('#input2');
            console.log("element -----------", element);
            element.value = 3;
        }
        else if (e < 3 && e > 1) {
            const element = this.elementRef.nativeElement.querySelector('#input2');
            element.value = e;
        }
        else if (e == "") {
            const element = this.elementRef.nativeElement.querySelector('#input2');
            element.value = '';
        }
        else if (e < 1) {
            alert("value must be positive ");
            const element = this.elementRef.nativeElement.querySelector('#input2');
            element.value = 1;
        }
    }
};
LeaveFormComponent.ctorParameters = () => [
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"] }
];
LeaveFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave-form',
        template: __webpack_require__(/*! raw-loader!./leave-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/leave-form/leave-form.component.html"),
        styles: [__webpack_require__(/*! ./leave-form.component.scss */ "./src/app/leave-form/leave-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_5__["LocalNotifications"]])
], LeaveFormComponent);



/***/ }),

/***/ "./src/app/leave-history/leave-history.component.scss":
/*!************************************************************!*\
  !*** ./src/app/leave-history/leave-history.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  border: solid 1px grey;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.col:last-child {\n  border-right: solid 1px grey;\n}\n\n.row:last-child .col {\n  border-bottom: solid 1px grey;\n}\n\n.header .col {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvTGVhdmVfdHJhY2tpbmdfaW9uaWMvc3JjL2FwcC9sZWF2ZS1oaXN0b3J5L2xlYXZlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xlYXZlLWhpc3RvcnkvbGVhdmUtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbGVhdmUtaGlzdG9yeS9sZWF2ZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xufVxuXG4ucm93Omxhc3QtY2hpbGQgLmNvbCB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XG59XG4uaGVhZGVyIC5jb2wge1xuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xufVxuIiwiLmNvbCB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLnJvdzpsYXN0LWNoaWxkIC5jb2wge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcbn1cblxuLmhlYWRlciAuY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/leave-history/leave-history.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/leave-history/leave-history.component.ts ***!
  \**********************************************************/
/*! exports provided: LeaveHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveHistoryComponent", function() { return LeaveHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_leave_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/leave.service */ "./src/app/services/leave.service.ts");




let LeaveHistoryComponent = class LeaveHistoryComponent {
    constructor(_leaveService) {
        this._leaveService = _leaveService;
        this.isMonthLeave = 0;
        this.isYearLeave = 0;
        this.monthlyLeaveOfUser = [];
        this.yearlyLeaveOfUser = [];
        this.monthLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.yearLeaveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
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
        this._leaveService.getMounthlyLeaveByUser(data).subscribe((res) => {
            console.log("data===========>", res);
            this.monthlyLeaveOfUser = res.data;
            if (res.data.length > 0) {
                this.isMonthLeave = 2;
            }
            else {
                this.isMonthLeave = 1;
            }
        }, err => {
            console.log(err);
        });
    }
    /**
     *  Get yearly leave history of user
     * @param {Object} data
     */
    getYearlyLeaveByUser(data) {
        console.log("data==========>", data);
        this._leaveService.getYearlyLeaveByUser(data).subscribe((res) => {
            console.log("data===========>", res);
            this.yearlyLeaveOfUser = res.data;
            if (res.data.length > 0) {
                this.isYearLeave = 2;
            }
            else {
                this.isYearLeave = 1;
            }
        }, err => {
            console.log(err);
        });
    }
    getNoOfDays(days) {
        // console.log(days);
        if (days < 0) {
            return 'You have no leaves..';
        }
        else {
            const noOfDays = Math.floor(days / 8);
            // console.log("Days", noOfDays);
            const noOfhours = days % 8;
            // console.log("noOfhours", noOfhours);
            if (!noOfDays && noOfhours) {
                if (noOfhours > 1) {
                    return noOfhours + ' hours';
                }
                else {
                    return noOfhours + ' hour';
                }
            }
            else if (noOfDays && !noOfhours) {
                if (noOfDays > 1) {
                    return noOfDays + ' Days';
                }
                else {
                    return noOfDays + ' Day';
                }
            }
            else {
                if (noOfDays > 1 && noOfhours > 1) {
                    return noOfDays + ' Days ' + noOfhours + ' hours';
                }
                else if (noOfDays == 1 && noOfhours == 1) {
                    return noOfDays + ' Day ' + noOfhours + ' hour';
                }
                else if (noOfDays > 1 && noOfhours == 1) {
                    return noOfDays + ' Days ' + noOfhours + ' hour';
                }
                else {
                    return noOfDays + ' Day ' + noOfhours + ' hours';
                }
            }
        }
    }
};
LeaveHistoryComponent.ctorParameters = () => [
    { type: _services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"] }
];
LeaveHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-leave-history',
        template: __webpack_require__(/*! raw-loader!./leave-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/leave-history/leave-history.component.html"),
        styles: [__webpack_require__(/*! ./leave-history.component.scss */ "./src/app/leave-history/leave-history.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_leave_service__WEBPACK_IMPORTED_MODULE_3__["LeaveService"]])
], LeaveHistoryComponent);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_img {\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvTGVhdmVfdHJhY2tpbmdfaW9uaWMvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsaUJBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZV9pbWd7XG5tYXJnaW46IDEwcHggYXV0b1xufVxuIiwiLnByb2ZpbGVfaW1nIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");





let ProfilePage = class ProfilePage {
    constructor(modalController, _userService) {
        this.modalController = modalController;
        this._userService = _userService;
        this.path = _config__WEBPACK_IMPORTED_MODULE_4__["config"].baseMediaUrl;
        this.currentUserRole = localStorage.getItem('designation');
        this.token = JSON.parse(localStorage.getItem('accessToken'));
    }
    ngOnInit() {
        this.getUserDetail();
        console.log("current user role login", this.token);
    }
    getUserDetail() {
        this._userService.getUserDetail().subscribe((res) => {
            // this.UserDetail = res.data[0];
            console.log("login user details===", res);
            this.userDetail = res.data;
            console.log("this.userDetails login", this.userDetail);
            // this.UserDetail.dob = this.UserDetail.dob.split("T")[0];
        }, err => {
            console.log(err);
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], ProfilePage);



/***/ }),

/***/ "./src/app/services/leave.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/leave.service.ts ***!
  \*******************************************/
/*! exports provided: LeaveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveService", function() { return LeaveService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");




let LeaveService = class LeaveService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Apply leave
     * @param {Object} data
     */
    applyLeave(data) {
        console.log("leave application form details ", data);
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/add-leave", data);
    }
    /**
     * Get monthly leave history of user
     * @param {object} data
     */
    getMounthlyLeaveByUser(data) {
        console.log(data);
        const detail = data.month.split("-");
        const obj = {
            month: detail[1],
            year: detail[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-leave-by-month", obj);
    }
    /**
     * Get yearly leave history of user
     * @param {object} data
     */
    getYearlyLeaveByUser(data) {
        console.log(data.year.split("-")[0]);
        const obj = {
            year: data.year.split("-")[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-leave-by-year", obj);
    }
    /**
     * Get Todat not present user
     */
    todayNotPresentUser() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-today-not-present-users");
    }
    /**
     * Get Approved Leaves
     */
    getApprovedLeaves() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-approved-leaves");
    }
    /**
     * Get Pending Leaves
     */
    getPendingLeaves() {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-pending-leaves");
    }
    /**
     * Get leaves by userId
     * @param {String} userId
     */
    getLeaveByUserId(userId) {
        return this.http.get(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-leave-by-userId/" + userId);
    }
    /**
     * Get Month leave report
     * @param {Object} data
     */
    getMonthLeaveReport(data) {
        const detail = data.month.split("-");
        const obj = {
            month: detail[1],
            year: detail[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-monthly-report", obj);
    }
    /**
     * Get Year leave report
     * @param  { object} data
     */
    getYearLeaveReport(data) {
        console.log(data.year.split("-")[0]);
        const obj = {
            year: data.year.split("-")[0]
        };
        return this.http.post(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/get-yearly-report", obj);
    }
    /**
     * Leave Approval
     * @param {object} data
     */
    leaveApproval(data) {
        console.log(data);
        return this.http.put(_config__WEBPACK_IMPORTED_MODULE_3__["config"].baseApiUrl + "api/leave/leave-update-by-status", data);
    }
};
LeaveService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LeaveService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LeaveService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map
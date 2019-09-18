import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomePage } from './home.page';
import { ProfilePage } from '../profile/profile.page';
import { LeaveFormComponent } from '../leave-form/leave-form.component';
import { LeaveHistoryComponent } from '../leave-history/leave-history.component';
import { DashboardComponent } from '../Admin/dashboard/dashboard.component';
import { AllUserComponent } from '../Admin/all-user/all-user.component';
import { SingleUsreComponent } from '../Admin/single-usre/single-usre.component';
import { ReportsComponent } from '../Admin/reports/reports.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full'
          },
          {
            path: 'profile',
            component: ProfilePage
          },
          {
            path: 'leave-form',
            component: LeaveFormComponent
          },
          {
            path: 'leave-history',
            component: LeaveHistoryComponent
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'all-user',
            component: AllUserComponent
          },
          {
            path: 'single-user/:userId',
            component: SingleUsreComponent
          },
          {
            path: 'report',
            component: ReportsComponent
          },
        ]
      }
    ])
  ],
  declarations: [
    HomePage,
    ProfilePage,
    LeaveFormComponent,
    LeaveHistoryComponent,
    DashboardComponent,
    AllUserComponent,
    SingleUsreComponent,
    ReportsComponent
  ],
})
export class HomePageModule { }

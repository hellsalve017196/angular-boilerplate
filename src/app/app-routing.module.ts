import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

// login module
import {LoginComponent} from './login/login.component';

// dashboard main component
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardHeaderComponent} from './dashboard/dashboard-header/dashboard-header.component';
import {DashboardSidebarComponent} from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import {AppModalComponent} from './app-modal/app-modal.component';

// dashboard module
import {AddJobHistoryComponent} from './dashboard/add-job-history/add-job-history.component';
import {AddskillComponent} from './dashboard/addskill/addskill.component';
import {UpdateJobHistoryComponent} from './dashboard/update-job-history/update-job-history.component';
import {NotFoundComponent} from './dashboard/not-found/not-found.component';


// route for the App
const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // dashboard component
  {
    path: 'dashboard',
    component: DashboardComponent,
    // all the child components of dashboard
    children: [
      {
        path: 'addjobhistory',
        component: AddJobHistoryComponent
      },
      {
        path: 'updatejobhistory',
        component: UpdateJobHistoryComponent
      },
      {
        path: 'addskill',
        component: AddskillComponent
      },
      {
        path: '',
        redirectTo: 'addjobhistory',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  // default route
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    CommonModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

// all the routing components
// add new modules in here
export const routingComponents = [
  LoginComponent,
  // dashboard component
  DashboardComponent,
  DashboardHeaderComponent,
  DashboardSidebarComponent,


  AddJobHistoryComponent,
  UpdateJobHistoryComponent,
  AddskillComponent,
  NotFoundComponent
  // dashboard component
];

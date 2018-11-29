import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';


// re usable component
import { AppModalComponent } from './app-modal/app-modal.component';

// Dashboard Routing


// modules under dashboard
import {AddskillComponent} from './addskill/addskill.component';
import {UpdateskillComponent} from './updateskill/updateskill.component';
import {AddJobHistoryComponent} from './add-job-history/add-job-history.component';
import {UpdateJobHistoryComponent} from './update-job-history/update-job-history.component';
import {AddPortfolioComponent} from './add-portfolio/add-portfolio.component';
import {UpdatePortfolioComponent} from './update-portfolio/update-portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [AddskillComponent, UpdateskillComponent, AddJobHistoryComponent, UpdateJobHistoryComponent, AddPortfolioComponent, UpdatePortfolioComponent, NotFoundComponent, DashboardComponent, DashboardHeaderComponent, DashboardSidebarComponent],
  bootstrap: [DashboardComponent],
  exports: [
    DashboardModule,
  ]
})
export class DashboardModule {
}

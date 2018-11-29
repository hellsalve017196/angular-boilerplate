import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-job-history',
  templateUrl: './add-job-history.component.html',
  styleUrls: ['./add-job-history.component.css']
})
export class AddJobHistoryComponent implements OnInit {
  private AfterSuccess: Boolean;
  private AfterFailer: Boolean;

  constructor(@Inject('adminService') private adminService) {
  }

  ngOnInit() {
  }

  addJobHistory(addjobhistory) {
    addjobhistory.value.task = addjobhistory.value.task.split(',');

    this
      .adminService
      .addJobHistory(addjobhistory.value)
      .then(
        (res) => {
          addjobhistory.reset();
          this.AfterSuccess = true;

          setTimeout(() => {
            this.AfterSuccess = false;
          }, 1000);
        }
      )
      .catch((err) => {
        console.log(err);
        this.AfterFailer = true;

        setTimeout(() => {
          this.AfterFailer = false;
        }, 1000);
      });
  }

}

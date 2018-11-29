import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-update-job-history',
  templateUrl: './update-job-history.component.html',
  styleUrls: ['./update-job-history.component.css']
})
export class UpdateJobHistoryComponent implements OnInit {
  jobhistory: Array<Object>;
  updatejobhistory = {};

  constructor(@Inject('adminService') private adminService) {
  }

  ngOnInit() {
    this
      .adminService
      .listOfJobHistory()
      .subscribe(
        (listOfjobs) => {
          this.jobhistory = listOfjobs;
        }
      );
  }

  onDeleteJob(jobId: String): void {
    this
      .adminService
      .deleteJobHistory(jobId)
      .then(_ => {
        console.log('Successfully Deleted');
      })
      .catch((err) => {
        console.log('error occured');
      });
  }

  openUpdateModal(job, modal) {
    this.updatejobhistory = job;
    modal.show();
  }

}

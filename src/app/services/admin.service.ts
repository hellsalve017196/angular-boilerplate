import {Injectable} from '@angular/core';

// importing map
import {map} from 'rxjs/operators';

// for firebase
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db: AngularFireDatabase) {
  }

  addJobHistory(jobHistory) {
    return this
      .db
      .list('/job_history')
      .push(jobHistory);
  }

  listOfJobHistory() {
    return this
      .db
      .list('/job_history')
      .snapshotChanges()
      .pipe(
        map(
          changes =>
            changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        )
      );
  }

  deleteJobHistory(JobId) {
    return this
      .db
      .list('/job_history')
      .remove(JobId);
  }
}

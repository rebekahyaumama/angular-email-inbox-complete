import { Component, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../ngrx/app.selectors';
import { Router } from '@angular/router';
import { IEmail } from 'src/app/services/email.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnDestroy {
  public emails:IEmail[] = [];
  public selectedEmails: string[] = [];
  public inboxSubscription: Subscription;
  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    this.inboxSubscription = this.store.pipe(select(fromRoot.getInbox)).subscribe(inbox => {
      let emailArr= [];
      for(let item in inbox) {
        emailArr.push(inbox[item]);
      }
      this.emails = emailArr;
    });
   }
  displayedColumns = ["selected","subject", "tags", "sender", "date"];
  navigateToRow(row: IEmail) {
    this.router.navigate(['/inbox/'+row.id]);
  }
  selectedEmail(email: IEmail, event: MatCheckboxChange) {
    const emailIndex = this.selectedEmails.indexOf(email.id);
    event.checked ? this.selectedEmails.push(email.id) : this.selectedEmails.splice(emailIndex, emailIndex+1);
  }

  ngOnDestroy() {
    this.inboxSubscription.unsubscribe;
  }
}

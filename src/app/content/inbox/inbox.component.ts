import { Component, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../ngrx/app.selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { IEmail } from 'src/app/services/email.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Subscription } from 'rxjs';
import { getMergedRoute } from 'src/app/ngrx/router/router-state.selectors';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent {
  public emails:IEmail[] = [];
  public inbox$ = this.store.pipe(select(fromRoot.getInbox));
  public tagName$ = this.store.pipe(select(getMergedRoute));
  public deletedEmails$ = this.store.pipe(select(fromRoot.getDeletedEmails));
  public selectedEmails: string[] = [];
  public inboxSubscription: Subscription;
  constructor(
    private store: Store<any>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  
  onSelectedEmail({email, event }) {
    const emailIndex = this.selectedEmails.indexOf(email.id);
    event.checked ? this.selectedEmails.push(email.id) : this.selectedEmails.splice(emailIndex, emailIndex+1);
  }
}

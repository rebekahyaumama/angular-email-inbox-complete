import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../ngrx/app.selectors';
import { Router } from '@angular/router';
import { IEmail } from 'src/app/services/email.service';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  public emails:IEmail[] = [];
  
  constructor(
    private store: Store<any>,
    private router: Router,
  ) {
    store.pipe(select(fromRoot.getInbox)).subscribe(inbox => {
      let emailArr= [];
      for(let item in inbox) {
        emailArr.push(inbox[item]);
      }
      this.emails = emailArr;
    });
   }
  displayedColumns = ["subject", "sender", "date"];
  ngOnInit(): void {
  }
 
  navigateToRow(row: IEmail) {
    this.router.navigate(['/inbox/'+row.id]);
  }
}

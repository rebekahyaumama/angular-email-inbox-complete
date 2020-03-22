import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import * as fromRoot from '../../ngrx/app.selectors';
import { AppState } from 'src/app/ngrx/app.reducer';
import { Store, select } from '@ngrx/store';
import { IEmail } from 'src/app/services/email.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  public id: number;
  public email$;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute) {
    this.route.params.subscribe(row => {
      this.id = row.id;
      this.email$ = this.store.pipe(select(fromRoot.getEmail, { id: row.id }));
    });
   }

  ngOnInit(): void {
    if(this.id) {
      
    }
  }

}

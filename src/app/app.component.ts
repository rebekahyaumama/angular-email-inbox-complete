import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './ngrx/app.reducer';
import { FetchEmailsAction } from './ngrx/app.actions';import { getTags } from './ngrx/app.selectors';
;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-email-inbox';
  public tags$ = this.store.pipe(select(getTags));
  ngOnInit() {
    this.store.dispatch(FetchEmailsAction());
  }

  constructor(private store: Store<AppState>) {}
}

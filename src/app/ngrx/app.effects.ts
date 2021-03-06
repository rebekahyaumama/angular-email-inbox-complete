import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmailService } from '../services/email.service';
import { ActionTypes } from './app.actions';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from './app.reducer';
import { getInbox } from './app.selectors';
@Injectable()
export class AppEffects {

  fetchEmails$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.FetchEmails),
    switchMap(() => {
      let inbox = JSON.parse(localStorage.getItem('__app_storage__')).appState.inbox;
      if(Object.keys(inbox).length === 0){
        return this.service.getEmailsJSON().pipe(
          map(res =>  ({ type: ActionTypes.FetchEmailsSuccess, emails: res})),
          catchError(() => EMPTY),
        );
      }
      return EMPTY;
    }),
  )); 


  constructor(
    private service: EmailService,
    private actions$: Actions,
    private store: Store<AppState>,
  ) {}
}
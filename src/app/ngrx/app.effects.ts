import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmailService } from '../services/email.service';
import { ActionTypes, FetchEmailsAction, FetchEmailsSuccessAction, FetchEmailsFailureAction } from './app.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class AppEffects {

  fetchEmails$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.FetchEmails),
    switchMap(() => {
      return this.service.getEmailsJSON().pipe(
        map(res =>  ({ type: ActionTypes.FetchEmailsSuccess, emails: res})),
        catchError(() => of(FetchEmailsFailureAction()))
      );
    }),
  )); 


  constructor(
    private service: EmailService,
    private actions$: Actions,
  ) {}
}
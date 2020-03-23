import { createAction, props } from '@ngrx/store';
import { IEmail } from '../services/email.service';

export enum ActionTypes {
  FetchEmails = '[app] Fetch Emails',
  FetchEmailsSuccess = '[app] Fetch Emails Success',
  FetchEmailsFailure = '[app ERROR] Fetch Emails Failure',
  RemoveEmailFromState = '[app] Remove Email from State',
};

export const FetchEmailsAction = createAction(ActionTypes.FetchEmails);
export const FetchEmailsSuccessAction = createAction(ActionTypes.FetchEmailsSuccess, props<{ emails: IEmail[] }>());
export const FetchEmailsFailureAction = createAction(ActionTypes.FetchEmailsFailure);
export const RemoveEmailFromStateAction = createAction(ActionTypes.RemoveEmailFromState, props<{ id: number }>());
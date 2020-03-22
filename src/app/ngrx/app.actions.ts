import { createAction, props } from '@ngrx/store';
import { IEmail } from '../services/email.service';
export enum ActionTypes {
  FetchEmails = '[app] Fetch Email',
  FetchEmailsSuccess = '[app] Fetch Emails Success',
  FetchEmailsFailure = '[app ERROR] Fetch Emails Failure'
};

export const FetchEmailsAction = createAction(ActionTypes.FetchEmails);
export const FetchEmailsSuccessAction = createAction(ActionTypes.FetchEmailsSuccess, props<{ emails: IEmail[] }>());
export const FetchEmailsFailureAction = createAction(ActionTypes.FetchEmailsFailure);

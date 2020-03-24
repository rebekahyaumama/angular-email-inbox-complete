import { createAction, props } from '@ngrx/store';
import { IEmail } from '../services/email.service';

export enum ActionTypes {
  FetchEmails = '[app] Fetch Emails',
  FetchEmailsSuccess = '[app] Fetch Emails Success',
  FetchEmailsFailure = '[app ERROR] Fetch Emails Failure',
  RemoveEmailFromState = '[app] Remove Email from State',
  TagsSelectionChanged = '[app] Tags Changed',
  AddNewTagToState = '[app] New Tag Added to State',
};

export const FetchEmailsAction = createAction(ActionTypes.FetchEmails);
export const FetchEmailsSuccessAction = createAction(ActionTypes.FetchEmailsSuccess, props<{ emails: Record<string, IEmail> }>());
export const FetchEmailsFailureAction = createAction(ActionTypes.FetchEmailsFailure);
export const RemoveEmailFromStateAction = createAction(ActionTypes.RemoveEmailFromState, props<{ id: string }>());
export const TagsSelectionChangedAction = createAction(ActionTypes.TagsSelectionChanged, props<{ tag: string, id: string, checked: boolean }>())
export const AddNewTagToStateAction = createAction(ActionTypes.AddNewTagToState, props<{tag: string}>());
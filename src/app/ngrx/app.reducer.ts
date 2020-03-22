import { IEmail } from '../services/email.service';
import { FetchEmailsSuccessAction } from './app.actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface AppState {
  inbox: IEmail[];
  tags: string[];
}
export const EMAIL_TAGS = ['inbox', 'travel', 'work'];
export const initialState: AppState = { inbox: [], tags: EMAIL_TAGS };
const _appReducer = createReducer(
  initialState,
  on(FetchEmailsSuccessAction, (state, action) => {
    return {
      ...state, 
      inbox: action.emails, 
    };
  }),
);

export function appReducer(state: AppState = initialState, action: Action): AppState {
  return _appReducer(state, action);
}

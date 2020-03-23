import { IEmail } from '../services/email.service';
import { FetchEmailsSuccessAction, RemoveEmailFromStateAction } from './app.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { state } from '@angular/animations';

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
  on(RemoveEmailFromStateAction,(state, action) => {
    return {
      ...state,
      inbox: state.inbox.filter(e => e.id !== action.id),
    };
}),
);

export function appReducer(state: AppState = initialState, action: Action): AppState {
  return _appReducer(state, action);
}

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from './app.reducer';
import { IEmail } from '../services/email.service';

const getAppState = createFeatureSelector<AppState>('appState');

export const getInbox = createSelector(
  getAppState,
  state => state.inbox,
);
export const getEmail = createSelector(
  getInbox,
  (emails: IEmail[], props) => {
    return emails.find(e => e.id === props.id);
  }
);
export const getTags = createSelector(
  getAppState,
  (state) => state.tags,
);
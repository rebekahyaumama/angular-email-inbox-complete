import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from './app.reducer';
import { IEmail } from '../services/email.service';
import { getMergedRoute } from './router/router-state.selectors';

const getAppState = createFeatureSelector<AppState>('appState');
export const getTags = createSelector(
  getAppState,
  (state) => state.tags,
);
export const getInbox = createSelector(
  getAppState,
  getMergedRoute,
  getTags,
  (state, route, tags) => {
    let inbox = state.inbox;
    let emails = {};
    let tag = route.params.tag;
    if (!tag) {
      emails = state.inbox;
    }
    if (route.params.tag === 'deleted') {
      for (let email in inbox) {
        if (inbox[email]?.deleted) {
          emails[email] = inbox[email];
          console.log(emails);
        }
      }
    } else {
      for (let email in inbox) {
        if (!inbox[email].deleted && inbox[email].tags.indexOf(tag) > -1) {
          emails[email] = inbox[email];
          emails[email].tags.filter((tag) => tags.indexOf(tag) > -1);
        }
      }
    }
    return emails;
  }
);
export const getEmail = createSelector(
  getInbox,
  getMergedRoute,
  getTags,
  (emails: Record<string, IEmail>, route, tags) => {
    if(route.params?.id){
      return {
        ...emails[route.params.id],
        tags: emails[route.params.id].tags.filter((tag) => tags.indexOf(tag) > -1),
      } 
    }
  }
);

export const getDeletedEmails = createSelector(
  getAppState,
  (state) => {
    let deletedEmails = [];
    for(let email in state.inbox) {
      if(state.inbox[email].deleted){
        deletedEmails.push(state.inbox[email]);
      }
    }
    return deletedEmails;
  }
)
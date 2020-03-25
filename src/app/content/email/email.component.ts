import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import * as fromRoot from '../../ngrx/app.selectors';
import { AppState, STATIC_TAGS } from 'src/app/ngrx/app.reducer';
import { Store, select } from '@ngrx/store';
import { RemoveEmailFromStateAction, TagsSelectionChangedAction, RemoveTagFromStateAction } from 'src/app/ngrx/app.actions';

import { MatCheckboxChange } from '@angular/material/checkbox';
import { getMergedRoute } from 'src/app/ngrx/router/router-state.selectors';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  public id: string;
  public email$ = this.store.pipe(select(fromRoot.getEmail));
  public tags$ = this.store.pipe(select(fromRoot.getTags));
  public route$ = this.store.pipe(select(getMergedRoute));
  constructor(
    private store: Store<AppState>,
    private router: Router) { }
  

  onTagsChanged(event: MatCheckboxChange) {
    const source = event.source;
    this.store.dispatch(TagsSelectionChangedAction({ tag: source.ariaLabel, id: source.name, checked: event.checked }));
  }

  onTagDeleted(event: {tag: string}) {
    if(event.tag in STATIC_TAGS){
      alert('you cannot delete'+ event.tag);
      return;
    }
    this.store.dispatch(RemoveTagFromStateAction({tag: event.tag}));
  }

}

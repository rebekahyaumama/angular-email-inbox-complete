import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import * as fromRoot from '../../ngrx/app.selectors';
import { AppState } from 'src/app/ngrx/app.reducer';
import { Store, select } from '@ngrx/store';
import { RemoveEmailFromStateAction } from 'src/app/ngrx/app.actions';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  public id: number;
  public email$;
  public tags$ = this.store.pipe(select(fromRoot.getTags));
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe(row => {
      this.id = row.id;
      this.email$ = this.store.pipe(select(fromRoot.getEmail, { id: row.id }));
    });
   }

  ngOnInit(): void {
    if(this.id) {
      
    }
  }

  onDeleteEmail(event: Event) {
    /**Todo: move this into a mat-dialog */ 
    if (confirm('Are you sure you want to delete this email?')) {
      this.store.dispatch(RemoveEmailFromStateAction({id: this.id}));
      this.router.navigate(['/inbox']);
    }
  }

}

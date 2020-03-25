import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IEmail } from 'src/app/services/email.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.reducer';
import { AddNewTagToStateAction, RemoveEmailFromStateAction, RestoreEmailToStateAction } from 'src/app/ngrx/app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnChanges {
  @Input() public email: IEmail;
  @Input() public set tags(tags: string[]) {
    if(tags && tags.length){
      this._tags = tags;
      let fg = {};
        tags.forEach((tag) => {
          fg[tag] = new FormControl(false);
        });
        this.tagsForm = this.fb.group(fg);
    }
  };
  public get tags() {
    return this._tags;
  }
  @Input() public routeName;
  @Output() public readonly onTagSelectionsChanged = new EventEmitter<MatCheckboxChange>();
  @Output() public readonly onTagDeleted = new EventEmitter<{tag: string}>();
  public _tags;
  public tagsForm: FormGroup;
  public tagInput = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  public tagEditMode = false;
  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  addTag(tag: string) {
    this.tagsForm.addControl(tag, new FormControl(true));
    this.store.dispatch(AddNewTagToStateAction({tag: tag}));
  }

  onBackClick() {
    this.router.navigate(['/inbox']);
  }

  tagDeleted(tag: string) {
    this.onTagDeleted.emit({tag});
  }
  onDeleteEmail(){
    if (confirm('Are you sure you want to delete this email?')) {
      this.store.dispatch(RemoveEmailFromStateAction({ id: this.email.id }));
      this.router.navigate(['/inbox']);
    }
  }
   
  onRestoreEmail() {
    if (confirm('Are you sure you want to restore this email?')) {
      this.store.dispatch(RestoreEmailToStateAction({ id: this.email.id }));
      this.router.navigate(['/inbox']);
    }
  }
  constructor(
    private fb: FormBuilder, 
    private store: Store<AppState>,
    private router: Router) {}
}

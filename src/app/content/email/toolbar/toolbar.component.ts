import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IEmail } from 'src/app/services/email.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.reducer';
import { AddNewTagToStateAction } from 'src/app/ngrx/app.actions';

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
  @Output() public readonly onDeleteButtonClicked = new EventEmitter();
  @Output() public readonly onTagSelectionsChanged = new EventEmitter<MatCheckboxChange>();
  public _tags;
  public tagsForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}
  public tagInput = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  ngOnInit(): void {
  }
  ngOnChanges(changes) {
    if(changes.tags) {
      
    }
  }

  addTag(tag: string) {
    this.tagsForm.addControl(tag, new FormControl(true));
    this.store.dispatch(AddNewTagToStateAction({tag: tag}));
  }

}

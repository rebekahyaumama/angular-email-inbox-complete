import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IEmail } from 'src/app/services/email.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnChanges {
  @Input() public email: IEmail;
  @Input() public tags;
  @Output() public readonly onDeleteButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes) {
    if(changes.tags) {
      
    }
  }

}

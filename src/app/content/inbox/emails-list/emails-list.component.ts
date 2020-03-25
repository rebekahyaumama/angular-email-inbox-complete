import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEmail } from 'src/app/services/email.service';
import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.scss']
})
export class EmailsListComponent implements OnInit {
  @Input() public set inbox(inbox: Record<string, IEmail>) {
    let emailArr= [];
    this._inbox = inbox;
    for (let item in inbox) {
      if (!inbox[item].deleted) {
          emailArr.push(inbox[item]);
      }
    }
    this.emails = emailArr;
  }
  public get inbox(){
    return this._inbox;
  } ;
  @Input() public tagName = 'inbox';
  @Input() public deletedEmails = [];
  @Output() public onEmailSelected = new EventEmitter<{email: IEmail , event: MatCheckboxChange}>()
  displayedColumns = ["selected","subject", "tags", "sender", "date"];
  public emails: IEmail[] = [];
  public _inbox;
  constructor() { }

  ngOnInit(): void {
  }

  emailSelected(email:IEmail, event: MatCheckboxChange) {
    this.onEmailSelected.emit({ email, event});
  }

}

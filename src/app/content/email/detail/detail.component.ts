import { Component, Input } from "@angular/core";
import { IEmail } from 'src/app/services/email.service';

@Component({
  selector: 'app-email-details',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class EmailDetailsComponent {
  @Input() public email: IEmail;
}
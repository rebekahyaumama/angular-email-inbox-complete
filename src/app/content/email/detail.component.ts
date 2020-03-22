import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-email-details',
  templateUrl: './detail.component.html'
})

export class EmailDetailsComponent {
  @Input() public email;
}
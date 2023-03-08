import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Mail } from '../mail.interface';

@Component({
  selector: 'mail-item',
  styleUrls: ['mail-item.component.scss'],
  template: `
    <a class="mail-item"
      (click)="navigateToMessage()">
      <h3>
        {{ message.from }}
        <span>{{ message.timestamp | date:'shortTime' }}</span>
      </h3>
      <p>{{ message.summary }}</p>
    </a>
  `
})
export class MailItemComponent {
  constructor(private router: Router) { }

  @Input() message: Mail;

  navigateToMessage() {
    this.router.navigate(
      ['', { outlets: { pane: ['message', this.message.id] } }]
    )
  }
}

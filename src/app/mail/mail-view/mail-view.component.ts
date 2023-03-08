import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mail } from '../mail.interface';

@Component({
  selector: 'mail-view',
  styleUrls: ['mail-view.component.scss'],
  template: `
    <div class="mail-view">
      <h2>{{message.from}}</h2>
      <p>{{message.summary}}</p>
      {{message.timestamp | date: 'yyyy-MM-dd'}}
    </div>
  `
})
export class MailViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  message: Mail

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.message = data['message'][0]
      console.log(this.message)
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Mail } from '../mail.interface';


@Component({
  selector: 'mail-folder',
  styleUrls: ['mail-folder.component.scss'],
  template: `
    <h2>{{ this.title}}</h2>
    <mail-item
      *ngFor="let message of messages"
      [message]="message">
    </mail-item>`
})
export class MailFolderComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  title: string
  messages: Mail[]

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.messages = data['messages']
    })

    this.route.params.subscribe(data => {
      this.title = data['name']
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/107px-Gmail_icon_%282020%29.svg.png">
      </header>
      <div class="app__content">
        <nav>
          <a
            [routerLink]="[{outlets: {primary: 'folder/inbox', pane: null}}]"
            routerLinkActive="active">
            Inbox
          </a>
          <a
           [routerLink]="[{outlets: {primary: 'folder/trash', pane: null}}]"
            routerLinkActive="active">
            Trash
          </a>
        </nav>
        <mail-app></mail-app>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        console.log(event)
      })
  }
}

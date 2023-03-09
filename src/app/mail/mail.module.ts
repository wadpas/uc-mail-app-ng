import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MailFolderComponent } from './mail-folder/mail-folder.component';
import { MailItemComponent } from './mail-item/mail-item.component';
import { MailAppComponent } from './mail-app/mail-app.component';
import { MailService } from './mail.service';
import { MailFolderResolver } from './mail-folder/mail-folder.resolver';
import { MailViewComponent } from './mail-view/mail-view.component';
import { MailViewResolver } from './mail-view/mail-view.resolver';

export const ROUTES: Routes = [
  {
    path: 'mail',
    component: MailAppComponent,
    children: [
      {
        path: 'folder/:name',
        component: MailFolderComponent,
        resolve: {
          messages: MailFolderResolver
        }
      },
      {
        path: 'message/:id',
        component: MailViewComponent,
        outlet: 'pane',
        resolve: {
          message: MailViewResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent
  ],
  providers: [
    MailService,
    MailFolderResolver,
    MailViewResolver
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule { }

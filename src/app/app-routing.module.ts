import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './content/inbox/inbox.component';
import { EmailComponent } from './content/email/email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inbox',
    pathMatch: 'full'
  },
  {
    path: 'inbox',
    component: InboxComponent,
  },
  {
    path: 'inbox/:id',
    component: EmailComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/inbox',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

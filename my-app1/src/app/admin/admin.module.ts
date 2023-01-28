import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EmailBlastComponent } from './email-blast/email-blast.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    EmailBlastComponent,
    UsersComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

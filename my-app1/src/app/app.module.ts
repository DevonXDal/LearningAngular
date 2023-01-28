import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchBoxDirective } from './search-box.directive';
import { InitCapsPipe } from './shared/init-caps.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    SearchBoxDirective,
    InitCapsPipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

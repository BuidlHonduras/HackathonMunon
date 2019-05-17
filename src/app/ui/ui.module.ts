import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AppMaterialModule } from '../app.material.module';
import { TransactionComponent } from './transaction/transaction.component';
import { UiRoute } from './ui.routes';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { CashoutComponent } from './cashout/cashout.component';
import { RateComponent } from './rate/rate.component';
import { CreateComponent } from './create-event/create.component';

@NgModule({
  declarations: [TopNavComponent, TransactionComponent, AccountComponent, HomeComponent, CreateComponent, JoinComponent, RateComponent, CashoutComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UiRoute)
  ],
  exports: [
    TopNavComponent,
    TransactionComponent
  ], providers: [

  ]
})
export class UiModule { }

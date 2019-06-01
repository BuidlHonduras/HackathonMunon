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
import { EnableReviewComponent } from './enable-review/enable_review.component';
import { FinishComponent } from './finish/finish.component';
import { CashoutComponent } from './cashout/cashout.component';
import { RateComponent } from './rate/rate.component';
import { CreateComponent } from './create/create.component';
import { CoreModule } from '../core/core.module';
@NgModule({
  declarations:
   [TopNavComponent,
    TransactionComponent,
    AccountComponent,
    HomeComponent,
    CreateComponent,
    JoinComponent,
    RateComponent,
    CashoutComponent,
    EnableReviewComponent,
    FinishComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    CoreModule,
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

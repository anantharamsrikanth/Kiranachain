import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { KiranaChainHomeRoutingModule } from './kirana-chain-home-routing.module';
import { KiranaChainHeaderComponent } from './components/kirana-chain-header/kirana-chain-header.component';
import { KiranaChainHomeMainComponent } from './components/kirana-chain-home-main/kirana-chain-home-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { KiranaChainBlocksComponent } from './components/kirana-chain-blocks/kirana-chain-blocks.component';
import { KiranaChainTransactionsComponent } from './components/kirana-chain-transactions/kirana-chain-transactions.component';
// services

import { HomeService } from './services/home.service';
import { Location } from '@angular/common';
import { from } from 'rxjs';

import { KiranaChainBlockDetailComponent } from './components/kirana-chain-block-detail/kirana-chain-block-detail.component';
import { KiranaChainLoginComponent } from './components/kirana-chain-login/kirana-chain-login.component';
import { KiranaChainSignupComponent } from './components/kirana-chain-signup/kirana-chain-signup.component';


@NgModule({
  declarations: [
   KiranaChainHeaderComponent,
   KiranaChainHomeMainComponent,
   KiranaChainBlocksComponent,
   KiranaChainTransactionsComponent,
   KiranaChainBlockDetailComponent,
   KiranaChainLoginComponent,
   KiranaChainSignupComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    KiranaChainHomeRoutingModule,
    BrowserAnimationsModule,
    ClarityModule
    
  ],
  providers: [HomeService,Location]
})
export class KiranaChainHomeModule { }

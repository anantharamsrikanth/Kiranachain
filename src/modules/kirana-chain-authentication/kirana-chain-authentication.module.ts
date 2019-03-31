import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { KiranaChainAuthenticationRoutingModule } from './kirana-chain-authentication-routing.module';
import { KiranaChainLoginComponent } from './components/kirana-chain-login/kirana-chain-login.component';
import { KiranaChainSignupComponent } from './components/kirana-chain-signup/kirana-chain-signup.component';

@NgModule({
  declarations: [KiranaChainLoginComponent, KiranaChainSignupComponent],
  imports: [
    CommonModule,
    ClarityModule,
    KiranaChainAuthenticationRoutingModule,
  ]
})
export class KiranaChainAuthenticationModule { }

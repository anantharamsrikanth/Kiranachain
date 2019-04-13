import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KiranaChainHomeMainComponent } from './components/kirana-chain-home-main/kirana-chain-home-main.component';
import { KiranaChainBlockDetailComponent } from './components/kirana-chain-block-detail/kirana-chain-block-detail.component';
import { KiranaChainLoginComponent } from '../kirana-chain-home/components/kirana-chain-login/kirana-chain-login.component';
import { KiranaChainSignupComponent } from '../kirana-chain-home/components/kirana-chain-signup/kirana-chain-signup.component';

const routes: Routes = [
  {
    path: 'home', component: KiranaChainHomeMainComponent,
    children: [
      { path: 'login', component: KiranaChainLoginComponent },
      { path: 'signup', component: KiranaChainSignupComponent }
    ]
  },
  { path: 'detail/:id', component: KiranaChainBlockDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiranaChainHomeRoutingModule { }

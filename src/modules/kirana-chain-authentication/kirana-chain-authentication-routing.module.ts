import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KiranaChainLoginComponent } from './components/kirana-chain-login/kirana-chain-login.component';

const routes: Routes = [
  // {path:'', component:KiranaChainLoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiranaChainAuthenticationRoutingModule { }

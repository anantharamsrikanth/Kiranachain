import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home', loadChildren: "../modules/kirana-chain-home/kirana-chain-home.module#KiranaChainHomeModule"},
  // {path:'login', loadChildren: "../modules/kirana-chain-authentication/kirana-chain-authentication.module#KiranaChainAuthenticationModule"},
  {path:'', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

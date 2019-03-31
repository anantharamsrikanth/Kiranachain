import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KiranaChainHomeMainComponent } from './components/kirana-chain-home-main/kirana-chain-home-main.component';

const routes: Routes = [
  {path: 'home', component:KiranaChainHomeMainComponent,},
  {path: '', redirectTo:' home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KiranaChainHomeRoutingModule { }

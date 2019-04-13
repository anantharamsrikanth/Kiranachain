import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kirana-chain-header',
  templateUrl: './kirana-chain-header.component.html',
  styleUrls: ['./kirana-chain-header.component.scss']
})
export class KiranaChainHeaderComponent implements OnInit {
public isLoginSignupModalOpen: boolean;
public isLoginSignInModalOpen: boolean;
public modalType:string='';

constructor(private router:Router) { 

    this.isLoginSignupModalOpen =  false;
    this.isLoginSignInModalOpen = false;

  }
 

  ngOnInit() {

  }

  public closeSingInModal(obj:any){

    this.isLoginSignInModalOpen = obj.status;
    
    if(obj.isSignUpModalOpen) {
      this.isLoginSignupModalOpen =  true;
    }

  }

  public closeSignupModal(obj:any){
    this.isLoginSignupModalOpen = obj.status;

    if(obj.isSignInModalOpen) {
      this.isLoginSignInModalOpen =  true;
    }
  }
   public navigateToBlockDetail() {
    this.router.navigate(['home/login'], { skipLocationChange: false });

  }

}

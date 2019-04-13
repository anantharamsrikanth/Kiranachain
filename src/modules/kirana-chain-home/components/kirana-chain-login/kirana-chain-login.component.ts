import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-kirana-chain-login',
  templateUrl: './kirana-chain-login.component.html',
  styleUrls: ['./kirana-chain-login.component.scss']
})
export class KiranaChainLoginComponent implements OnInit {
  public isLoginSignupModalOpen: boolean;
  @Input() isSignInModalOpen: boolean;
  @Output() signInModalStatus:EventEmitter<boolean> = new EventEmitter();
  kiranaChainSignIn: FormGroup;
  kiranaChainSignUp : FormGroup;

  constructor() { 

    this.kiranaChainSignIn = new FormGroup({
      walletId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required), 
    });

  }

  ngOnInit() {
  }
  public closeModal(status:boolean, navigateTo?: string){
    let Obj : any = {
      status : status,
      isSignUpModalOpen: navigateTo ? true : false
    }

    this.signInModalStatus.emit(Obj);

  }

}

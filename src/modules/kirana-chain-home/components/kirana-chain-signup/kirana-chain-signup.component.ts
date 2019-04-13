import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-kirana-chain-signup',
  templateUrl: './kirana-chain-signup.component.html',
  styleUrls: ['./kirana-chain-signup.component.scss']
})
export class KiranaChainSignupComponent implements OnInit {
  public isLoginSignInModalOpen:boolean;
  @Input() isSignupModalOpen: boolean;
  kiranaChainSignUp : FormGroup;
  @Output() signupModalStatus:EventEmitter<boolean> = new EventEmitter();

  constructor() { 
    this.kiranaChainSignUp = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required), 
      cpassword: new FormControl('', Validators.required)
    });

  }

  ngOnInit() {
  }

  public closeModal(status:boolean, navigateTo?: string){

    let Obj : any = {
      status : status,
      isSignInModalOpen: navigateTo ? true : false
    }

    this.signupModalStatus.emit(Obj);

  }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-kirana-chain-header',
  templateUrl: './kirana-chain-header.component.html',
  styleUrls: ['./kirana-chain-header.component.scss']
})
export class KiranaChainHeaderComponent implements OnInit {
public isLoginSignupModalOpen : boolean;
public modalType:string='';

constructor() { 

    this.isLoginSignupModalOpen =  false;

  }
  
  kiranaChainSignIn = new FormGroup({
    walletId: new FormControl(''),
    password: new FormControl(''), 
  });
  kiranaChainSignUp = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''), 
    cpassword: new FormControl('')
  });


  ngOnInit() {

  }

}

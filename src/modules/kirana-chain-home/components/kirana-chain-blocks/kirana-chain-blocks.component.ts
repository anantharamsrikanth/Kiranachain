import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kirana-chain-blocks',
  templateUrl: './kirana-chain-blocks.component.html',
  styleUrls: ['./kirana-chain-blocks.component.scss']
})
export class KiranaChainBlocksComponent implements OnInit {
  public transactions:any = [];
  constructor(private router:Router) { 

    this.transactions=[
      {
        transactionId:'5c607caa2ec363e049840a2c6d70e59567e73a49d6975916ce',
        age:'6seconds',
        amountBtc:'1.76854BTC',
        amountUsd:'$0.654309'
      },
      {
        transactionId:'5c607caa2ec363e049840a2c6d70e59567e73a49d6975916ce',
        age:'6seconds',
        amountBtc:'1.76854BTC',
        amountUsd:'$0.654309'
      },
      {
        transactionId:'5c607caa2ec363e049840a2c6d70e59567e73a49d6975916ce',
        age:'6seconds',
        amountBtc:'1.76854BTC',
        amountUsd:'$0.654309'
      },
      {
        transactionId:'5c607caa2ec363e049840a2c6d70e59567e73a49d6975916ce',
        age:'6seconds',
        amountBtc:'1.76854BTC',
        amountUsd:'$0.654309'
      },
      {
        transactionId:'5c607caa2ec363e049840a2c6d70e59567e73a49d6975916ce',
        age:'6seconds',
        amountBtc:'1.76854BTC',
        amountUsd:'$0.654309'
      },
      {
        transactionId:'5c607caa2ec363e049840a2c6d70e59567e73a49d6975916ce',
        age:'6seconds',
        amountBtc:'1.76854BTC',
        amountUsd:'$0.654309'
      }
  

    ]

  }

  ngOnInit() {
  }

}

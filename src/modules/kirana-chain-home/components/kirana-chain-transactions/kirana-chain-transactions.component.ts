import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kirana-chain-transactions',
  templateUrl: './kirana-chain-transactions.component.html',
  styleUrls: ['./kirana-chain-transactions.component.scss']
})
export class KiranaChainTransactionsComponent implements OnInit {
public blocks:any = [];
  constructor() { 
      this.blocks=[
        {
          height:'546754',
          age:'6seconds',
          transactions:5576,
          miner:'BTC.com',
          size:87654
        },
        {
          height:'546564',
          age:'8seconds',
          transactions:7676,
          miner:'USD.com',
          size:80654
        },
        {
          height:'598754',
          age:'9seconds',
          transactions:55236,
          miner:'unknown',
          size:87687
        },
        {
          height:'549854',
          age:'10seconds',
          transactions:5676,
          miner:'Bitcoin',
          size:87874
        },
        {
          height:'46754',
          age:'63seconds',
          transactions:57676,
          miner:'compo',
          size:8754
        },
        {
          height:'545554',
          age:'43seconds',
          transactions:5576,
          miner:'bond',
          size:87654
        },
      ]
    

  }

  ngOnInit() {
  }

}

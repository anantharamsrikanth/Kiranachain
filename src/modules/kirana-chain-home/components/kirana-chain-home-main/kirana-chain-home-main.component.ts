import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-kirana-chain-home-main',
  templateUrl: './kirana-chain-home-main.component.html',
  styleUrls: ['./kirana-chain-home-main.component.scss']
})
export class KiranaChainHomeMainComponent implements OnInit {
 public isLoginModalOpen:boolean=false;
 public priceList:any = [];
 public exploreList = [];
  constructor(private priceService:HomeService) { 

    this.priceList=[
      {
        name:"PRICE",
        value:"$45,546.80"
      },
      {
        name:"HASH RATE",
        value:"$45,546.80"
      },
      {
        name:"DEFEX RATE",
        value:"$45,546.80"
      },
      {
        name:"DIFFICULTY",
        value:"$45,546.80"
      },
      {
        name:"HEMPOOL",
        value:"$45,546.80"
      },
      {
        name:"UNCONFIRMED",
        value:"$45,546.80"
      },
      {
        name:"AVARAGE VALUE",
        value:"$45,546.80"
      },
      {
        name:"AVERAGE RATE",
        value:"$45,546.80"
      }
    ];
    this.exploreList = [
      {
        imageUrl:"../../../../assets/wallet.svg",
        title:"Wallet",
        content:"Use your Blockchain Wallet to buy, sell, exchange, and transact bitcoin, ether, and bitcoin cash.",
        link:"Get a Wallet"
      },
      {
        imageUrl:"../../../../assets/api.svg",
        title:"Api",
        content:"Build apps to accept bitcoin payments, search for bitcoin transactions, access live bitcoin data, and more.",
        link:"Visit API"
      },
      {
        imageUrl:"../../../../assets/markets.svg",
        title:"Prices",
        content:"Find the top cryptocurrencies' market data including price charts and price lookup, market cap, and return on investments.",
        link:"Visit Prices"
      },
      {
        imageUrl:"../../../../assets/charts.svg",
        title:"Charts",
        content:"View bitcoin charts for historical data on unconfirmed transactions, market price, and more.",
        link:"Visit Charts"
      },
    ]

  }

  ngOnInit() {

    // this.getPriceList();
}

// private getPriceList(): void{
//   this.priceService.getPriceList().subscribe( d ={
//   })
// }
// private getPriceList(){
//   this.priceService.getPriceList().subscribe((data:Response)=>{
//     this.priceList = data;
//     console.log(this.priceList);
//   })
// }

}

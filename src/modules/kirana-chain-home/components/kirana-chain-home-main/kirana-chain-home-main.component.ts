import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-kirana-chain-home-main',
  templateUrl: './kirana-chain-home-main.component.html',
  styleUrls: ['./kirana-chain-home-main.component.scss']
})
export class KiranaChainHomeMainComponent implements OnInit {
 public isBlockActive: boolean;
 public isTransactionActive: boolean;
 public isLoginModalOpen:boolean=false;
 public homeData:any = '';
 public exploreList:any = [];

  constructor(private priceService:HomeService) { 

  }

  ngOnInit() {

    this.getPriceList();

    // this.getExploreList();

}
/**
 * 
 * Get the data for pricelist and explorelist.
 * 
 */
private getPriceList(): void{

  this.priceService.getPriceList().subscribe((data:any)=>{

    this.homeData = data;

  })

}

// public getExploreList(): void {

//   this.priceService.getExploreList().subscribe((data:Response)=>{

//     this.exploreList = data;

//     console.log(this.exploreList);

//   })

// }

}

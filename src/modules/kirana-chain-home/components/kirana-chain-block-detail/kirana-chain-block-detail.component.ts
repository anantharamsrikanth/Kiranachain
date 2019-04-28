import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HomeService } from '../../services/home.service';
@Component({
  selector: 'app-kirana-chain-block-detail',
  templateUrl: './kirana-chain-block-detail.component.html',
  styleUrls: ['./kirana-chain-block-detail.component.scss']
})
export class KiranaChainBlockDetailComponent implements OnInit {

  constructor(private location: Location, private priceService: HomeService) { }
  public isCommentsActive: boolean;
  public isBlockActive: boolean;
  public blocks: any = [];

  ngOnInit() {
    this.blockDetails();
  }

/** 
 * Get the data for pricelist and explorelist.
 */
private blockDetails(): void{

  this.priceService.getBlockDetail().subscribe((data:any)=>{

    this.blocks = data;
    // console.log(this.blocks);

  })

}

  public gotoPreviousPage(): void {
    this.location.back();
  }

}

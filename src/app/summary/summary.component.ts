import { Component, OnInit ,ViewChild} from '@angular/core';

import { CloudData, CloudOptions, ZoomOnHoverOptions,TagCloudComponent  } from 'angular-tag-cloud-module';
import { Router } from '@angular/router';
import { FeedDataService } from '../feed-data.service';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

   public tagArray:any =[];
   public finalShortList;
   public slctdLctns;
   public slctdDkills;
   public slctdSrcs;
    cldData:any=[];
    options: CloudOptions = {
      width : 600,
      height : 200,
      realignOnResize: true
    }

    zoomOnHoverOptions: ZoomOnHoverOptions = {
      scale: 1.3, 
      transitionTime: 1.2, 
      delay: 0.2 
    };
    p: number = 1;
    constructor(private route:Router, private feedService: FeedDataService ) {
      this.finalShortList = feedService.getShortList();
      this.slctdLctns = feedService.getSelectdLctn();
      this.slctdDkills = feedService.getSelectdSkill();
      this.slctdSrcs = feedService.getSelectdSrcs();
      this.tagArray = this.tagArray.concat(this.slctdLctns, this.slctdDkills,this.slctdSrcs);
  
      this.tagArray.map((p)=>{
        this.cldData.push({"text": p});
      })
     }
  
    data: CloudData[] = this.cldData;
    logClicked(clicked: CloudData){
      this.route.navigate(['/'])
    }

    ngOnInit() {
    }
  

}

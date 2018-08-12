import { Component, ElementRef } from '@angular/core';
import { FeedDataService } from '../feed-data.service';
import { Router } from "@angular/router";
import { COMMON_PIPES } from '@angular/common/src/pipes';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    title = 'app';

    public query = '';
    public location = '';
    public source = '';
    public skillset;
    public locations;
    public sources;
    public filteredList = [];
    public filterdLoc = [];
    public filterdSource = [];
    public elementRef;
    public selected = [];
    public selectedLoc = [];
    public selectedSource = [];
    public showSkill = false;
    public showLoc = false;
    public showSource = false;

    removed: any = [];

      public candidates:any =[];
    constructor(myElement: ElementRef, private feedService: FeedDataService, private route: Router) {
        this.candidates =this.feedService.getCandidates();
        this.selectedLoc = feedService.getSelectdLctn();
        this.selectedSource = feedService.getSelectdSrcs();
        this.selected = feedService.getSelectdSkill();
        this.skillset = feedService.getSkills();
        this.locations = feedService.getLctns();
        this.sources = feedService.getSources();
    
    }

    // selecting prefferred sources
    searchSource() {
        if (this.source !== "") {

            this.showSource = true;
            this.filterdSource = this.sources.filter(function (el) {
                return el.toLowerCase().indexOf(this.source.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.showSource = false;
            this.filterdSource = [];
        }
    }
    selectSource(item, idx) {
        this.showSource = false;
        var idnx = idx;
        this.selectedSource.push(item);
        this.sources.splice(this.sources.indexOf(item), 1);
        this.source = '';
        this.filterdSource = [];
    }

    removeSources(item) {
        this.removed.push(item);
        this.sources.splice(this.selectedSource.indexOf(item), 0, item);
        this.selectedSource.splice(this.selectedSource.indexOf(item), 1);
    }                                                                    // selecting locations ended.

    // selecting locations
    searchLocation() {
        if (this.location !== "") {
            this.showLoc = true;
            this.filterdLoc = this.locations.filter(function (el) {
                return el.toLowerCase().indexOf(this.location.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.showLoc = false;
            this.filterdLoc = [];
        }
    }
    selectLoc(item, idx) {
        this.showLoc = false;
        var idnx = idx;
        this.selectedLoc.push(item);
        this.locations.splice(this.locations.indexOf(item), 1);
        this.location = '';
        this.filterdLoc = [];
    }

    removeLocations(item) {
        this.removed.push(item);
        this.locations.splice(this.selectedLoc.indexOf(item), 0, item);
        this.selectedLoc.splice(this.selectedLoc.indexOf(item), 1);
    }                                                                  
    // selecting skills
    filter() {
        if (this.query !== "") {

            this.showSkill = true;

            this.filteredList = this.skillset.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.showSkill = false;
            this.filteredList = [];
        }
    }

    select(item, idx) {

        this.showSkill = false;
        var idnx = idx;
        this.selected.push(item);
        this.skillset.splice(this.skillset.indexOf(item), 1);
        this.query = '';
        this.filteredList = [];
    }


    remove(item) {
        this.removed.push(item);
        this.skillset.splice(this.selected.indexOf(item), 0, item);
        this.selected.splice(this.selected.indexOf(item), 1);
    }                                                               

    // function to remove duplicates
    removeDuplicates(myArr, prop) {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }
  
    search() {

       // skills filtertering 
       if(this.selected.length == 0){
           alert("Please select any skill");
       }
       else {
        let finalFiltered = [];
        let placeFiltered =[];
        let srcFiltered =[];
    
        for(let s=0; s< this.selected.length; s++) 
        {
           finalFiltered.push(...this.candidates.filter(candidate => 
             candidate.skills.includes(this.selected[s] )))
        }

        // locations filtering on skills
        if(this.selectLoc.length>0) {
         for(let s=0; s< this.selectedLoc.length; s++) 
         {
             placeFiltered=[...finalFiltered.filter(candidate => 
              candidate.place.includes(this.selectedLoc[s] ))]
         }    
        }
 
        // preferred source filtering based on skills
        let c = this.selectedLoc;
        if(this.selectedSource.length>0) {
            let temp =[];
         c.length > 0 ? temp = placeFiltered: temp = finalFiltered;
             for(let s=0; s< this.selectedSource.length; s++) 
             {
                 placeFiltered=[...temp.filter(candidate => 
                  candidate.source.includes(this.selectedSource[s] ))]
             }       
        }
 
 
     let finallyShortListed =[];
    finallyShortListed=((this.selectedLoc.length > 0 || this.selectedSource.length > 0) ? placeFiltered : finalFiltered);
     
     this.feedService.shortListedCandidates=this.removeDuplicates(finallyShortListed,'id');
     // posting data to service for communication
     this.feedService.selectdSkill = this.selected;
     this.feedService.selectdLctn = this.selectedLoc;
     this.feedService.selectdSrcs = this.selectedSource;
     this.feedService.skillset = this.skillset;
     this.feedService.sources = this.sources;
     this.feedService.locations = this.locations;
     this.route.navigate(['/summry']);
     }

 }

      

}

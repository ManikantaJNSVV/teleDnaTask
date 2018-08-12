import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedDataService {


    public shortListedCandidates:any = [];
    public selectdSkill:any = []; 
    public selectdLctn:any = []; 
    public selectdSrcs:any = []; 

    public candidates = [{
        "id": 1,
        "name": "satish",
        "skills": ["AngularJS", "NodeJS", "python", "MYSQL", "MONGODB"],
        "source": ["naukri", "Linkedin", "shine"],
        "place": ["Bangalore", "Pune", "Hyderabad"],
        "description":"I have 2 years experience in IT industry with angularjs nodejs python mysql mongodb"
    },
    {
        "id": 2,
        "name": "Roshan",
        "skills": ["JAVA", "Hadoop", "SQLite", "REDIS", "MYSQL AURORA"],
        "source": ["Linkedin"],
        "place": ["Bangalore", "Hyderabad"],
        "description":"I have 2 years experience in IT industry with java hadoop sqlite redis mysql aurora"
    },
    {
        "id": 3,
        "name": "naveen",
        "skills": ["JAVA", "AngularJS", "AWS", "Angular2", "MONGODB", "Selenium"],
        "source": ["shine", "naukri"],
        "place": ["Chennai", "Pune"],
        "description":"I have 2 years experience in IT industry with memsql ionic c c++ c# I have 2 years experience in IT industry with angualrjs nodejs python mysql mongodb java "
    },
    {
        "id": 4,
        "name": "karthik",
        "skills": ["MEMSQL", "Ionic", "C", "C++", "C#"],
        "source": ["indeed"],
        "place": ["Kolkatha", "Vizag"],
        "description":"I have 2 years experience in IT industry with memsql ionic c c++ c# I have 2 years experience in IT industry with angualrjs nodejs python mysql mongodb java "
    },
    {
        "id": 5,
        "name": "sunil",
        "skills": ["AngularJS", "NodeJS", "python", "MYSQL", "MONGODB", "JAVA"],
        "source": ["naukri"],
        "place": ["Delhi", "Mumbai"],
        "description":"I have 2 years experience in IT industry with angualrjs nodejs python mysql mongodb java"
    },
    {
        "id": 6,
        "name": "Ramesh",
        "skills": ["JAVA", "Html", "SQLite", "CSS", "MYSQL AURORA"],
        "source": ["Linkedin", "monster"],
        "place": ["Manali", "Kasmir"],
        "description":"I have 2 years experience in IT industry with Java html sqlite css mysql aurora"
    },
    {
        "id": 7,
        "name": "Rahul",
        "skills": ["JAVA", "AngularJS", "AWS", "Angular2"],
        "source": ["shine"],
        "place": ["Rajasthan", "Jammu"],
        "description":"I have 2 years experience in IT industry with Java Angularjs Aws Angular 2"
    },
    {
        "id": 8,
        "name": "shiva",
        "skills": ["Ionic", "C", "C++", "C#"],
        "source": ["indeed", "monster"],
        "place": ["Pune"],
        "description":"I have 2 years experience in IT industry with in Ionic c c++,c#"
    },
    {
        "id": 9,
        "name": "John",
        "skills": ["JAVA", "AngularJS"],
        "source": ["shine"],
        "place": ["Kerala", "Pune"],
        "description":"I have 2 years experience in IT industry with Java Angularjs"
    },
    {
        "id": 10,
        "name": "Maxi",
        "skills": ["Ionic", "C"],
        "source": ["indeed", "shine"],
        "place": ["Pune"],
        "description":"I have 2 years experience in IT industry with with skills in Ionic C"
    }];

    public skillset = ["JAVA", "Html", "AngularJS", "NodeJS", "python", "MYSQL", "MONGODB", "Hadoop", "SQLite", "REDIS", "MYSQL AURORA", "AWS", "Angular2", "Selenium"];

    public locations = ["Pune", "Bangalore", "Hyderabad", "Chennai", "Kerala", "Delhi", "Mumbai"];

    public sources = ["shine", "indeed", "Linkedin", "naukri", "monster"];

  constructor() { }

  getCandidates(){
    return this.candidates;
  }



  getShortList(){
    return this.shortListedCandidates;
  }
  getSelectdSkill(){
    return this.selectdSkill;
  }
  getSelectdLctn(){
    return this.selectdLctn;
  }
  getSelectdSrcs(){
    return this.selectdSrcs;
  }

  getSkills(){
    return this.skillset;
  }
  getLctns(){
    return this.locations;
  }
  getSources(){
    return this.sources;
  }
}

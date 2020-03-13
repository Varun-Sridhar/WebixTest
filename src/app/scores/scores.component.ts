import { ScoresService } from './scores.service';
import { Component, OnInit } from '@angular/core';
import { IScores } from './scores';
import * as webix from "webix";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  providers: [ScoresService]
})
export class ScoresComponent implements OnInit {

  scores : IScores[];
  constructor(private _scores : ScoresService) { }

  ngOnInit(): void {
      //this._scores.getScoresObservable().subscribe((scoreData) => this.scores = scoreData);

      // this._scores.getScoresPromise().then((data) => {
      //     this.scores = data;
      //     webix.ui({
      //       view:"chart",
      //       width:2000,
      //       height:300,
      //       type:"line",
      //       value:"#Score#",
      //       item:{
      //         borderColor: "#1293f8",
      //         color: "#ffffff"
      //       },
      //       line:{
      //         color:"#1293f8",
      //         width:1
      //       },
      //       xAxis:{
      //         template:"'#Date#"
      //       },
      //       offset:0,
      //       yAxis:{
      //         start:0,
      //         end:100,
      //         step:10,
      //         template:function(obj){
      //           return (obj%25?"":obj)
      //         }
      //       },
      //       data: this.scores
      //     });
      // })
  }

}

import { Component } from '@angular/core';
import { IScores } from '../scores/scores';
import { ScoresService } from '../scores/scores.service';
import * as webix from 'webix';

@Component({
    selector : 'webix-layout',
    template : '<h1>Webix Layout</h1>',
    providers : [ScoresService]
})

export class WebixLayoutComponent {
    scores : IScores[];
  constructor(private _scores : ScoresService) { }

  ngOnInit(): void {
      //this._scores.getScoresObservable().subscribe((scoreData) => this.scores = scoreData);

      this._scores.getScoresPromise().then((data) => {
          this.scores = data;
          webix.ui({
            view:"chart",
            width:2000,
            height:300,
            type:"line",
            value:"#Score#",
            item:{
              borderColor: "#1293f8",
              color: "#ffffff"
            },
            line:{
              color:"#1293f8",
              width:1
            },
            xAxis:{
              template:"'#Date#"
            },
            offset:0,
            yAxis:{
              start:0,
              end:100,
              step:10,
              template:function(obj){
                return (obj%25?"":obj)
              }
            },
            data: this.scores
          });
      })
  }

}
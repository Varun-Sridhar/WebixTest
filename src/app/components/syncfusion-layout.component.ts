import { ScoresService } from './../scores/scores.service';
import { Component } from '@angular/core';
import { IScores } from '../scores/scores';

@Component({
    selector : 'syncfusion-layout',
    templateUrl : '../layouts/syncfusion-layout.component.html',
    providers : [ScoresService]
})

export class SyncfusionLayoutComponent {
    scores : IScores[];
    xAxis : Object;
    yAxis : Object;

//     data : object[] = [{Date : '10/02/2020', Score : 50}, {Date : '11/02/2020', Score : 35}, {Date : '12/02/2020', Score : 20}, {Date : '10/02/2020', Score : 10}];
  constructor(private _scores : ScoresService) {
      
   }

  ngOnInit(): void {
      //this._scores.getScoresObservable().subscribe((scoreData) => this.scores = scoreData);

      this._scores.getScoresPromise().then((data) => {
          this.scores = data; 
          this.xAxis = {
            title : 'Dates',
            valueType : 'Category'
        };
  
        this.yAxis = {
            title:'Scores'
        };
      })
  }
}

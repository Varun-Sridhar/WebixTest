import { ScoresService } from './../scores/scores.service';
import {IScores} from '../scores/scores';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'zooming-layout',
    templateUrl: '../layouts/zooming.component.html',
    providers : [ScoresService]
})

export class ZoomingComponent {
    scores : IScores[];
    xAxis : Object;
    yAxis : Object;
    zoom : object;

    dispData = false;
    
    constructor(private _scores: ScoresService){

     }

    ngOnInit(): void {
        //this._scores.getScoresObservable().subscribe((scoreData) => this.scores = scoreData);
  
        this._scores.getScoresPromise().then((data) => {
            this.scores = data; 
            this.xAxis = {
              title : 'Dates',
              valueType : 'DateTime',
              labelFormat : 'dd-MM-yy',
              edgeLabelPlacement : 'Shift'
          };
    
          this.yAxis = {
              title:'Scores'
          };

          this.zoom = {
                enableSelectionZooming: true,
                toolbarItems : ['Zoom', 'ZoomIn', 'ZoomOut', 'Reset'],
                enablePan : true,
                enableScrollbar : true,
                enableAutoIntervalOnZooming : true,
                enablePinchZooming : true,
                enableMouseWheelZooming : true,
                enableDeferredZooming : true
            };
        })
    }

    displayData() : void {
        this.dispData = !this.dispData;
    }
}

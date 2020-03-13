import { ScoresService } from './../scores/scores.service';
import {Component} from '@angular/core';
import { DashboardLayout } from '@syncfusion/ej2-angular-layouts';

@Component({
    selector : 'test-dashboard',
    templateUrl : '../layouts/test-dashboard.component.html',
    providers : [ScoresService]
})

export class testDashboardComponent {
    dashboard: DashboardLayout = new DashboardLayout({
        columns: 6,
        cellAspectRatio: 100 / 80, 
        panels: [
 
            {'sizeX': 2, 'sizeY': 1, 'row': 0, 'col': 0 },
             
            {'sizeX':2, 'sizeY': 1, 'row': 0, 'col': 2 },
             
            {'sizeX': 2, 'sizeY': 1, 'row': 0, 'col': 4 },
             
            {'sizeX': 3, 'sizeY': 2, 'row': 1, 'col': 0 },
             
            {'sizeX': 3, 'sizeY': 2, 'row': 1, 'col': 3 },
             
            {'sizeX': 3, 'sizeY': 2, 'row': 4, 'col': 0 },
             
            {'sizeX': 3, 'sizeY': 2, 'row': 4, 'col': 3 },
             
            ]
    });
    
    //dashboard.appendTo('#editLayout');
}
import { Component } from '@angular/core';
import * as webix from 'webix';

@Component({
    selector : 'webix-dashboard',
    templateUrl : '../layouts/webix-dashboard.component.html'
})

export class WebixDashboardComponent {
    // webix.ui({
    //     view:"dashboard",
    //     gridColumns:4, gridRows:3,
    //     cellHeight: 200, cellWidth: 200,
    //     cells:[
    //         { view:"panel", x:0, y:0, dx:1, dy:1, body:{ template:"Single"}},
    //         { view:"panel", x:1, y:0, dx:2, dy:1, body:{ template:"Wide"}},
    //         { view:"panel", x:1, y:1, dx:2, dy:2, header:"Widget with header", 
    //             body:{ template:"Square"}}
    //     ]
    // });
}
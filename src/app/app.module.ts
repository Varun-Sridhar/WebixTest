import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartModule, LineSeriesService, CategoryService, DateTimeService, AreaSeriesService, ZoomService, ScrollBarService} from '@syncfusion/ej2-angular-charts';
//import {DashboardLayout, PanelModel} from '@syncfusion/ej2-angular-layouts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores/scores.component';
import { WebixLayoutComponent} from './components/webix-layout.component';
import { SyncfusionLayoutComponent } from './components/syncfusion-layout.component';
import { ZoomingComponent } from './components/zooming.component';
import { PostComponent } from './components/post.component';
import { EmployeesComponent } from './employees/employees.component';
import { WebixDashboardComponent } from './components/webix-dashboard.component';
//import { DashboardComponent } from './components/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoresComponent,
    WebixLayoutComponent,
    SyncfusionLayoutComponent,
    ZoomingComponent,
    PostComponent,
    EmployeesComponent,
    WebixDashboardComponent
    //DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ChartModule,
    FormsModule
    //DashboardLayout
  ],
  providers: [LineSeriesService, CategoryService, DateTimeService, AreaSeriesService, ZoomService, ScrollBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

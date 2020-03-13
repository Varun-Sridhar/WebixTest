import { RouteTest2Component } from './components/route-test2.component';
import { RouteTest1Component } from './components/route-test1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'route1', component: RouteTest1Component},
  {path:'route2', component: RouteTest2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [RouteTest1Component, RouteTest2Component]
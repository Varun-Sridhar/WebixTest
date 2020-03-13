//import { HttpHeaders } from '@angular/common/http';
import { IEmployees } from './employees';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class EmployeesService {

    constructor(private _http : Http) {}
    
    getEmployeesObservable() : Observable<IEmployees[]> {
       return this._http.get("http://localhost:44338/api/employee").pipe(map((response:Response) => <IEmployees[]>response.json()));
    }

    getEmployeesPromise() : Promise<IEmployees[]> {
        return this._http.get("http://localhost:44338/api/employee").pipe(map((response:Response) => <IEmployees[]>response.json())).toPromise();
    }

    addEmployee(EmployeeId : number, BeaconId : number, DirectManagerEmployeeId : number, MatrixManagerEmployeeId : number, 
                    HireDate : Date, Division : number, Department : string, JobTitle : number, JobTitle2 : string, Location : number, SubLocation : string, 
                    Status : number, ConfirmationDate : Date, PayrollId : number, JobtitleDescription : string, TradingSystem : string) {
                        let postObj = [{
                            'EmployeeId' : EmployeeId,
                            'BeaconId' : BeaconId,
                            'DirectManagerEmployeeId' : DirectManagerEmployeeId,
                            'MatrixManagerEmployeeId' : MatrixManagerEmployeeId,
                            'HireDate' : HireDate,
                            'Division' : Division,
                            'Department' : Department,
                            'JobTitle' : JobTitle,
                            'JobTitle2' : JobTitle2,
                            'Location' : Location,
                            'SubLocation' : SubLocation, 
                            'Status' : Status,
                            'ConfirmationDate' : ConfirmationDate,
                            'PayrollId' : PayrollId,
                            'JobtitleDescription' : JobtitleDescription,
                            'TradingSystem': TradingSystem
                        }];
            console.log(postObj);
            return this._http.post("http://localhost:44338/api/employee", postObj);
            
    }
}
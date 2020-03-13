import { IScores } from './scores';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ScoresService {

    constructor(private _http:Http){}

    getScoresObservable() : Observable<IScores[]>{
        return this._http.get("http://localhost:44338/api/score").pipe(map((response:Response) => <IScores[]>response.json()));
    }

    getScoresPromise() : Promise<IScores[]> {
        return this._http.get("http://localhost:44338/api/score").pipe(map((response:Response) => <IScores[]>response.json())).toPromise();
    }

    // postScores(scores:IScores) : Observable<IScores> {
    //     return this._http.post<IScores>('http://localhost:44333/api/score', scores, {
    //         headers : new HttpHeaders({
    //             'Content-Type': 'application/json'
    //         })
    //     })
    // }
 
}
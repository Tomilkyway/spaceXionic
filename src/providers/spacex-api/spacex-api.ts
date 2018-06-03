import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { ILaunches } from '../../models/launches/ILaunches';
import { IRocket } from '../../models/rocket/IRocket';

/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {

  private baseUrl = "https://api.spacexdata.com/v2";

  constructor(private http: HttpClient) {
  }

  getAllLaunches(): Observable<ILaunches[]>{
    const endpointUrl = `${this.baseUrl}/launches/all`
    return this.http.get<ILaunches[]>(endpointUrl);
  }

  getPastLaunches(): Observable<ILaunches[]>{
    const endpointUrl = `${this.baseUrl}/launches`
    return this.http.get<ILaunches[]>(endpointUrl);
  }

  getUpcomingLaunches(): Observable<ILaunches[]>{
    const endpointUrl = `${this.baseUrl}/launches/upcoming`
    return this.http.get<ILaunches[]>(endpointUrl);
  }

  getNextLaunch(): Observable<ILaunches>{
    const endpointUrl = `${this.baseUrl}/launches/next`
    return this.http.get<ILaunches>(endpointUrl);
  }

  getAllRockets(): Observable<IRocket[]>{
    const endpointUrl = `${this.baseUrl}/rockets`
    return this.http.get<IRocket[]>(endpointUrl);
  }

  
}

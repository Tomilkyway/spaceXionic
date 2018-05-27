import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ILaunch} from "../../models/ILaunch";
import { IRocket } from '../../models/IRocket';

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

  getAllLaunches(): Observable<ILaunch[]>{
    const endpointUrl = `${this.baseUrl}/launches/all`
    return this.http.get<ILaunch[]>(endpointUrl);
  }

  getAllRockets(): Observable<IRocket[]>{
    const endpointUrl = `${this.baseUrl}/rockets`
    return this.http.get<IRocket[]>(endpointUrl);
  }
  getPastLaunches(): Observable<ILaunch[]>{
    const endpointUrl = `${this.baseUrl}/launches`
    return this.http.get<ILaunch[]>(endpointUrl);
  }

  getUpcomingLaunches(): Observable<ILaunch[]>{
    const endpointUrl = `${this.baseUrl}/launches/upcoming`
    return this.http.get<ILaunch[]>(endpointUrl);
  }

  getNextLaunch(): Observable<ILaunch>{
    const endpointUrl = `${this.baseUrl}/launches/next`
    return this.http.get<ILaunch>(endpointUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { ILaunches } from '../../models/launches/ILaunches';
import { IRocket } from '../../models/rocket/IRocket';
import { ICapsule } from '../../models/capsule/ICapsule';
import { ILaunchPads } from '../../models/launchpads/ILaunchPads';
import { IHistory } from '../../models/history/IHistory';

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

  getAllCapsules(): Observable<ICapsule[]>{
    const endpointUrl = `${this.baseUrl}/capsules`
    return this.http.get<ICapsule[]>(endpointUrl);
  }

  getAllLaunchPads(): Observable<ILaunchPads[]>{
    const endpointUrl = `${this.baseUrl}/launchpads`
    return this.http.get<ILaunchPads[]>(endpointUrl);
  }

  getHistory(): Observable<IHistory> {
    const endpointUrl = `${this.baseUrl}/info`
    return this.http.get<IHistory>(endpointUrl);
  }

  getRocket(id: String): Observable<IRocket> {
    const endpointUrl = `${this.baseUrl}/rockets/` + id
    return this.http.get<IRocket>(endpointUrl);
  }

  getLaunchPad(id: String): Observable<ILaunchPads> {
    const endpointUrl = `${this.baseUrl}/launchpads/` + id
    return this.http.get<ILaunchPads>(endpointUrl);
  }

  getCapsule(id: String): Observable<ICapsule> {
    const endpointUrl = `${this.baseUrl}/capsules/` + id
    return this.http.get<ICapsule>(endpointUrl);
  }

  
}

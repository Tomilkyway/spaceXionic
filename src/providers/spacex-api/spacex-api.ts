import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ILaunch} from "../../models/ILaunch";

/*
  Generated class for the SpacexApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacexApiProvider {

  private baseUrl = "https://api.spacexdata.com/v2/";

  constructor(private http: HttpClient) {
  }

  getAllLaunches(): Observable<ILaunch[]>{
    return this.http.get<ILaunch[]>(this.baseUrl);
  }

}
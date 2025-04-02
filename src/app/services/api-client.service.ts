import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mission} from "../models/mission";

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {


  private BASE_URL = "https://api.spacexdata.com/v3/launches";

  constructor(private httpClient : HttpClient) { }

  public getMissions() : Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(this.BASE_URL);
  }

  public getMission(id: number) : Observable<Mission> {
    return this.httpClient.get<Mission>(`${this.BASE_URL}/${id}`);
  }
}

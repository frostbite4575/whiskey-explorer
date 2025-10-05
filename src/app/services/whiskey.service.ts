import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})


 export class WhiskeyService {
  private apiUrl = '/api/';
  
  constructor(private http: HttpClient) {}
  
  getWhiskeys(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}distilleries_info/`);
  }
}
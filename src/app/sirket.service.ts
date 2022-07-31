import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sirket} from "./sirket";

@Injectable({
  providedIn: 'root'
})
export class SirketService {
  private baseURL = "http://localhost:8080/Sirketler";

  constructor(private httpClient: HttpClient) { }

  SirketGetir(): Observable<Sirket[]>{
    return this.httpClient.get<Sirket[]>(`${this.baseURL}`);
  }

  sirketEkle(sirket: Sirket): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}`,sirket);
  }

  sirketGetirID(id : number):Observable<Sirket[]>{
    return this.httpClient.get<Sirket[]>(`${this.baseURL}/${id}`);
  }

  sirketGuncelle(id: number, sirket: Sirket): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`, sirket);
  }

  sirketSil(id : number): Observable<any>{
    return this.httpClient.delete<any>(`${this.baseURL}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sigorta} from "./sigorta";

@Injectable({
  providedIn: 'root'
})
export class SigortaService {
  private baseURL = "http://localhost:8080/Sigortalar";

  constructor(private httpClient: HttpClient) { }

  SigortaGetir(): Observable<Sigorta[]>{
    return this.httpClient.get<Sigorta[]>(`${this.baseURL}`);
  }

  sigortaEkle(sigorta: Sigorta): Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}`,sigorta);
  }

  sigortaGetirID(id : number):Observable<Sigorta[]>{
    // @ts-ignore
    return this.httpClient.get<Sigorta[]>(`${this.baseURL}/${id}`);
  }

  sigortaGuncelle(id: number, sigorta: Sigorta): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`, sigorta);
  }

  sigortaSil(id : number): Observable<any>{
    return this.httpClient.delete<any>(`${this.baseURL}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Musteri} from "./musteri";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusteriService {
  private baseURL = "http://localhost:8080/Musteriler";

  constructor(private httpClient: HttpClient) { }

  MusteriGetir(): Observable<Musteri[]>{
    return this.httpClient.get<Musteri[]>(`${this.baseURL}`);
  }

  musteriEkle(musteri: Musteri): Observable<any>{
  return this.httpClient.post<any>(`${this.baseURL}`,musteri);
  }

  musteriGetirID(id : number):Observable<Musteri[]>{
  // @ts-ignore
    return this.httpClient.get<Musteri[]>(`${this.baseURL}/${id}`);
  }

  musteriGuncelle(id: number, musteri: Musteri): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`, musteri);
  }

  musteriSil(id : number): Observable<any>{
    return this.httpClient.delete<any>(`${this.baseURL}/${id}`);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  // @ts-ignore
  authenticate(kullanici_ad, sifre) {
    if (kullanici_ad === "admin" && sifre === "1234") {
      sessionStorage.setItem('kullanici_ad', kullanici_ad)
      return true;
    } else {
      return false;
    }
  }

  girisbas() {
    let user = sessionStorage.getItem('kullanici_ad')
    console.log(!(user === null))
    return !(user === null)
  }

  cikis() {
    sessionStorage.removeItem('kullanici_ad')
  }
}

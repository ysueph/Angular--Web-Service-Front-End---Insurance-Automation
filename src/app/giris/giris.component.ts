import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css']
})
export class GirisComponent implements OnInit {

  kullanici_ad = ''
  sifre = ''
  yanlısGiris = false

  constructor(private router: Router,
              private girisservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkGiris() {
    if (this.girisservice.authenticate(this.kullanici_ad, this.sifre)
    ) {
      alert("Giriş yapıldı.");
      this.router.navigate(['musteri'])
      this.yanlısGiris = false
    } else
      this.yanlısGiris = true
  }

}

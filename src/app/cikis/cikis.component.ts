import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cikis',
  templateUrl: './cikis.component.html',
  styleUrls: ['./cikis.component.css']
})
export class CikisComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.cikis();
    alert("Çıkış yapıldı.");
    this.router.navigate(['giris']);
  }

}

import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {Sirket} from "../sirket";
import {SirketService} from "../sirket.service";

@Component({
  selector: 'app-sirket-ekle',
  templateUrl: './sirket-ekle.component.html',
  styleUrls: ['./sirket-ekle.component.css']
})
export class SirketEkleComponent implements OnInit {
  sirket: Sirket = new Sirket();
  constructor(private sirketService: SirketService, private router: Router) { }

  ngOnInit(): void {
  }
  ekle(){
    this.sirketService.sirketEkle(this.sirket).subscribe(data => {
        console.log(data);
        this.goToSirketGetir();
        alert("Şirket eklendi.");
        this.router.navigate(['sirket']);
      },
      error => console.log(error));
  }

  goToSirketGetir() {
    this.router.navigate(['/Sirketler']);
  }

  onSubmit(){
    console.log(this.sirket);
    this.ekle();
  }
}

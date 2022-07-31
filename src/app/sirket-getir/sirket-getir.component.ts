import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SirketService} from "../sirket.service";
import {Sirket} from "../sirket";

@Component({
  selector: 'app-sirket-getir',
  templateUrl: './sirket-getir.component.html',
  styleUrls: ['./sirket-getir.component.css']
})
export class SirketGetirComponent implements OnInit {

  // @ts-ignore
  sirketler : Sirket[];
  constructor(private sirketService: SirketService, private router: Router) { }

  ngOnInit(): void {
    this.Sirket();
  }
  private Sirket(){
    // @ts-ignore
    this.sirketService.SirketGetir().subscribe((data : Sirket[]) => {
      console.log(data);
      this.sirketler = data;
    });
  }
  sirketEkle(){
    this.router.navigate(['sirketEkle']);
  }

  sirketGuncelle(id: number){
    this.router.navigate(['sirketGuncelle',id]);
  }

  sirketSil(id: number){
    this.sirketService.sirketSil(id).subscribe( data => {
      console.log(data);
      this.Sirket();
      alert("Şirket silindi.");
    })
  }
}

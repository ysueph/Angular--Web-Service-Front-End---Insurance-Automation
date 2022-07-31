import { Component, OnInit } from '@angular/core';
import {Musteri} from "../musteri";
import {MusteriService} from "../musteri.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-musteri-getir',
  templateUrl: './musteri-getir.component.html',
  styleUrls: ['./musteri-getir.component.css']
})
export class MusteriGetirComponent implements OnInit {
  // @ts-ignore
  musteriler : Musteri[];
  constructor(private musteriService: MusteriService, private router: Router) { }

  ngOnInit(): void {
    this.Musteri();
  }
  private Musteri(){
    // @ts-ignore
    this.musteriService.MusteriGetir().subscribe((data : Musteri[]) => {
      console.log(data);
      this.musteriler = data;
    });
  }
  musteriEkle(){
  this.router.navigate(['musteriEkle']);
  }

  musteriGuncelle(id: number){
    this.router.navigate(['musteriGuncelle',id]);
  }

  musteriSil(id: number){
    this.musteriService.musteriSil(id).subscribe( data => {
      console.log(data);
      this.Musteri();
      alert("Müşteri silindi.");
    })
  }

  musteriDetay(id: number){
    this.router.navigate(['musteriDetay',id]);
  }

}

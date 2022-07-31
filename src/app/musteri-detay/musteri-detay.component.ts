import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Musteri} from "../musteri";
import {MusteriService} from "../musteri.service";
import {SigortaService} from "../sigorta.service";
import {Sigorta} from "../sigorta";
import {SirketService} from "../sirket.service";
import {Sirket} from "../sirket";

@Component({
  selector: 'app-musteri-detay',
  templateUrl: './musteri-detay.component.html',
  styleUrls: ['./musteri-detay.component.css']
})
export class MusteriDetayComponent implements OnInit {

 // @ts-ignore
  id: number;
  // @ts-ignore
  musteri: Musteri = new Musteri();
  // @ts-ignore
  sigortalar : Sigorta[] ;
  // @ts-ignore
  sirketler : Sirket[];

  constructor(private route:ActivatedRoute,private musteriService: MusteriService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.musteriService.musteriGetirID(this.id).subscribe(data => {
        // @ts-ignore
        this.musteri= data;},
      error=> console.log(error));
  }

}

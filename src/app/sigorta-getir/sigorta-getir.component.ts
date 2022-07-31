import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {SigortaService} from "../sigorta.service";
import {Sigorta} from "../sigorta";

@Component({
  selector: 'app-sigorta-getir',
  templateUrl: './sigorta-getir.component.html',
  styleUrls: ['./sigorta-getir.component.css']
})
export class SigortaGetirComponent implements OnInit {
  // @ts-ignore
  sigortalar : Sigorta[];
  constructor(private sigortaService: SigortaService, private router: Router) { }

  ngOnInit(): void {
    this.Sigorta();
  }
  private Sigorta(){
    // @ts-ignore
    this.sigortaService.SigortaGetir().subscribe((data : Sigorta[]) => {
      console.log(data);
      this.sigortalar = data;
    });
  }
  sigortaEkle(){
    this.router.navigate(['sigortaEkle']);
  }

  sigortaGuncelle(id: number){
    this.router.navigate(['sigortaGuncelle',id]);
  }

  sigortaSil(id: number){
    this.sigortaService.sigortaSil(id).subscribe( data => {
      console.log(data);
      this.Sigorta();
      alert("Sigorta silindi.");
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {Musteri} from "../musteri";
import {MusteriService} from "../musteri.service";
import {SigortaService} from "../sigorta.service";
import {Sigorta} from "../sigorta";
import {SirketService} from "../sirket.service";
import {Sirket} from "../sirket";
import {Router} from "@angular/router";

@Component({
  selector: 'app-musteri-ekle',
  templateUrl: './musteri-ekle.component.html',
  styleUrls: ['./musteri-ekle.component.css']
})
export class MusteriEkleComponent implements OnInit {
  // @ts-ignore
  sigortalar : Sigorta[] ;
  // @ts-ignore
  sirketler : Sirket[];

  musteri: Musteri = new Musteri();

  constructor(private musteriService: MusteriService,private sigortaService: SigortaService,
              private sirketService: SirketService, private router: Router) {


  }
  ngOnInit(): void {
    this.Sigorta();
    this.Sirket();
  }
  //sigorta getirme
  private Sigorta(){
    // @ts-ignore
    this.sigortaService.SigortaGetir().subscribe((data : Sigorta[]) => {
      console.log(data);
      this.sigortalar = data;
    });
  }
  //sirket getirme
  private Sirket(){
    // @ts-ignore
    this.sirketService.SirketGetir().subscribe((data : Sirket[]) => {
      console.log(data);
      this.sirketler = data;
    });
  }


  ekle(){
    this.musteriService.musteriEkle(this.musteri).subscribe(data => {
      console.log(data);
      this.goToMusteriGetir();
        alert("Müşteri başarıyla eklendi.");
        this.router.navigate(['musteri']);
      },
        error => console.log(error));
  }

  goToMusteriGetir() {
   this.router.navigate(['/Musteriler']);
  }

  onSubmit(){
   console.log(this.musteri);
   this.ekle();
  }
}

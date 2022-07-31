import { Component, OnInit } from '@angular/core';
import {Musteri} from "../musteri";
import {MusteriService} from "../musteri.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-musteri-guncelle',
  templateUrl: './musteri-guncelle.component.html',
  styleUrls: ['./musteri-guncelle.component.css']
})
export class MusteriGuncelleComponent implements OnInit {
  musteri: Musteri = new Musteri();
  // @ts-ignore
  id: number;
  constructor(private musteriService: MusteriService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.musteriService.musteriGetirID(this.id).subscribe(data => {
      // @ts-ignore
        this.musteri= data;},
      error=> console.log(error));
  }

  goToMusteriGetirID() {
    // @ts-ignore
    this.router.navigate(['/Musteriler']);
  }
  onSubmit(){
    this.musteriService.musteriGuncelle(this.id, this.musteri).subscribe( data =>{
        this.goToMusteriGetirID();
      }
      , error => console.log(error));
    alert("Müşteri güncellendi.");
    this.router.navigate(['musteri']);
  }

}

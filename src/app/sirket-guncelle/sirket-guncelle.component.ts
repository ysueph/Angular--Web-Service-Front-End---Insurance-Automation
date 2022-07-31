import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Sirket} from "../sirket";
import {SirketService} from "../sirket.service";

@Component({
  selector: 'app-sirket-guncelle',
  templateUrl: './sirket-guncelle.component.html',
  styleUrls: ['./sirket-guncelle.component.css']
})
export class SirketGuncelleComponent implements OnInit {

  sirket: Sirket = new Sirket();
  // @ts-ignore
  id: number;
  constructor(private sirketService: SirketService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sirketService.sirketGetirID(this.id).subscribe(data => {
        // @ts-ignore
        this.sirket= data;},
      error=> console.log(error));

  }

  goToSirketGetirID() {
    // @ts-ignore
    this.router.navigate(['/Sirketler']);
  }
  onSubmit(){
    this.sirketService.sirketGuncelle(this.id, this.sirket).subscribe( data =>{
        this.goToSirketGetirID();
      }
      , error => console.log(error));
    alert("Şirket güncellendi.");
    this.router.navigate(['sirket']);
  }
}

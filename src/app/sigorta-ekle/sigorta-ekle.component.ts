import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Sigorta} from "../sigorta";
import {SigortaService} from "../sigorta.service";

@Component({
  selector: 'app-sigorta-ekle',
  templateUrl: './sigorta-ekle.component.html',
  styleUrls: ['./sigorta-ekle.component.css']
})
export class SigortaEkleComponent implements OnInit {
  sigorta: Sigorta = new Sigorta();
  constructor(private sigortaService: SigortaService, private router: Router) { }

  ngOnInit(): void {
  }
  ekle(){
    this.sigortaService.sigortaEkle(this.sigorta).subscribe(data => {
        console.log(data);
        this.goToSigortaGetir();
        alert("Sigorta başarıyla eklendi.");
        this.router.navigate(['sigorta']);
      },
      error => console.log(error));
  }

  goToSigortaGetir() {
    this.router.navigate(['/Sigortalar']);
  }

  onSubmit(){
    console.log(this.sigorta);
    this.ekle();
  }
}

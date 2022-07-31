import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Sigorta} from "../sigorta";
import {SigortaService} from "../sigorta.service";

@Component({
  selector: 'app-sigorta-guncelle',
  templateUrl: './sigorta-guncelle.component.html',
  styleUrls: ['./sigorta-guncelle.component.css']
})
export class SigortaGuncelleComponent implements OnInit {

  sigorta: Sigorta = new Sigorta();
  // @ts-ignore
  id: number;
  constructor(private sigortaService: SigortaService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sigortaService.sigortaGetirID(this.id).subscribe(data => {
        // @ts-ignore
        this.sigorta= data;},
      error=> console.log(error));

  }

  goToSigortaGetirID() {
    // @ts-ignore
    this.router.navigate(['/Sigortalar']);
  }
  onSubmit(){
    this.sigortaService.sigortaGuncelle(this.id, this.sigorta).subscribe( data =>{
        this.goToSigortaGetirID();
      }
      , error => console.log(error));
    alert("Sigorta güncellendi.");
    this.router.navigate(['sigorta']);
  }


}

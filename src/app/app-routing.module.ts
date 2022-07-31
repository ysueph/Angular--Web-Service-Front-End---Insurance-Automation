import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MusteriGetirComponent} from "./musteri-getir/musteri-getir.component";
import {MusteriEkleComponent} from "./musteri-ekle/musteri-ekle.component";
import {MusteriGuncelleComponent} from "./musteri-guncelle/musteri-guncelle.component";
import {SigortaGetirComponent} from "./sigorta-getir/sigorta-getir.component";
import {SigortaGuncelleComponent} from "./sigorta-guncelle/sigorta-guncelle.component";
import {SigortaEkleComponent} from "./sigorta-ekle/sigorta-ekle.component";
import {SirketGetirComponent} from "./sirket-getir/sirket-getir.component";
import {SirketEkleComponent} from "./sirket-ekle/sirket-ekle.component";
import {SirketGuncelleComponent} from "./sirket-guncelle/sirket-guncelle.component";
import {GirisComponent} from "./giris/giris.component";
import {CikisComponent} from "./cikis/cikis.component";
import {AuthGuardService} from "./auth-guard.service";
import {MusteriDetayComponent} from "./musteri-detay/musteri-detay.component";

const routes: Routes = [
  {path:'musteri',component: MusteriGetirComponent ,canActivate:[AuthGuardService]},
  {path:'musteriEkle',component: MusteriEkleComponent ,canActivate:[AuthGuardService]},
  {path:'musteriGuncelle/:id',component: MusteriGuncelleComponent ,canActivate:[AuthGuardService]},
  {path:'musteriDetay/:id',component: MusteriDetayComponent ,canActivate:[AuthGuardService]},
  /**/
  {path:'sigorta',component: SigortaGetirComponent ,canActivate:[AuthGuardService]},
  {path:'sigortaEkle',component: SigortaEkleComponent ,canActivate:[AuthGuardService]},
  {path:'sigortaGuncelle/:id',component: SigortaGuncelleComponent ,canActivate:[AuthGuardService]},
  /**/
  {path:'sirket',component: SirketGetirComponent ,canActivate:[AuthGuardService]},
  {path:'sirketEkle',component: SirketEkleComponent ,canActivate:[AuthGuardService]},
  {path:'sirketGuncelle/:id',component: SirketGuncelleComponent ,canActivate:[AuthGuardService]},


  {path:'giris',component: GirisComponent},
  {path: 'cikis', component: CikisComponent ,canActivate:[AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

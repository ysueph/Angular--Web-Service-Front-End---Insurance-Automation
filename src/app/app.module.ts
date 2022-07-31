import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusteriGetirComponent } from './musteri-getir/musteri-getir.component';
import { HttpClientModule} from "@angular/common/http";
import { MusteriEkleComponent } from './musteri-ekle/musteri-ekle.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MusteriGuncelleComponent } from './musteri-guncelle/musteri-guncelle.component';
import { SigortaGetirComponent } from './sigorta-getir/sigorta-getir.component';
import { SigortaEkleComponent } from './sigorta-ekle/sigorta-ekle.component';
import { SigortaGuncelleComponent } from './sigorta-guncelle/sigorta-guncelle.component';
import { SirketGetirComponent } from './sirket-getir/sirket-getir.component';
import { SirketEkleComponent } from './sirket-ekle/sirket-ekle.component';
import { SirketGuncelleComponent } from './sirket-guncelle/sirket-guncelle.component';
import { GirisComponent } from './giris/giris.component';
import { CikisComponent } from './cikis/cikis.component';
import { HeaderComponent } from './header/header.component';
import { MusteriDetayComponent } from './musteri-detay/musteri-detay.component';

@NgModule({
  declarations: [
    AppComponent,
    MusteriGetirComponent,
    MusteriEkleComponent,
    MusteriGuncelleComponent,
    SigortaGetirComponent,
    SigortaEkleComponent,
    SigortaGuncelleComponent,
    SirketGetirComponent,
    SirketEkleComponent,
    SirketGuncelleComponent,
    GirisComponent,
    CikisComponent,
    HeaderComponent,
    MusteriDetayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

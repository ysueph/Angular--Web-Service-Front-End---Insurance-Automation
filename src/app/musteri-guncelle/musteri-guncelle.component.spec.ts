import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriGuncelleComponent } from './musteri-guncelle.component';

describe('MusteriGuncelleComponent', () => {
  let component: MusteriGuncelleComponent;
  let fixture: ComponentFixture<MusteriGuncelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusteriGuncelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusteriGuncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

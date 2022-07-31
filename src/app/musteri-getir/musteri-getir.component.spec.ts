import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriGetirComponent } from './musteri-getir.component';

describe('musteriGetirComponent', () => {
  let component: MusteriGetirComponent;
  let fixture: ComponentFixture<MusteriGetirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusteriGetirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusteriGetirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

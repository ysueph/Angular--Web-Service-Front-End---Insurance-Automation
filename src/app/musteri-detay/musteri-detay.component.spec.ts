import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusteriDetayComponent } from './musteri-detay.component';

describe('MusteriDetayComponent', () => {
  let component: MusteriDetayComponent;
  let fixture: ComponentFixture<MusteriDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusteriDetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusteriDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

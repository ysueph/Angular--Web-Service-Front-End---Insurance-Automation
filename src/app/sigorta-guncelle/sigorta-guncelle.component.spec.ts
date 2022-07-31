import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigortaGuncelleComponent } from './sigorta-guncelle.component';

describe('SigortaGuncelleComponent', () => {
  let component: SigortaGuncelleComponent;
  let fixture: ComponentFixture<SigortaGuncelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigortaGuncelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigortaGuncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

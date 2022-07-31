import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirketGuncelleComponent } from './sirket-guncelle.component';

describe('SirketGuncelleComponent', () => {
  let component: SirketGuncelleComponent;
  let fixture: ComponentFixture<SirketGuncelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SirketGuncelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SirketGuncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigortaEkleComponent } from './sigorta-ekle.component';

describe('SigortaEkleComponent', () => {
  let component: SigortaEkleComponent;
  let fixture: ComponentFixture<SigortaEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigortaEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigortaEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

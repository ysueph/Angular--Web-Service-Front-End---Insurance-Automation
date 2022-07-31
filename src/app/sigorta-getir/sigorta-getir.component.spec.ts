import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigortaGetirComponent } from './sigorta-getir.component';

describe('SigortaGetirComponent', () => {
  let component: SigortaGetirComponent;
  let fixture: ComponentFixture<SigortaGetirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigortaGetirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigortaGetirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

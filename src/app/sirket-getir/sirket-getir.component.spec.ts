import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirketGetirComponent } from './sirket-getir.component';

describe('SirketGetirComponent', () => {
  let component: SirketGetirComponent;
  let fixture: ComponentFixture<SirketGetirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SirketGetirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SirketGetirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

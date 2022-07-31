import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirketEkleComponent } from './sirket-ekle.component';

describe('SirketEkleComponent', () => {
  let component: SirketEkleComponent;
  let fixture: ComponentFixture<SirketEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SirketEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SirketEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

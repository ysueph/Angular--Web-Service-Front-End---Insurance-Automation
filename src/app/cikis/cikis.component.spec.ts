import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CikisComponent } from './cikis.component';

describe('CikisComponent', () => {
  let component: CikisComponent;
  let fixture: ComponentFixture<CikisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CikisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CikisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

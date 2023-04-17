import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDcomp1Component } from './crudcomp1.component';

describe('CRUDcomp1Component', () => {
  let component: CRUDcomp1Component;
  let fixture: ComponentFixture<CRUDcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRUDcomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

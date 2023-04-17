import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crudcomp2Component } from './crudcomp2.component';

describe('Crudcomp2Component', () => {
  let component: Crudcomp2Component;
  let fixture: ComponentFixture<Crudcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crudcomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crudcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

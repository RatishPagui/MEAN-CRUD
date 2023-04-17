import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crudcomp4Component } from './crudcomp4.component';

describe('Crudcomp4Component', () => {
  let component: Crudcomp4Component;
  let fixture: ComponentFixture<Crudcomp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crudcomp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crudcomp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

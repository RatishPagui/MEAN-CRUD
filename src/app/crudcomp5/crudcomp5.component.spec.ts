import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crudcomp5Component } from './crudcomp5.component';

describe('Crudcomp5Component', () => {
  let component: Crudcomp5Component;
  let fixture: ComponentFixture<Crudcomp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crudcomp5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crudcomp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

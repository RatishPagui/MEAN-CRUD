import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crudcomp3Component } from './crudcomp3.component';

describe('Crudcomp3Component', () => {
  let component: Crudcomp3Component;
  let fixture: ComponentFixture<Crudcomp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Crudcomp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Crudcomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
